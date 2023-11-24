'use client'

import useSWR from "swr";
import fetcher from "@/app/lib/fetcher";

export default function useBillboard () {
  const { data, error, isLoading } = useSWR('/api/random');

  return { data, error, isLoading }
};