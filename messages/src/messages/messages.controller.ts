import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  getMesages() {}

  @Get('/:id')
  getMesage() {}

  @Post()
  createMessage() {}
}
