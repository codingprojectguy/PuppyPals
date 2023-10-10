import "./App.css";
import { useState } from "react";
import { puppyList } from "./data";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  console.log(puppies);
  return (
    <div className="App">
      {puppies.map((puppy) => {
        return <p key={puppy.id}>{puppy.name}</p>;
      })}
    </div>
  );
}

export default App;

// {puppies.map((puppy) => {
//   const [id, name, email, age, ownerId] = puppy;
//   return (
//     <div key={id}>
//       <h2>{name}</h2>
//       <h3>{email}</h3>
//       <h3>{age}</h3>
//       <h3>{ownerId}</h3>
//     </div>
//   );
// })}
