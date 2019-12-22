import styled from '@emotion/styled';
import { color, fontSize, space } from '../../styles/theme';

const Input = styled.input({
  position: 'relative',
  padding: space(2),
  fontSize: fontSize(2),
  border: `2px solid ${color('primary')}`,
});

export default Input;
