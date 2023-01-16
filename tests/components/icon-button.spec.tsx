import "@testing-library/jest-dom";
import { render, RenderResult, screen } from "@testing-library/react";
import IconButton from "../../src/components/icon-button";

describe("Icon button component", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(
      <IconButton color={'blue'} label="Testing" icon={<></>} onClick={() => {}} />
    );
  });

  it("Should render icon button component", () => {
    const iconButton = screen.getByTestId("icon-button");

    expect(iconButton).toBeInTheDocument();
  });

  it("Should has an icon", () => {
    const icon = screen.getByTestId("icon-button_icon");

    expect(icon).toBeInTheDocument();
  });

  it("Should has a label", () => {
    const label = screen.getByTestId("icon-button_label");

    expect(label).toBeInTheDocument();
  });

  afterAll(() => {
    component.unmount();
  });
});
