import {
  Controller,
  Get,
  Post,
  Patch,
  Put,
  Delete,
  Param,
  Query,
  Body,
  Headers,
  Ip,
  ParseIntPipe,
  DefaultValuePipe,
  ValidationPipe,
} from '@nestjs/common';
import { query } from 'express';
import { UserCreateDTO } from './dto/users.dto';
import { GetUserDto } from './dto/get-user.dto';
import { PatchUserDto } from './dto/patch-user.dto';
import { UsersService } from './providers/users.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

/* 

http://localhost:3000/*users*

*/

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('/:id?')
  @ApiOperation({
    summary: 'Fetch a list of registered users on the application.'
  })
  @ApiResponse({
    status: 200,
    description: 'Users fetch successfully based on the query.'
  })
  @ApiQuery({
    name: 'limit',
    type: 'number',
    required: false,
    description: 'The number of entires retuned per query.',
    example: 12,
  })
  @ApiQuery({
    name: 'page',
    type: 'number',
    required: false,
    description: 'The position of the page number retuned per query.',
    example: 12,
  })
  public getUsers(
    @Param() getUserDto: GetUserDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(5), ParseIntPipe) page: number,
  ) {
    console.log(typeof getUserDto);
    console.log(getUserDto);

    console.log(typeof limit);
    console.log(limit);

    console.log(typeof page);
    console.log(page);

    return this.usersService.findAll(getUserDto, limit, page);
  }

  @Post()
  public createUsers(@Body() userCreateDTO: UserCreateDTO) {
    console.log(userCreateDTO);
    return 'a user is created.';
  }

  @Patch()
  public PathUser(@Body() patchUserDto: PatchUserDto) {
    console.log(patchUserDto);
    return 'Tm';
  }
}
