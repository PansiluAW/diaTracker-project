import React from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import diatraclogo from "./diatraclogo.png";
import "./SettingsPane.css";
import { useState } from "react";

export default function SettingsPane() {
  const [isSettingsHide, setSettingsHide] = useState(false);

  const [value1, setValue1] = React.useState("English");

  const handleChange1 = (event) => {
    setValue1(event.target.value);
  };

  const [value2, setValue2] = React.useState("Enabled");

  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };

  const [value3, setValue3] = React.useState("Disabled");

  const handleChange3 = (event) => {
    setValue3(event.target.value);
  };

  return (
      
      
      <div className="SettingsPane">
        {!isSettingsHide ? (
          <>
          Settings
          <KeyboardArrowLeftIcon
        className="ArrowLeftIcon"
        onClick={() => {
          if (isSettingsHide === true) {
            setSettingsHide(false);
          } else setSettingsHide(true);
        }}
      />
            <table>
              <tr>
                <td>
                  <label>Select Language</label>
                </td>
                <td>
                  <select value={value1} onChange={handleChange1}>
                    <option value="English">English</option>

                    <option value="Sinhala">Sinhala</option>
                  </select>
                </td>
              </tr>

              <tr>
                <td>
                  <label>Enable Medication Reminder</label>
                </td>
                <td>
                  <select value={value2} onChange={handleChange2}>
                    <option value="Enabled">Enabled</option>

                    <option value="Disabled">Disabled</option>
                  </select>
                </td>
              </tr>

              <tr>
                <td>
                  <label>Enable Mindfulness Notification</label>
                </td>
                <td>
                  <select value={value3} onChange={handleChange3}>
                    <option value="Enabled">Enabled</option>

                    <option value="Disabled">Disabled</option>
                  </select>
                </td>
              </tr>

              <tr>
                <td>App Version</td>
                <td>V1.0.0</td>
              </tr>

              <tr>
                <td>Developer Info</td>
                <td>Team Aspire</td>
              </tr>

              <tr>
                <td>Privacy Policy</td>
                <td>View Privacy Policies</td>
              </tr>
            </table>
            <div className="logo">
              <img src={diatraclogo} alt="Diatrac logo" />
            </div>
            <div className="copyRightSt">
              DiaTracker Copyright &copy; 2022 - 2023 Team Aspire. All rights
              reserved.
            </div>
            <p>We eat {value1}!</p>
          </>
        ) : null}
      </div>

  );
}
