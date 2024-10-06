import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './services/posts.service';
import { ApiTags } from '@nestjs/swagger';
import { NewPostDTO } from './dto/new-post.dto';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Get('/:userId?')
  public getPosts(@Param('userId') userId: string) {
    return this.postService.findAll(userId);
  }

  @Post('/new')
  public newPost(@Body() newPostDTP: NewPostDTO) {
    return 'Post Created!'
  }
}
