import { SafeAreaView, Text } from 'react-native';
import { useState } from 'react';
import {
  GluestackUIProvider, 
  VStack,
  Box,
  Heading,
  Modal,
  Center,
  ModalBody,
  Button,
  ButtonText,
  ModalFooter,
  ModalContent,
  ModalBackdrop,
  ModalHeader,
  ModalCloseButton,
  Icon
} from '@gluestack-ui/themed';
import React from 'react';
import { config } from '@gluestack-ui/config';
import { CloseIcon, FormControlErrorIcon, AlertCircleIcon } from 'lucide-react-native';



export default function App() {
  
    function Modals(){
        const [showModal, setShowModal] = useState(false);
        console.log(showModal);
        const ref = React.useRef(null);
        return (
          <Center h={300}>
            <Button onPress={() => setShowModal(true)} ref={ref}>
              <ButtonText>Show Modal</ButtonText>
            </Button>
            <Modal
              isOpen={showModal}
              onClose={() => {
                setShowModal(false);
              }}
              finalFocusRef={ref}
            >
              <ModalBackdrop />
              <ModalContent>
                <ModalHeader>
                  <Heading size='lg'>Engage with Modals</Heading>
                  <ModalCloseButton>
                    <Icon as={CloseIcon} />
                  </ModalCloseButton>
                </ModalHeader>
                <ModalBody>
                  <Text >
                Elevate user interactions with our versatile modals. Seamlessly integrate notifications, forms, and media displays. Make an impact effortlessly.
                  </Text>
                </ModalBody>
                <ModalFooter>
                  <Button
                    variant="outline"
                    size="sm"
                    action="secondary"
                    mr="$3"
                    onPress={() => {
                      setShowModal(false);
                    }}
                  >
                    <ButtonText>Cancel</ButtonText>
                  </Button>
                  <Button
                    size="sm"
                    action="positive"
                    borderWidth='$0'
                    onPress={() => {
                      setShowModal(false);
                    }}
                  >
                    <ButtonText>Explore</ButtonText>
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Center>
        );
      }
    
  const Progg = () => {
  return (
    
    <VStack
    h="100%"
    justifyContent="center"
    alignContent='center'
    alignItems='center'
    bg="$backgroundLight0"
    sx={{
      _web: {
        minHeight: '100vh',
      },
    }}>
    <Box width='100%' height='100%' alignItems="center" backgroundColor='#ffffff' flex={0} justifyContent='space-evenly'>
        
      <Modals/>
    </Box>
    </VStack>

  );
};

  return (
    <SafeAreaView >
      <GluestackUIProvider config={config}>
        <Progg />
      </GluestackUIProvider>
    </SafeAreaView>
  );
}