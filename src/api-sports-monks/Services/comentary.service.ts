import { Injectable } from '@nestjs/common';
import { SoccerClientService } from '../sportsMonks.service';

@Injectable()
export class CommentaryService {
    constructor(private readonly soccerClientService: SoccerClientService) { }

    // Método para obter todos os comentários
    async getAllCommentaries(perPage: number = 25, page: number = 1) {
        const endpoint = 'commentaries';
        const params = { per_page: perPage, page };
        return this.soccerClientService.get(endpoint, params);
    }

    // Método para obter os comentários de um fixture específico por ID
    async getCommentariesByFixtureId(fixtureId: number) {
        const endpoint = `commentaries/fixtures/${fixtureId}`;
        return this.soccerClientService.get(endpoint);
    }
}
