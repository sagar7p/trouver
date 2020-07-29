export interface LocationObject {
    coordinates: number[];
    type: string;
}

export interface ImageObject {
    url: string;
    height: number;
    width: number;
}

export interface Place {
    location: LocationObject;
    id: string;
    name: string;
    dataCreated: string;
    image: ImageObject;
    weather?: string;
    trailLength?: number;
    elevation?: number;
}