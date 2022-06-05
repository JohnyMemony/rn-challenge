import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';
import { screenFreeSpace } from '../../../constants/Layout';

export const styles = StyleSheet.create({
  wrap: {
    height: 100,
    paddingTop: 40,
    paddingBottom: 13,
    paddingHorizontal: screenFreeSpace,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 19,
    fontWeight: '700',
    color: Colors.white,
  },
});
