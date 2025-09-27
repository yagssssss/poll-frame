// pages/api/frame.js
let votes = { cats: 0, dogs: 0 }; // Keeps vote counts in memory (resets on redeploy)

export default function handler(req, res) {
  if (req.method === "POST") {
    const { choice } = req.body;
    if (choice === "cats") votes.cats++;
    if (choice === "dogs") votes.dogs++;
    return res.status(200).json(votes);
  }

  // GET request -> return frame JSON
  res.status(200).json({
    type: "frame",
    version: "vNext",
    image: "https://placekitten.com/600/400",
    buttons: [
      { label: `🐱 Cats (${votes.cats})` },
      { label: `🐶 Dogs (${votes.dogs})` }
    ],
  });
}
