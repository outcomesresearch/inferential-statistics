import { Text } from "@mantine/core";

const Component = () => {
  return (
    <>
      <Text>
        <Text fw="600" span>
          Fisher’s Exact Test
        </Text>{" "}
        is used to analyze categorical data in contingency tables when data are
        sparse (e.g., more than 25% of the cells have expected frequency less
        than 5) and the assumptions of Chi Square test of independence are not
        met. It allows for the exact calculation of probabilities involved in
        the test without relying on large-sample approximations.
      </Text>
    </>
  );
};

export default Component;
