import { LocationInfo } from './types'

export const initialViewState = {
  latitude: 23.197275,
  longitude: 72.631196, 
  zoom: 11.5,
}

export const majorCitiesLocationInfo: LocationInfo[] = [
  {
    placeName: 'Karnavati University, Gandhinagar, Gujarat',
    latLng: [23.2026224, 72.5702862],
  },
  {
    placeName: 'Mansa, Gandhinagar, Gujarat',
    latLng: [23.422890, 72.648843],
  },
  {
    placeName: 'Ahmedabad, Gujarat',
    latLng: [23.0204741, 72.4149269],
  },
  {
    placeName: 'Paris, France',
    latLng: [48.8566, 2.3522],
  },
  {
    placeName: 'Sydney, New South Wales, Australia',
    latLng: [-33.8688, 151.2093],
  },
]

export const VALET_CHARGE_PER_METER = 0.005

export const TAKE_COUNT = 12
