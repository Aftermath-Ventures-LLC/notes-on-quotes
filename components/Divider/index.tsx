import React, { FC } from 'react';
import { Bar } from './styles';

interface DividerProps {
  isHiddenDesktop?: boolean;
  isHiddenMobile?: boolean;
}

const Divider: FC<DividerProps> = ({
  isHiddenDesktop = false,
  isHiddenMobile = false,
}) => {
  return (
    <Bar isHiddenDesktop={isHiddenDesktop} isHiddenMobile={isHiddenMobile} />
  );
};

export default Divider;
