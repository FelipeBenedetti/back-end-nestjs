import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { SoccerClientService } from './sportsMonks.service';
import { CoachController } from './Controllers/coach.Controller';
import { CoachService } from './Services/coach.service';
import { FixtureController } from './Controllers/fixture.controller';
import { FixtureService } from './Services/fixture.service';
import { TeamController } from './Controllers/team.controller';
import { TeamService } from './Services/team.service';
import { CommentaryService } from './Services/comentary.service';
import { CommentaryController } from './Controllers/comentary.controller';
import { LiveScoreController } from './Controllers/liveScore.controller';
import { LiveScoreService } from './Services/liveScore.service';
import { StateService } from './Services/states.services';
import { LeagueService } from './Services/league.service';
import { SeasonService } from './Services/season.service';
import { StageStatisticsService, StatisticsService } from './Services/statistics.service';
import { SchedulesService } from './Services/schedules.service';
import { StageService } from './Services/stage.service';
import { RoundService } from './Services/round.service';
import { StandingService } from './Services/standing.service';
import { TopScorerService } from './Services/topScorer.service';
import { PlayerService } from './Services/player.service';
import { StateController } from './Controllers/states.controller';
import { LeagueController } from './Controllers/league.controller';
import { SeasonController } from './Controllers/season.controller';
import { StatisticsController } from './Controllers/statistics.controller';
import { SchedulesController } from './Controllers/schedules.controller';
import { StageController } from './Controllers/stage.controller';
import { RoundController } from './Controllers/round.controller';
import { StandingController } from './Controllers/standing.controller';
import { TopScorerController } from './Controllers/topScorer.controller';
import { PlayerController } from './Controllers/player.controller';
import { RoundStatisticsService } from './Services/statistics.service';
import { TeamSquadController } from './Controllers/teamSquad.controller';
import { TeamSquadService } from './Services/teamSquad.service';
import { RefereeService } from './Services/referee.service';
import { RefereeController } from './Controllers/referee.controller';
import { TVController } from './Controllers/tvStation.controller';
import { TVService } from './Services/tvStation.service';
import { VenuesService } from './Services/venues.service';
import { VenuesController } from './Controllers/venues.controller';
import { ExpectedXGService } from './Services/expectedXG.service';
import { ExpectedXGController } from './Controllers/expectedXG.controller';
import { PredictionService } from './Services/prediction.service';
import { PredictionController } from './Controllers/prediction.controller';
import { InplayOddsService } from './Services/oddAoVivo.service';
import { OddsService } from './Services/oddPreMatch.service';
import { OddsController } from './Controllers/oddPreMatch.controller';
import { InplayOddsController } from './Controllers/oddAoVivo.controller';
import { NewsService } from './Services/news.service';
import { NewsController } from './Controllers/news.controller';
import { RivalService } from './Services/rival.service';
import { RivalController } from './Controllers/rival.controller';


@Module({
    imports: [HttpModule],
    controllers: [
        CoachController,
        CommentaryController,
        ExpectedXGController,
        FixtureController,
        LeagueController,
        LiveScoreController,
        NewsController,
        OddsController,
        InplayOddsController,
        PlayerController,
        TeamController,
        PredictionController,
        RefereeController,
        RivalController,
        RoundController,
        SchedulesController,
        SeasonController,
        StageController,
        StandingController,
        StateController,
        StatisticsController,
        TeamController,
        TeamSquadController,
        TopScorerController,
        TVController,
        VenuesController,
        
    ],
    providers: [
        LiveScoreService,
        FixtureService,
        StateService,
        LeagueService,
        SeasonService,
        StatisticsService,
        SchedulesService,
        StageService,
        RoundService,
        StandingService,
        TopScorerService,
        TeamService,
        TeamSquadService,
        PlayerService,
        SoccerClientService,
        CoachService,
        CommentaryService,
        RoundStatisticsService,
        StageStatisticsService,
        CoachService,
        RefereeService,
        TVService,
        VenuesService,
        ExpectedXGService,
        PredictionService,
        OddsService,
        InplayOddsService,
        NewsService,
        RivalService,
    ],
})
export class SportsMonksModule { }
