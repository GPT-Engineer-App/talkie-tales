import { Box, Flex, VStack, HStack, Avatar, Text, Input, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { FaCog, FaUserCircle, FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex height="100vh" direction="column">
      {/* Navigation Bar */}
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        padding="1rem"
        bg="blue.500"
        color="white"
      >
        <Text fontSize="xl" fontWeight="bold">
          ChatApp
        </Text>
        <HStack spacing={4}>
          <IconButton
            aria-label="Profile"
            icon={<FaUserCircle />}
            variant="ghost"
            color="white"
          />
          <IconButton
            aria-label="Settings"
            icon={<FaCog />}
            variant="ghost"
            color="white"
          />
        </HStack>
      </Flex>

      <Flex flex="1" overflow="hidden">
        {/* Chat List */}
        <Box
          w={{ base: "100%", md: "30%" }}
          borderRightWidth={{ base: "0", md: "1px" }}
          borderRightColor="gray.200"
          overflowY="auto"
          display={{ base: isMobile ? "none" : "block", md: "block" }}
        >
          <VStack spacing={4} align="stretch" p={4}>
            {[...Array(10)].map((_, i) => (
              <HStack key={i} spacing={4} align="center">
                <Avatar name={`User ${i + 1}`} />
                <VStack align="start" spacing={0}>
                  <Text fontWeight="bold">User {i + 1}</Text>
                  <Text fontSize="sm" color="gray.500">
                    Last message preview...
                  </Text>
                </VStack>
              </HStack>
            ))}
          </VStack>
        </Box>

        {/* Chat Window */}
        <Flex flex="1" direction="column">
          {/* Chat Header */}
          <Flex
            align="center"
            justify="space-between"
            padding="1rem"
            borderBottomWidth="1px"
            borderBottomColor="gray.200"
          >
            <HStack spacing={4} align="center">
              <Avatar name="Selected User" />
              <VStack align="start" spacing={0}>
                <Text fontWeight="bold">Selected User</Text>
                <Text fontSize="sm" color="gray.500">
                  Online
                </Text>
              </VStack>
            </HStack>
          </Flex>

          {/* Messages Area */}
          <Box flex="1" overflowY="auto" p={4}>
            {[...Array(20)].map((_, i) => (
              <Box key={i} mb={4}>
                <Text
                  bg={i % 2 === 0 ? "blue.100" : "gray.100"}
                  p={2}
                  borderRadius="md"
                  alignSelf={i % 2 === 0 ? "flex-start" : "flex-end"}
                >
                  Message {i + 1}
                </Text>
              </Box>
            ))}
          </Box>

          {/* Message Input */}
          <Flex
            as="form"
            align="center"
            padding="1rem"
            borderTopWidth="1px"
            borderTopColor="gray.200"
          >
            <Input placeholder="Type a message..." mr={2} />
            <IconButton
              aria-label="Send"
              icon={<FaPaperPlane />}
              colorScheme="blue"
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Index;