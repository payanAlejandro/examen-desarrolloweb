export function Character(character) {
  return (
      <div className="text-center ">
        <h3 className="text-center text-3xl">{character.name}</h3>
        <img src={character.image} alt={character.name} className="rounded-lg items-center ml-24" />
        <p>{`Origen: ${character.origin && character.origin.name}`}</p>
      </div>
  );
}
export default Character;
