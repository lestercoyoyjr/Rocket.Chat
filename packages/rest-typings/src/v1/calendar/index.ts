import type { ICalendarEvent } from '@rocket.chat/core-typings';

import type { CalendarEventCreateProps } from './CalendarEventCreateProps';
import type { CalendarEventListProps } from './CalendarEventListProps';
import type { CalendarEventImportProps } from './CalendarEventImportProps';
import type { CalendarEventInfoProps } from './CalendarEventInfoProps';
import type { CalendarEventUpdateProps } from './CalendarEventUpdateProps';
import type { CalendarEventDeleteProps } from './CalendarEventDeleteProps';

export * from './CalendarEventCreateProps';
export * from './CalendarEventDeleteProps';
export * from './CalendarEventImportProps';
export * from './CalendarEventInfoProps';
export * from './CalendarEventUpdateProps';
export * from './CalendarEventListProps';

export type CalendarEndpoints = {
	'/v1/calendar-events.create': {
		POST: (params: CalendarEventCreateProps) => void;
	};

	'/v1/calendar-events.list': {
		GET: (params: CalendarEventListProps) => { data: ICalendarEvent[] };
	};

	'/v1/calendar-events.info': {
		GET: (params: CalendarEventInfoProps) => { event: ICalendarEvent };
	};

	'/v1/calendar-events.import': {
		POST: (params: CalendarEventImportProps) => void;
	};

	'/v1/calendar-events.update': {
		POST: (params: CalendarEventUpdateProps) => void;
	};

	'/v1/calendar-events.delete': {
		POST: (params: CalendarEventDeleteProps) => void;
	};
};