import { Text } from "@mantine/core";

const Component = () => {
  return (
    <>
      <Text>
        The{" "}
        <Text fw="600" span>
          Paired samples t-test
        </Text>{" "}
        used to compare means within the same group for paired or matched
        continuous variables when parametric testing assumptions are met
      </Text>
    </>
  );
};

export default Component;
