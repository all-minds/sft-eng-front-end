import { render, RenderResult, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as Next from "next/router";
import Authorized from "@/layouts/authorized";

describe("Authorized layout", () => {
  let component: RenderResult;

  beforeAll(() => {
    jest
      .spyOn(Next, "useRouter")
      .mockImplementation(
        () => ({ push: (value: string) => {} } as Next.NextRouter)
      );
  });

  beforeEach(() => {
    component = render(<Authorized />);
  });

  it("Should has a appbar", () => {
    const header = screen.getByTestId("default-header");

    expect(header).toBeInTheDocument();
  });

  it("Should has a navigator", () => {
    const navbar = screen.getByTestId("default-navbar");

    expect(navbar).toBeInTheDocument();
  });

  it("Should has a main content container", () => {
    const main = screen.getByRole("main");

    expect(main).toBeInTheDocument();
  });
});
