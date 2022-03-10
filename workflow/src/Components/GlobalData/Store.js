import React, { useState } from "react";

const initialState = {
  id:1002,

  requestNO:'',
  countryOfOrigin : '',
  inboundAccessType : '',
  isMultiBuild : false,
  bulkAccessNoWorkflow : '',
  sioAcceptatnceDate : '',
  customerCommitDate : '',
  

  radio_button_value : "Pre Built Number",
  search_type : " ",
  country:" ",
  switch_box : " ",
  search_no : 0,
  quantity : 0,
  auto_look_up : false,
  exact : false,

  multiline_operational_progress : "Default Value",

  //1
  radio_appId : "Existing AppId",
  isCaptureDialPlan : false,
  //2
  isRoutingPlan : "No",
  routing_plan:" ",

  //1
  ht_RTO_Date : " ",
  order_Placed_To_Ptt_Date : " ",
  ptt_Service_Delivered_Date : " ",
  //2
  created_Access_No:'',

  created_Access_No2:'',
};

export const Context = React.createContext();

const Store = ({ children }) => {
  const [state, setState] = useState(initialState);
  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
};

export default Store;
