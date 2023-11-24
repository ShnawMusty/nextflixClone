import fetcher from "@/app/lib/fetcher";
import useSWR from "swr";

export default function useMovie (movieId) {
  const {data, error, isLoading } = useSWR(movieId ? `/api/movies/${movieId}` : null, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  })
  

  return { data, error, isLoading }
};