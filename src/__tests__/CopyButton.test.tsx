import CopyButton from "@/components/CopyButton";
import {render, screen, waitFor} from "@testing-library/react";
import {jest} from "@jest/globals";
import {act} from "react";

describe("CopyButton", () => {
  beforeEach(() => {
    Object.defineProperty(navigator, "clipboard", {
      value: {
        writeText: async (text: string) => {
          expect(text).toBe("Hello, World!");
        },
        readText: async () => {
          return "Hello, World!";
        }
      },
      configurable: true
    });
  });

  it("should render CopyButton", () => {
    const {container} = render(<CopyButton text="Hello, World!" />);
    expect(container).toMatchSnapshot();
  });

  it("should render Copied! when clicked", async () => {
    render(<CopyButton text="Hello, World!" />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(screen.getByText("Copy")).toBeInTheDocument()
    act(() => {
      button.click();
    });
    await waitFor(()=>{
      expect(screen.getByText("Copied!")).toBeInTheDocument()
    });
  });

  it("should copy text to clipboard", async() => {
    render(<CopyButton text="Hello, World!" />);
    await act(async()=>{
      screen.getByText("Copy").click();
      expect(await navigator.clipboard.readText()).toBe("Hello, World!");
    })
  });

  it("should log error when failed to copy text", async () => {
    const consoleSpy = jest.spyOn(console, "error");
    consoleSpy.mockImplementation(() => {});
    render(<CopyButton text="Hello, World!" />);
    Object.defineProperty(navigator, "clipboard", {
      value: {
        writeText: async () => {
            throw new Error("Failed to copy text");
        }
      }
    });
    act(()=> {
      screen.getByText("Copy").click();
    });
    await waitFor(()=>expect(consoleSpy).toHaveBeenCalled());
    consoleSpy.mockRestore();
  });
});