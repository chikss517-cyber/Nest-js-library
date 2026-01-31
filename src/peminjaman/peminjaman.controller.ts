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
import { ApiTags, ApiOperation, ApiBody, ApiParam } from '@nestjs/swagger';

@ApiTags('Peminjaman')
@Controller('peminjaman')
export class PeminjamanController {
  constructor(private readonly peminjamanService: PeminjamanService) {}

  @Post()
  @ApiOperation({ summary: 'Create peminjaman buku' })
  @ApiBody({ type: CreatePeminjamanDto })
  create(@Body() createPeminjamanDto: CreatePeminjamanDto) {
    return this.peminjamanService.create(createPeminjamanDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all data peminjaman' })
  findAll() {
    return this.peminjamanService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get peminjaman by id' })
  @ApiParam({ name: 'id', type: Number })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.peminjamanService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update data peminjaman' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdatePeminjamanDto })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePeminjamanDto: UpdatePeminjamanDto,
  ) {
    return this.peminjamanService.update(id, updatePeminjamanDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete data peminjaman' })
  @ApiParam({ name: 'id', type: Number })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.peminjamanService.remove(id);
  }

  @Patch(':id/return')
  @ApiOperation({ summary: 'Return book (kembalikan buku)' })
  @ApiParam({ name: 'id', type: Number })
  returnBook(@Param('id', ParseIntPipe) id: number) {
    return this.peminjamanService.returnBook(id);
  }
}
