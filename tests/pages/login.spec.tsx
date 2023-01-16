import { render, RenderResult, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "../../src/pages/login";
import * as Next from "next/router";

describe("Login page", () => {
  let component: RenderResult;

  beforeAll(() => {
    jest
      .spyOn(Next, "useRouter")
      .mockImplementation(
        () => ({ push: (value: string) => {} } as Next.NextRouter)
      );
  });

  beforeEach(() => {
    component = render(<Login />);
  });

  it("Should use unauthorized layout", () => {
    render(Login.getLayout(<Login />));

    const layout = screen.getByTestId("unauthorized-layout");

    expect(layout).toBeInTheDocument();
  });

  it("Should has an email input", () => {
    const field = screen.getByTestId("login_email");

    expect(field).toBeInTheDocument();
  });

  it("Should has a password input", () => {
    const field = screen.getByTestId("login_password");

    expect(field).toBeInTheDocument();
  });

  it("Should has a submit button", () => {
    const submit = screen.getByTestId("login_submit");

    expect(submit).toBeInTheDocument();
  });

  afterAll(() => {
    component.unmount();
  });
});
