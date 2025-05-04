// @ts-nocheck
import * as ids from "./ids";

import continuousStudyTree from "./continuous/tree";
import categoricalStudyTree from "./categorical/tree";
import timeToEventStudyTree from "./timeToEvent/tree";

const addIds = (tree) => {
  return Object.entries(tree).reduce((acc, [key, value]) => {
    acc[key] = { ...value, id: key };
    return acc;
  }, {});
};

let rootTree = {
  [ids.ROOT]: {
    title: "Outcome Measure",
    flowChartTitle:
      "Select the type of outcome variable being analyzed or compared.",
    component: () =>
      "Select the type of outcome variable being analyzed or compared.",
    inputs: [],
    choices: [
      {
        answer: "Continous",
        next: ids.CONTINUOUS,
        option_description:
          "A continuous level outcome measure is a type of outcome measure where the data is collected on a continuous scale and presented by a continuous level variable. Examples are: blood pressure, weight, or height. ",
      },
      {
        answer: "Categorical",
        next: ids.CATEGORICAL,
        option_description:
          "A categorical level outcome measure is a type of outcome measure where the data is collected using pre-defined categories. Examples are:  sex, race, disease severity, and treatment group.",
      },
      {
        answer: "Time To Event",
        next: ids.TTE,
        option_description:
          "A time to event outcome measure is a type of outcome measure used when the focus of analysis is not only on the occurrence of an event of interest, but also on the time it took for the event to happen. Examples are: time to death, time to recovery, time to recurrence. ",
      },
    ],
  },
  ...continuousStudyTree,
  ...categoricalStudyTree,
  ...timeToEventStudyTree,
};

export default addIds(rootTree);
