import Navigator from './routes/NavStack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Box } from '@gluestack-ui/themed';

export default function App() {
  return (
      <Box style={{flex: 1, opacity: 100}}>
        <Navigator />
      </Box>
  );
}

