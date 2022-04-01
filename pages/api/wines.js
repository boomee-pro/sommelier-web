import clientPromise from "../../lib/mongo";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db(process.env.MONGO_DB);
  switch (req.method) {
    case "GET":
      const wines = await db.collection("wines").find({}).toArray();
      res.status(200).json(wines);  
      break;
  
    case "POST":
      let body = JSON.parse(req.body);
      let wine = await db.collection("wines").insertOne(body);
      res.status(200).json(wine.ops[0]);
      break;

    default:
      res.status(404).json({error: "invalid request method."})
      break;
  }
}
