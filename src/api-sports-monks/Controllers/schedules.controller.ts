import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { SchedulesService } from '../Services/schedules.service';


@Controller('schedules')
export class SchedulesController {
    constructor(private readonly schedulesService: SchedulesService) { }

    // Endpoint para obter schedules por Season ID
    @Get('seasons/:seasonId')
    async getSchedulesBySeason(@Param('seasonId', ParseIntPipe) seasonId: number): Promise<any> {
        return this.schedulesService.getSchedulesBySeasonId(seasonId);
    }

    // Endpoint para obter schedules por Team ID
    @Get('teams/:teamId')
    async getSchedulesByTeam(@Param('teamId', ParseIntPipe) teamId: number): Promise<any> {
        return this.schedulesService.getSchedulesByTeamId(teamId);
    }

    // Endpoint para obter schedules por Season ID e Team ID
    @Get('seasons/:seasonId/teams/:teamId')
    async getSchedulesBySeasonAndTeam(
        @Param('seasonId', ParseIntPipe) seasonId: number,
        @Param('teamId', ParseIntPipe) teamId: number,
    ): Promise<any> {
        return this.schedulesService.getSchedulesBySeasonAndTeamId(seasonId, teamId);
    }
}
