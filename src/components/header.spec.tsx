import * as Mantine from "@mantine/core";
import "@testing-library/jest-dom";
import { render, RenderResult, screen } from "@testing-library/react";
import DefaultHeader from "./header";

describe("Header component", () => {
  let component: RenderResult;

  beforeAll(() => {
    jest.spyOn(Mantine, "useMantineTheme").mockImplementation(
      () =>
        ({
          colors: { gray: [] },
        } as unknown as Mantine.MantineTheme)
    );
  });

  beforeEach(() => {
    const theme = Mantine.useMantineTheme();

    component = render(
      <DefaultHeader opened={false} setOpened={() => {}} theme={theme} />
    );
  });

  it("Should render header component", () => {
    const header = screen.getByTestId("default-header");

    expect(header).toBeInTheDocument();
  });

  it("Should has burger button for mobile", () => {
    const mobileBurger = screen.getByTestId("default-header_mobile-burger");

    expect(mobileBurger).toBeInTheDocument();
  });

  afterAll(() => {
    component.unmount();
  });
});
