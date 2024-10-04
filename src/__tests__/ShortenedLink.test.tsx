import ShortenedLink from "@/components/ShortenedLink";
import {fireEvent, render, screen} from "@testing-library/react";
import {jest} from "@jest/globals";

describe("ShortenedLink", () => {
  it("should render component properly", ()=>{
    const {container} = render(<ShortenedLink alias="test"/>);
    expect(container).toMatchSnapshot();
  });

  it("should throw error if alias is empty", ()=> {
    const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(()=>{});
    expect(()=> render(<ShortenedLink alias=""/>)).toThrow();
    expect(consoleErrorSpy).toHaveBeenCalled();
    consoleErrorSpy.mockRestore();
  });

  it("should render QR code with correct values", ()=> {
      render(<ShortenedLink alias="test"/>);
      const qrCode = screen.getByRole("img");
      expect(qrCode).toContainElement(qrCode.querySelector("path"));
      expect(qrCode).toHaveAttribute("width", "200");
      expect(qrCode).toHaveAttribute("height", "200");
  });

  it("should adjust QR code size based on window width", ()=> {
    render(<ShortenedLink alias="test"/>);
    const qrCode = screen.getByRole("img");
    // test resizing
    fireEvent.resize(window, {target: {innerWidth: 500}});
    expect(qrCode).toHaveAttribute("width", "150");
    expect(qrCode).toHaveAttribute("height", "150");
    fireEvent.resize(window, {target: {innerWidth: 1000}});
    expect(qrCode).toHaveAttribute("width", "200");
    expect(qrCode).toHaveAttribute("height", "200");
  });
});