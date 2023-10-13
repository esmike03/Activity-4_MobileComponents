import { SafeAreaView, Text } from 'react-native';
import {
  GluestackUIProvider, 
  VStack,
  Box,

} from '@gluestack-ui/themed';
import React from 'react';
import { config } from '@gluestack-ui/config';
import { InfoIcon } from 'lucide-react-native';



export default function App() {

  const Boxs = () => {
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

        <Box
        backgroundColor='#5D12D2'
        width={100}
        height={100}
        p="$5"
        justifyContent='center'
        alignContent='center'
        alignItems='center'
        >
            <Text style={{color: 'white'}}>
            This is the Box
            </Text>
        </Box>

    </Box>
    </VStack>

  );
};

  return (
    <SafeAreaView >
      <GluestackUIProvider config={config}>
        <Boxs />
      </GluestackUIProvider>
    </SafeAreaView>
  );
}