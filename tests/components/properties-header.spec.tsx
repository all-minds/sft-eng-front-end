import "@testing-library/jest-dom";
import PropertiesHeader from "@/components/properties-header";
import { render, RenderResult, screen } from "@testing-library/react";

describe("Property header component", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<PropertiesHeader onClickAdd={() => {}} />);
  });

  it("Should has a container component", () => {
    const header = screen.getByTestId("properties-header");

    expect(header).toBeInTheDocument();
  });

  afterAll(() => {
    component.unmount();
  });
});
