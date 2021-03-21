export class Ride {
  id?: string;
  title: string;
  start: string;
  end?: string;
  waypoints?: any[];
}

export const DEFAULT_RIDE_OBJECT: Ride = {
  title: '',
  start: '',
};
