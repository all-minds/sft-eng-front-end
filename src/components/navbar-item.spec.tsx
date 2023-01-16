import * as Mantine from "@mantine/core";
import "@testing-library/jest-dom";
import { render, RenderResult, screen } from "@testing-library/react";
import NavbarItem from "./navbar-item";
import * as Next from "next/router";

describe("Navbar item component", () => {
  let component: RenderResult;

  beforeAll(() => {
    jest
      .spyOn(Next, "useRouter")
      .mockImplementation(() => ({ push: (value: string) => {} }) as Next.NextRouter);
  });

  beforeEach(() => {
    component = render(
      <NavbarItem color={"blue"} label="Testing" icon={<></>} to="/" />
    );
  });

  it("Should render default navbar item", () => {
    const navbarItem = screen.getByTestId("default-navbar-item");

    expect(navbarItem).toBeInTheDocument();
  });

  it("Should has icon button component", () => {
    const navbarItem = screen.getByTestId("icon-button");

    expect(navbarItem).toBeInTheDocument();
  });
});
