import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class CreatePeminjamanDto {
  @ApiProperty({ example: 1, description: 'ID Member' })
  @IsInt()
  @IsNotEmpty()
  memberId: number;

  @ApiProperty({ example: 2, description: 'ID Book' })
  @IsInt()
  @IsNotEmpty()
  bookId: number;

  @ApiProperty({ example: '2026-01-19', description: 'Tanggal pinjam' })
  @IsDateString()
  @IsNotEmpty()
  loanDate: string;

  @ApiProperty({
    example: '2026-01-25',
    description: 'Tanggal pengembalian',
    required: false,
  })
  @IsDateString()
  @IsOptional()
  returnDate?: string;
}
