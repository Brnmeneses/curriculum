import {
  Avatar,
  Box,
  Center,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Emoji from "../emoji/Emoji";
import Gradient from "../gradient/Gradient";

type ProfileProps = {
  profile: {
    avatar: string;
    bios: string;
    text: string;
    link: string;
  };
};

export default function Profile(data: ProfileProps) {
  const { profile } = data;
  return (
    <Center py={6}>
      <Box w={"full"} rounded={"lg"} p={6} textAlign={"center"}>
        <Avatar size={"2xl"} src={profile.avatar} mb={4} pos={"relative"} />
        <Heading fontSize={"md"} fontFamily={"mono"}>
          {profile.bios}
          <Emoji symbol="✌️" />
          {/* <Emoji symbol="👍" /> */}
        </Heading>
        <Gradient>{profile.text}</Gradient>
      </Box>
    </Center>
  );
}
