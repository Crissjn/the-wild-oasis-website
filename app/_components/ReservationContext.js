"use client";
import { createContext, useContext, useState } from "react";

const ReservatioContext = createContext();
const initialState = { from: undefined, to: undefined };

function ReservatioProvider({ children }) {
  const [range, setRange] = useState(initialState);

  const resetRange = () => setRange(initialState);

  return (
    <ReservatioContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservatioContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservatioContext);
  if (context === undefined)
    throw new Error("Context was used outside the provider");
  return context;
}

export { ReservatioProvider, useReservation };
