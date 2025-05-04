import { Text } from "@mantine/core";

const Component = () => {
  return (
    <>
      <Text span>
        Mixed Linear Model (also known as a Mixed-Effects model or Hierarchical
        linear Model) is used to investigate the effects of various factors
        (predictor variables) on a continuous outcome, such as blood pressure or
        cholesterol levels. These models are used when data collected is nested
        in different levels and allows for fitting both fixed effects and random
        effects in the model. Fixed effects are effects that are the same across
        all levels or groups. For instance, the general effect of diet on blood
        pressure is examined, assuming that all participants respond similarly
        to diet changes independent from what study group they are. Random
        effects are used to model variations within groups or clusters that are
        not captured by fixed effects. For example, the model can capture the
        unique effect of diet on blood pressure for each person, as individual
        responses may vary slightly.
      </Text>
      <Text>
        This model enables the investigator to explore how predictor variables
        impact each individual (individual-level effects) and also how they
        affect groups of individuals (group-level effects). It is advisable to
        seek assistance from a qualified statistician to ensure the correct
        application of this model.
      </Text>
    </>
  );
};

export default Component;
