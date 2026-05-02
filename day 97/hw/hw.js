function App() {


    const name = "John Doe";
    const description = "I am a beginner web developer who loves React.";


    const imageUrl = "https://via.placeholder.com/300";


    const number = 15;
    let message;

    if (number > 10) {
    message = "Big number";
    } else {
    message = "Small number";
    }

    return (
    <div>

        {}
        <div>
        <h2>{name}</h2>

        <p>
            {description}
        </p>

        <ul>
            <li>Coding</li>
            <li>Music</li>
            <li>Learning</li>
        </ul>
        </div>

        {}
        <div>
        <h2>My Image</h2>

        <img src={imageUrl} alt="Example" />
        </div>

        {}
        <div>
        <h2>{message}</h2>
        </div>

    </div>
    );
}

export default App;