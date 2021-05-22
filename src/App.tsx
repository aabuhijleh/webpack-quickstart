import React from "react";
import { useFetchRandomUser } from "hooks/useFetchRandomUser";

export const App: React.FC = () => {
  const { user, loading } = useFetchRandomUser();

  return loading ? <span>Loading...</span> : <pre>{JSON.stringify(user, null, 2)}</pre>;
};
