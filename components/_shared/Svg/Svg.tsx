import React from 'react';
import { SvgXml } from 'react-native-svg';

import Sun from '../../../assets/images/svg/sun';
import Calendar from '../../../assets/images/svg/calendar';
import Blocks from '../../../assets/images/svg/blocks';
import Checkmark from '../../../assets/images/svg/checkmark';
import Add from '../../../assets/images/svg/add';
import Search from '../../../assets/images/svg/search';
import Priority from '../../../assets/images/svg/priority';

export const SVG_ICONS = {
  SUN: Sun,
  CALENDAR: Calendar,
  BLOCKS: Blocks,
  CHECKMARK: Checkmark,
  ADD: Add,
  SEARCH: Search,
  PRIORITY: Priority,
}

interface Props {
  icon: string;
  size?: number;
  color?: string;
}

export const Svg: React.FC<Props> = (props) => {
  const { size = 20, icon, color = '#000' } = props;

  return (
    <SvgXml xml={icon} width={size} height={size} color={color} />
  );
};
