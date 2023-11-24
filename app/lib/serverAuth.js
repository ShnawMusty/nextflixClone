import client from "./prismadb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/authOptions";

export async function getSession() {
  return await getServerSession(authOptions);
}

const serverAuth = async () => {
  const session = await getSession();

  if (!session?.user?.email) {
    throw new Error('Not signed in')
  };

  const currentUser = await client.user.findUnique({
    where: {
      email: session.user.email
    }
  });

  if (!currentUser) {
    throw new Error('Not signed in')
  };

  return { currentUser };
}

export default serverAuth;