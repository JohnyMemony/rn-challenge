/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { RootStackParamList, RootTabParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { EmptyScreen } from '../screens/EmptyScreen';
import { Svg, SVG_ICONS } from '../components/_shared/Svg/Svg';
import { TodoScreen } from '../screens/TodoScreen/TodoScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function getScreenOptions(name: string, icon: string) {
  return {
    headerShown: false,
    title: name,
    tabBarIcon: () => <TabBarIcon name={icon} />,
  };
}

const tabBarStyle = {
  height: 70,
  paddingBottom: 15,
  paddingTop: 15,
};

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator initialRouteName="TabOne" screenOptions={{ tabBarActiveTintColor: Colors.mainBlue, tabBarStyle }}>
      <BottomTab.Screen name="Link" component={EmptyScreen} options={getScreenOptions('Link', SVG_ICONS.SUN)} />
      <BottomTab.Screen name="Link 2" component={EmptyScreen} options={getScreenOptions('Link', SVG_ICONS.CALENDAR)} />
      <BottomTab.Screen name="Todo" component={TodoScreen} options={getScreenOptions('To Do', SVG_ICONS.CHECKMARK)} />
      <BottomTab.Screen name="Link 4" component={EmptyScreen} options={getScreenOptions('Link', SVG_ICONS.BLOCKS)} />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: { name: string; }) {
  return <Svg size={21} icon={props.name} />;
}
