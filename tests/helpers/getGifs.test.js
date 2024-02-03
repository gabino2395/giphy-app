import { getGifs } from "../../src/helpers/getGifs";

/* eslint-disable no-undef */
describe("get gifs helpers", () => {
  test("debe de traer gifs", async () => {
    const gifs = await getGifs("One Punch");
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
