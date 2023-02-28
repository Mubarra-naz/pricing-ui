import {
  GuaranteeIcon,
  HassleFreeIcon,
  MonthlySubscriptionIcon,
} from "@/icons/Icons";
import { Box, HStack, Stack, Icon, StackProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";

interface FeatureProps extends StackProps {
  icon: ElementType;
}
const Feature = (props: FeatureProps) => {
  const { icon, children, ...rest } = props;
  return (
    <HStack {...rest} spacing="6">
      <Icon as={icon} boxSize="12" />
      <Text textAlign="left" fontWeight="bold" fontSize="lg">
        {children}
      </Text>
    </HStack>
  );
};

const Features = () => {
  return (
    <Box pt="60px" pb="8" maxW="1024px" m="auto">
      <Stack px="12" spacing="5" direction={["column", "column", "row"]}>
        <Feature icon={GuaranteeIcon}>30 days money back guarantee</Feature>
        <Feature icon={HassleFreeIcon}>No setup fees 100% hassle free</Feature>
        <Feature icon={MonthlySubscriptionIcon}>
          No monthly subscription Pay once and for all
        </Feature>
      </Stack>
    </Box>
  );
};

export default Features;
