import { Text } from "@mantine/core";

const Component = () => {
  return (
    <>
      <Text>
        <Text fw="600" span>
          Chi-Square tests
        </Text>{" "}
        are used to assess relationships between categorical variables. The two
        main types are the{" "}
        <Text fw="600" span>
          Chi-Square test of goodness-of-fit
        </Text>{" "}
        and the{" "}
        <Text fw="600" span>
          Chi-Square test of independence
        </Text>
        .
      </Text>
      <Text>
        The{" "}
        <Text fw="600" span>
          Chi-Square test of goodness-of-fit
        </Text>{" "}
        examines whether an observed frequency distribution fits an
        expected/hypothesized distribution. It compares the observed frequencies
        of a single variable with the expected frequencies under the specific
        expected distribution.
      </Text>
      <Text>
        The{" "}
        <Text fw="600" span>
          Chi-Square test of independence
        </Text>{" "}
        is used to examine the association between two categorical variables by
        comparing the observed frequencies with the expected frequencies. It
        determines whether differences between expected and observed values are
        due to chance or because the variables are dependent on each other.
        Requires that no cells have expected frequency less than 1 and no more
        than 25% of the cells have expected frequencies less than 5.
      </Text>
    </>
  );
};

export default Component;
