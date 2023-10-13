import { SafeAreaView, Text, Dimensions, View } from 'react-native';
import {
  GluestackUIProvider, 
  VStack,
  Box,
  Image
} from '@gluestack-ui/themed';
import * as React from 'react';
import { config } from '@gluestack-ui/config';
import Carousel from 'react-native-reanimated-carousel';



export default function App() {

  const width = Dimensions.get('window').width;

  const Car = () => {
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

        <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log('current index:', index)}
        renderItem={({ index }) => (
            <View
                style={{
                    flex: 1,
                    borderWidth: 1,
                    justifyContent: 'center',
                }}
            >
                <Image alt="Pic" source={
                    require('../assets/carou/1.jpg')
                }
                style={{ width: width, height: width / 2, }}/>

            </View>

        )}
        />

    </Box>
    </VStack>

  );
};

  return (
    <SafeAreaView >
      <GluestackUIProvider config={config}>
        <Car />
      </GluestackUIProvider>
    </SafeAreaView>
  );
}