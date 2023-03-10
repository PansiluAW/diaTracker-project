import React, { useState } from 'react'
import LineChart from "../../Components/LineChart/LineChart";
import AddBoxIcon from '@mui/icons-material/AddBox';
import "./HomeLeftPane.css";
import {useRef} from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css'
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
        <div className="sugarLineChart sugarcontainer">
            <LineChart UpdatedSugarLevel={updated}/>
        </div>
        {elementVisible ? (
                <div className="inputPane addsugarsontainer">
                <h2>Add New Sugar Level</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="addsugar">
                    <Form.Label>_</Form.Label>
                    <Form.Control type="text" className='sugarinput' placeholder="Sugar Level (mmol/L)" />
                    </Form.Group>
                </Form>
                <button type="button" class="btn mx-2 px-4 btn-outline-warning">Add</button>
                <button type="button" class="btn mx-2 px-4 btn-warning">Clear</button>
                </div>
            ) : null}
      </div>
      
          </>


  )
}
