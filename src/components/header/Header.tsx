import React, { useState } from "react";
import { Box, Heading, Flex, IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon, SettingsIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isHovered, setIsHovered] = useState(false);
  const { i18n } = useTranslation();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleLanguageChange = () => {
    const newLanguage = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <Box borderColor="gray.50" width="100vw">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        p={4}
        transition="background-color 0.3s ease"
        bg={isHovered ? "whiteAlpha.50" : "transparent"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Heading size="md">{title}</Heading>
        <Flex>
          <IconButton
            aria-label={`Switch to ${
              colorMode === "light" ? "dark" : "light"
            } mode`}
            variant="ghost"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            _hover={{
              bg: "gray.100",
            }}
            _active={{
              bg: "gray.200",
            }}
            isRound={true}
            size="sm"
            visibility={isHovered ? "visible" : "hidden"}
          />
          <IconButton
            aria-label="Change language"
            variant="ghost"
            icon={<SettingsIcon />}
            onClick={handleLanguageChange}
            _hover={{
              bg: "gray.100",
            }}
            _active={{
              bg: "gray.200",
            }}
            isRound={true}
            size="sm"
            visibility={isHovered ? "visible" : "hidden"}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
