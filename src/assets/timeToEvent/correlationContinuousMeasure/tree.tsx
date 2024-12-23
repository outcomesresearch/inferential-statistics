import CoxPHRegression from "../../../components/stepComponents/CoxPHRegression";

import { CORRELATION_WITH_CONTINUOUS_VARIABLE } from "../ids";
import { TTE } from "../../ids";

let tree = {
  [CORRELATION_WITH_CONTINUOUS_VARIABLE]: {
    type: "statement",
    title: "Cox Proportional Hazards (PH) Regression",
    flowChartTitle: "Randomized\nClinical Trial",
    component: CoxPHRegression,
    color: "blue-darken-2",
    inputs: [TTE],
  },
};

export default tree;
