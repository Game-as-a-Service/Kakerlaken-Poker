import { Module } from '@nestjs/common';
import { DeveloperModule } from './developer/developer.module';

@Module({
  imports: [DeveloperModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
