import React, { createContext, useContext, useState } from "react";
import { API } from "../constants/api";
import axios from "axios";

const mainContext = createContext();
export const useMain = () => useContext(mainContext);
const MainContext = ({ children }) => {
  // const [actors, setActors] = useState([]);
  // async function postActors() {
  //   await axios.post(API, kyrgyzTheaterActors);
  // }
  // async function getActors() {
  //   let { data } = await axios.get(API, kyrgyzTheaterActors);
  //   setActors(data.data);
  // }
  const values = {
    // postActors,
    // getActors,
    // actors,
  };
  return <mainContext.Provider value={values}>{children}</mainContext.Provider>;
};

export default MainContext;
