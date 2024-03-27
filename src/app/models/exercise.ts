import { Segment } from "./segment";

export class Exercise {
    constructor(public id: string, public name: string, public segments: Segment[], public repeat: number){}
}