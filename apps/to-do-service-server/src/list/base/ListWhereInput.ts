/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IntFilter } from "../../util/IntFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { NoteListRelationFilter } from "../../note/base/NoteListRelationFilter";
import { EnumListStatus } from "./EnumListStatus";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class ListWhereInput {
  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  id?: IntFilter;

  @ApiProperty({
    required: false,
    type: () => NoteListRelationFilter,
  })
  @ValidateNested()
  @Type(() => NoteListRelationFilter)
  @IsOptional()
  @Field(() => NoteListRelationFilter, {
    nullable: true,
  })
  notes?: NoteListRelationFilter;

  @ApiProperty({
    required: false,
    enum: EnumListStatus,
  })
  @IsEnum(EnumListStatus)
  @IsOptional()
  @Field(() => EnumListStatus, {
    nullable: true,
  })
  status?: "InProgress" | "Done" | "NotStarted";

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  title?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput;
}

export { ListWhereInput as ListWhereInput };
