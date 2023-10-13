import { SafeAreaView} from 'react-native';
import {
  Box,
  Text,
  GluestackUIProvider,
  VStack,
  Heading,
  View,
  Link,
  LinkText,
  Button,
  ButtonText,
  ButtonIcon,
  ArrowRightIcon,
  Icon,
} from '@gluestack-ui/themed';
import LottieView from 'lottie-react-native';
import { GithubIcon } from 'lucide-react-native';
import * as Speech from 'expo-speech';
import { config } from '@gluestack-ui/config';

export default function intro({ navigation }) {

  const Intro = () => {
  
    const speak = () => {
      Speech.speak(`Hi, Welcome to React Native Components`, {
        language: "tl-PH",
      });
    };
    speak();
    
    return (
      
      <VStack
        h="100%"
        justifyContent="center"
        bg="$backgroundLight0"
        sx={{
          _web: {
            minHeight: '100vh',
          },
        }}>
  
        <Box width='100%' height='100%' alignItems="center" backgroundColor='#FDFD7BF' flex={0} justifyContent='center'>
        
          <View>
            <LottieView
            autoPlay
            style={{
              width: 300,
              height: 300,
            }}
            source={require("../assets/girl.json")}
            />
          </View>
  
          <Heading style={{color: '#5D12D2', fontSize: 30}}>REACT NATIVE COMPONENTS</Heading>
          <Text textAlign='center' color='black'>
            {'\n'}Earl Mike H. Sarabia |{' '}
            <Text px="$2" py="$1" rounded="$sm" bg="$backgroundLight100" style={{color: 'white', backgroundColor: '#5D12D2'}}>
              BSIT-3A
            </Text>{'\n'}
            Activity 4: All mobile development components
          </Text>
            
          <Link href="https://github.com/esmike03" isExternal>
            <LinkText color="$primary500" px="$5">
            <Icon color='gray' as={GithubIcon}/>{'\t'}Github
            </LinkText>
          </Link>
          
          <Button backgroundColor="#5D12D2" size="md" variant="solid" action="primary"
          isDisabled={false} 
          margin={20}
          isFocusVisible={false} 
          onPress={()=> navigation.navigate('Main')}>
            <ButtonText>EXPLORE </ButtonText>
            <ButtonIcon as={ArrowRightIcon} />
          </Button>        

        </Box>
      </VStack>
    );
  };
  
  return (
    
    <SafeAreaView>
      <GluestackUIProvider config={config}>
        <Intro/>
      </GluestackUIProvider>
    </SafeAreaView>
  );
}
