import React, { useState, useEffect } from "react";
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
import axios from "axios";

<script src="./src/Components/LineChart/LineChart"></script>;

export default function HomeLeftPane() {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const [data, setData] = useState([["x", "Suger Level"]]);

  const inputRef = useRef(null);

  // useEffect(() => {
  //   getData();
  // }, []);

  // const getData = () => {
  //   axios
  //     .get("#")
  //     .then((res) => res.data)
  //     .then((r) => setData(r));
  // };

  const saveValue = async () => {

    const currentInput = Number(inputRef.current.value);
    if (currentInput) {
      try {
        const newRecord = [date, currentInput];
        // await axios.post("#", newRecord);
        setData((existingValues) => {
          const currentValues = [...existingValues];
          currentValues.push(newRecord);

          return currentValues;
        });
      } catch (error) {}
      inputRef.current.value = "";
    }
  };

  const [isUpdatingTheSugarLevelValue, setIsUpdatingTheSugarLevelValue] =
    useState(false);

  // const [updated, setUpdated] = useState("");

  // var recentSugarLevel;
  // var previousSugarLevel;
  // var result;

  // const inputSugar = () => {
  //   previousSugarLevel = updated;
  //   setUpdated(inputRef.current.value);
  //   recentSugarLevel = updated;
  // };

  // function RecentSugarLevel() {
  //   return recentSugarLevel;
  // }

  // function PreviousSugarLevel() {
  //   return previousSugarLevel;
  // }

  // function RecentChanges() {
  //   if (recentSugarLevel >= previousSugarLevel) {
  //     result = recentSugarLevel - previousSugarLevel;
  //     <ArrowDropUpIcon />;
  //   } else {
  //     result = previousSugarLevel = recentSugarLevel;
  //     <ArrowDropDownIcon />;
  //   }
  //   return result;
  // }

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

          {/* <span className="vl"></span> */}
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
          <LineChart existingData={data} />
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
                  {/* <RecentSugarLevel /> mmol/L */}
                  <hr></hr>
                  Previous Sugar Level <br />
                  {/* <PreviousSugarLevel /> mmol/L */}
                </div>
                <div className="recentChanges sugarLevelInfo ">
                  Recent Changes
                  <br />
                  {/* <RecentChanges /> */}
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
                <button
                  type="button"
                  class="btn mx-2 px-4 btn-outline-warning"
                  onClick={() => saveValue()}
                >
                  Add
                </button>
                <button
                  type="button"
                  class="btn mx-2 px-4 btn-warning"
                  onClick={() => (inputRef.current.value = "")}
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
