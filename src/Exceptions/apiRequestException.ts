import { HttpException, HttpStatus } from '@nestjs/common';

export class ApiRequestException extends HttpException {
    constructor(message: string) {
        super(message, HttpStatus.BAD_REQUEST);
    }
}
