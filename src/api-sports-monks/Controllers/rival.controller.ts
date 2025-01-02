import { Controller, Get, Param, Query } from '@nestjs/common';
import { RivalService } from '../Services/rival.service';

@Controller('rivals')
export class RivalController {
    constructor(private readonly rivalService: RivalService) { }

    // Endpoint para obter todos os rivais
    @Get()
    async getAllRivals(
        @Query('per_page') perPage: number = 25,
        @Query('page') page: number = 1,
    ) {
        return await this.rivalService.getAllRivals(perPage, page);
    }

    // Endpoint para obter os rivais de um time específico
    @Get('teams/rivals/:id')
    async getRivalsByTeamId(@Param('id') id: number) {
        return await this.rivalService.getRivalsByTeamId(id);
    }
}
