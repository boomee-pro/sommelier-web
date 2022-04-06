import prisma from "lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SECRET = process.env.SECRET;

export default async function handle(req, res) {
  const { email, password } = req.body;
  switch (req.method) {
    case "POST":
      const user = await prisma.users.findUnique({
        where: {
          email: email
        }
      });

      if (!user) {
        res.status(400).json({ message: "User doesn't exist" });
        break;
      }

      const result = bcrypt.compareSync(password, user.password);
      if (!result) {
        res.status(400).json({ error: "Password doesn't match" });
        break;
      }

      const token = jwt.sign({ username: user.email }, SECRET, {
        expiresIn: "10d"
      });
      res.json({ token });
      break;

    default:
      res.json(404).json({ error: "Invalid method." });
      break;
  }
}
