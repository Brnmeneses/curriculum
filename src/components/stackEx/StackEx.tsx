import { Stack } from "@chakra-ui/core";
import { Box, Heading, Text } from "@chakra-ui/react";
import { render } from "react-dom";

function Feature({ title, desc, ...rest }) {
  return (
    <Box p={5} shadow="md" borderWidth="1px" flex="1" rounded="md" {...rest}>
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  );
}

function StackEx() {
  return (
    <Stack isInline spacing={8} align="center">
      <Feature
        title="Plan Money"
        desc="The future can be even brighter but a goal without a plan is just a wish"
      />
      <Feature
        title="Save Money"
        desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings."
      />
    </Stack>
  );
}

render(<StackEx />);
