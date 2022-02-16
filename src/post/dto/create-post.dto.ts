import { ApiProperty } from '@nestjs/swagger';
import { PrimaryGeneratedColumn } from 'typeorm';

export class CreatePostDto {
  @PrimaryGeneratedColumn()
  id?: string;

  @ApiProperty()
  title?: string;

  @ApiProperty()
  body?: string;
}
