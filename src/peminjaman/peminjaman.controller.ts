import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  ParseIntPipe,
} from '@nestjs/common';
import { PeminjamanService } from './peminjaman.service';
import { CreatePeminjamanDto } from './dto/create-peminjaman.dto';
import { UpdatePeminjamanDto } from './dto/update-peminjamana.dto';

@Controller('peminjaman')
export class PeminjamanController {
  constructor(private readonly peminjamanService: PeminjamanService) {}

  @Post()
  create(@Body() createPeminjamanDto: CreatePeminjamanDto) {
    return this.peminjamanService.create(createPeminjamanDto);
  }

  @Get()
  findAll() {
    return this.peminjamanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.peminjamanService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePeminjamanDto: UpdatePeminjamanDto,
  ) {
    return this.peminjamanService.update(id, updatePeminjamanDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.peminjamanService.remove(id);
  }

  @Patch(':id/return')
  returnBook(@Param('id', ParseIntPipe) id: number) {
    return this.peminjamanService.returnBook(id);
  }
}
