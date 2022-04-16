import { buffer } from "micro";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

const handler = async(req, res) => {
  if(req.method === "POST") {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const sig = req.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch(err) {
      console.log(`ERROR`, err.message);
      return res.status(400).send(`Webhook error: ${err.message}`);
    }

    if(event.type === 'checkout.session.completed') {
      const session = event.data.object;
      console.log(`SUCCESS: Order ${session.id} has been added to DB`);
      return res.status(200).send(`SUCCESS: Order ${session.id} has been added to DB`);
    }
  }
}

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true
  }
}

export default handler;