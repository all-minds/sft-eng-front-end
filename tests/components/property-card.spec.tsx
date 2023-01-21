import "@testing-library/jest-dom";
import PropertyCard from "@/components/property-card";
import { render, RenderResult } from "@testing-library/react";
import { generateProperty } from "@/mocks/property";

describe("Property card component", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<PropertyCard property={generateProperty()} />);
  });

  it("Should has card component", () => {
    const card = component.getByTestId("property-card");

    expect(card).toBeInTheDocument();
  });

  afterAll(() => {
    component.unmount();
  });
});
