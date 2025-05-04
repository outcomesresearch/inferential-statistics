import FocusOfAnalysis from "../../components/stepComponents/FocusOfAnalysis";

import correlationContinuousMeasureTree from "./correlationContinuousMeasure/tree";
import comparisonOfTwoGroupsTree from "./comparisonOf2Groups/tree";
import comparisonOf3MoreGroupsTree from "./comparison3MoreGroups/tree";
import multiVariableAnalysisTree from "./multiVariableAnalysis/tree";

import { CONTINUOUS, ROOT } from "../ids";
import * as ids from "./ids";
import { TreeNode } from "../types";

const tree: Record<string, TreeNode> = {
  [CONTINUOUS]: {
    type: "question",
    title: "What is the focus of analysis?",
    component: FocusOfAnalysis,
    choices: [
      {
        answer: "Correlation with continuous measure",
        next: ids.CORRELATION_WITH_CONTINUOUS_VARIABLE,
        option_description: "",
      },
      {
        answer: "Comparison of 2 groups",
        next: ids.COMPARISON_OF_2_GROUPS,
        option_description: "",
      },
      {
        answer: "Comparison of >3 groups",
        next: ids.COMPARISON_OF_3_OR_MORE_GROUPS,
        option_description: "",
      },
      {
        answer: "Multivariable analysis",
        next: ids.MULTIVARIABLE_ANALYSIS,
        option_description: "",
      },
    ],
    inputs: [ROOT],
  },
  ...correlationContinuousMeasureTree,
  ...comparisonOfTwoGroupsTree,
  ...comparisonOf3MoreGroupsTree,
  ...multiVariableAnalysisTree,
};

export default tree;
