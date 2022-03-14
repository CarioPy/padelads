import DBConnect from "../../../utils/dbConnect";
import Player from "/models/player.js";

DBConnect();

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const notes = await Player.find({});
        res.status(200).json({ success: true, data: notes });
      } catch (error) {
        res.status(400).json({ success: false });
        console.log("problem");
      }
      break;
    case "POST":
      try {
        const note = await Player.create(req.body);
        res.status(201).json({ success: true, data: note });
      } catch (error) {
        res.status(400).json({ success: false });
      }

      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
