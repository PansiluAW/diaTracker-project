import React from "react";
import { useState } from "react";
import { useRef } from "react";
import "./Medication.css";
import OnGoingReminderPane from "../OnGoingReminderPane/OnGoingReminderPane";

export default function MedicationPane() {
  const inputRef = useRef(null);
  const [updated, setUpdated] = useState("");

  const [value1, setValue1] = React.useState("");

  const handleChange1 = (event) => {
    setValue1(event.target.value);
  };

  const [isMedicationHide, setMedicationsHide] = useState(false);
  const inputMedication = () => {
    setUpdated(inputRef.current.value);
    if ((updated === "") & (value1 === "")) {
      setReminderPaneHide(isReminderPaneHide);
    } else {
      setReminderPaneHide(!isReminderPaneHide);
    }
  };

  return (
    <div className="medicationPane">
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
              <button
                className="addButton"
                onClick={inputMedication}
                type="submit"
              >
                Add
              </button>
            </table>
          </form>
        </div>
        <div className={isReminderPaneHide ? "nav-menu active" : "nav-menue"}>
          <div>
            {isReminderPaneHide ? (
              <OnGoingReminderPane mediName={updated} time={value1} />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
