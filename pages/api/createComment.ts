import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@sanity/client";

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
};

const client = createClient(config);

const createComment = async (req: NextApiRequest, res: NextApiResponse) => {
  const { _id, name, email, comment } = JSON.parse(req.body);

  try {
    // Creating document for comment to be submitted
    await client.create({
      _type: "comment",
      post: {
        _type: "reference",
        _ref: _id,
      },
      name,
      email,
      comment,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Couldn't submit comment", error });
  }

  console.log("Comment Submitted");
  return res.status(201).json({ message: "Comment submitted" });
};

export default createComment;
