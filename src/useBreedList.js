import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedLilst";

export default function useBreadList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);
  return [results?.data?.breeds ?? [], results.status];
}
