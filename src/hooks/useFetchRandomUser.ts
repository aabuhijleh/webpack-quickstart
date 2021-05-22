import { User } from "types";
import useAxios from "axios-hooks";

interface RandomUserApiResponse {
  results: User[];
}

export const useFetchRandomUser = () => {
  const [{ data, ...response }] = useAxios<RandomUserApiResponse>("https://randomuser.me/api/");
  const user = data?.results[0];

  return { user, ...response };
};
