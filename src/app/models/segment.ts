import { SegmentType } from "./segment-type";

export class Segment {
    constructor(public id: string, public description: string, public colour: string, public duration: number, public type: SegmentType){}
}