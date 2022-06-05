import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import { screenFreeSpace } from '../../constants/Layout';

export const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: Colors.mainBlue,
  },
  content: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    paddingHorizontal: screenFreeSpace,
    paddingVertical: 18,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerAddButton: {
    marginLeft: 15,
  },
});
