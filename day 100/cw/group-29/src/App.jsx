import Button from "./components/Button"
import Component from "./components/Component"

const App = () => {
  const handleMouseOver = () => alert("Hover event happened")

  return (
    <div>
      <h2>Component</h2>
      <Component>
        <p>p</p>
        <p>p2</p>
      </Component>
    </div>
  )
}

export default App