import React from 'react';
import { Pressable, View } from 'react-native';
import { Header } from '../../components/layout/Header/Header';
import { styles } from './TodoScreen.styles';
import { TodoList } from '../../components/todo/TodoList/TodoList';
import { Svg, SVG_ICONS } from '../../components/_shared/Svg/Svg';
import { ErrorBoundary } from '../../components/_shared/ErrorBoundary';

export const TodoScreen: React.FC = () => {
  return (
    <ErrorBoundary>
      <View style={styles.wrap}>
        <Header
          title="To Do"
          actions={(
            <View style={styles.headerActions}>
              <Pressable>
                <Svg icon={SVG_ICONS.SEARCH} size={20} />
              </Pressable>
              <Pressable style={styles.headerAddButton}>
                <Svg icon={SVG_ICONS.ADD} size={28} />
              </Pressable>
            </View>
          )}
        />
        <View style={styles.content}>
          <TodoList />
        </View>
      </View>
    </ErrorBoundary>
  )
};
