// import { useState } from "react";

// const messages = ["Learn react", "Apply jobs", "Invest your new income"];

// const stepPage = () => {
//   const [step, setStep] = useState(0);
//   const [isHideStep, setIsHideStep] = useState(true);

//   const incrementStep = () => {
//     if (step > 3) {
//       setStep(prevStep) => prevStep + 1);
//     }
//   };

//   const handlePrevStep = () => {

//     if (step>0
//         setStep((prevStep)) => prevStep-1  );
//   }
// };

let users = [
  { id: 1, firstname: "John", lastname: "Ken" },
  { id: 2, firstname: "Robin", lastname: "Hood" },
  { id: 3, firstname: "William", lastname: "Cook" },
];

export default function Home() {
  const editedUser = { id: 2, firstname: "Michael", lastname: "Angelo" };

  users = users.map((u) => (u.id !== editedUser.id ? u : editedUser));

  console.log("users -> ", users);
}

// let myArray = [
//     { id: 0, name: "Jhon" },
//     { id: 1, name: "Sara" },
//     { id: 2, name: "Domnic" },
//     { id: 3, name: "Bravo" },
//   ],

//    export default function Home ( {
//       //Find index of specific object using findIndex method.
//   objIndex = myArray.findIndex((obj) => obj.id == 1);

// //Log object to Console.
// console.log(myArray[objIndex]);

// //Update object's name property.
// myArray[objIndex].name = "Laila";

// //Log object to console again.
// console.log("After update: ", myArray[objIndex]);

//   })
