import { PartialType } from "@nestjs/mapped-types";
import { UserCreateDTO } from "./users.dto";

export class PatchUserDto extends PartialType(UserCreateDTO) {}