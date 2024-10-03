import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom"
import Home from "@/app/page";

describe("Home Component", () => {
  it("should render correctly", () => {
    render(<Home/>);

    expect(screen.getByRole("main")).toBeInTheDocument();
  });
});