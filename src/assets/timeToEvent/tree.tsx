import FocusOfAnalysis from "../../components/stepComponents/FocusOfAnalysis";

import correlationContinuousMeasureTree from "./correlationContinuousMeasure/tree";
import comparisonOfTwoGroupsTree from "./comparisonGroups/tree";

import { ROOT, TTE } from "../ids";
import * as ids from "./ids";
import { TreeNode } from "../types";

const tree: Record<string, TreeNode> = {
  [TTE]: {
    type: "question",
    title: "What is the focus of analysis?",
    component: FocusOfAnalysis,
    choices: [
      {
        answer: "Correlation with continuous variable",
        next: ids.CORRELATION_WITH_CONTINUOUS_VARIABLE,
        option_description: "",
      },
      {
        answer: "Comparison of groups of a categorical level variable",
        next: ids.COMPARISON_OF_GROUPS,
        option_description: "",
      },
    ],
    inputs: [ROOT],
  },
  ...correlationContinuousMeasureTree,
  ...comparisonOfTwoGroupsTree,
};

export default tree;
