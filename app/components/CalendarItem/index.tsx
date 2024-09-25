import { Flex } from '@@components/FlexView';
import { BodySmallText } from '@@components/Text';
import CalendarLabel from '@@components/CalendarItem/CalendarLabel';
import styled from 'styled-components';
import { CalendarItemProps } from '@@components/CalendarItem/types';

const StyledCalendarItem = styled(Flex.Vertical)<{ isPreview: boolean }>`
  opacity: ${({ isPreview }) => (isPreview ? 0.5 : 1)};
`;

const StyleDateTextView = styled(Flex.Horizontal)`
  width: 32px;
  height: 32px;
`;

function CalendarItem({ scheduleList, date, isPreview, ...props }: CalendarItemProps) {
  return (
    <StyledCalendarItem alignItems='center' isPreview={!!isPreview} {...props}>
      <StyleDateTextView alignItems='center' justifyContent='center'>
        <BodySmallText>{date}</BodySmallText>
      </StyleDateTextView>
      <Flex.Vertical style={{ alignSelf: 'stretch' }} marginTop={4} gap={1}>
        {scheduleList?.map((schedule, index) => (
          <CalendarLabel key={index} schedule={schedule} />
        ))}
      </Flex.Vertical>
    </StyledCalendarItem>
  );
}

export default CalendarItem;
