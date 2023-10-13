import { SafeAreaView, Text } from 'react-native';
import {
  GluestackUIProvider, 
  VStack,
  Box,
  Progress,
  ProgressFilledTrack,
  Heading
} from '@gluestack-ui/themed';
import React from 'react';
import { config } from '@gluestack-ui/config';
import { CheckIcon, FormControlErrorIcon, AlertCircleIcon } from 'lucide-react-native';



export default function App() {

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
        
    <VStack space="lg">
    <Heading>Internal Storage</Heading>
    <Progress value={46} w={300} h={8} bg="$lime100">
      <ProgressFilledTrack h={8} bg="$lime500" />
    </Progress>
    <Text sizze="md">128GB</Text>
    </VStack>
      
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