import fetcher from "@/app/lib/fetcher";
import useSWR from "swr";

export default function useFavorites () {
  const { data, error, isLoading, mutate } = useSWR('/api/favorites', fetcher);

  return { data, error, isLoading, mutate}
};