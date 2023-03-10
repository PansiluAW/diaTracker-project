import React, { useState } from 'react'
import LineChart from "../../Components/LineChart/LineChart";
import AddBoxIcon from '@mui/icons-material/AddBox';
import "./HomeLeftPane.css";
import {useRef} from 'react';
<script src="./src/Components/LineChart/LineChart"></script>

export default function HomeLeftPane() {
    
    // window.addEventListener("addSugarLevel()", () => {
    //     if(document.display === "none")
    //     {
    //     document.getElementsByClassName("inputPane").display = "block";
    //     }
    //     });

    const [elementVisible, setElementVisible] = useState(false);


    const inputRef = useRef(null);
    const [updated, setUpdated] = useState('');

    const inputSugar = () => {
        // 👇 "inputRef.current.value" is input value
        setUpdated(inputRef.current.value);
    };
        
  return (

      <>
      <div className="leftPaneBox">
        <div className="iconPane">

            

            <AddBoxIcon onClick={() => setElementVisible(!elementVisible)}></AddBoxIcon>
                
        </div>
        <div className="sugarLineChart">
            <LineChart UpdatedSugarLevel={updated}/>
        </div>
        {elementVisible ? (
                <div className="inputPane">
                <h2>Add New Sugar Level</h2>
                <div className='addInput'>
                    <input placeholder="mmol/L" type="number" ref={inputRef} className="addSugarLevel" />
                </div>
                <button className="addButton" onClick={inputSugar} >Add</button>
                <button type="reset">Clear</button>
                </div>
            ) : null}
        
      </div>
      
          </>


  )
}
