import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class ShareListInputDto {
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    listId!: number;

    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    userId!: number;
}

export { ShareListInputDto as ShareListInputDto };