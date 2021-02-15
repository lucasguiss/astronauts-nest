import { Module } from "@nestjs/common";
import { AstronautResolver } from "./astronaut.resolver";

@Module({
    providers: [
        AstronautResolver
    ]
})
export class AstronautModule {}