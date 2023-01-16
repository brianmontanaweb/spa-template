import { rest } from "msw";
import { artworkMock } from "./artwork-mock";

export const ARTWORKS_URL = "https://api.artic.edu/api/v1/artworks";

export const handlers = [
  rest.get(ARTWORKS_URL, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(artworkMock));
  }),
];
