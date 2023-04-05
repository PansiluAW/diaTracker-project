import React, { useState, useEffect, useRef } from "react";
import "./HomeLeftPane.css";
import LineChart from "../../Components/LineChart/LineChart";
import AddBoxIcon from "@mui/icons-material/AddBox";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.css";
import SettingsPane from "../SettingsPane/SettingsPane";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { IconContext } from "react-icons";
import axios from "axios";

export default function HomeLeftPane({ data, setData }) {
  const current = new Date();
  //date variable to pass to the line chart x axis
  const date = `${current.getFullYear()}-${
    current.getMonth() + 1
  }-${current.getDate()}`;

  //render getData() only when the initialization of the application
  useEffect(() => {
    getData();
  }, []);

  //To get previously added sugar level inputs from the database
  const getData = () => {
    axios
      .get(
        "http://localhost/diaTracker-project/BackEnd_DiaTracker/DatabaseComponent/register-demo2/sugar-level-store/get-sugar-levels.php",
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response);
        const formattedData = response.data.map((item) => [item[0], item[1]]);
        setData(formattedData);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //get the user added input from the text field on line 223
  const inputRef = useRef(null);
  //when clicks on the add button this fuction will get triggered
  const saveValue = async () => {
    //convert the string input passing from the textfield in to a number as it is pass to the database as a number and for the line chart y axis
    const currentInput = Number(inputRef.current.value);

    try {
      //push the user input sugar level as an array to the database using api link
      const newRecord = [date, currentInput];
      axios.post(
        "http://localhost/diaTracker-project/BackEnd_DiaTracker/DatabaseComponent/register-demo2/sugar-level-store/store-sugar-levels.php",
        { date: date, currentInput: currentInput },
        { withCredentials: true }
      );
      setData((existingValues) => {
        const currentValues = [...existingValues];
        currentValues.push(newRecord);
        return currentValues;
      });
    } catch (error) {
      console.log(error);
    }
    //when the user clicks on the add button input get push to the database and textfeild become a empty string
    inputRef.current.value = "";
  };
  //to show the user either sugar input textfield or recent and previous sugar levels and the differance of the sugar level
  const [isUpdatingTheSugarLevelValue, setIsUpdatingTheSugarLevelValue] =
    useState(false);
  //to show the setting pane when user clicks on the settings icon
  const [sideSettingsBar, setSideSettingsBar] = useState(false);
  //this is a fuction to check whether the settings pane visible or not
  const showSideSettingsbar = () => setSideSettingsBar(!sideSettingsBar);

  // const [sideMedicationsBar, setSideMedicationsBar] = useState(false);
  // const showSideMedicationbar = () =>
  //   setSideMedicationsBar(!sideMedicationsBar);

  //this function is use to calculate and display recent and previous sugar levels accessing from the linechart
  const summary = () => {
    if (data.length > 2) {
      //data is a associative array of date and sugar level passing from HomeScreen page as a prop then the last and the before the last index of the array is being accessed
      const recentSugarLevel = data[data.length - 1][1];
      const previousSugarLevel = data[data.length - 2][1];
      //this is  a variable is use to store the result of the different between recent and previous sugar level
      let result;
      //if recent sugar level is high comparing to previous sugar level display the difereance and a dropup icon
      if (recentSugarLevel >= previousSugarLevel) {
        result = (
          <>
            {recentSugarLevel - previousSugarLevel}
            <ArrowDropUpIcon />
          </>
        );
      }
      //if recent sugar level is low comparing to previous sugar level display the difereance and a dropdown icon
      else {
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

  return (
    <>
      <div className="leftPaneBox">
        <div className="iconPane mx-auto">
          <span className="d-flex span-buttons justify-content-center sticky-top align-items-center">
            <IconContext.Provider>
              {/* when the user clicks on the  settings icon showSideSettingsbar function get triggered and */}
              <SettingsIcon onClick={showSideSettingsbar} fontSize="large" />

              <div
                className={sideSettingsBar ? "nav-menu active" : "nav-menue"}
              >
                <div>
                  {sideSettingsBar ? (
                    <>
                      {/* settings content */}
                      <div className="settings-block p-2">
                        Settings
                        {/* back button exit the settings  */}
                        <KeyboardArrowLeftIcon onClick={showSideSettingsbar} />
                      </div>
                      <div className="top-panes">
                        {/* import settings pane from the SettingsPane */}
                        <SettingsPane />
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
            {/* add box icon for the visibility of the summary and the user input text field */}
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
          {/* import line chart from the LineChart */}
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
          {/* when user clicks on the add icon this fuction gets triggered */}
          {!isUpdatingTheSugarLevelValue ? (
            <>
            {/* summary of the user inputs */}
              <h2>Summary</h2>
              <div className="userInputSummery d-flex justify-content-center">
                <div className="sugarLevelInfo py-4 px-5 mx-2">
                  <div className="pt-3 pb-2">
                    {/* display recent sugar level */}
                    Recent Sugar Level <br />
                    <div className="changes-data">
                      {data.length > 1 && data?.[data.length - 1]?.[1] && (
                        <>{data[data.length - 1][1]} mmol/L</>
                      )}
                    </div>
                  </div>
                  <hr className="mx-auto mt-3"></hr>
                  <div className="pt-1">
                    {/* display preivious sugar level */}
                    Previous Sugar Level <br />
                    <div className="changes-data">
                      {data.length > 2 && data?.[data.length - 2]?.[1] && (
                        <>{data[data.length - 2][1]} mmol/L</>
                      )}
                    </div>
                  </div>
                </div>
                <div className="px-5 mx-2 sugarLevelInfo ">
                  {/* display differance between recent and previous sugar levels */}
                  Recent Changes
                  <br />
                  <div className="changes-data-recent">{summary()}</div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="addsugarcontainer">
                {/* user sugar level input */}
                <h2>Add New Sugar Level</h2> <br />
                <Form>
                  <Form.Group className="mb-3" controlId="addsugar">
                    <Form.Label>_</Form.Label>
                    {/* sugar level input text field */}
                    <Form.Control
                      type="number"
                      className="sugarinput"
                      placeholder="Sugar Level (mmol/L)"
                      ref={inputRef}
                    />
                  </Form.Group>
                </Form>
                {/* add button to add sugar level */}
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
