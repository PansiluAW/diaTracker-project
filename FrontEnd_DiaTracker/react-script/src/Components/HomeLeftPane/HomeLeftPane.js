import React, { useState, useEffect, useRef } from "react";
import "./HomeLeftPane.css";
import LineChart from "../../Components/LineChart/LineChart";
import AddBoxIcon from "@mui/icons-material/AddBox";
import MedicationIcon from "@mui/icons-material/Medication";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.css";
import MedicationPane from "../MedicationPane/MedicationPane";
import SettingsPane from "../SettingsPane/SettingsPane";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { IconContext } from "react-icons";
import axios from "axios";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function HomeLeftPane({ data, setData }) {
  const current = new Date();
  const date = `${current.getFullYear()}-${
    current.getMonth() + 1
  }-${current.getDate()}`;

  const inputRef = useRef(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(
        "http://localhost/diaTracker-project/BackEnd_DiaTracker/DatabaseComponent/register-demo2/sugar-level-store/get-sugar-levels.php",{withCredentials: true}
      )
      .then((response) => {
        console.log(response);
        const formattedData = response.data.map((item) => [item[0], item[1]]);
        setData(formattedData);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const saveValue = async () => {
    const currentInput = Number(inputRef.current.value);
    if (currentInput) {
      try {
        const newRecord = [date, currentInput];
        await axios.post(
          "http://localhost/diaTracker-project/BackEnd_DiaTracker/DatabaseComponent/register-demo2/sugar-level-store/store-sugar-levels.php",
          { date: date, currentInput: currentInput },
          {withCredentials: true}
        );
        setData((existingValues) => {
          const currentValues = [...existingValues];
          currentValues.push(newRecord);
          return currentValues;
        });
      } catch (error) {
        console.log(error);
      }
      inputRef.current.value = "";
    }
  };
  const [isUpdatingTheSugarLevelValue, setIsUpdatingTheSugarLevelValue] =
    useState(false);

  const [sideSettingsBar, setSideSettingsBar] = useState(false);

  const showSideSettingsbar = () => setSideSettingsBar(!sideSettingsBar);

  const [sideMedicationsBar, setSideMedicationsBar] = useState(false);
  const showSideMedicationbar = () =>
    setSideMedicationsBar(!sideMedicationsBar);

  const summary = () => {
    if (data.length > 2) {
      const recentSugarLevel = data[data.length - 1][1];
      const previousSugarLevel = data[data.length - 2][1];
      let result;
      if (recentSugarLevel >= previousSugarLevel) {
        result = (
          <>
            {recentSugarLevel - previousSugarLevel}
            <ArrowDropUpIcon/>
          </>
        );
      } else {
        result = (
          <>
            {previousSugarLevel - recentSugarLevel}
            <ArrowDropDownIcon />
          </>
        );
      }

      return result;
    }
  };
  console.log(data);

  return (
    <>
      <div className="leftPaneBox">
        <div className="iconPane mx-auto">
          <span className="d-flex span-buttons justify-content-center sticky-top align-items-center">
            <IconContext.Provider>
              <SettingsIcon onClick={showSideSettingsbar} fontSize="large" />

              <div
                className={sideSettingsBar ? "nav-menu active" : "nav-menue"}
              >
                <div>
                  {sideSettingsBar ? (
                    <>
                      <div className="settings-block p-2">
                        Settings
                        <KeyboardArrowLeftIcon onClick={showSideSettingsbar} />
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
          {/* <span className="span-buttons d-flex justify-content-center sticky-top align-items-center">
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
                      <div className="d-flex justify-content-center sticky-top medication-reminder-block pt-2">
                        <KeyboardArrowLeftIcon
                          onClick={showSideMedicationbar}
                        />
                        <MedicationPane />
                        <h3 className="pb-2 title-font">Add New Reminder</h3>
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
            </IconContext.Provider>
          </span> */}

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
                    <div className="changes-data">
                      {data.length > 1 && data?.[data.length - 1]?.[1] && (
                        <>{data[data.length - 1][1]} mmol/L</>
                      )}
                    </div>
                  </div>
                  <hr className="mx-auto mt-3"></hr>
                  <div className="pt-1">
                    Previous Sugar Level <br />
                    <div className="changes-data">
                      {data.length > 2 && data?.[data.length - 2]?.[1] && (
                        <>{data[data.length - 2][1]} mmol/L</>
                      )}
                    </div>
                  </div>
                </div>
                <div className="px-5 mx-2 sugarLevelInfo ">
                  Recent Changes
                  <br />
                  <div className="changes-data-recent">{summary()}</div>
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
