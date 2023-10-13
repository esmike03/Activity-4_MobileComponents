import { View, SafeAreaView, Text, Platform, StatusBar } from 'react-native';
import Tooltip from "react-native-walkthrough-tooltip";
import {
  GluestackUIProvider, 
  VStack,
  Box,
  Button,
  ButtonText,
} from '@gluestack-ui/themed';
import React, { useState, useEffect } from 'react';
import { config } from '@gluestack-ui/config';



export default function App() {

  const [showTip, setTip] = useState(false);

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
        isVisible={showTip}
        content={
          <View>
            <Text> I am a tooltip </Text>
          </View>
        }
        onClose={() => setTip(false)}
        placement="bottom"
        // below is for the status bar of react navigation bar
        topAdjustment={Platform.OS === 'android' ? -StatusBar.currentHeight : 0}
      >

        <Button title="Tooltip" onPress={() => setTip(true)} >
        <ButtonText>
          Press Me!
        </ButtonText>
      </Button>
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
