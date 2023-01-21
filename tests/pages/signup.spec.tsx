import "@testing-library/jest-dom";
import Signup from "../../src/pages/signup";
import * as Next from "next/router";
import { render, RenderResult, screen } from "@testing-library/react";
import auth from "firebase/auth";

describe("Signup page test", () => {
  let component: RenderResult;

  beforeAll(() => {
    jest
      .spyOn(Next, "useRouter")
      .mockImplementation(
        () => ({ push: (value: string) => {} } as Next.NextRouter)
      );

    jest.mock("firebase/auth");
    jest.mock("firebase/app");
  });

  beforeEach(() => {
    component = render(<Signup />);
  });

  it("Should use unauthorized layout", () => {
    render(Signup.getLayout(<Signup />));

    const layout = screen.getByTestId("unauthorized-layout");

    expect(layout).toBeInTheDocument();
  });

  it("Should has a name field", () => {
    const field = screen.getByTestId("signup_fullName");

    expect(field).toBeInTheDocument();
  });

  it("Should has a password field", () => {
    const field = screen.getByTestId("signup_password");

    expect(field).toBeInTheDocument();
  });

  it("Should has an email field", () => {
    const field = screen.getByTestId("signup_email");

    expect(field).toBeInTheDocument();
  });

  it("Should has a submit button", () => {
    const button = screen.getByTestId("signup_submit");

    expect(button).toBeInTheDocument();
  });
});
