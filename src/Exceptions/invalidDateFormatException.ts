import { BadRequestException } from '@nestjs/common';

export class InvalidDateFormatException extends BadRequestException {
    constructor(message: string) {
        super(`Invalid date format: ${message}`);
    }
}
