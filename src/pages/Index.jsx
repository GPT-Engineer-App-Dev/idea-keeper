import { Container, VStack, Text, Input, Button, Box, useToast } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");
  const toast = useToast();

  const addNote = () => {
    if (input.trim() === "") {
      toast({
        title: "Cannot add empty note.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setNotes([...notes, input]);
    setInput("");
    toast({
      title: "Note added successfully.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl" mb={4}>Note Taking App</Text>
        <Box width="100%">
          <Input
            placeholder="Type your note here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            size="md"
          />
          <Button onClick={addNote} colorScheme="blue" mt={2}>Add Note</Button>
        </Box>
        <VStack spacing={2} align="stretch" width="100%">
          {notes.map((note, index) => (
            <Box key={index} p={4} shadow="md" borderWidth="1px">
              {note}
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;