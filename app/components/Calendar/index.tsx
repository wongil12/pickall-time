import { Flex } from '@@components/FlexView';
import { CalendarProps } from '@@components/Calendar/types';
import CalendarItem from '@@components/CalendarItem';
import CalendarHeader from '@@components/CalendarHeader';
import { useCalendar } from '@@components/Calendar/hooks';
import { useAppState } from '@@store/hooks';
import { endOfDay, format, isWithinInterval, startOfDay } from 'date-fns';
import { VIEW_WIDTH } from '@@constants';

function Calendar({ date, ...props }: CalendarProps) {
  const month = date.getMonth() + 1;
  const schedulesByMonth = useAppState((state) => state.scheduleSvc.schedulesByMonth);
  const calendarItemList = useCalendar(date);

  const scheduleList = schedulesByMonth[`${format(date, 'yyyy-MM')}`] ?? [];
  console.log(scheduleList[0].startAt.getDate(), scheduleList[0].endAt.getDate());

  return (
    <Flex.Vertical {...props} style={{ width: VIEW_WIDTH }} alignSelf='stretch'>
      <CalendarHeader />
      {calendarItemList.map((week, weekIndex) => (
        <Flex.Horizontal key={weekIndex} gap={2} flex={1}>
          {week.map((calendarItemDate) => {
            const filteredScheduleList = scheduleList.filter(({ startAt, endAt }) => {
              return isWithinInterval(calendarItemDate, {
                start: startOfDay(startAt),
                end: endOfDay(endAt),
              });
            });

            return (
              <CalendarItem
                key={`${calendarItemDate.getFullYear()}${calendarItemDate.getMonth()}${calendarItemDate.getDate()}`}
                date={calendarItemDate}
                scheduleList={filteredScheduleList}
                isPreview={month !== calendarItemDate.getMonth() + 1}
                flex={1}
              />
            );
          })}
        </Flex.Horizontal>
      ))}
    </Flex.Vertical>
  );
}

export default Calendar;
