import Info from '../information/info'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

test("should render div elements", () => {
    render(<BrowserRouter><Info /></BrowserRouter>)
    const divElement = screen.getByTestId("divmain");
    expect(divElement.childNodes).toBeInTruthy();
    // expect(component.childNodes).toBeTruthy();
})