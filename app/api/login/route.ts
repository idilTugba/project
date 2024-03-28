import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const secretKey = process.env.Secret_Key;

export async function POST(req: Request) {
  await dbConnect();
  const { email, password } = await req.json();

  const user = await User.findOne({ email });
  if (!user)
    return Response.json({ error: "Kullanıcı bulunamadı" }, { status: 404 });

  const matchPassword = await bcrypt.compare(password, user.password);
  if (!matchPassword)
    return Response.json({ error: "Şifre uyuşmuyor" }, { status: 404 });

  const token = jwt.sign({ userId: user.id }, `${secretKey}`, {
    expiresIn: "2h",
  });
  try {
    return Response.json(
      {
        message: "Giriş Başarılı",
        user: { userID: token, userName: user.firstName },
      },
      { status: 201 }
    );
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
