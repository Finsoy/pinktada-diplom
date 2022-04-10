import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { TokensModule } from './tokens/tokens.module';
import { ApartmentsModule } from './apartments/apartments.module';
import { PostgresDBConfigService } from './config/postgres.config.service';
import { MongooseConfigService } from './config/mongoDB.config.service';
import { PaymentModule } from './payment/payment.module';
import { TripsModule } from './trips/trips.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
      inject: [MongooseConfigService],
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresDBConfigService,
      inject: [PostgresDBConfigService],
    }),
    AuthModule,
    TokensModule,
    ApartmentsModule,
    PaymentModule,
    TripsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
