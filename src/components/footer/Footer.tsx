import { Flex, Text, IconButton, IconButtonProps } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const SocialIconButton = (props: IconButtonProps) => (
  <IconButton
    isRound
    size="lg"
    bg="gray.700"
    color="white"
    _hover={{ bg: "gray.600" }}
    {...props}
  />
);

export default function Footer() {
  return (
    <Flex as="footer" justify="space-between" align="center" gap={5} py={5}>
      <Text fontSize="sm">© 2023 All rights reserved.</Text>
      <Flex>
        <SocialIconButton aria-label="Twitter" icon={<FaTwitter />} />
        <SocialIconButton aria-label="Facebook" icon={<FaFacebook />} />
        <SocialIconButton aria-label="Instagram" icon={<FaInstagram />} />
      </Flex>
    </Flex>
  );
}
