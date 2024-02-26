export class Location {
    x: number;
    y: number;
    region: string;
    country: string;
    continent: string;
    constructor({ x, y, region, country, continent }: { x: number, y: number, region: string, country: string, continent: string }) {
        this.x = x;
        this.y = y;
        this.region = region;
        this.country = country;
        this.continent = continent;
    }
}