import { useState, useEffect } from "react";
import { Character } from "./recuadroPersonaje";
import "../components/personajes.css";

export function CharacterList() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [page] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const { results } = await data.json();
      setCharacters(results);
      setLoading(false);
    }
    fetchData();
  }, [page]);

  return (
    <div className="container">

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-3">
          {characters.map((character) => (
            <div className="container" key={character.id}>
              <Character
                key={character.id}
                name={character.name}
                origin={character.origin}
                image={character.image}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CharacterList;
