import { NewsService } from "../Services/news.service";
import { Controller, Get, Query, Param } from "@nestjs/common";

@Controller('news')
export class NewsController {
    constructor(private readonly newsService: NewsService) {}

    // Endpoint para obter todas as notícias Pre-Match
    @Get('pre-match')
    async getPreMatchNews(
        @Query('order') order: 'asc' | 'desc' = 'asc',
        @Query('per_page') perPage: number = 25,
        @Query('page') page: number = 1
    ) {
        return this.newsService.getPreMatchNews(order, perPage, page);
    }

    // Endpoint para obter notícias Pre-Match por Season ID
    @Get('pre-match/seasons/:seasonId')
    async getPreMatchNewsBySeasonId(
        @Param('seasonId') seasonId: number,
        @Query('order') order: 'asc' | 'desc' = 'asc',
        @Query('per_page') perPage: number = 25,
        @Query('page') page: number = 1
    ) {
        return this.newsService.getPreMatchNewsBySeasonId(seasonId, order, perPage, page);
    }

    // Endpoint para obter notícias Pre-Match para Fixtures próximos
    @Get('pre-match/upcoming')
    async getPreMatchNewsForUpcomingFixtures(
        @Query('order') order: 'asc' | 'desc' = 'asc',
        @Query('per_page') perPage: number = 25,
        @Query('page') page: number = 1
    ) {
        return this.newsService.getPreMatchNewsForUpcomingFixtures(order, perPage, page);
    }

    // Endpoint para obter todas as notícias Post-Match
    @Get('post-match')
    async getPostMatchNews(
        @Query('order') order: 'asc' | 'desc' = 'asc',
        @Query('per_page') perPage: number = 25,
        @Query('page') page: number = 1
    ) {
        return this.newsService.getPostMatchNews(order, perPage, page);
    }

    // Endpoint para obter notícias Post-Match por Season ID
    @Get('post-match/seasons/:seasonId')
    async getPostMatchNewsBySeasonId(
        @Param('seasonId') seasonId: number,
        @Query('order') order: 'asc' | 'desc' = 'asc',
        @Query('per_page') perPage: number = 25,
        @Query('page') page: number = 1
    ) {
        return this.newsService.getPostMatchNewsBySeasonId(seasonId, order, perPage, page);
    }
}
