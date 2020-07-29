export interface LocationObject {
    coordinates: number[];
    type: string;
}
export interface Place {
    location: LocationObject;
    id: string;
    name: string;
    dataCreated: string;
    imageUrl: string;
    weather?: string;
    trailLength?: number;
    elevation?: number;
}