import { Text } from "@chakra-ui/react";

export default function Gradient({ children }: any) {
  return (
    <Text
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      bgClip="text"
      fontSize="6xl"
      fontWeight="extrabold"
      textAlign={"center"}
      px={3}
    >
      {children}
    </Text>
  );
}
