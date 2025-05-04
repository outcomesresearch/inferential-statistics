import { Text } from "@mantine/core";

const Component = () => {
  return (
    <>
      <Text>
        <Text fw="600" span>
          Spearman's Rho
        </Text>{" "}
        is a non-parametric alternative to Pearson’s correlation that measures
        the correlation between the ranks of two variables. It does not assume a
        linear relationship like Pearson correlation, but measures if a
        monotonic function can be used to present the relationship between 2
        ordinal or continuous level variables.
      </Text>
    </>
  );
};

export default Component;
