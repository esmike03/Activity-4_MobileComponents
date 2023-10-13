import { SafeAreaView, Text } from 'react-native';
import {
  GluestackUIProvider, 
  VStack,
  Box,
  Badge,
  BadgeText,
  BadgeIcon
} from '@gluestack-ui/themed';
import React from 'react';
import { config } from '@gluestack-ui/config';
import { GlobeIcon, InfoIcon, FileWarningIcon, CheckIcon, SpeakerIcon } from 'lucide-react-native';



export default function App() {

  const Badges = () => {
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
            
            <Badge size="md" variant="solid" borderRadius="$sm" action="success" >
            <BadgeText>Success Badge</BadgeText>
            <BadgeIcon as={CheckIcon} ml='$2' />
            </Badge>

            <Badge size="md" variant="solid" borderRadius="$sm" action="error" >
            <BadgeText>Error Badge</BadgeText>
            <BadgeIcon as={InfoIcon} ml='$2' />
            </Badge>

            <Badge size="md" variant="solid" borderRadius="$sm" action="warning" >
            <BadgeText>Warning Badge</BadgeText>
            <BadgeIcon as={FileWarningIcon} ml='$2' />
            </Badge>

            <Badge size="md" variant="solid" borderRadius="$sm" action="Info" >
            <BadgeText>Info Badge</BadgeText>
            <BadgeIcon as={InfoIcon} ml='$2' />
            </Badge>
        
            <Badge size="md" variant="solid" borderRadius="$sm" action="muted" >
            <BadgeText>Muted Badge</BadgeText>
            <BadgeIcon as={SpeakerIcon} ml='$2' />
            </Badge>
        </Box>
    </VStack>

  );
};

  return (
    <SafeAreaView >
      <GluestackUIProvider config={config}>
        <Badges />
      </GluestackUIProvider>
    </SafeAreaView>
  );
}