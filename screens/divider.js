import { SafeAreaView, Text } from 'react-native';
import {
  GluestackUIProvider, 
  VStack,
  Box,
  Divider,
  HStack
} from '@gluestack-ui/themed';
import React from 'react';
import { config } from '@gluestack-ui/config';
import { CheckIcon } from 'lucide-react-native';



export default function App() {

  const Divide = () => {
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

    <VStack
    space="md"
    justifyContent='center'
    alignItems='center'
  >
        <HStack
        h='$10'
        justifyContent='center'
        alignItems='center'
        >
        <Text>Simple</Text>
        <Divider
            orientation="vertical"
            mx='$2.5'
            bg='$emerald500'
            h={15}
            sx={{
            _dark: {
                bg: '$emerald400',
            },
            }}
        />
        <Text>Easy</Text>
        <Divider
            orientation="vertical"
            mx='$2.5'
            bg='$indigo500'
            h={15}
            sx={{
            _dark: {
                bg: '$indigo400',
            },
            }}
        />
        <Text>Beautiful</Text>
        </HStack>
        <VStack
        w={100}
        justifyContent='center'
        alignItems='center'
        >
        <Text>Firefox</Text>
        <Divider
            w={55}
            variant="horizontal"
            sx={{
            bg: '$red500',
            _dark: {
                bg: '$red400',
            },
            }}
        />
        <Text>Chrome</Text>
        </VStack>
    </VStack>

    </Box>
    </VStack>

  );
};

  return (
    <SafeAreaView >
      <GluestackUIProvider config={config}>
        <Divide />
      </GluestackUIProvider>
    </SafeAreaView>
  );
}