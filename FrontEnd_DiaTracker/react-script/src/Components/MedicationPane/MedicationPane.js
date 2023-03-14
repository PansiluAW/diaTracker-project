import React from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRef } from "react";
import "./Medication.css";

export default function MedicationPane() {
  const inputRef = useRef(null);
  const [updated, setUpdated] = useState("");

  const [value1, setValue1] = React.useState("");

  const handleChange1 = (event) => {
    setValue1(event.target.value);
  };
  const deleteInput = () => {
    inputRef.current.value = "";
    setUpdated("");
    setValue1("");
    setReminderPaneHide(true);

  };

  const [isReminderPaneHide, setReminderPaneHide] = useState(true);
  const inputMedication = () => {

    if (isReminderPaneHide === false) {
      setReminderPaneHide(true);
    } else setReminderPaneHide(false);

    setUpdated(inputRef.current.value);
  };

  const [isMedicationHide, setMedicationsHide] = useState(false);
  return (
    <div className="medicationPane">
      {!isMedicationHide ? (
        <>
          <KeyboardArrowLeftIcon
            className="ArrowLeftIcon"
            onClick={() => {
              if (isMedicationHide === true) {
                setMedicationsHide(false);
              } else setMedicationsHide(true);
            }}
          />
          <div className="medicationInput">
            <h3>Add New Reminder</h3>
            <div>
              <form>
              <table>
                <tr>
                  <td>
                    <label>Medication Name :</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      ref={inputRef}
                      className="addMedicationName" 
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Remainder At :</label>
                  </td>
                  <td>
                    <select value={value1} onChange={handleChange1}>
                      <option value="Every 6 Hours">Every 6 Hours</option>

                      <option value="Every 4 Hours">Every 4 Hours</option>
                    </select>
                  </td>
                </tr>
                <button className="addButton" onClick={inputMedication} type = "submit">
                  Add
                </button>
              </table>
              </form>
              
            </div>
            <h3>On-Going Reminder</h3>
            {!isReminderPaneHide ? (
              <div>
                {updated}
                <span className="vl"></span>
                {value1}
                <span className="vl"></span>
                <DeleteIcon className="deleteIcon" onClick={deleteInput} />
              </div>
            ) : null}
          </div>
        </>
      ) : null}
    </div>
  );
}
