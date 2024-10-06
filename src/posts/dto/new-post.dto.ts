import {
  IsEmail,
  IsString,
  IsNotEmpty,
  IsOptional,
  Matches,
  IsEnum,
  IsDateString,
  minLength,
  MinLength,
  isNotEmpty,
  IsJSON,
  IsUrl,
  IsISO8601,
  IsArray,
} from 'class-validator';
import { postType } from '../enums/post-type.enum';
import { postStatus } from '../enums/post-status.enum';

export class NewPostDTO {
  @IsString()
  @MinLength(4)
  @IsNotEmpty()
  title: string;

  @IsEnum(postType)
  @IsNotEmpty()
  postType: postType;

  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      'a slug should be all small letters ans uses only "-" and without spaces',
  })
  slug: string;

  @IsNotEmpty()
  @IsEnum(postStatus)
  status: postStatus;

  @IsString()
  @IsOptional()
  content?: string;

  @IsJSON()
  @IsOptional()
  schema?: string;

  @IsOptional()
  @IsUrl()
  featuredImageUrl?: String;

  @IsISO8601()
  @IsOptional()
  publishOn: string;

  @IsOptional()
  @IsArray()
  @IsString({
    each: true
  })
  @MinLength(3,{each: true})
  tags: string[];


  metaOptions: [{key: 'sidebarEnabled'; value: true}];
}