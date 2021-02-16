import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AstronautResolver } from "./astronaut.resolver";
import { AstronautSchema } from "./astronaut.schema";
import { AstronautService } from "./astronaut.service";

@Module({
    providers: [
        AstronautResolver,
        AstronautService
    ],
    imports: [
        MongooseModule.forFeature([{ name: 'Astronaut', schema: AstronautSchema }])
    ]
})
export class AstronautModule { }