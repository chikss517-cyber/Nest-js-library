import { IsOptional, IsInt, IsDateString, IsEnum } from 'class-validator';
import { StatusPeminjaman } from '@prisma/client';

export class UpdatePeminjamanDto {
  @IsOptional()
  @IsInt()
  memberId?: number;

  @IsOptional()
  @IsInt()
  bookId?: number;

  @IsOptional()
  @IsDateString()
  loanDate?: string;

  @IsOptional()
  @IsDateString()
  returnDate?: string;

  @IsOptional()
  @IsEnum(StatusPeminjaman)
  status?: StatusPeminjaman;
}
