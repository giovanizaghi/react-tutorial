function Welcome(props: { name: string }) {
    return(
        <div>
            <h2>Welcome, {props.name}</h2>
            <p>This is your first custom React component!</p>
        </div>
    )
}

export default Welcome;