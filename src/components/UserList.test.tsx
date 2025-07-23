import { Provider } from "react-redux";
import { store } from "../store/store";
import {render, screen} from "@testing-library/react";
import UserList from "./UserList";

test('renders loading message when users are empty',() =>{
    render(
        <Provider store={store}>
            <UserList users={[]} loading={false} />
        </Provider>
    );

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
});