import { CharacterList } from "./components/personajes.jsx";
import "./components/personajes.css"

function App() {
  return (
    <div className="bg-gradient-to-b from-cyan-700 via-yellow-300 to-black">
      <div className="bg-dark text-white">
        <h1 className="text-center display-1 py-4 font-mono text-4xl font-bold">Rick y Morty API</h1>
        <CharacterList />
      </div>
    </div>
  );
}

export default App;
