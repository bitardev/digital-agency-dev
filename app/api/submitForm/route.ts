// pages/api/submitForm.js
import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
export async function POST(req: Request, res: NextApiResponse) {
  const body = await req.json();
  const timestamp = new Date();
  const {
    firstName,
    lastName,
    companyName,
    phoneNumber,
    email,
    message,
    templateName,
  } = body;
  // console.log("firstName");
  // console.log(firstName);

  const client = new MongoClient(process.env.MONGODB_URI!);

  try {
    await client.connect();
    const db = client.db(process.env.DB_NAME);
    const collection = db.collection("contacts");
    const result = await collection.insertOne({
      firstName,
      lastName,
      companyName,
      phoneNumber,
      email,
      message,
      templateName,
      timestamp,
    });
    console.log("Form data stored in MongoDB:");
    console.log(result);
    // res.status(201).json({ message: "Form submitted successfully" });
    return new Response("Form submitted successfully", {
      status: 201,
    });
  } catch (error) {
    console.error("Error storing form data in MongoDB:", error);
    // res.status(500).json({ message: "Error submitting form" });
    return new Response("Error submitting form", {
      status: 500,
    });
  } finally {
    await client.close();
  }
}
