import { rest } from "msw";
import { artworkMock } from "./artwork-mock";

export const handlers = [
  rest.get("https://api.artic.edu/api/v1/artworks", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(artworkMock));
  }),
];
