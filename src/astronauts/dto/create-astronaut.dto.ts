import { ID } from "@nestjs/graphql"
import { Field, Int, ObjectType } from "type-graphql"

@ObjectType()
export class AstronautType {
    
    @Field(() => ID)
    readonly id: string

    @Field()
    readonly name: string

    @Field(() => Int)
    readonly age: number

    @Field()
    readonly surname: string

    @Field()
    readonly agency: string

}