import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

@Controller('blogs')
export class BlogsController {
  @Get('recent')
  @UseGuards(JwtAuthGuard)
  async getRecentBlogs() {
    return [
      {
        title: 'test1',
        desc: 'lorem ipsum',
      },
      {
        title: 'test2',
        desc: 'lorem ipsum',
      },
      {
        title: 'test3',
        desc: 'lorem ipsum',
      },
      {
        title: 'test4',
        desc: 'lorem ipsum',
      },
    ];
  }
}
