import "@testing-library/jest-dom";

import { fireEvent, render } from "@testing-library/react";
import { describe, test, vi } from "vitest";
import Button from ".";


const buttonTestID = 'button';

describe("Button", () => {

    test("Should be able to render the button", () => {
        const { getByTestId } = render(<Button>Default Button</Button>);
        expect(getByTestId(buttonTestID)).toBeInTheDocument();
    })

    test("Should be able to render based on the children prop", () => {
        const { getByTestId } = render(<Button>Default Button</Button>);
        expect(getByTestId(buttonTestID)).toHaveTextContent("Default Button");
    })

    test("Be able to fire the onClick event", () => {
        const handleClick = vi.fn();

        const { getByTestId } = render(<Button onClick={handleClick}>Default Button</Button>);
        fireEvent.click(getByTestId(buttonTestID));

        expect(handleClick).toHaveBeenCalledTimes(1);

    })

    test("Should be able to have default style", () => {
        const { getByTestId } = render(<Button>Default Button</Button>);
        expect(getByTestId(buttonTestID)).toHaveStyle({
            backgroundColor: "#000",
            height: "40px",
        })
    })
});