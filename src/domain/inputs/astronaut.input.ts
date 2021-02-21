import { Field, InputType, Int } from "@nestjs/graphql"

@InputType()
export class AstronautInput {
    @Field()
    readonly name: string

    @Field(() => Int)
    readonly age: number

    @Field()
    readonly surname: string

    @Field()
    readonly agency: string
}