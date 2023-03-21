import React, { useState, useRef } from "react";
import "./Medication.css";
import OnGoingReminderPane from "../OnGoingReminderPane/OnGoingReminderPane";

export default function MedicationPane() {
  const inputRef = useRef(null);
  const [updated, setUpdated] = useState("");

  const [value1, setValue1] = useState("");

  const handleChange1 = (event) => {
    setValue1(event.target.value);
  };

  const [isReminderPaneHide, setReminderPaneHide] = useState(false);
  const inputMedication = () => {
    if ((updated === "") & (value1 === "")) {
      setReminderPaneHide(isReminderPaneHide);
    } else {
      setUpdated(inputRef.current.value);
    }
  };

  return (
    <div className="medicationPane d-flex justify-content-center flex-nowrap pt-4">
      <div className="medicationInput">
        <div>
          <table>
            <tr>
              <td>
                <label>Medication Name :</label>
              </td>
              <td>
                <input
                  type="text"
                  ref={inputRef}
                  className="addMedicationName rounded"
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label className="pt-2">Remainder At :</label>
              </td>
              <td>
                <select
                  value={value1}
                  class="option-pane mt-2"
                  onChange={handleChange1}
                >
                  <option value="1">Every 1 Hour</option>
                  <option value="6">Every 6 Hours</option>
                  <option value="4">Every 4 Hours</option>
                </select>
              </td>
            </tr>
          </table>
          <div className="container">
            <div className="row pt-4 px-1">
              <div className="col-sm-12">
                <div className="d-flex justify-content-end">
                  <hr className="w-100 mx-1 "></hr>
                  <button
                    className="btn btn-warning border-dark"
                    onClick={inputMedication}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={isReminderPaneHide ? "nav-menu active" : "nav-menue"}>
          <div>
            {isReminderPaneHide ? (
              <OnGoingReminderPane mediName={updated} time={value1} />
            ) : null}
          </div>
        </div> */}
      </div>
    </div>
  );
}
