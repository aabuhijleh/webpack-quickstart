import { fetchRandomUser } from "api/randomuser";

(async () => {
  const user = await fetchRandomUser();

  // render user data on the DOM
  const rootElement = document.getElementById("root");
  if (rootElement) {
    const randomUserData = document.createElement("pre");
    randomUserData.textContent = JSON.stringify(user, null, 2);
    rootElement.appendChild(randomUserData);
  }
})().catch((err) => {
  console.error("something went wrong", err);
});
