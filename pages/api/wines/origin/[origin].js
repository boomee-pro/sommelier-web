import prisma from "../../../../lib/prisma";

export default async function handle(req, res) {
  const origin = req.query.origin;
  const wines = await prisma.wines.findMany({
    where: { origin: origin },
  });
  res.json(wines);
}
