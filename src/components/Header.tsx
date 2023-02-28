import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Box as="section" pb="28">
      <Box
        color="gray.50"
        bg="purple.600"
        pt="25"
        px="8"
        pb="28"
        m="auto"
        textAlign={["left", "left", "center"]}
      >
        <Heading fontSize={["3xl", "3xl", "5xl"]} fontWeight="extrabold">
          Simple Pricing for your Business
        </Heading>
        <Text fontSize={["lg", "lg", "2xl"]} pt="4" fontWeight="medium">
          Plans that are carefully crafted to suit your business
        </Text>
      </Box>
    </Box>
  );
};

export default Header;
