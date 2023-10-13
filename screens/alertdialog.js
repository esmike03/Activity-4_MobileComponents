import { SafeAreaView, Text } from 'react-native';
import {
  GluestackUIProvider,
  Center,
  Button,
  ButtonGroup,
  ButtonText,
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogFooter,
  AlertDialogBody,
  Icon,
  Heading,
  VStack,
  Box,
  CloseIcon
} from '@gluestack-ui/themed';
import React from 'react';
import { config } from '@gluestack-ui/config';



export default function App() {

  const [showAlertDialog, setShowAlertDialog] = React.useState(false);

  const Alert = () => {
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

    <Center h={300}>
    <Button onPress={() => setShowAlertDialog(true)}>
      <ButtonText>Click me</ButtonText>
    </Button>
    <AlertDialog
      isOpen={showAlertDialog}
      onClose={() => {
        setShowAlertDialog(false)
      }}
    >
      <AlertDialogBackdrop />
      <AlertDialogContent>
        <AlertDialogHeader>
          <Heading size="lg">Deactivate account</Heading>
          <AlertDialogCloseButton>
            <Icon as={CloseIcon} />
          </AlertDialogCloseButton>
        </AlertDialogHeader>
        <AlertDialogBody>
          <Text size="sm">
            Are you sure you want to deactivate your account? Your data will
            be permanently removed and cannot be undone.
          </Text>
        </AlertDialogBody>
        <AlertDialogFooter>
          <ButtonGroup space="lg">
            <Button
              variant="outline"
              action="secondary"
              onPress={() => {
                setShowAlertDialog(false)
              }}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              bg="$error600"
              action="negative"
              onPress={() => {
                setShowAlertDialog(false)
              }}
            >
              <ButtonText>Deactivate</ButtonText>
            </Button>
          </ButtonGroup>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  </Center>
  </Box>
  </VStack>
  );
};

  return (
    <SafeAreaView >
      <GluestackUIProvider config={config}>
        <Alert />
      </GluestackUIProvider>
    </SafeAreaView>
  );
}