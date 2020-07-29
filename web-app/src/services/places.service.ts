import { Place } from "../models/Place";
import { plainToClass } from 'class-transformer';
import { loadedPlaces } from '../App';

export class PlacesService {
    public static async getPlaces(): Promise<Place[]> {
        const url = 'http://localhost:5001/api/places';
        return new Promise<Place[]>((resolve, reject) => {
            fetch(url, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                }
            }).then((response: Response) => {
                response.json().then((data: Place[]) => {
                    console.log(data);
                    loadedPlaces.next({
                        completed: true,
                        placesArray: data
                    });
                    resolve();
                })
            })
        });
    }

    // private convertDataToPlacesData(data: JSON): Place[] {
    //     const placesData: Place[] = [];
    //     data.array.forEach(element => {

    //     });
    // }
}