import {
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

interface ActionPageProps {
  actions: {
    id: number;
    title: string;
    description: string;
  }[];
}
const ActionPage: React.FC<ActionPageProps> = ({ actions }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedAction, setSelectedAction] = useState<{
    title: string;
    description: string;
  } | null>(null);

  const handleButtonClick = (action: {
    title: string;
    description: string;
  }) => {
    setSelectedAction(action);
    onOpen();
  };

  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "red.400",
                zIndex: -1,
              }}
            >
              Olá Mundo,
            </Text>
            <br />
            <Text as={"span"} color={"red.400"}>
              muito prazer! =P
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            Suspendisse non mattis diam. In id rutrum augue, vel fermentum arcu.
            Suspendisse interdum dolor velit, a dapibus felis gravida at. Ut
            tempus nunc eget odio accumsan condimentum ut ut quam. Integer non
            efficitur ipsum, ac bibendum metus. Etiam iaculis ornare nibh ut
            rutrum. Sed suscipit vehicula porttitor. Sed metus arcu, mollis nec
            velit vitae, sagittis dignissim diam. Morbi felis mauris, malesuada
            quis felis non, dictum laoreet diam. Aliquam ac massa massa.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            {actions.map((action) => (
              <Button
                key={action.id}
                onClick={() => handleButtonClick(action)}
                style={{ marginRight: "10px" }}
              >
                {action.title}
              </Button>
            ))}
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              minW={200}
              colorScheme={"red"}
              bg={"red.400"}
              _hover={{ bg: "red.500" }}
            >
              Biografia
            </Button>
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              minW={200}
            >
              Contato
            </Button>
          </Stack>
        </Stack>

        <Drawer isOpen={isOpen} onClose={onClose} placement="right" size="md">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>{selectedAction?.title}</DrawerHeader>
            <DrawerBody>{selectedAction?.description}</DrawerBody>
          </DrawerContent>
        </Drawer>
      </Stack>
    </Container>
  );
};

export default ActionPage;
