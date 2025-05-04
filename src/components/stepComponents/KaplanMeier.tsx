import { Text } from "@mantine/core";

const Component = () => {
  return (
    <>
      <Text>
        Kaplan-Meier and Log-rank test: K-M is a non-parametric statistical
        method used to estimate and visualize the survival function from
        time-to-event data. K-M estimates the probability of survival over time.
        K-M analysis allows for visual comparison of the survival experience of
        different groups. K-M analysis works well with censored data and even
        with small sample sizes. The Log-rank test is only one of several tests
        that determines whether there are significant differences in their
        survival experiences of the groups being compared.
      </Text>
    </>
  );
};

export default Component;
