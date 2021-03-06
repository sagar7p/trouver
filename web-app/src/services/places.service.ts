import { Place } from "../models/Place";
import { loadedPlaces } from '../App';

export class PlacesService {
    public static async getPlaces(userId: string | undefined): Promise<Place[]> {
        const url = "http://localhost:5001/api/places?userId=" + userId;

        return new Promise<Place[]>((resolve, reject) => {
            fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }).then((response: Response) => {
                response.json().then((data: Place[]) => {
                    console.log(data);
                    loadedPlaces.next({
                        completed: true,
                        placesArray: data,
                    });
                    resolve();
                });
            });
        });
    }
}
