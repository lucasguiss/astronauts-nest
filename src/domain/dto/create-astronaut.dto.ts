import { Field, Int, ObjectType, ID } from "@nestjs/graphql"

@ObjectType()
export class CreateAstronaut {
    
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