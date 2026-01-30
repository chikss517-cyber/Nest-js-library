import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { RolesGuard } from '../auth/guard/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from '@prisma/client';

@Controller('test')
export class TestController {
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @Get('admin')
  adminOnly() {
    return 'ADMIN OK';
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.PETUGAS)
  @Get('petugas')
  petugasOnly() {
    return 'PETUGAS OK';
  }

  @UseGuards(JwtAuthGuard)
  @Get('member')
  member() {
    return 'MEMBER OK';
  }
}
