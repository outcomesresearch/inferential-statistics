import PairedSamples from "../../../components/stepComponents/PairedSamples";
import MannWhitneyUTest from "../../../components/stepComponents/MannWhitneyUTest";
import WilcoxonTest from "../../../components/stepComponents/WilcoxonTest";
import IndependentSamples from "../../../components/stepComponents/IndependentSamples";

import { COMPARISON_OF_2_GROUPS } from "../ids";
import { CONTINUOUS } from "../../ids";
import * as ids from "./ids";
import { TreeNode } from "../../types";

const tree: Record<string, TreeNode> = {
  [COMPARISON_OF_2_GROUPS]: {
    type: "question",
    title:
      "Are the groups independent, or instead are the observations paired?",
    component: () => "",
    choices: [
      {
        answer: "Independent",
        next: ids.INDEPENDENT,
        option_description: "Groups are independent",
      },
      {
        answer: "Paired",
        next: ids.PAIRED,
        option_description: "Observations are paired",
      },
    ],
    inputs: [CONTINUOUS],
  },

  [ids.INDEPENDENT]: {
    type: "question",
    title: "Are parametric assumptions met?",
    component: () => PARAMETRIC_ASSUMPTIONS_MET,
    choices: [
      {
        answer: "Yes",
        next: ids.INDEPENDENT_SAMPLES_T_TEST,
        option_description: "Parametric assumptions are met",
      },
      {
        answer: "No",
        next: ids.MANN_WHITNEY_U_TEST,
        option_description: "Assumptions are not met",
      },
    ],
    inputs: [COMPARISON_OF_2_GROUPS],
  },

  [ids.PAIRED]: {
    type: "question",
    title: "Choose the appropriate test for paired data",
    component: () =>
      "Select the method based on whether parametric assumptions are met for paired samples.",
    choices: [
      {
        answer: "Paired Samples t-test",
        next: ids.PAIRED_SAMPLES_TTEST,
        option_description: "Compares means of two related groups (parametric)",
      },
      {
        answer: "Wilcoxon Signed Rank test",
        next: ids.WILCOXON_SIGNED_RANK_TEST,
        option_description: "Non-parametric test for two related groups",
      },
    ],
    color: "blue-lighten-2",
    inputs: [COMPARISON_OF_2_GROUPS],
  },

  [ids.INDEPENDENT_SAMPLES_T_TEST]: {
    type: "statement",
    title: "Independent Samples t-test",
    flowChartTitle: "Independent Samples t-test",
    component: IndependentSamples,
    color: "blue-darken-2",
    inputs: [ids.INDEPENDENT],
  },

  [ids.MANN_WHITNEY_U_TEST]: {
    type: "statement",
    title: "Mann-Whitney U test (non-parametric)",
    flowChartTitle: "Mann-Whitney U test (non-parametric)",
    component: MannWhitneyUTest,
    color: "blue-darken-2",
    inputs: [ids.INDEPENDENT],
  },

  [ids.PAIRED_SAMPLES_TTEST]: {
    type: "statement",
    title: "Paired Samples t-test",
    flowChartTitle: "Paired Samples t-test",
    component: PairedSamples,
    color: "blue-darken-2",
    inputs: [ids.PAIRED],
  },

  [ids.WILCOXON_SIGNED_RANK_TEST]: {
    type: "statement",
    title: "Wilcoxon Signed Rank test",
    flowChartTitle: "Wilcoxon Signed Rank test",
    component: WilcoxonTest,
    color: "blue-darken-2",
    inputs: [ids.PAIRED],
  },
};

export default tree;
