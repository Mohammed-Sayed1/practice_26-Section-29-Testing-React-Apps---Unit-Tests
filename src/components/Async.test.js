import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request succeeds", async () => {
    /** jest: is a globally available testing object provided by jest testing library
     * the next lines we use them to test how our component will react with dummay fetch request in case of success or error
     * so we semulate that the request has been send and the response received with the data we expect in case of success or error
     */
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });

    render(<Async />);

    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
