import { Text } from "@mantine/core";

const Component = () => {
  return (
    <>
      <Text>
        Multinomial Regression is used to analyze a dependent variable with more
        than two categories that are not ordered. One of the categories of the
        dependent variable is chosen as the reference category. The
        exponentiated beta coefficients of multinomial regression are
        interpreted as Odds Ratios, that quantify the change in odds of being in
        a given category in comparison to the reference category of the
        dependent variable for every unit change in the predictor variable after
        controlling for other variables in the model.
      </Text>
      <Text>
        Given the complexity of logistic regression and its interpretation,
        consulting with a statistician is recommended to ensure accurate
        implementation and proper interpretation of the results obtained from
        logistic regression analyses. Their expertise can enhance the quality
        and reliability of the findings.
      </Text>
    </>
  );
};

export default Component;
