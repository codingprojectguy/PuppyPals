import "./App.css";
import { useState } from "react";
import { puppyList } from "./data";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick() {
    // some logic here
  }
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);
  return (
    <div className="App">
      {" "}
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      {puppies.map((puppy) => {
        return (
          <p
            onClick={() => {
              setFeatPupId(puppy.id);
            }}
            key={puppy.id}
          >
            {puppy.name}
          </p>
        );
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
//     </div>nn
//   );
// })}
