import { Text } from "@mantine/core";

const Component = () => {
  return (
    <>
      <Text>
        Cox PH regression is a semi-parametric survival analysis statistical
        technique used to examine the relationship between one or more predictor
        variables and the hazard (or risk) of an event happening at a particular
        time. The exponentiated Cox regression coefficients are known as hazard
        ratios (HR) that quantify the effects of independent variables on the
        time to the event of interest after controlling for other variables in
        the model.
      </Text>
      <Text>
        The key assumption in Cox PH regression is that the ratio of hazards
        between different levels of predictor variables remains constant over
        time. It means that if a variable has a certain effect on the hazard at
        one time, it continues to have that same effect throughout the study
        period. The Cox PH regression model does not make any assumptions about
        the distribution of the baseline hazard function.
      </Text>
    </>
  );
};

export default Component;
