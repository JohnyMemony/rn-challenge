import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import { ApolloProvider } from '@apollo/client';
import { AppRegistry } from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { client } from './graphql/apollo-client';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ApolloProvider client={client}>
        <SafeAreaProvider>
          <NativeBaseProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </NativeBaseProvider>
        </SafeAreaProvider>
      </ApolloProvider>
    );
  }
}

AppRegistry.registerComponent('MyApplication', () => App);
