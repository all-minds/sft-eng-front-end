import "@testing-library/jest-dom";
import Properties from "@/pages/properties";
import {
  act,
  getByTestId,
  render,
  RenderResult,
  screen,
  waitFor,
} from "@testing-library/react";
import * as Next from "next/router";

describe("Properties page", () => {
  beforeAll(() => {
    jest
      .spyOn(Next, "useRouter")
      .mockImplementation(
        () => ({ push: (value: string) => {} } as Next.NextRouter)
      );
  });

  it("Should use authorized layout", async () => {
    const t = render(Properties.getLayout(<Properties />));
    const layout = screen.getByTestId("authorized-layout");
    expect(layout).toBeInTheDocument();
  });

  afterAll(() => {});
});
