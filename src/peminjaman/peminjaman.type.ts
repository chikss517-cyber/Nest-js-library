export type Peminjaman = {
  id: number;
  memberId: number;
  bookId: number;
  loanDate: string;
  returnDate?: string;
  createdAt: Date;
  updatedAt: Date;
};