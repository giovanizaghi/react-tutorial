
interface WelcomeProps{
    name: string;
}

const Welcome: React.FC<WelcomeProps> = ({name}) => {

    return(
        <div>
            <h2>Welcome, {name}</h2>
            <p>This is your first custom React Component!</p>
        </div>
    );
}

export default Welcome;