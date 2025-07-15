import { Provider } from "react-redux";
import UserList from "./UserList";
import { store } from "../store/store";
import { render, screen } from "@testing-library/react";


test('renders loading message when users are waiting the promise', () =>{
    render(
        <Provider store={store}>
            <UserList users={[]} loading={true} />
        </Provider>
    );
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
});