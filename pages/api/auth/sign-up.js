import prisma from "lib/prisma";
import bcrypt from "bcrypt";

export default async function handle(req, res) {
  const { email, password } = req.body;
  switch (req.method) {
    case "POST":
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      const result = await prisma.users.create({
        data: {
          email: email,
          password: hash,
        },
      });
      res.json(result);
      break;

    default:
      res.json(404).json({ error: "invalid method." });
      break;
  }
}
