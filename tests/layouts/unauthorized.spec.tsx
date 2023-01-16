import { render, RenderResult, screen } from "@testing-library/react";
import Unauthorized from "../../src/layouts/unauthorized";
import "@testing-library/jest-dom";

describe("Unauthorized layout", () => {
  let component: RenderResult;

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
