import prisma from "../../../../lib/prisma";

export default async function handle(req, res) {
  const origin = req.query.origin;
  const wines = await prisma.wines.findMany({
    where: { origin: origin },
    orderBy: [{ price: sort }], //asc or desc
  });
  res.json(wines);
}
