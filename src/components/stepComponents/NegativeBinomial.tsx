import { Text } from "@mantine/core";

const Component = () => {
  return (
    <>
      <Text>
        Negative Binomial regression is a statistical method used to model a
        count dependent variable, such as number of hospital admissions within a
        specific time period or number of postoperative complications in a
        surgical study, that is often characterized by being over-dispersed.
      </Text>
      <Text>
        Over-dispersion refers to a situation where the observed variance of the
        count variable is greater than the mean, indicating that the data
        exhibit more variability than expected under a Poisson distribution
        assumption. In negative binomial regression, one or more independent
        variables are used to model the count variable while accounting for this
        over-dispersion. The exponentiated coefficients of Negative Binomial
        Regression represent rate ratios or relative risk for outcome (change in
        the expected count) for every one-unit increase in the corresponding
        predictor variable, after controlling for other variables in the model.
      </Text>
      <Text>
        Due to the complexity of dealing with over-dispersed count data, it is
        recommended to seek assistance from a statistician. Their expertise can
        ensure proper implementation and interpretation of the negative binomial
        regression model.
      </Text>
    </>
  );
};

export default Component;
