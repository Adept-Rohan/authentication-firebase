import Another from "./components/Another"
import Main from "./components/Main"
import Auth from './components/Auth'

function App() {


  return (
    <>
      <div className="flex flex-col gap-4">
        <Main />
        <Another />
        <Auth />
      </div>

    </>
  )
}

export default App
