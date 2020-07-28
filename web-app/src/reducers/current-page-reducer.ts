import { Pages } from "./page-reducer";

const initialState = {
    currentPage: Pages.GridView
}
export default function (state: any, action: any) {
    switch(action.type) {
        case "PAGE_CHANGED":
            return action.payload;
    }
    return initialState;
}