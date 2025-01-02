import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { SportsMonksModule } from './api-sports-monks/sportsMonks.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    HttpModule,
    SportsMonksModule,
  ],
})
export class AppModule { }
