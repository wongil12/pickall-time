import { ViewProps } from '@@components/View/types';
import { FlexAlignType } from 'react-native';

interface AdditionalFlexViewProps {
  alignItems?: FlexAlignType;
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  alignSelf?: 'auto' | FlexAlignType;
  gap?: number;
}

export type FlexViewProps = ViewProps & AdditionalFlexViewProps;