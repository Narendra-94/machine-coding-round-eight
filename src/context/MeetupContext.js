import React, { createContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "../reducer/reducer";
import { meetups } from "../data";

export const MeetupContext = createContext();

export const MeetupProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "FETCH_SUCCESSFULL_DATA", payload: meetups });
  }, []);

  return (
    <MeetupContext.Provider value={{ state, dispatch }}>
      {children}
    </MeetupContext.Provider>
  );
};
