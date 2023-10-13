import { SafeAreaView } from 'react-native';
import { Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicatorWrapper, ActionsheetDragIndicator, ActionsheetItem, ActionsheetItemText } from '@gluestack-ui/themed';
import {
  Box,
  GluestackUIProvider,
  VStack,
  Button,
  ButtonText,
} from '@gluestack-ui/themed';
import React from 'react';
import { config } from '@gluestack-ui/config';



export default function App() {

  const [showActionsheet, setShowActionsheet] = React.useState(false)
  const handleClose = () => setShowActionsheet(!showActionsheet)

  const Asheet = () => {
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

      <Box width='100%' height='100%' alignItems="center" backgroundColor='#ffffff' flex={0} justifyContent='center'>
        <Button onPress={handleClose}>
          <ButtonText>Open</ButtonText>
        </Button>
        <Actionsheet isOpen={showActionsheet} onClose={handleClose} zIndex={999}>
          <ActionsheetBackdrop />
          <ActionsheetContent h="$100" zIndex={999}>
            <ActionsheetDragIndicatorWrapper>
              <ActionsheetDragIndicator />
            </ActionsheetDragIndicatorWrapper>
            <ActionsheetItem onPress={handleClose}>
              <ActionsheetItemText >Delete</ActionsheetItemText>
            </ActionsheetItem>
            <ActionsheetItem onPress={handleClose}>
              <ActionsheetItemText >Share</ActionsheetItemText>
            </ActionsheetItem>
            <ActionsheetItem onPress={handleClose}>
              <ActionsheetItemText >Play</ActionsheetItemText>
            </ActionsheetItem>
            <ActionsheetItem onPress={handleClose}>
              <ActionsheetItemText >Favourite</ActionsheetItemText>
            </ActionsheetItem>
            <ActionsheetItem onPress={handleClose}>
              <ActionsheetItemText >Cancel</ActionsheetItemText>
            </ActionsheetItem>
          </ActionsheetContent>
        </Actionsheet>
      </Box>
    </VStack>
  );
};

  return (
    <SafeAreaView >
      <GluestackUIProvider config={config}>
        <Asheet />
      </GluestackUIProvider>
    </SafeAreaView>
  );
}