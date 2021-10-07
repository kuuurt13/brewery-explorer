import React, { createContext, useContext, useState, ReactNode } from "react";
import breweries from "../.data/breweries.json";
import { BreweryList } from "../types";

type ProviderProps = {
  children: ReactNode;
};

const BreweriesContext = createContext<BreweryList[]>([]);

export function BreweriesContextProvider({ children }: ProviderProps) {
  return (
    <BreweriesContext.Provider value={breweries as BreweryList[]}>
      {children}
    </BreweriesContext.Provider>
  );
}

export default function useBreweries() {
  return useContext(BreweriesContext) as BreweryList[];
}
