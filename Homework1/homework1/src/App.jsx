import './App.css';
import Listing from './components/Listing'

const App = () => {

  return (
    <div className="App">
        <img src="./src/assets/logo.jpg" alt="Logo" width="500" height="100"></img>
        <h1>Game Stores In South Florida</h1>
        <h2>Learn Where The Game Stores Are And What Games They Sell</h2>
        <Listing/>
    </div>
  )
}

export default App