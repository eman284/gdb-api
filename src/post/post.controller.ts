import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  getAll() {
    return this.postService.getAll();
  }

  @Get('/:id')
  findById(@Param('id') id: string) {
    return this.postService.getById(id);
  }

  @Post()
  create(@Body() post: CreatePostDto): Promise<CreatePostDto> {
    return this.postService.create(post);
  }

  @Put()
  update(@Body() post: UpdatePostDto): Promise<UpdatePostDto> {
    return this.postService.update(post);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.postService.delete(id);
  }
}
