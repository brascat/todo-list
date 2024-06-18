import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class ShareListOutputDto {
    @ApiProperty({
        required: true,
        type: () => Boolean
    })
    @Type(() => Boolean)
    success!: boolean;

    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    message!: string;
}

export { ShareListOutputDto as ShareListOutputDto };