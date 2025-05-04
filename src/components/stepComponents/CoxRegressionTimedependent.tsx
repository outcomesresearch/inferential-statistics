import { Text } from "@mantine/core";

const Component = () => {
  return (
    <>
      <Text span>
        Cox Regression with time-dependent covariate is used to analyze
        multivariable relationships in the context of time-to-event outcomes.
        This regression technique is specifically designed to accommodate
        covariates that vary or change over time.
      </Text>
      <Text>
        With time-dependent covariates, the dynamic nature of certain factors
        that may influence the event over time are considered. By considering
        these covariates, the Cox Regression model enables investigators to
        obtain hazard ratios, which quantify the change in the hazard or risk of
        the event associated with specific covariate values in given time
        intervals and not throughout the length of the study. It is advisable to
        seek assistance from a qualified statistician to ensure the correct
        application of this model.
      </Text>
    </>
  );
};

export default Component;
