import { Box, Heading, HStack, Text } from "@chakra-ui/react";
import Globe from "../globe/Globe";

function Feature({ title, desc, ...rest }: any) {
  return (
    <Box
      p={5}
      paddingTop={"16"}
      shadow="md"
      borderWidth="1px"
      rounded={30}
      maxW="sm"
      borderRadius="lg"
      overflow="hidden"
      {...rest}
    >
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  );
}

export default function Cards() {
  const features = {
    profile: {
      title: "Profile",
      desc: "34 yrs old, married from Londrina-BR",
    },
    education: {
      title: "Education",
      desc: "Graduated since 2010. Fullstack engenieer. English enthusiast.",
    },
    professional: {
      title: "Professional",
      desc: "Expertise in many areas like Education, Oil&Energy, Financial",
    },
    goals: {
      title: "Goals",
      desc: "I would like to visit every country in the world",
    },
  };

  return (
    <HStack spacing={2} p={2}>
      <Feature title={features.profile.title} desc={features.profile.desc} />
      <Feature
        title={features.education.title}
        desc={features.education.desc}
      />
      <Feature
        title={features.professional.title}
        desc={features.professional.desc}
      />
      <Feature title={features.goals.title} desc={features.goals.desc} />
    </HStack>
  );
}
