import { SafeAreaView, Text } from 'react-native';
import {
  GluestackUIProvider, 
  VStack,
  Box,
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectItem,
  Icon
} from '@gluestack-ui/themed';
import React from 'react';
import { config } from '@gluestack-ui/config';
import { ChevronDownIcon } from 'lucide-react-native';



export default function App() {

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
    <Box width='100%' height='100%' alignItems="center" backgroundColor='#ffffff' flex={0} justifyContent='space-evenly'>

    
            <Select>
            <SelectTrigger variant="outline" size="md" >
            <SelectInput placeholder="Select option" />
            <SelectIcon mr="$3">
                <Icon as={ChevronDownIcon} />
            </SelectIcon>
            </SelectTrigger>
            <SelectPortal>
            <SelectBackdrop/>
            <SelectContent>
                <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                <SelectItem label="UX Research" value="ux" />
                <SelectItem label="Web Development" value="web" />
                <SelectItem
                label="Cross Platform Development Process"
                value="Cross Platform Development Process"
                />
                <SelectItem
                label="UI Designing"
                value="ui"
                isDisabled={true}
                />
                <SelectItem
                label="Backend Development"
                value="backend"
                />
            </SelectContent>
            </SelectPortal>
        </Select>

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