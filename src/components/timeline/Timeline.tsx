import { Box, Flex, Text } from "@chakra-ui/react";

interface JobExperience {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface TimelineProps {
  experiences: JobExperience[];
}

export default function Timeline({ experiences }: TimelineProps) {
  return (
    <Flex direction="column">
      {experiences.map((experience, index) => (
        <Flex key={index} direction="row" alignItems="center">
          <Box
            bg="gray.300"
            borderRadius="full"
            width="1rem"
            height="1rem"
            mr={4}
          />
          <Box>
            <Text fontWeight="bold">{experience.title}</Text>
            <Text>
              {experience.company} | {experience.startDate} -{" "}
              {experience.endDate}
            </Text>
            <Text>{experience.description}</Text>
          </Box>
        </Flex>
      ))}
    </Flex>
  );
}
