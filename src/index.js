import { fetchRandomUser } from "./api/randomuser";

const run = async () => {
  const user = await fetchRandomUser();

  // render user data on the DOM
  const randomUserData = document.createElement("pre");
  randomUserData.textContent = JSON.stringify(user, null, 2);
  document.body.appendChild(randomUserData);
};

run();
