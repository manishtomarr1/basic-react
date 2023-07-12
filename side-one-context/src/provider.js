import React, { useState } from "react";

import PackageContext from "./context";

const Provider = (props) => {
  const [mission, setMission] = useState({
    mName: "Go to Russia",
    agent: 7,
    accept: "not accepted",
  });
  return (
    <PackageContext.Provider
      value={{
        data: mission,
        isMissionAccepted: () => {
          setMission({ ...mission, accept: "ACCEPTED" }); //means that jo mission mae hai wo sb same ho bs accept change ho jaye.
        },
        // we fatch this mission's object data from this.
      }}
    >
      {props.children}
      {/* this is act like the wrapper. */}
    </PackageContext.Provider>
  );
};

export default Provider;
