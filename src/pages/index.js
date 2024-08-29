import { useState } from "react";
import Button from "@/Components/Button";

const playersData = [
  {
    id: 1,
    playerName: "John Cena",
    playerScore: 10,
  },
  {
    id: 2,
    playerName: "John John",
    playerScore: 8,
  },
  {
    id: 3,
    playerName: "John Kena",
    playerScore: 5,
  },
];

// let duplicate = JSON.parse(JSON.stringify(players));
// const playerScore = () = {
//   const [point,  setPoint] = useState(duplicate);

//   const incrementPlayer = (index) => {
//     const incremented = [...point];

//     incremented[index].playerScore += 1;

//     setPoint(incremented);
//   };

//   const decrementPlayer = (index) => {
//     const decremented = [...point];
//     if (decremented[index].playerScore > 0) {
//       decremented[index].playerScore -= 1;
// setPoint(decremented);
//     };

//     const reset = () => {
//       let duplicate2 =JSON.parse(JSON.stringify(players));
//       setPoint(duplicate2);
//     };

//     return (

//     )
//   };

// export default function App() {
//   const [players, setPlayers] = useState(playersData);

const decrementPlayerScore = (index) => {
  const copyPlayers = [...players];

  copyPlayers[index].playerScore -= 1;

  setPlayers(copyPlayers);
};

const decrementPlayerScore1 = (index) => {
  setPlayers((prevScore) => {
    const updatedScore = [...prevScore];
    updatedScore[index] = {
      ...updatedScore[index],
      playerScore: updatedScore[index].playerScore - 1,
    };
    console.log(updatedScore);
    return updatedScore;
  });
};

const resetScore = () => {
  // const copyPlayersData = [...playersData];
  const copyPlayersData = [...playersData];
  setPlayers(copyPlayersData);
};

return (
  <div className="flex flex-col gap-4">
    {playersData.map((player, index) => {
      return (
        <div className="flex gap-2">
          <button
            className="py-2 px-4 bg-blue-200 rounded"
            onClick={() => incrementPlayerScore(index)}>
            +
          </button>
          <p>{player.playerScore}</p>
          <button
            className="py-2 px-4 bg-blue-200 rounded"
            onClick={() => decrementPlayerScore(index)}>
            -
          </button>
        </div>
      );
    })}
    <div>
      <button
        className="flex w-[120px] h-[52px] py-2 px-4 bg-green-500 rounded"
        onClick={resetScore}>
        Reset
      </button>
    </div>
  </div>
);
