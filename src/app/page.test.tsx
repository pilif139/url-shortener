import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom"
import Home from "@/app/page";
import {jest} from "@jest/globals";

describe("Home Component", () => {
  it("should render correctly", () => {
    const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(()=>{}); //jest have problem with next.js server actions so it throws error when we try to render the component with server actions
    const {container} = render(<Home/>);
    expect(container).toMatchSnapshot();
    consoleErrorSpy.mockRestore();
  });
});