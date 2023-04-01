import { useState } from "react";
import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";

interface FeatureProps {
  title: string;
  desc: string;
  onClick: () => void;
}

function Feature({ title, desc, onClick }: FeatureProps) {
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
      cursor={"pointer"}
      onClick={onClick}
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

  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const handleClose = () => {
    setSelectedFeature(null);
  };

  const handleFeatureClick = (feature: string) => {
    setSelectedFeature(feature);
  };

  return (
    <HStack spacing={2} p={2}>
      <Feature
        title={features.profile.title}
        desc={features.profile.desc}
        onClick={() => handleFeatureClick("profile")}
      />
      <Feature
        title={features.education.title}
        desc={features.education.desc}
        onClick={() => handleFeatureClick("education")}
      />
      <Feature
        title={features.professional.title}
        desc={features.professional.desc}
        onClick={() => handleFeatureClick("professional")}
      />
      <Feature
        title={features.goals.title}
        desc={features.goals.desc}
        onClick={() => handleFeatureClick("goals")}
      />
      <Drawer
        isOpen={selectedFeature !== null}
        placement="right"
        onClose={handleClose}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>{features[selectedFeature]?.title}</DrawerHeader>
            <DrawerBody>
              <Text>{features[selectedFeature]?.desc}</Text>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </HStack>
  );
}
