import prisma from "lib/prisma";

export default async function handle(req, res) {
  let result;
  switch (req.method) {
    case "POST":
      const { id, name, price, origin, domain, img, flag } = req.body;
      result = await prisma.wines.create({
        data: {
          id: id,
          name: name,
          price: price,
          origin: origin,
          domain: domain,
          img: img,
          flag: flag
        }
      });
      res.json(result);
      break;

    case "GET":
      const { filter } = req.query;
      let options = {};
      if (filter) {
        options.where = {};
        options.where.price = {};
      }
      result = await prisma.wines.findMany();
      res.json(result);
      break;

    default:
      res.status(404).json({ error: "Invalid method." });
      break;
  }
}
