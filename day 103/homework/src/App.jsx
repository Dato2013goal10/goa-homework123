import { useState } from "react";

function Info() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form>
        <input 
          type="text" 
          value={text} 
          onChange={handleChange} 
          placeholder="ჩაწერე ტექსტი"
        />
      </form>

      <p>{text}</p>
    </div>
  );
}

export default Info;