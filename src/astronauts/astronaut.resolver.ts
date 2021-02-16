import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { AstronautService } from "./astronaut.service";
import { AstronautType } from "./dto/create-astronaut.dto";
import { AstronautInput } from "./inputs/astronaut.input";
import { Astronaut } from "./interfaces/astronaut.interface";

@Resolver()
export class AstronautResolver {

    constructor(
        private readonly astronautService: AstronautService
    ) {}
    
    @Query(() => String)
    async helloWorld() {
        return 'Hello world'
    }

    @Query(() => [AstronautType])
    async findAllAstronauts(): Promise<Array<Astronaut>> {
        return this.astronautService.findAll()
    }

    @Mutation(() => AstronautType)
    async createAstronaut(@Args('input') input: AstronautInput) {
        return this.astronautService.create(input)
    }
    
}