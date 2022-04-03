import prisma from "../../../../../lib/prisma";

export default async function handle(req, res) {
  let { price, sort } = req.query;
  price = parseFloat(price);
  const wines = await prisma.wines.findMany({
    where: {
      price: {
        gte: price, //greater than or equal
      },
    },
    orderBy: [{ price: sort }], //asc or desc
  });
  res.json(wines);
}
