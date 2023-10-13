import { SafeAreaView, Text } from 'react-native';
import {
  GluestackUIProvider, 
  VStack,
  Box,
  Fab,
  Image,
  Link,
  FabIcon
} from '@gluestack-ui/themed';
import React from 'react';
import { config } from '@gluestack-ui/config';
import { ShoppingCartIcon } from 'lucide-react-native';

export default function App() {
    
  const Fabb = () => {
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
    maxWidth="$96"
    borderColor="$borderLight200"
    borderRadius="$lg"
    borderWidth="$1"
    overflow="hidden"
    sx={{
      "@base": {
        mx: "$5",
      },
      _dark: {
        bg: "$backgroundDark900",
        borderColor: "$borderDark800",
      },
    }}
  >
    <Box>
      <Image
        h={185}
        w={416}
        source={require('D:\ReactNative\Act4\assets\favicon.png')}
      />
    </Box>
    <VStack px="$6" pt="$4" pb="$6">
      
      <Text fontSize="$sm" my="$1.5">
        Rs 146(Rs.24.33/pc)
      </Text>
      <Text fontSize="$xs">DETAILS</Text>
      <Text fontSize="$xs" my="$1.5">
        Oranges are a great source of vitamin C, which is essential for a healthy
        immune system. Oranges are a great source of vitamin C, which is important
        for maintaining a healthy immune system. Vitamin C also helps with the
        absorption of iron and the production of collagen, which supports healthy
        skin, teeth, and bones.
      </Text>
      <Link href="https://gluestack.io/" isExternal>
        <Text fontSize="$xs" color="$pink600">
          READ MORE
        </Text>
      </Link>
    </VStack>
    <Fab bg="$pink600" size="lg" right="$4" bottom="$20">
      <FabIcon as={ShoppingCartIcon} h="$4" w="$4" />
    </Fab>
  </Box>
    </Box>
    </VStack>

  );
};

  return (
    <SafeAreaView >
      <GluestackUIProvider config={config}>
        <Fabb />
      </GluestackUIProvider>
    </SafeAreaView>
  );
}