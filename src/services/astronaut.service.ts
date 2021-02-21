import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { AstronautInput } from "../domain/inputs";
import { Astronaut } from "../domain/interfaces";

@Injectable()
export class AstronautService {

    constructor(
        @InjectModel('Astronaut') private readonly astronautModel: Model<Astronaut>
    ) { }

    async create(createAstronautDto: AstronautInput): Promise<Astronaut> {
        const createdAstronaut = new this.astronautModel(createAstronautDto)
        return await createdAstronaut.save()
    }

    async findAll(): Promise<Array<Astronaut>> {
        return await this.astronautModel.find().exec()
    }

}