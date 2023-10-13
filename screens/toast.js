import { SafeAreaView, Text } from 'react-native';
import {
  GluestackUIProvider, 
  VStack,
  Box,
  Button,
  useToast,
  Toast,
  ButtonText,
  ToastDescription,
  ToastTitle,

} from '@gluestack-ui/themed';
import React from 'react';
import { config } from '@gluestack-ui/config';



export default function App() {

  const toast = useToast();
  const Toasta = () => {
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
        <Button
            onPress={() => {
            toast.show({
                placement: "Top",
                render: ({ id }) => {
                return (
                    <Toast nativeID={id} action="attention" variant="solid">
                    <VStack space="xs">
                        <ToastTitle>New Message</ToastTitle>
                        <ToastDescription>
                        Hey, just wanted to touch base and see how you're doing.
                        Let's catch up soon!
                        </ToastDescription>
                    </VStack>
                    </Toast>
                )
                },
            })
            }}
        >
            <ButtonText>Press Me</ButtonText>
        </Button>
    </Box>
    </VStack>

  );
};

  return (
    <SafeAreaView >
      <GluestackUIProvider config={config}>
        <Toasta />
      </GluestackUIProvider>
    </SafeAreaView>
  );
}