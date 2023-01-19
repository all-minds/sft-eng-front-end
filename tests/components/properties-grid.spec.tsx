import "@testing-library/jest-dom";
import PropertiesGrid from "@/components/properties-grid";
import { render, RenderResult } from "@testing-library/react";

describe("Properties grid component", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<PropertiesGrid properties={[]} />);
  });

  it("Should render grid if has at least one property", () => {
    const populatedComponent = render(<PropertiesGrid properties={[]} />);

    const grid = populatedComponent.getByTestId("properties-grid");

    expect(grid).toBeInTheDocument();
  });

  it("Should render brand no data content if has no properties", () => {
    const noContent = component.getByTestId("properties-grid_no-content");

    expect(noContent).toBeInTheDocument();
  });

  afterAll(() => {
    component.unmount();
  });
});
