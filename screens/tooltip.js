import { SafeAreaView, Text } from 'react-native';
import {
  GluestackUIProvider, 
  VStack,
  Box,
  Tooltip,
  TooltipContent,
  TooltipText,
  Button,
  ButtonText
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
        
        <Tooltip
            placement="top" 
            trigger={(triggerProps) => {
            return (
                <Button h='$24' {...triggerProps}>
                <ButtonText>Hover on me!</ButtonText>
                </Button>
            );
            }}
        >
            <TooltipContent>
            <TooltipText>Tooltip</TooltipText>
            </TooltipContent>
        </Tooltip>

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