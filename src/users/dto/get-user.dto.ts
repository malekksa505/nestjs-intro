import { IsOptional, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ApiPropertyOptional } from "@nestjs/swagger";
export class GetUserDto {
    @ApiPropertyOptional({
        description: 'Get User With Specific ID.',
        example: 1
    })
    @IsOptional()
    @IsInt()
    @Type(()=> Number)
    id?: number;
}