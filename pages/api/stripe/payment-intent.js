const stripe = require("stripe")(process.env.STRIPE_PUBLIC);

function calculateOrderAmount(items) {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
}

export default async function handle(req, res) {
  const { items } = req.body;
  switch (req.method) {
    case "POST":
      const paymentIntent = await stripe.paymentIntent.create({
        amount: calculateOrderAmount(items),
        currency: "eur",
        automatic_payment_methods: {
          enabled: true
        }
      });
      res.json({ clientSecret: paymentIntent.client_secret });
      break;
    default:
      res.json(404).json({ error: "Invalid method." });
      break;
  }
}
