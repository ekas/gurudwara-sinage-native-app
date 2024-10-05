import { useCalendarApp, ScheduleXCalendar } from "@schedule-x/react";
import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from "@schedule-x/calendar";
import { createEventsServicePlugin } from "@schedule-x/events-service";

import "@schedule-x/theme-default/dist/index.css";
import { useEffect } from "react";

function CalendarApp() {
  const plugins = [createEventsServicePlugin()];

  const calendar = useCalendarApp(
    {
      views: [
        createViewDay(),
        createViewWeek(),
        createViewMonthGrid(),
        createViewMonthAgenda(),
      ],
      events: [
        {
          id: "1",
          title: "Asa Di Vaar Program",
          start: "2024-10-05 06:00",
          end: "2024-10-05 09:00",
        },
        {
          id: "2",
          title: "Samapti",
          start: "2024-10-05 09:00",
          end: "2024-10-05 11:00",
        },
        {
          id: "3",
          title: "Kids Kirtan Classes",
          start: "2024-10-10 06:00",
          end: "2024-10-10 09:00",
        },
      ],
    },
    plugins
  );

  useEffect(() => {
    // get all events
    calendar.eventsService.getAll();
  }, []);

  return (
    <div>
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  );
}

export default CalendarApp;
