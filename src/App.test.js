import { render, waitForElementToBeRemoved } from "@testing-library/react";
import App from "./App";

test("renders learn react link", async () => {
  const { queryByText, getByText } = render(<App />);

  const linkElement = queryByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  await waitForElementToBeRemoved(getByText("loading"));

  const HeartOfMontana = await queryByText("Heart of Montana!");
  const Artworks = document.querySelectorAll("li");
  expect(HeartOfMontana).toBeInTheDocument();
  expect(Artworks.length).toBe(10);
});
