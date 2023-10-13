import { View, TouchableOpacity, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { useRef } from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {
  Box,
  Text,
  GluestackUIProvider,
  VStack,
  Image,
  HStack,
  Heading,
  ScrollView, 
  scrollViewRef,
  Icon,
} from '@gluestack-ui/themed';
import LottieView from 'lottie-react-native';
import { ChevronDown, Camera, ChromeIcon, InstagramIcon, FacebookIcon } from 'lucide-react-native';

export default function Sec({ navigation }) {  
  const ref = useRef<ScrollView>(null);

  const Main = () => {
    return (  
      <Box
        style={{backgroundColor: '#ffffff'}}
        justifyContent="center"
        px={4}
        bg="$backgroundLight0"
        sx={{
          _web: {
            minHeight: '100vh',
          },
        }}>
          <ScrollView ref={scrollViewRef} pagingEnabled={true} >
          <VStack alignItems="center" space="lg" paddingTop={100} paddingBottom= {110}>
            <View>
                <LottieView
                autoPlay
                style={{
                    width: 300,
                    height: 300,
                }}
                source={require("../assets/react3.json")}
                />
            </View>
            <Heading color='lightblue' fontSize={30}>REACT NATIVE</Heading>
            <Text style={{ textAlign: 'center', fontSize: 18, marginHorizontal: 20}}>
             React Native is an open-source framework for building cross-platform mobile apps with JavaScript and React.
             It offers a rich collection of pre-built native components, enabling efficient development for both iOS and
             Android using a single codebase.</Text>
            <TouchableOpacity onPress={()=> {
              ref.current?.scrollToEnd();
            }}>
              <Icon marginBottom='300' color='gray' marginTop={100} as={ChevronDown} />  
            </TouchableOpacity>       
          </VStack>      

          <VStack
    h="100%"
    flex={1}
    justifyContent="center"
    alignContent='center'
    bg="$backgroundLight0"
    sx={{
      _web: {
        minHeight: '100vh',
      },
    }}>
    <Box width='100%' height='100%' alignItems="center" flexWrap='wrap' flexDirection='row' backgroundColor='#ffffff' gap={25} justifyContent='space-evenly' paddingBottom={25}>
      
    <TouchableOpacity 
    onPress={()=> navigation.navigate('Asheet')}>
        <Box backgroundColor='#272821' style={styles.container}>
            <Text style={styles.txtcolor}>Actionsheet</Text>
        </Box>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> navigation.navigate('Alert')}>
        <Box backgroundColor='#272821' style={styles.container}>
            <Text style={styles.txtcolor}>AlertDialog</Text>
        </Box>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> navigation.navigate('AlertInfo')}>
        <Box backgroundColor='pink' style={styles.container}>
            <Text  style={styles.txtcolor}>Alert</Text>
        </Box>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> navigation.navigate('Avatar')}>   
        <Box backgroundColor='pink' style={styles.container}>
            <Text style={styles.txtcolor}>Avatar</Text>
        </Box>
    </TouchableOpacity >

    <TouchableOpacity onPress={()=> navigation.navigate('Badge')}>
        <Box backgroundColor='pink' style={styles.container}>
            <Text style={styles.txtcolor}>Badge</Text>
        </Box>
    </TouchableOpacity>
    
    <TouchableOpacity onPress={()=> navigation.navigate('Box')}>
        <Box backgroundColor='pink' style={styles.container}>
            <Text style={styles.txtcolor}>Box</Text>
        </Box>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> navigation.navigate('Form')}>
        <Box backgroundColor='pink' style={styles.container}>
            <Text style={styles.txtcolor}>Forms</Text>
        </Box>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> navigation.navigate('Divider')}>
        <Box backgroundColor='pink' style={styles.container}>
            <Text style={styles.txtcolor}>Divider</Text>
        </Box>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> navigation.navigate('Fab')}>
         <Box backgroundColor='pink' style={styles.container}>
            <Text style={styles.txtcolor}>Fab</Text>
        </Box>
    </TouchableOpacity>
   
    <TouchableOpacity onPress={()=> navigation.navigate('Prog')}>
        <Box backgroundColor='pink' style={styles.container}>
            <Text style={styles.txtcolor}>Progress</Text>
        </Box>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> navigation.navigate('Mod')}>
        <Box backgroundColor='pink' style={styles.container}>
            <Text style={styles.txtcolor}>Modal</Text>
        </Box>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> navigation.navigate('Rad')}>
        <Box backgroundColor='pink' style={styles.container}>
            <Text style={styles.txtcolor}>Radio Button</Text>
        </Box>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> navigation.navigate('Sel')}>
        <Box backgroundColor='pink' style={styles.container}>
            <Text style={styles.txtcolor}>Select</Text>
        </Box>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> navigation.navigate('Slide')}>
        <Box backgroundColor='pink' style={styles.container}>
            <Text style={styles.txtcolor}>Slider</Text>
        </Box>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> navigation.navigate('Spin')}>
        <Box backgroundColor='pink' style={styles.container}>
            <Text style={styles.txtcolor}>Spinner</Text>
        </Box>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> navigation.navigate('Swit')}>
        <Box backgroundColor='pink' style={styles.container}>
            <Text style={styles.txtcolor}>Switch</Text>
        </Box>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> navigation.navigate('Txt')}>
        <Box backgroundColor='pink' style={styles.container}>
            <Text style={styles.txtcolor}>Textarea</Text>
        </Box>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> navigation.navigate('Toast')}>
        <Box backgroundColor='pink' style={styles.container}>
            <Text style={styles.txtcolor}>Toast</Text>
        </Box>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> navigation.navigate('Tip')}>
      <Box backgroundColor='pink' style={styles.container}>
          <Text style={styles.txtcolor}>Tooltip</Text>
      </Box>
    </TouchableOpacity>


        <Box backgroundColor='pink' style={styles.container}>
        <Text>Box</Text>
    </Box>
    </Box>
  </VStack>
        </ScrollView>
      </Box>
    );
  };


  const CustomDrawer = props => {
    return (
      <View style={{ flex: 1 }}>
        <DrawerContentScrollView {...props}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 20,
              borderBottomWidth: 0.5,
              backgroundColor: '#ffff',
              marginBottom: 20,
            }}
          >
            <View>
              <Text style={{fontSize: 20,fontWeight: 'bold', color: '#EA1179'}}>Earl Mike H. Sarabia</Text>
              <Text style={{fontSize: 13}}>sarabiaearlmike14@gmail.com</Text>
            </View>
            <Image alt='Earl Mike Profile'
              source={
                require('../assets/profile.jpeg')
              }
              style={{ width: 70, height: 70, borderRadius: 35 }}
            />
          </View>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 0,
            left: 0,
            bottom: 50,
            backgroundColor: '#ffffff',
            padding: 20,
          }}
        >
        <HStack margin= {40} justifyContent= 'space-evenly' space="md" alignItems="center">
          <Icon color='#FF0060' as={Camera} />
          <Icon color='#F6FA70' as={ChromeIcon} />
          <Icon color='#00DFA2' as={InstagramIcon} />
          <Icon color='#0079FF' as={FacebookIcon} />
        </HStack>

        </TouchableOpacity>
      </View>
    );
  };
  
  const Drawer = createDrawerNavigator();

  return (
    <VStack style={{backgroundColor: '#272829', flex: 1}}>
      <GluestackUIProvider>
          <NavigationContainer >
              <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={{headerStyle:{backgroundColor: 'lightblue'}, drawerStyle:{backgroundColor: '#ffffff'}}} >
                <Drawer.Screen name="React Native Components" component={Main} />
              </Drawer.Navigator>
          </NavigationContainer>
      </GluestackUIProvider>
    </VStack>
  );
}

const styles = StyleSheet.create({
  container: {
      height: 100,
      width: 150, 
      backgroundColor: '#ffff',
      borderColor: 'lightblue',
      borderWidth: 1,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      shadowOffset: {width: -2, height: 2},  
      shadowColor: 'gray',  
      shadowOpacity: 0.1,  
      elevation: 5,
      shadowRadius: 3,  
    },
    txtcolor: {
      fontSize: 18,
    }
});