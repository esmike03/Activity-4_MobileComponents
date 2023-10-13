import { SafeAreaView, Text } from 'react-native';
import {
  GluestackUIProvider, 
  VStack,
  Box,
  Radio,
  RadioGroup,
  RadioIndicator,
  RadioIcon,
  RadioLabel
} from '@gluestack-ui/themed';
import React from 'react';
import { config } from '@gluestack-ui/config';
import { CircleIcon } from 'lucide-react-native';



export default function App() {

  const Radios = () => {
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

    
    <RadioGroup gap={15}>
        <Radio value="change" size="md" isInvalid={false} isDisabled={false} >
        <RadioIndicator mr='$2'>
            <RadioIcon as={CircleIcon} strokeWidth={1}/>
        </RadioIndicator>
        <RadioLabel >Label</RadioLabel>
        </Radio>

        <Radio value="change" size="md" isInvalid={true} isDisabled={false} >
        <RadioIndicator mr='$2'>
            <RadioIcon as={CircleIcon} strokeWidth={1}/>
        </RadioIndicator>
        <RadioLabel >Label</RadioLabel>
        </Radio>

        <Radio value="change" size="md" isInvalid={false} isDisabled={true} >
        <RadioIndicator mr='$2'>
            <RadioIcon as={CircleIcon} strokeWidth={1}/>
        </RadioIndicator>
        <RadioLabel >Label</RadioLabel>
        </Radio>
    </RadioGroup>

      
    </Box>
    </VStack>

  );
};

  return (
    <SafeAreaView >
      <GluestackUIProvider config={config}>
        <Radios />
      </GluestackUIProvider>
    </SafeAreaView>
  );
}