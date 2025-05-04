import { Text } from "@mantine/core";

const Component = () => {
  return (
    <>
      <Text>
        Poisson regression is used to model the relationship between a dependent
        variable, which represents counts or rates of occurrence of an event.
        The dependent event should follow a Poisson distribution. Examples are
        situations where the outcome variable represents the number of
        occurrences or events, such as the number of accidents, customer visits,
        or infections.
      </Text>
      <Text>
        The main purpose of Poisson Regression is to model the relationship
        between multiple predictor variables and the rate or count of the
        outcome. It allows for the estimation of the effects of independent
        variables on the outcome variable, considering potential confounding
        variables.
      </Text>
      <Text>
        The exponentiated coefficients of Poisson Regression represent rate
        ratios or relative risk for outcome (change in the expected count) for
        every one-unit increase in the corresponding predictor variable, after
        controlling for other variables in the model. It is recommended to seek
        assistance from a statistician who can provide expertise in implementing
        and understanding the results of this analysis.
      </Text>
    </>
  );
};

export default Component;
