import { Module } from '@nestjs/common';
import { GlobalsService } from './globals.service';
import { GlobalsResolver } from './globals.resolver';

@Module({
  providers: [GlobalsResolver, GlobalsService]
})
export class GlobalsModule {}
