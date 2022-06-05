import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './Header.styles';

interface Props {
  title: string;
  actions: React.ReactNode;
}

export const Header: React.FC<Props> = (props) => {
  const { title, actions } = props;

  return (
    <View style={styles.wrap}>
      <View style={styles.row}>
        <Text style={styles.title}>{title}</Text>
        <>{actions}</>
      </View>
    </View>
  );
};
