import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import "bootstrap/dist/css/bootstrap.css";

export default function OnGoingReminderPane(props) {
  const updated = props.mediName;
  const value1 = props.time;

  const [isDelete, setDelete] = useState(true);

  const deleteInput = () => {
    setDelete(false);
  };
  return (
    <>
      {isDelete ? (
        <>
          <h3>On-Going Reminders</h3>
          <div>
            {updated}
            <span className="vl"></span>

            {value1}
            <span className="vl"></span>
            <DeleteIcon className="deleteIcon" onClick={deleteInput} />
          </div>
        </>
      ) : null}
    </>
  );
}
