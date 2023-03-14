import React, { useState } from "react";
import "./HomeLeftPane.css";
import LineChart from "../../Components/LineChart/LineChart";
import AddBoxIcon from "@mui/icons-material/AddBox";
import MedicationIcon from "@mui/icons-material/Medication";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useRef } from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.css";

import MedicationPane from "../MedicationPane/MedicationPane";
import SettingsPane from "../SettingsPane/SettingsPane";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { IconContext } from "react-icons";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

<script src="./src/Components/LineChart/LineChart"></script>;

export default function HomeLeftPane() {
  const [isUpdatingTheSugarLevelValue, setIsUpdatingTheSugarLevelValue] =
    useState(false);

  const inputRef = useRef(null);
  const [updated, setUpdated] = useState("");

  const clearInput = () => (inputRef.current.value = "");

  var recentSugarLevel;
  var previousSugarLevel;
  var result;

  const inputSugar = () => {
    previousSugarLevel = updated;
    setUpdated(inputRef.current.value);
    recentSugarLevel = updated;
  };

  function RecentSugarLevel() {
    return recentSugarLevel;
  }

  function PreviousSugarLevel() {
    return previousSugarLevel;
  }

  function RecentChanges() {
    if (recentSugarLevel >= previousSugarLevel) {
      result = recentSugarLevel - previousSugarLevel;
      <ArrowDropUpIcon />;
    } else {
      result = previousSugarLevel = recentSugarLevel;
      <ArrowDropDownIcon />;
    }
    return result;
  }

  const [sideSettingsBar, setSideSettingsBar] = useState(false);

  const showSideSettingsbar = () => setSideSettingsBar(!sideSettingsBar);

  const [sideMedicationsBar, setSideMedicationsBar] = useState(false);

  const showSideMedicationbar = () =>
    setSideMedicationsBar(!sideMedicationsBar);

  return (
    <>
      <div className="leftPaneBox">
        <div className="iconPane">
          <span>
            <IconContext.Provider>
              <MedicationIcon
                onClick={showSideMedicationbar}
                fontSize="large"
              />

              <div
                className={sideMedicationsBar ? "nav-menu active" : "nav-menue"}
              >
                <div>
                  {sideMedicationsBar ? (
                    <>
                      <KeyboardArrowLeftIcon onClick={showSideMedicationbar} />
                      <MedicationPane />
                    </>
                  ) : null}
                </div>
              </div>
            </IconContext.Provider>
          </span>

          <span className="vl"></span>
          <span>
            <IconContext.Provider>
              <SettingsIcon onClick={showSideSettingsbar} fontSize="large" />

              <div
                className={sideSettingsBar ? "nav-menu active" : "nav-menue"}
              >
                <div>
                  {sideSettingsBar ? (
                    <>
                      Settings
                      <KeyboardArrowLeftIcon onClick={showSideSettingsbar} />
                      <SettingsPane />
                    </>
                  ) : null}
                </div>
              </div>
            </IconContext.Provider>
          </span>

          <span>
            <AddBoxIcon
              fontSize="large"
              className="addBoxIcon"
              onClick={() => {
                if (isUpdatingTheSugarLevelValue === true) {
                  setIsUpdatingTheSugarLevelValue(false);
                } else setIsUpdatingTheSugarLevelValue(true);
              }}
            />
          </span>
        </div>
        <div className="sugarcontainer sugarLineChart ">
          <LineChart UpdatedSugarLevel={updated} />
        </div>
        <div className="infopane subinfo1">
          <div className="col rounded subinfo" id="sub1">
            <h5 className="m-0">Excellant</h5>
            <p>50-115 mmol/L</p>
          </div>
          <div className="col rounded subinfo" id="sub2">
            <h5 className="m-0">Good</h5>
            <p>150-180 mmol/L</p>
          </div>
          <div className="col rounded subinfo" id="sub3">
            <h5 className="m-0">Action Suggested</h5>
            <p>215-380 mmol/L</p>
          </div>
        </div>
        <div className="userInputInfo">
          {!isUpdatingTheSugarLevelValue ? (
            <>
              <div className="userInputSummery">
                <div className="sugarLevelInfo">
                  Recent Sugar Level <br />
                  <RecentSugarLevel /> mmol/L
                  <hr></hr>
                  Previous Sugar Level <br />
                  <PreviousSugarLevel /> mmol/L
                </div>
                <div className="recentChanges sugarLevelInfo ">
                  Recent Changes
                  <br />
                  <RecentChanges />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="inputPane addsugarsontainer">
                <h2>Add New Sugar Level</h2> <br />
                <Form>
                  <Form.Group className="mb-3" controlId="addsugar">
                    <Form.Label>_</Form.Label>
                    <Form.Control
                      type="number"
                      className="sugarinput"
                      placeholder="Sugar Level (mmol/L)"
                      ref={inputRef}
                    />
                  </Form.Group>
                </Form>
                {/* <div className="addInput">
                  <input
                    placeholder="mmol/L"
                    type="number"
                    ref={inputRef}
                    className="addSugarLevel"
                  />
                </div> */}
                <button
                  type="button"
                  class="btn mx-2 px-4 btn-outline-warning"
                  onClick={inputSugar}
                >
                  Add
                </button>
                <button
                  type="button"
                  class="btn mx-2 px-4 btn-warning"
                  onClick={clearInput}
                >
                  Clear
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
