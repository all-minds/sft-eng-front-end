import "@testing-library/jest-dom";
import Properties from "@/pages/properties";
import { act, render, screen, waitFor } from "@testing-library/react";
import * as Next from "next/router";
import properties from "@/hooks/useProperties";
import Property, { NewProperty } from "@/models/property";

describe("Properties page", () => {
  beforeAll(() => {
    jest
      .spyOn(Next, "useRouter")
      .mockImplementation(
        () => ({ push: (value: string) => {} } as Next.NextRouter)
      );
  });

  it("Should use authorized layout", async () => {
    // act(() => {
    //   render(Properties.getLayout(<Properties />));
    // });

    // await waitFor(() => {
    //   const layout = screen.getByTestId("authorized-layout");

    //   expect(layout).toBeInTheDocument();
    // });
  });

  afterAll(() => {});
});
