import axios from "axios";
import { User } from "types";

interface RandomUserApiResponse {
  results: User[];
}

export const fetchRandomUser = async (): Promise<User> => {
  const { data } = await axios.get<RandomUserApiResponse>("https://randomuser.me/api/");
  return data.results[0];
};
