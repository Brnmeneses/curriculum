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
  Image,
  Flex,
} from "@chakra-ui/react";

import Timeline from "@/components/timeline/Timeline";

interface FeatureProps {
  title: string;
  desc: string;
  onClick: () => void;
}

function Feature({ title, desc, onClick }: FeatureProps) {
  return (
    <Box
      p={5}
      paddingTop={"20"}
      shadow="md"
      borderWidth="1px"
      rounded={30}
      maxW="sm"
      w={"full"}
      h={"20%"}
      borderRadius="lg"
      overflow="hidden"
      cursor={"pointer"}
      onClick={onClick}
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "0px 6px 8px #352C67",
      }}
      transition=".3s"
    >
      <Flex alignItems="center">
        <Heading mt={3} fontSize="xl">
          {title}
        </Heading>
      </Flex>
      <Text mt={1}>{desc}</Text>
    </Box>
  );
}

export default function Cards() {
  const experiencesArr = [
    {
      title: "Backend",
      company: "SoftSell",
      startDate: "2011",
      endDate: "2016",
      description: "Backend developer",
    },
    {
      title: "Backend",
      company: "Atos",
      startDate: "2016",
      endDate: "2020",
      description: "Backend developer",
    },
    {
      title: "Fullstack",
      company: "TSC",
      startDate: "2020",
      endDate: "2021",
      description: "Fullstack developer",
    },
    {
      title: "Frontend",
      company: "Cogna Education",
      startDate: "2021",
      endDate: "2023",
      description: "Frontend developer",
    },
  ];

  const features = {
    profile: {
      title: "Profile",
      desc: "Who I'am",
      bias: "Brazilian, 34 years old, born in São Paulo, living in Londrina, Paraná, married but without children. Passionate about technology, I look to the future with enthusiasm, I know technology will bring solutions to all the challenges that humanity will face. I love sports in general but road racing and motorsport are my passions.",
      src: "https://static.preparaenem.com/2022/08/paisagem-natural-suica.jpg",
    },
    education: {
      title: "Education",
      desc: "What I learned",
      bias: "Bachelor in Information Systems from the State University of Northern Paraná, specialization from the Federal Technological University of Paraná. Advanced level English with great ability to speak with native speakers of English, and direct contact with native speakers through classes on the Cambly platform. Several courses carried out through platforms such as Alura and Ignite for deepening in technologies based on javascript.",
      src: "https://static.preparaenem.com/2022/08/paisagem-natural-suica.jpg",
    },
    professional: {
      title: "Professional",
      desc: "My experience",
      bias: "More than 10 years of experience, being able to work in several business segments such as Education, Energy and Oil, Financial and Industrial areas. Experience working with Spring-boot, Next.js, Node.js technologies.",
      src: "https://static.preparaenem.com/2022/08/paisagem-natural-suica.jpg",
      experiences: experiencesArr,
    },
    goals: {
      title: "Goals",
      desc: "These are my dreams",
      bias: "Whenever I can I like to share my travels, my dream is to go around the world. I have a passion for knowing different cultures and understanding how there are the most diverse types of societies and their particularities. #always-travelling",
      src: "https://static.preparaenem.com/2022/08/paisagem-natural-suica.jpg",
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
    <Flex
      direction={{ base: "column", md: "row" }}
      mt={4}
      p={2}
      w={{ sm: "60%", md: "full" }}
      gap={2}
    >
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
            <DrawerHeader borderBottomWidth="1px">
              {features[selectedFeature]?.experiences ? null : (
                <Image
                  src={features[selectedFeature]?.src}
                  alt="Profile Picture"
                  objectFit="fill"
                  rounded={10}
                  mr="2"
                  mt="8"
                  mb="2"
                />
              )}
              <Text fontSize="lg" mt={2}>
                {features[selectedFeature]?.title}
              </Text>
            </DrawerHeader>
            {/*             <DrawerHeader>{features[selectedFeature]?.title}</DrawerHeader>
             */}
            <DrawerBody>
              <Text>{features[selectedFeature]?.bias}</Text>
              {features[selectedFeature]?.experiences ? (
                <Box mt={6}>
                  <Timeline
                    experiences={features[selectedFeature]?.experiences}
                  />
                </Box>
              ) : null}
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Flex>
  );
}
