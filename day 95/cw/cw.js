const generateBoolean = () => {
    return Math.random() > 0.5
}

const myP = <p>{generateBoolean() ? "hello" : "goodbye"}</p>

const myDiv = (
    <div>
        {generateBoolean() && <p>text</p>}
    </div>
);