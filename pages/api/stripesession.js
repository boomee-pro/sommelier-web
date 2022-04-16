const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function CreateStripeSession(req, res) {
    const { items } = req.body;
    const redirectURL = "http://localhost:3000";
  
    const stripeItems = JSON.parse(items).reduce(
      (arr, item) => {
        arr.push({
          price_data: {
            currency: "eur",
            product_data: { name: item.name },
            unit_amount: item.price * 100
          },
          description: "test",
          quantity: item.quantity
        });
        return arr;
      },
      []
    );
  
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: stripeItems,
      mode: "payment",
      success_url: redirectURL + "/success",
      cancel_url: redirectURL + "/errororder"
    });
  
    res.json({ id: session.id });
}

export default CreateStripeSession;