import prisma from "../../../../../lib/prisma";

export default async function handle(req, res) {
  const price = parseFloat(req.query.price);
  const wines = await prisma.wines.findMany({
    where: {
      price: {
        lte: price, //less than or equal
      },
    },
  });
  res.json(wines);
}
