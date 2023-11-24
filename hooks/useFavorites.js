import fetcher from "@/app/lib/fetcher";
import useSWR from "swr";

export default function useFavorites () {
  const { data, error, isLoading, mutate } = useSWR('/api/favorites', fetcher, {
    revalidateIfStale: true,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  return { data, error, isLoading, mutate}
};