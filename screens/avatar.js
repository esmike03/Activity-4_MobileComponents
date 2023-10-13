import { SafeAreaView, Text } from 'react-native';
import {
  GluestackUIProvider,
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  VStack,
  Box
} from '@gluestack-ui/themed';
import React from 'react';
import { config } from '@gluestack-ui/config';
import { CloseIcon } from 'lucide-react-native';



export default function App() {

  const [showAlertDialog, setShowAlertDialog] = React.useState(false);

  const Avatars = () => {
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
        <Avatar bgColor='$amber600' size="2xl" borderRadius="$full" >
            <AvatarFallbackText>Earl Mike Sarabia</AvatarFallbackText>
        </Avatar>
    </Box>
  </VStack>
  );
};

  return (
    <SafeAreaView >
      <GluestackUIProvider config={config}>
        <Avatars />
      </GluestackUIProvider>
    </SafeAreaView>
  );
}