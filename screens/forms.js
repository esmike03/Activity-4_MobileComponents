import { SafeAreaView, Text } from 'react-native';
import {
  GluestackUIProvider, 
  VStack,
  Box,
  Checkbox,
  CheckboxIcon,
  CheckboxLabel,
  CheckboxIndicator,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  FormControlHelper,
  FormControlHelperText,
  FormControlError,
  FormControlErrorText,
  FormControlErrorIcon,
} from '@gluestack-ui/themed';
import React from 'react';
import { config } from '@gluestack-ui/config';
import { CheckIcon, AlertCircleIcon } from 'lucide-react-native';



export default function App() {

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

        
        <Checkbox aria-label='Checkbox' size="ml" isInvalid={false} isDisabled={false}   >
            <CheckboxIndicator aria-label='check' mr="$2">
            <CheckboxIcon as={CheckIcon}/>
            </CheckboxIndicator>
            <CheckboxLabel aria-label='Checkbox'>Checkbox</CheckboxLabel>
        </Checkbox>

        
        <Box h="$32" w="$72">
          <FormControl size="md" isDisabled={false} isInvalid={false} isReadOnly={false} isRequired={false} >
            <FormControlLabel mb='$1'>
              <FormControlLabelText>Password</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField
                type="password"
                defaultValue="12345"
                placeholder="password"
              />
            </Input>
            <FormControlHelper>
              <FormControlHelperText>
                Must be atleast 6 characters.
              </FormControlHelperText>
            </FormControlHelper>
            <FormControlError>
              <FormControlErrorIcon
                as={AlertCircleIcon}
              />
              <FormControlErrorText>
                Atleast 6 characters are required.
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
        </Box>
      
        
        <Input marginLeft={80} marginRight={80} variant="outline" size="sl" isDisabled={false} isInvalid={false} isReadOnly={false} >
          <InputField
              placeholder='Enter Text here'
          />
        </Input>
      
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