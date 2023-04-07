import { Text } from "@chakra-ui/react";

export default function Gradient({ children }: any) {
  return (
    <Text
      /*       
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      */
      bgGradient="linear(to-l, #352C67, #7928CA)"
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
