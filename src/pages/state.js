import { useState } from "react";

const userList = ["Jay", "Bibi", "Kai", "Jenn"];

const players = [
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

export default function App() {
  const [index, setIndex] = useState(0);
  const [user, setUser] = useState(userList);

  // const handlePlus = () => {
  //   setIndex(index + 1);

  //   const handleMinus = () => {
  //       setIndex(index - 1);

  return (
    <div className="text-center">
      <button onClick={() => setIndex(index + 1)}>nemeh</button>
      <p>{index}</p>
      <button onClick={() => setIndex(index - 1)}>hasah</button>

      {user.map((element) => (
        <li>{element}</li>
      ))}
    </div>
  );
}
