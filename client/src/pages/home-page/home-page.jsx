import React from "react";
import { Header } from "../../components/header";
import { Dreams } from "../../components/dreams";

export const HomePage = () => {
  return (
    <React.Fragment>
      <Header/>
      <Dreams />
    </React.Fragment>
  );
};
