import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    res.setHeader(
      "Set-Cookie",
      "token=; HttpOnly; Path=/; Max-Age=0; SameSite=Strict"
    );

    return res.status(200).json({ message: "Logout successful" });
  }

  res.setHeader("Allow", ["POST"]);
  res.status(405).json({ message: `Method ${req.method} not allowed` });
}
