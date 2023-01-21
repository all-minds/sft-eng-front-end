import "@testing-library/jest-dom";
import { render, RenderResult } from "@testing-library/react";
import PropertyDrawer from "@/components/property-drawer";
import { generateProperty } from "@/mocks/property";

describe("Property drawer component", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(
      <PropertyDrawer
        opened={true}
        property={generateProperty()}
        onClose={() => {}}
        onCreateProperty={() => {}}
        onUpdateProperty={() => {}}
      />
    );
  });

  it("Should has drawer", () => {
    const drawer = component.getByTestId("property-drawer");

    expect(drawer).toBeInTheDocument();
  });

  afterAll(() => {
    component.unmount();
  });
});
