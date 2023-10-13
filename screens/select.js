import { SafeAreaView, Text, View } from 'react-native';
import { MultipleSelectList, SelectList } from 'react-native-dropdown-select-list';
import {
  GluestackUIProvider, 
  VStack,
  Box,
  CloseIcon,
  CheckIcon
} from '@gluestack-ui/themed';
import React from 'react';
import { config } from '@gluestack-ui/config';




export default function App() {

  const [selected, setSelected] = React.useState("");
  const [categories, setCategories] = React.useState([]);
  
  const data = [
    {key:'Canada', value:'Canada'},
    {key:'England', value:'England'},
    {key:'Pakistan', value:'Pakistan'},
    {key:'India', value:'India'},
    {key:'NewZealand', value:'NewZealand'},
  ]

  const Sel = () => {
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

          <SelectList setSelected={setSelected} data={data}  />

          <MultipleSelectList 
            setSelected={(val) => setCategories(val)} 
            data={data} 
            save="value"
            label="Categories"
            boxStyles={{marginTop:25}}
            />

          <View style={{marginTop:50}}>
            <Text>Selected Value : </Text>
            <Text style={{marginTop:10,color:'gray'}}>{selected}</Text>
          </View> 

          <View style={{marginTop:30}}>
            <Text>Selected Categories : </Text>
            {
              categories.map((item) => {
                return(
                  <Text key={item} style={{marginTop:1,color:'gray'}}>{item}</Text>
                )
              })
            }
            
          </View>     
    </Box>
    </VStack>

  );
};

  return (
    <SafeAreaView >
      <GluestackUIProvider config={config}>
        <Sel />
      </GluestackUIProvider>
    </SafeAreaView>
  );
}