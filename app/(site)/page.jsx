import Billboard from "@/components/Billboard";
import InfoModal from "@/components/InfoModal";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/navbar/Navbar";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {

  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/auth')
  };

  return (
    <>
      <InfoModal/>
      <Navbar/>
      <Billboard/>
      <div className="pb-40" >
        <MovieList />
      </div>
    </>
  );
}
