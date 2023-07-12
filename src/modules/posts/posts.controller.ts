import { Controller, Get } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get('/')
  async getPosts() {
    return [
      { id: 1, title: 'post 1', desc: 'lorem ipsum' },
      { id: 2, title: 'post 2', desc: 'lorem ipsum' },
    ];
  }
}
