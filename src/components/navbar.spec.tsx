import * as Mantine from "@mantine/core";
import "@testing-library/jest-dom";
import { render, RenderResult, screen } from "@testing-library/react";
import Navbar from "./navbar";
import * as Next from "next/router";

describe("Navbar component", () => {
  let component: RenderResult;

  beforeAll(() => {
    jest
      .spyOn(Next, "useRouter")
      .mockImplementation(() => ({ push: (value: string) => {} }) as Next.NextRouter);
  });

  beforeEach(() => {
    component = render(
      <Navbar opened={false} />
    );
  });

  it("Should render navbar component", () => {
    const navbar = screen.getByTestId("default-navbar");

    expect(navbar).toBeInTheDocument();
  });

  it("Should has at least one navbar item component", async () => {
    const navbarItem = await screen.findAllByTestId("default-navbar-item");

    expect(navbarItem.length).toBeGreaterThan(1);
  });
});
