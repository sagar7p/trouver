import { Pages } from '../reducers/page-reducer';

export function selectPage(page: Pages) {
    return {
        type: 'PAGE_CHANGED',
        payload: page
    };
}