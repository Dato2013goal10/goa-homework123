const App = () => {
    const handleClick = () => console.log("user clicked me")

    return (
        <div>
            {
                <button onclick={handleClick}>Click Me!</button>
            }
        </div>
    )
}

export default App;
