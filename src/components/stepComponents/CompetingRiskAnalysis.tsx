import { Text } from "@mantine/core";

const Component = () => {
  return (
    <>
      <Text span>
        Competing Risk Analysis. It is a type of time to event analysis used in
        studies where a participant may experience one of several different
        types of events, but once one event occurs, the others are no longer
        possible for that individual.
      </Text>
      <Text>
        The primary objective of Competing Risk Analysis is to examine the
        effects of multiple independent variables on the occurrence and timing
        of different events, while accounting for the presence of competing
        risks. By considering all possible outcomes, this analysis technique
        provides a more comprehensive understanding of the factors influencing
        each event.
      </Text>
      <Text>
        This statistical approach allows researchers to assess the effects of
        various independent variables on each event independently, capturing the
        unique characteristics and outcomes associated with each.
      </Text>
      <Text>
        Considering the complexity of Competing Risk Analysis, it is highly
        recommended to seek assistance from a qualified statistician.
      </Text>
    </>
  );
};

export default Component;
