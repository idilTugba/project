import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import jwt from "jsonwebtoken";

const secretKey = process.env.Secret_Key;

export async function POST(req: Request) {
  await dbConnect();
  let data = await req.json();

  try {
    const user = await new User(data);
    await user.save();

    const token = jwt.sign({ userId: user.id }, `${secretKey}`, {
      expiresIn: "2h",
    });
    return Response.json(
      { user: { name: user.firstName, token } },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof Error) {
      return Response.json(
        { error: error.message || "bilinmeyen bir hata" },
        { status: 500 }
      );
    } else {
      return Response.json({ error: "bilinmeyen bir hata" }, { status: 500 });
    }
  }
}
