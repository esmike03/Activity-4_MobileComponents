import { SafeAreaView, Text } from 'react-native';
import {
  GluestackUIProvider, 
  AlertIcon, 
  AlertText,
  Alert,
  VStack,
  Box,
  Button,
  ButtonText
} from '@gluestack-ui/themed';
import React from 'react';
import { config } from '@gluestack-ui/config';
import { InfoIcon } from 'lucide-react-native';



export default function App() {

  const Alerts = () => {
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

    <Alert marginLeft={25} marginRight={25} mx='$2.5'  action="success" variant="accent" >
        <AlertIcon as={InfoIcon} mr="$3"  />
        <AlertText>
        This is a Success Alert.
        </AlertText>
    </Alert>

    <Alert marginLeft={25} marginRight={25} mx='$2.5'  action="info" variant="accent" >
        <AlertIcon as={InfoIcon} mr="$3"  />
        <AlertText>
        This is an Info Alert.
        </AlertText>
    </Alert>

    <Alert marginLeft={25} marginRight={25} mx='$2.5'  action="error" variant="accent" >
        <AlertIcon as={InfoIcon} mr="$3"  />
        <AlertText>
        This is an Error Alert!
        </AlertText>
    </Alert>
    </Box>
    </VStack>

  );
};

  return (
    <SafeAreaView >
      <GluestackUIProvider config={config}>
        <Alerts />
      </GluestackUIProvider>
    </SafeAreaView>
  );
}