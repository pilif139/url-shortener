import Footer from "@/components/Footer";
import {render, screen} from "@testing-library/react";

describe("Footer", ()=>{
  it("should render correctly", ()=>{
    const {container} = render(<Footer/>)
    expect(container).toMatchSnapshot();
  })

  it("should render links to socials", ()=>{
    render(<Footer/>)
    const githubLink = screen.getByLabelText(/github link/i);
    const linkedinLink = screen.getByLabelText(/linkedin link/i);
    expect(githubLink).toHaveAttribute("href", "https://github.com/pilif139");
    expect(linkedinLink).toHaveAttribute("href", "https://www.linkedin.com/in/filip-kasperski-b80a8b310/");
  });

    it("should render dark mode toggler", ()=>{
        render(<Footer/>)
        expect(screen.getByRole("button")).toBeInTheDocument();
    })
})