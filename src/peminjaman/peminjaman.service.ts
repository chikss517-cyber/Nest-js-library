import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePeminjamanDto } from './dto/create-peminjaman.dto';
import { UpdatePeminjamanDto } from './dto/update-peminjamana.dto';

@Injectable()
export class PeminjamanService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreatePeminjamanDto) {
    // cek member
    const member = await this.prisma.member.findUnique({
      where: { id: dto.memberId },
    });

    if (!member) {
      throw new BadRequestException('Member tidak ditemukan');
    }

    // cek buku
    const book = await this.prisma.book.findUnique({
      where: { id: dto.bookId },
    });

    if (!book) {
      throw new BadRequestException('Buku tidak ditemukan');
    }

    return this.prisma.peminjaman.create({
      data: {
        memberId: dto.memberId,
        bookId: dto.bookId,
        loanDate: new Date(dto.loanDate),
        returnDate: dto.returnDate ? new Date(dto.returnDate) : null,
        status: 'DIPINJAM',
      },
    });
  }

  async findAll() {
    return this.prisma.peminjaman.findMany({
      orderBy: { id: 'asc' },
      include: {
        book: true,
        member: true,
      },
    });
  }

  async findOne(id: number) {
    const peminjaman = await this.prisma.peminjaman.findUnique({
      where: { id },
      include: {
        book: true,
        member: true,
      },
    });

    if (!peminjaman) {
      throw new NotFoundException('Peminjaman not found');
    }

    return peminjaman;
  }

  async update(id: number, dto: UpdatePeminjamanDto) {
    await this.findOne(id);

    return this.prisma.peminjaman.update({
      where: { id },
      data: {
        ...(dto.memberId && { memberId: dto.memberId }),
        ...(dto.bookId && { bookId: dto.bookId }),
        ...(dto.loanDate && { loanDate: new Date(dto.loanDate) }),
        ...(dto.returnDate && { returnDate: new Date(dto.returnDate) }),
        ...(dto.status && { status: dto.status }),
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    await this.prisma.peminjaman.delete({
      where: { id },
    });

    return { message: `Peminjaman with id ${id} deleted` };
  }

  async returnBook(id: number) {
    const peminjaman = await this.prisma.peminjaman.findUnique({
      where: { id },
    });

    if (!peminjaman) {
      throw new NotFoundException('Data peminjaman tidak ditemukan');
    }

    if (peminjaman.status === 'DIKEMBALIKAN') {
      return { message: 'Buku sudah dikembalikan sebelumnya' };
    }

    return this.prisma.peminjaman.update({
      where: { id },
      data: {
        returnDate: new Date(),
        status: 'DIKEMBALIKAN',
      },
    });
  }
}
