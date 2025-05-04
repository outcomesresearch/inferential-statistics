import { Text } from "@mantine/core";

const Component = () => {
  return (
    <>
      <Text>
        <Text fw="600" span>
          Binary logistic regression
        </Text>{" "}
        is used when the outcome variable has only two categories or levels. It
        models the probability or likelihood of an event occurring based on the
        predictor variables.
      </Text>
      <Text>
        For example, it can be used to predict the likelihood of a patient
        having a disease (presence/absence) based on their age, gender, and
        other relevant factors. The exponentiated coefficients of Negative
        Binomial Regression represent the Odds Ratio for experiencing the
        outcome of interest for every one-unit increase in the corresponding
        predictor variable, after controlling for other variables in the model.
        Odds ratios quantify the strength of the relationship of each predictor
        with the outcome after controlling for other variables in the model.
      </Text>
    </>
  );
};

export default Component;
