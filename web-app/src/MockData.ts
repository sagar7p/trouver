import { Place } from './models/Place';

const randomTrailLength = (): number => {
    return Math.random() * (10.5 - 4.0) + 4.0;
}

const randomElevation = (): number => {
    return Math.random() * (1250 - 300) + 300;
}

export const places: Place[] = [
    {
        location: {
            coordinates: [-25.6, 10.1],
            type: 'Point'
        },
        id: 'place1',
        name: 'Mt. Storm King',
        dataCreated: 'Tue Jul 28 2020 13:16:22 GMT-0700 (Pacific Daylight Time)',
        image: {
            url: 'https://www.reneeroaming.com/wp-content/uploads/2018/10/Olympic-National-Park-Adventure-Getaway-24-Hour-Itinerary-from-Seattle-Renee-Roaming-Mount-Storm-King-Hike-BANNER.jpg',
            height: 500,
            width: 500
        },
        weather: '70',
        trailLength: randomTrailLength(),
        elevation: randomElevation()
    },
    {
        location: {
            coordinates: [-48.1, 51.2],
            type: 'Point'
        },
        id: 'place2',
        name: 'Mt. Rainier',
        dataCreated: 'Tue Jul 28 2020 13:16:22 GMT-0700 (Pacific Daylight Time)',
        image: {
            url: 'https://2is1ib1gauzt43v0d61gfhsq-wpengine.netdna-ssl.com/wp-content/uploads/2015/07/DSC_0787_6stackweb_for-web.jpg',
            height: 500,
            width: 500
        },
        weather: '70',
        trailLength: randomTrailLength(),
        elevation: randomElevation()
    },
    {
        location: {
            coordinates: [88, 99.2],
            type: 'Point'
        },
        id: 'place1',
        name: 'Mt. St. Helens',
        dataCreated: 'Tue Jul 28 2020 13:16:22 GMT-0700 (Pacific Daylight Time)',
        image: {
            url: 'https://www.nationalgeographic.com/content/dam/science/2020/05/18/mount-saint-helens/h_15261311.adapt.1900.1.jpg',
            height: 500,
            width: 500
        },
        weather: '70',
        trailLength: randomTrailLength(),
        elevation: randomElevation()
    },
    {
        location: {
            coordinates: [61, 101.1],
            type: 'Point'
        },
        id: 'place1',
        name: 'Garibaldi Lake',
        dataCreated: 'Tue Jul 28 2020 13:16:22 GMT-0700 (Pacific Daylight Time)',
        image: {
            url: 'https://www.tripsavvy.com/thmb/WRAUnJ9Xtg9G7Rs1oZSOeUaHnEw=/2121x1414/filters:fill(auto,1)/GettyImages-10056983281-5b613f4d46e0fb0050f1e3bf.jpg',
            height: 500,
            width: 500
        },
        weather: '70',
        trailLength: randomTrailLength(),
        elevation: randomElevation()
    },
    {
        location: {
            coordinates: [2, 22.1],
            type: 'Point'
        },
        id: 'place1',
        name: 'Zion National Park',
        dataCreated: 'Tue Jul 28 2020 13:16:22 GMT-0700 (Pacific Daylight Time)',
        image: {
            url: 'https://s27135.pcdn.co/wp-content/uploads/2020/05/Best-hikes-in-Zion-National-Park.jpg.optimal.jpg',
            height: 500,
            width: 500
        },
        weather: '70',
        trailLength: randomTrailLength(),
        elevation: randomElevation()
    },
    {
        location: {
            coordinates: [-20, 66.1],
            type: 'Point'
        },
        id: 'place1',
        name: 'Yellowstone National Park',
        dataCreated: 'Tue Jul 28 2020 13:16:22 GMT-0700 (Pacific Daylight Time)',
        image: {
            url: 'https://www.visittheusa.com/sites/default/files/styles/hero_l_x2/public/images/hero_media_image/2016-10/Yellowstone.jpg?itok=8Q41-gXU',
            height: 500,
            width: 500
        },
        weather: '70',
        trailLength: randomTrailLength(),
        elevation: randomElevation()
    },
    {
        location: {
            coordinates: [73.6, 113],
            type: 'Point'
        },
        id: 'place1',
        name: 'El Capitan',
        dataCreated: 'Tue Jul 28 2020 13:16:22 GMT-0700 (Pacific Daylight Time)',
        image: {
            url: 'https://www.visittheusa.com/sites/default/files/styles/hero_l_x2/public/images/hero_media_image/2017-01/Web%20shutterstock_258887726.jpg?itok=egho2eQl',
            height: 500,
            width: 500
        },
        weather: '70',
        trailLength: randomTrailLength(),
        elevation: randomElevation()
    },
    {
        location: {
            coordinates: [40.6, -77],
            type: 'Point'
        },
        id: 'place1',
        name: 'Banff National Park',
        dataCreated: 'Tue Jul 28 2020 13:16:22 GMT-0700 (Pacific Daylight Time)',
        image: {
            url: 'https://cdn.audleytravel.com/1050/751/79/1314674-banff-national-park-alberta.webp',
            height: 500,
            width: 500
        },
        weather: '70',
        trailLength: randomTrailLength(),
        elevation: randomElevation()
    },
    {
        location: {
            coordinates: [15.6, 22],
            type: 'Point'
        },
        id: 'place1',
        name: 'Glacier National Park',
        dataCreated: 'Tue Jul 28 2020 13:16:22 GMT-0700 (Pacific Daylight Time)',
        image: {
            url: 'https://w4i6y9x4.stackpathcdn.com/wp-content/uploads/2018/08/AdobeStock_108028204-1080x675.jpeg',
            height: 500,
            width: 500
        },
        weather: '70',
        trailLength: randomTrailLength(),
        elevation: randomElevation()
    }
]