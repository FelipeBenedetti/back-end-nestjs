import { Controller, Get, Query } from '@nestjs/common';
import { LiveScoreService } from '../Services/liveScore.service';

@Controller('livescores')
export class LiveScoreController {
    constructor(private readonly liveScoreService: LiveScoreService) { }

    @Get('all')
    async getAllLiveMatches(@Query('includes') includes: string) {
        const includesArray = includes ? includes.split(',') : [];
        return await this.liveScoreService.getAllLiveMatches(includesArray);
    }

    @Get('filter')
    async getFilteredLiveMatches(
        @Query() filters: Record<string, any>,
        @Query('includes') includes: string,
    ) {
        const includesArray = includes ? includes.split(',') : [];
        return await this.liveScoreService.getLiveMatchesWithFilters(filters, includesArray);
    }
}


/* Include options
sport round stage group aggregate league
seasoncoaches tvStations venue state
weatherReport lineups events timeline
comments trends statistics periods
participants  oddspremiumOdds 
inplayOdds prematchNews  postmatchNews
metadata sidelinedpredictions referees 
formations ballCoordinates scores  xGFixture */