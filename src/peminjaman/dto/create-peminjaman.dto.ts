import { IsDateString, IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class CreatePeminjamanDto {
  @IsInt()
  @IsNotEmpty()
  memberId: number;

  @IsInt()
  @IsNotEmpty()
  bookId: number;

  @IsDateString()
  @IsNotEmpty()
  loanDate: string;

  @IsDateString()
  @IsOptional()
  returnDate?: string;
}
