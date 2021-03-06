import styled from '@emotion/styled';
import Container from '../../elements/Container';
import { fontSize, space, bp } from '../../styles/theme';

export const FooterContainer = styled(Container)({
  flexDirection: 'column',
  marginTop: space(6),
  paddingTop: space(2),
  paddingBottom: space(2),
  fontSize: fontSize(0),
  textAlign: 'center',

  [bp(0)]: {
    flexDirection: 'row',
    minHeight: space(6),
    fontSize: fontSize(1),
    alignItems: 'center',
    textAlign: 'left',
  },
});

const InnerContent = styled.div({
  paddingTop: space(1),
  paddingBottom: space(1),
});

export const LeftContent = styled(InnerContent)({
  order: 2,

  [bp(0)]: {
    flexGrow: 1,
  },
});

export const RightContent = styled(InnerContent)({
  [bp(0)]: {
    order: 2,
  },
});
