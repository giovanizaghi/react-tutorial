import Welcome from "./Welcome";
import {render, screen} from "@testing-library/react";

test('renders Welcome with name prop', () =>{
    render(<Welcome name="Developer" />);
    expect(screen.getByText(/Welcome, Developer/i)).toBeInTheDocument();
});