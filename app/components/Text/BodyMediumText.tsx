import { Text } from '@@components/Text/Text';
import { TextProps } from '@@components/Text/types';
import styled from 'styled-components';

const StyledBodyMediumText = styled(Text)`
  font-family: 'PickAllPretendardRegular';
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.2px;
`;

export function BodyMediumText(props: TextProps) {
  return <StyledBodyMediumText {...props} />;
}
