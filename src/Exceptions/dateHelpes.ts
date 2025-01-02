import { InvalidDateFormatException } from './invalidDateFormatException';

export class DateHelper {
    static validateDateFormat(date: string): boolean {
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        if (!regex.test(date)) {
            throw new InvalidDateFormatException(date);
        }
        return true;
    }
}
