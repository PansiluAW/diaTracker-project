import React, {useState} from 'react'
import "./FoodRecomPane.css"
import "../FoodRecompane/FoodRecomData.js"

export default function FoddRecomPane() {
  const [data, setData] = useState([]);

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = () => {
//     axios
//       .get("#")
//       .then((res) => res.data)
//       .then((r) => setData(r));
//   };
// for (let i = 0; i < data.length; i++) {
//   const element = array[i];
  
// }
  return (
    <div className="foodRecomPane">
      Food Recoomendation
    </div>
  )
}
