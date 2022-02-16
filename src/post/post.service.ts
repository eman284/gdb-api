import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { UpdatePostDto } from './dto/update-post.dto';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostService {
  constructor(@InjectRepository(Post) private postRepo: Repository<Post>) {}

  async create(post: CreatePostDto): Promise<CreatePostDto> {
    return this.postRepo.save(post);
  }

  async getAll(): Promise<Post[]> {
    return this.postRepo.find();
  }

  async getById(id: string): Promise<Post> {
    return this.postRepo.findOne(id);
  }

  async update(post: UpdatePostDto): Promise<UpdatePostDto> {
    await this.getById(post.id);
    return this.postRepo.save(post);
  }

  delete(id: string) {
    this.postRepo.delete(id);
  }
}
