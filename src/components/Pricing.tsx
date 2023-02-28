import { CheckIcon } from "@/icons/Icons";
import {
  Button,
  Flex,
  Heading,
  HStack,
  StackProps,
  Text,
  Icon,
  Box,
  Stack,
} from "@chakra-ui/react";
import React from "react";

export const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;
  return (
    <HStack as="li" spacing="5" {...rest}>
      <Icon as={CheckIcon} w="22px" h="22px" />
      <Text>{children}</Text>
    </HStack>
  );
};

const Pricing = () => {
  return (
    <Flex
      direction={["column", "column", "row"]}
      maxW="994px"
      mx={["6", "6", "auto"]}
      mt="-52"
      borderRadius="xl"
      bg="white"
      overflow="hidden"
      boxShadow="xl"
    >
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        bg="purple.50"
        p="16"
      >
        <Text as="b" fontSize="2xl">
          Premium PRO
        </Text>
        <Heading as="h3" mt="4" fontSize={["5xl", "5xl", "6xl"]}>
          $329
        </Heading>
        <Text fontWeight="500" mt="2" fontSize="lg">
          billed just once
        </Text>
        <Button colorScheme="purple" size="lg" w="72" mt={4}>
          Get Started
        </Button>
      </Flex>
      <Box p="16" fontSize="md">
        <Text textAlign="left">
          Access these features when you get this pricing package for your
          business
        </Text>
        <Stack as="ul" spacing="4" pt="24px">
          <ListItem>International Calling and messaging API</ListItem>
          <ListItem>Additional phone number</ListItem>
          <ListItem>Automated messaging via Zapier</ListItem>
          <ListItem>24/7 support and consulting</ListItem>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Pricing;
