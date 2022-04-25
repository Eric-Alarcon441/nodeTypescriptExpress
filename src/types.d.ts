import { Visibility, Weather } from './enums';

export interface DiaryEntry {
	id: number;
	date: string;
	weather: Weather;
	visibility: Visibility;
	comment: string;
}
// export type NotSensitiveInfoDiaryEntry = Pick<
// 	DiaryEntry,
// 	'id' | 'date' | 'weather' | 'visibility'
// >;

export type NotSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>;
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>;
