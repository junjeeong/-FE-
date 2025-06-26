import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const cookieStore = await cookies();
  const isLogin = cookieStore.get("refreshToken")?.value;

  if (isLogin) {
    redirect("/boards");
  } else {
    redirect("/signin");
  }
}
