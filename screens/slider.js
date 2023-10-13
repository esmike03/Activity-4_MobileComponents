import { SafeAreaView, Text } from 'react-native';
import {
  GluestackUIProvider, 
  VStack,
  Box,
  Center,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb
} from '@gluestack-ui/themed';
import React from 'react';
import { config } from '@gluestack-ui/config';
import { CheckIcon, FormControlErrorIcon, AlertCircleIcon } from 'lucide-react-native';



export default function App() {

  const Format = () => {
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

        
    <Center w={300} h={100}>
        <Slider  defaultValue={30} size="md" orientation="horizontal" isDisabled={false} isReversed={false}   >
        <SliderTrack>
            <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
        </Slider>
    </Center>

    </Box>
    </VStack>

  );
};

  return (
    <SafeAreaView >
      <GluestackUIProvider config={config}>
        <Format />
      </GluestackUIProvider>
    </SafeAreaView>
  );
}