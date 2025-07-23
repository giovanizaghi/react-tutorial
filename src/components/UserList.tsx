import type { UsersState } from "../features/usersSlice";

const UserList: React.FC<UsersState> = ({users, loading, error}) => {

    if(loading){
        return <p>Loading...</p>
    }

    if(error){
        return <p>An error ocurred loading users</p>
    }

    return (
        <>
            <h2>Users</h2>
            {
                users.length === 0 ? <p>Loading...</p> :
                    <ul>
                        {
                            users.map(user => (
                                <li key={user.id}>{user.name} ({user.email.toLocaleLowerCase()})</li>
                            ))
                        }
                    </ul>
            }
        </>
    );
}

export default UserList;