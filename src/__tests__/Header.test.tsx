import Header from "@/components/Header";
import {render, screen} from "@testing-library/react";
import {jest} from "@jest/globals"

describe("Header Component", ()=>{
    it("should render correctly", ()=>{
        render(<Header/>);
        expect(screen.getByRole("banner")).toBeInTheDocument();
    })

    it("should render correctly header", () => {
        const {container} = render(<Header />);
        expect(container).toMatchSnapshot();
    });

    it("should have a link to the home page", () => {
        render(<Header />);
        expect(screen.getByRole("link")).toHaveAttribute("href", "/");
    });

    it("should reload the page when the link is clicked and the pathname is '/'", () => {
        Object.defineProperty(window, 'location', {
            writable: true,
            value: { pathname: "/", reload: jest.fn() }
        });
        render(<Header />);
        screen.getByRole("link").click();
        expect(window.location.reload).toHaveBeenCalled();
    });


    it("should not reload the page when the link is clicked and the pathname is not '/'", () => {
        Object.defineProperty(window, 'location', {
            writable: true,
            value: { pathname: "/", reload: jest.fn() }
        });
        window.location = { pathname: "/other", reload: jest.fn() } as any;
        render(<Header />);
        screen.getByRole("link").click();
        expect(window.location.reload).not.toHaveBeenCalled();
    });
})