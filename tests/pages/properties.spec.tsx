import "@testing-library/jest-dom";
import Properties from "@/pages/properties";
import { act, render, screen, waitFor } from "@testing-library/react";
import * as Next from "next/router";
import useProperties from "../../src/hooks/useProperties";
import Property, { NewProperty } from "@/models/property";

jest.mock("../../src/hooks/useProperties");

describe("Properties page", () => {
  beforeAll(() => {
    jest
      .spyOn(Next, "useRouter")
      .mockImplementation(
        () => ({ push: (value: string) => {} } as Next.NextRouter)
      );

    (useProperties as jest.Mock).mockReturnValue({
      fetchAllProperties: () => Promise.resolve<Property[]>([]),
      createProperty: (newProperty: Omit<NewProperty, "ownerId">) =>
        Promise.resolve(),
      updateProperty: (property: Property) => Promise.resolve(),
    });
  });

  it("Should use authorized layout", async () => {
    act(() => {
      render(Properties.getLayout(<Properties />));
    });

    await waitFor(() => {
      const layout = screen.getByTestId("authorized-layout");

      expect(layout).toBeInTheDocument();
    });
  });

  afterAll(() => {});
});
