export class Ticket {
    constructor(
        public passenger: string,
        public flight: string,
        public from: string,
        public to: string,
        public classT: string,
        public gate: string,
        public time: string,
        public seat: string,
        public number: number
    ) {}

    public static fromJson(json: Object): Ticket {
        return new Ticket(
            json['passenger'],
            json['flight'],
            json['from'],
            json['to'],
            json['class'],
            json['gate'],
            json['time'],
            json['seat'],
            json['number']
        );
    }
}