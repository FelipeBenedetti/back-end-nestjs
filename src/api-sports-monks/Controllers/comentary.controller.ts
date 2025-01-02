import { Controller, Get, Param, Query } from '@nestjs/common';
import { CommentaryService } from '../Services/comentary.service';

@Controller('commentaries')
export class CommentaryController {
    constructor(private readonly commentaryService: CommentaryService) { }

    // Endpoint para obter todos os comentários
    @Get()
    async getAllCommentaries(
        @Query('per_page') perPage: number = 25,
        @Query('page') page: number = 1,
    ) {
        return await this.commentaryService.getAllCommentaries(perPage, page);
    }

    // Endpoint para obter os comentários de um fixture específico
    @Get('fixtures/:id')
    async getCommentariesByFixtureId(@Param('id') fixtureId: number) {
        return await this.commentaryService.getCommentariesByFixtureId(fixtureId);
    }
}
