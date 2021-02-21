import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AstronautService } from "../services";
import { AstronautResolver } from "../resolvers";
import { AstronautSchema } from "../schema";

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