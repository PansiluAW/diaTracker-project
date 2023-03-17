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
        await axios.post("../../../../../../BackEnd_DiaTracker/DatabaseComponent/register-demo2/sugar-level-store/store-sugar-levels.php", newRecord);
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
        <div className="iconPane mx-auto">
          {/* <span className="vl"></span> */}
          <span className="d-flex span-buttons justify-content-center sticky-top align-items-center">
            <IconContext.Provider>
              <SettingsIcon onClick={showSideSettingsbar} fontSize="large" />

              <div
                className={sideSettingsBar ? "nav-menu active" : "nav-menue"}
              >
                <div>
                  {sideSettingsBar ? (
                    <>
                      <div className="settings-block p-2" onClick={showSideSettingsbar}>
                        <KeyboardArrowLeftIcon  />
                        Settings
                      </div>
                      <div className="top-panes">                        
                      <SettingsPane/>
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
            </IconContext.Provider>
          </span>
          <span  className="span-buttons d-flex justify-content-center sticky-top align-items-center">
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
                    <div onClick={showSideMedicationbar} className="d-flex justify-content-center sticky-top medication-reminder-block pt-2">
                      <KeyboardArrowLeftIcon/>
                      <h3 className="pb-2 title-font">Add New Reminder</h3>
                    </div>
                      <MedicationPane/>
                    </>
                  ) : null}
                </div>
              </div>
            </IconContext.Provider>
          </span>

          <span className="d-flex span-buttons justify-content-center align-items-center">
            <AddBoxIcon
              onClick={() => {
                if (isUpdatingTheSugarLevelValue === true) {
                  setIsUpdatingTheSugarLevelValue(false);
                } else setIsUpdatingTheSugarLevelValue(true);
              }}
              fontSize="large"
              className="addBoxIcon"              
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
        <div className="userInputInfo addsugarcontainer">
          {!isUpdatingTheSugarLevelValue ? (
            <>              
            <h2>Summary</h2>
            <div className="userInputSummery d-flex justify-content-center">
              
                <div className="sugarLevelInfo py-4 px-5 mx-2">
                  <div className="pt-3 pb-2">
                    Recent Sugar Level <br />
                    <div className="changes-data">{/* <RecentSugarLevel /> mmol/L */}</div>
                  </div>
                  <hr className="mx-auto mt-3"></hr>
                  <div className="pt-1">
                  Previous Sugar Level <br />
                  <div className="changes-data">{/* <PreviousSugarLevel /> mmol/L */}</div>
                  </div>
                </div>
                <div className="px-5 mx-2 sugarLevelInfo ">
                  Recent Changes
                  <br />
                  <div className="changes-data-recent">{/* <RecentChanges /> */}</div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="addsugarcontainer">
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
