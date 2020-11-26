export class Destination {
    constructor(
        public id: number,
        public name: string,
        public code: string,
        public weather: string,
        public isDreamDestination: boolean
    ) {}

    public static fromJson(json: Object): Destination {
        return new Destination(
            json['id'],
            json['name'],
            json['code'],
            json['weather'],
            json['isDreamDestination']
        );
    }
}