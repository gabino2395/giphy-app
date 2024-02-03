/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import GifItem from "../../src/components/GifItem";

describe("GifItem", () => {
  const title = "Saitama";
  const url = "https://one-punch.com/saitama.png";

  test("debe hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("debe mostrar la imagen", () => {
    render(<GifItem title={title} url={url} />);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });
  test("debe mostrar titulo en el componente", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
