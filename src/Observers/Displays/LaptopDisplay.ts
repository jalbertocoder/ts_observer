import { Observer } from '../Observer';
import { DisplayElement } from './DisplayElement';
import { WeatherStation } from '../../Observables/WeatherStation';

class LaptopDisplay implements Observer, DisplayElement {
    weatherStation: WeatherStation;
    currentTemperature: number;

    constructor(weatherStation: WeatherStation) {
        this.weatherStation = weatherStation;
    }

    update(): void {
        console.log('LaptopDisplay has been updated');
        this.currentTemperature = this.weatherStation.getTemperature();
    }

    display(): void {
        console.log('LaptopDisplay current Temperature is => ', this.currentTemperature);
    }
}

export { LaptopDisplay };