import User from "../../models/userModel";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nc = require("next-connect");
const dbConnect = require("./../../lib/mongoose");

export default async function handler(req, res) {
  await dbConnect();

  const users = await User.find({});
  res.status(200).json({ users });
}
