import { Button } from "./components/Button"
import { Navbar } from "./components/layout/Navbar"

function App() {
  return (
    <div>
      <Navbar />
      <Button type="PRIMARY" label="Label ->" />
    </div>
  )
}

export default App
