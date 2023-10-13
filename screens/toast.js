import { SafeAreaView, Text, ToastAndroid } from 'react-native';
import {
  GluestackUIProvider, 
  VStack,
  Box,
  Button,
  ButtonText,
} from '@gluestack-ui/themed';
import React from 'react';
import { config } from '@gluestack-ui/config';



export default function App() {

  const showToast = () => {
    ToastAndroid.show('Hello, Have a great day!', ToastAndroid.SHORT);
  };
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

      <Button title="Toggle Toast" onPress={() => showToast()} >
        <ButtonText>
          Press Me!
        </ButtonText>
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