import {render, screen} from '@testing-library/react';
import DarkModeToggler from "@/components/DarkModeToggler";
import {act} from "react";

describe("Dark Mode Toggler", ()=>{
  it("correctly renders a button", ()=>{
    render(<DarkModeToggler />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  })

  it("correctly toggles the theme", ()=>{
    render(<DarkModeToggler />);

    const button = screen.getByRole('button');
    act(() => {
      expect(document.documentElement.classList.contains('dark')).toBe(false);
      expect(window.localStorage.getItem('theme')).toBe(null);
      button.click();
      expect(document.documentElement.classList.contains('dark')).toBe(true);
      expect(window.localStorage.getItem('theme')).toBe('dark');
      button.click();
      expect(document.documentElement.classList.contains('dark')).toBe(true);
      expect(window.localStorage.getItem('theme')).toBe('dark');
    });
  })
})