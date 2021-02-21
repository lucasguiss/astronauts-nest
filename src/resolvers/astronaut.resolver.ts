import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Astronaut } from "../domain/interfaces";
import { AstronautService } from "../services";
import { CreateAstronaut } from "../domain/dto";
import { AstronautInput } from "../domain/inputs";

@Resolver()
export class AstronautResolver {

    constructor(
        private readonly astronautService: AstronautService
    ) {}
    
    @Query(() => String)
    async helloWorld() {
        return 'Hello world'
    }

    @Query(() => [CreateAstronaut])
    async findAllAstronauts(): Promise<Array<Astronaut>> {
        return this.astronautService.findAll()
    }

    @Mutation(() => CreateAstronaut)
    async createAstronaut(@Args('input') input: AstronautInput) {
        return this.astronautService.create(input)
    }
    
}