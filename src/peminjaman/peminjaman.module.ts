import { Module } from '@nestjs/common';
import { PeminjamanController } from './peminjaman.controller';
import { PeminjamanService } from './peminjaman.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [PeminjamanController],
  providers: [PeminjamanService, PrismaService],
})
export class PeminjamanModule {}
