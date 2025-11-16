import { MarkingType } from "./enums/markingType.enum";

export default interface HistoryOfReadingInterface {
    id?: string;
    bookId: string;
    dateRead: Date;
	notes?: string;
	markingType?: MarkingType; // original: markingType
	readingPosition?: number; // original: readingPosition
}


