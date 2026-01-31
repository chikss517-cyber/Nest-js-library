import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { MembersService } from './members.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { ApiTags, ApiOperation, ApiBody, ApiParam } from '@nestjs/swagger';

@ApiTags('Members')
@Controller('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Post()
  @ApiOperation({ summary: 'Create new member' })
  @ApiBody({ type: CreateMemberDto })
  create(@Body() dto: CreateMemberDto) {
    return this.membersService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all members' })
  findAll() {
    return this.membersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get member by id' })
  @ApiParam({ name: 'id', type: Number })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.membersService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update member by id' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateMemberDto })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateMemberDto) {
    return this.membersService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete member by id' })
  @ApiParam({ name: 'id', type: Number })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.membersService.remove(id);
  }
}
