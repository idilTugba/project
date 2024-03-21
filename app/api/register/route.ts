import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

export async function POST(req: Request) {
  await dbConnect();
  let data = await req.json();

  try {
    const user = await new User(data);
    await user.save();

    return Response.json({ user }, { status: 201 });
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
