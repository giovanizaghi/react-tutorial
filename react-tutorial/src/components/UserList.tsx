function UserList({users}: { users: Array<any> }){
    if(!users || users.length === 0){
        return <p>Loading...</p>
    }

    return(
        <>
        {
          users.length === 0 ? <p>Loading...</p> :
          (
            <ul>
              {
                users.map((user: any) =>(
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