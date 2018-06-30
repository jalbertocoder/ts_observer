import { Observer } from '../Observer';
import { DisplayElement } from './DisplayElement';
import { WeatherStation } from '../../Observables/WeatherStation';

class PhoneDisplay implements Observer, DisplayElement {
    weatherStation: WeatherStation;
    currentTemperature: number;

    constructor(weatherStation: WeatherStation) {
        this.weatherStation = weatherStation;
    }

    update(): void {
        console.log('PhoneDisplay has been updated');
        this.currentTemperature = this.weatherStation.getTemperature();
    }

    display(): void {
        console.log('PhoneDisplay current Temperature is => ', this.currentTemperature);
    }
}

export { PhoneDisplay };
