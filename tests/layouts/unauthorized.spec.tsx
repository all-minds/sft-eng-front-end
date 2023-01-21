import { render, RenderResult, screen } from "@testing-library/react";
import Unauthorized from "../../src/layouts/unauthorized";
import "@testing-library/jest-dom";
import * as Next from "next/router";

describe("Unauthorized layout", () => {
  let component: RenderResult;

  beforeAll(() => {
    jest
      .spyOn(Next, "useRouter")
      .mockImplementation(
        () => ({ push: (value: string) => {} } as Next.NextRouter)
      );
  });

  beforeEach(() => {
    component = render(<Unauthorized />);
  });

  it("Should has a brand image", () => {
    const heading = screen.getByTestId("unauthorized_brand-image");

    expect(heading).toBeInTheDocument();
  });

  it("Should has a content container", () => {
    const container = screen.getByTestId("unauthorized_content-container");

    expect(container).toBeInTheDocument();
  });

  afterEach(() => {
    component.unmount();
  });
});
