import prisma from "lib/prisma";

export default async function handle(req, res) {
  const name = req.query.name;
  let wine;
  switch (req.method) {
    case "GET":
      wine = await prisma.wines.findUnique({
        where: { name: name },
      });
      res.json(wine);
      break;

    case "DELETE":
      wine = await prisma.wines.delete({
        where: { name: name },
      });
      res.json(wine);
      break;

    case "UPDATE":
      res.json({ message: "ah!" });
      break;

    default:
      res.json(404).json({ error: "invalid method." });
      break;
  }
}
