import prisma from "../../../../lib/prisma";

export default async function handle(req, res) {
  let { type, sort } = req.query;
  const wines = await prisma.wines.findMany({
    where: { type: type },
    orderBy: { price: sort }, //asc or desc
  });
  res.json(wines);
}
