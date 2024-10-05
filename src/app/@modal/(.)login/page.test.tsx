import InterceptedLoginPage from "@/app/@modal/(.)login/page";
import {fireEvent, render, screen} from "@testing-library/react";
import {useFormState} from "react-dom";
import {useRouter} from "next/router";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      back: jest.fn(),
    };
  },
}));

jest.mock("react-dom", () => ({
  useFormState: jest.fn(),
}));

describe("Login Intercepted Page", ()=> {
  beforeEach(() => {
    (useFormState as jest.Mock).mockReturnValue({
      isDirty: false,
      isValid: true,
      errors: {},
    });
    });

  it("should render the login page", ()=> {
    const { container } = render(<InterceptedLoginPage />);
    expect(container).toMatchSnapshot();
    const modal = container.querySelector("dialog");
    expect(modal).toBeInTheDocument();
  });

  it("should close modal when clicked outside", ()=> {
    const { container } = render(<InterceptedLoginPage />);
    const modal = screen.getByLabelText("dialog");
    expect(modal).toBeInTheDocument();
    fireEvent.click(modal);
    expect(modal).not.toBeInTheDocument();
  });
});