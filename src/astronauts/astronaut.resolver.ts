import { Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class AstronautResolver {

    @Query(() => String)
    async helloWorld() {
        return 'Hello world'
    }
    
}