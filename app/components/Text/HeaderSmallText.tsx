import { Text, TextProps } from 'react-native';
import styled from 'styled-components';

const StyledHeaderSmallText = styled(Text)`
  font-family: 'PickAllAsapBold';
  font-size: 20px;
  line-height: 26px;
`;

export function HeaderSmallText(props: TextProps) {
  return <StyledHeaderSmallText {...props} />;
}
