'use client'

import useSWR from "swr";
import fetcher from "@/app/lib/fetcher";

export default function useBillboard () {
  const { data, error, isLoading } = useSWR('/api/random', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  return { data, error, isLoading }
};