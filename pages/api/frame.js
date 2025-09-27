let votes = {
  cats: 0,
  dogs: 0,
};

export default function handler(req, res) {
  if (req.method === "POST") {
    const { vote } = req.body;

    if (vote === "cats") votes.cats++;
    else if (vote === "dogs") votes.dogs++;

    return res.status(200).json({
      type: "frame",
      version: "vNext",
      image: "https://placekitten.com/600/400",
      buttons: [
        { label: `🐱 Cats (${votes.cats})` },
        { label: `🐶 Dogs (${votes.dogs})` },
      ],
    });
  }

  // GET request returns current vote counts
  res.status(200).json({
    type: "frame",
    version: "vNext",
    image: "https://placekitten.com/600/400",
    buttons: [
      { label: `🐱 Cats (${votes.cats})` },
      { label: `🐶 Dogs (${votes.dogs})` },
    ],
  });
}
