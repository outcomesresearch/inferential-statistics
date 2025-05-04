import PearsonCoefficient from "../../../components/stepComponents/PearsonCoefficient";
import SpearmanCorrelation from "../../../components/stepComponents/SpearmanCorrelation";

import { CORRELATION_WITH_CONTINUOUS_VARIABLE } from "../ids";
import { CONTINUOUS } from "../../ids";
import * as ids from "./ids";
import { TreeNode } from "../../types";

const tree: Record<string, TreeNode> = {
  [CORRELATION_WITH_CONTINUOUS_VARIABLE]: {
    type: "question",
    title:
      "Is the association linear, and are parametric test assumptions met?",
    component: () =>
      `A linear relationship between two variables can be represented by a straight line when plotted on a graph and it means that as one variable changes, the other changes in a consistent, proportional way.  Meanwhile, parametric statistics assumptions include independent observations, data is continuous and randomly selected, normally distributed with no outliers, and has homogeneity of variance (between groups)`,
    choices: [
      {
        answer: "Yes",
        next: ids.PEARSONS_CORRELATION_COEFFICIENT,
        option_description:
          "Asssociations are linear and parametric test assumptions are met",
      },
      {
        answer: "No",
        next: ids.SPEARMANS_RHO,
        option_description:
          "Associations are not linear, or parametric assumptions are not met",
      },
    ],
    inputs: [CONTINUOUS],
  },
  [ids.PEARSONS_CORRELATION_COEFFICIENT]: {
    type: "statement",
    title: "Pearson Correlation Coefficient r",
    flowChartTitle: "Pearson Correlation Coefficient r",
    component: PearsonCoefficient,
    color: "blue-lighten-2",
    inputs: [CORRELATION_WITH_CONTINUOUS_VARIABLE],
  },

  [ids.SPEARMANS_RHO]: {
    type: "statement",
    title: "Spearman’s rho (non-parametric)",
    flowChartTitle: "Spearman’s rho (non-parametric)",
    component: SpearmanCorrelation,
    color: "blue-darken-2",
    inputs: [CORRELATION_WITH_CONTINUOUS_VARIABLE],
  },
};

export default tree;
