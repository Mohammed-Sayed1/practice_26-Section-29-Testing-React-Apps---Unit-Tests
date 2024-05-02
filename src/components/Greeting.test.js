import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

//* describe() is a globally available testing function, and this is how to create TEST SUITE
describe("Greeting component.", () => {
  //* test() is a globally available testing function
  test("renders 'Hello World' as a text", () => {
      /** Arrange */
      render(<Greeting />);

    /** Act */
    // ... nothing

    /** Assert */
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    //* expect() is a globally available testing function
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders 'It's good to see you!' if the button was NOT clicked", () => {
    /** Arrange */
    render(<Greeting />);

    /** Act */
    // ... nothing

    /** Assert */
    const goodToSeeYou = screen.getByText("It's good to see you!", {exact: false})
    expect(goodToSeeYou).toBeInTheDocument()
  })

  test("renders 'Changed!' if the button was clicked", () => {
    /** Arrange */
    render(<Greeting />);

    /** Act */
    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)

    /** Assert */
    const changed = screen.getByText("Changed!", {exact: false});
    expect(changed).toBeInTheDocument()
  })

  test("doesn't render 'It's good to see you!' if the button was clicked", () => {
    render(<Greeting />)

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement)

    const errorGoodToSeeYou = screen.queryByText("It's good to see you!", {exact: false});
    expect(errorGoodToSeeYou).toBeNull();
  })
});
