import React from "react";
import diatraclogo from "./diatraclogo.png";
import "./SettingsPane.css";
import "bootstrap/dist/css/bootstrap.css";

export default function SettingsPane() {
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
    <div className="SettingsPane text-wrap text-left pt-5">
      <table className="table mx-4 table-responsive">
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
          <td>
            <label>App Version</label>
          </td>
          <td>V1.0.0</td>
        </tr>

        <tr>
          <td>
            <label>Developer Info</label>
          </td>
          <td>Team Aspire</td>
        </tr>

        <tr>
          <td>
            <label>Privacy Policy</label>
          </td>
          <td>View Privacy Policies</td>
        </tr>
      </table>
      <div className="pt-5 mt-5 pb-1 logo mx-auto">
        <img src={diatraclogo} className="" alt="Diatrac logo" />
      </div>
      <div className="py-4 pb-5 copyRightSt text-center">
        DiaTracker Copyright &copy; 2022 - 2023 Team Aspire. All rights
        reserved.
      </div>
    </div>
  );
}
