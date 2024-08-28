import { useState } from "react";

const userList = ["Jay", "Bibi", "Kai", "Jenn"];

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
