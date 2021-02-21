import { Document } from "mongoose";

export interface Astronaut extends Document {
    readonly name: string
    readonly age: number
    readonly surname: string
    readonly agency: string
}