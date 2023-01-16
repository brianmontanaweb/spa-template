import { render, waitForElementToBeRemoved } from "@testing-library/react";
import { rest } from "msw";
import App from "./App";
import { artworkMock } from "./mocks/artwork-mock";
import { ARTWORKS_URL } from "./mocks/handlers";
import { server } from "./mocks/server";

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

test("renders learn react link, test response change", async () => {
  server.use(
    rest.get(ARTWORKS_URL, (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );
  const { queryByText, getByText } = render(<App />);

  const linkElement = await queryByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  const Loading = await queryByText("loading");
  expect(Loading).toBeInTheDocument();
});
