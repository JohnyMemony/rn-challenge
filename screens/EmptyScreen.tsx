import React from 'react';
import { Text, View } from 'react-native';

export const EmptyScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Empty screen</Text>
    </View>
  )
};
