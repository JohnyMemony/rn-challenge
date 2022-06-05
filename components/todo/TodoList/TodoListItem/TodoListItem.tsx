import React from 'react';
import { Text, View } from 'react-native';
import { TodoItem } from '../../../../types/todo';
import { styles } from './TodoListItem.styles';
import { Badge, Checkbox } from 'native-base';
import Colors from '../../../../constants/Colors';
import { Svg, SVG_ICONS } from '../../../_shared/Svg/Svg';

interface Props {
  data: TodoItem,
  onUpdate(id: number): void;
}

export const TodoListItem: React.FC<Props> = (props) => {
  const { data, onUpdate } = props;
  const { title, id, completed } = data;

  const handleCheckboxChange = () => {
    onUpdate(id);
  };

  return (
    <View style={styles.wrap}>
      <View style={styles.head}>
        <View style={styles.titleWrap}>
          <View style={styles.priorityIcon}>
            <Svg icon={SVG_ICONS.PRIORITY} size={10} />
          </View>
          <Text style={[styles.title, completed && styles.titleCompleted]}>{title}</Text>
        </View>
        <Checkbox
          value="test"
          isChecked={completed}
          borderRadius={50}
          borderColor={Colors.grey}
          accessibilityLabel="checkbox"
          onChange={handleCheckboxChange}
        />
      </View>
      <View style={styles.badges}>
        <Badge style={[styles.badge, { backgroundColor: '#B3FFDA' }]}>Home</Badge>
        <Badge style={[styles.badge, { backgroundColor: '#D3FAA3' }]}>Celebration</Badge>
        <Badge style={[styles.badge, { backgroundColor: '#FFFF8F' }]}>Chores</Badge>
      </View>
    </View>
  )
}
