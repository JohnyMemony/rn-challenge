import { StyleSheet } from 'react-native';
import Colors from '../../../../constants/Colors';

export const styles = StyleSheet.create({
  wrap: {
    marginBottom: 9,
    borderRadius: 9,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderColor: Colors.grey,
  },
  priorityIcon: {
    marginRight: 5,
  },
  titleWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    paddingRight: 20,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20,
    color: Colors.black,
  },
  titleCompleted: {
    textDecorationLine: 'line-through',
  },
  checkbox: {
    borderRadius: 50,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  badges: {
    flexDirection: 'row',
    paddingTop: 8,
  },
  badge: {
    marginRight: 3,
    borderRadius: 5,
  },
});
