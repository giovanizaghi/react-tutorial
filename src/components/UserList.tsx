import type { User } from "../features/usersSlice";

interface UserListProps {
  users: User[],
  loading: boolean,
  error?: string
}

const UserList: React.FC<UserListProps> = ({
  users,
  loading,
  error
}) => {
  if(loading){
    return <p>Loading users</p>
  }
  if (!users || users.length === 0) {
    return <p>No users found</p>
  }

  if(error){
    return <p>Error to found users: {error}</p>
  }

  return (
    <>
      {
        users.length === 0 ? <p>Loading...</p> :
          (
            <ul>
              {
                users.map((user: any) => (
                  <li key={user.id}>{user.name} ({user.email})</li>
                ))
              }
            </ul>
          )

      }
    </>
  )
}

export default UserList;