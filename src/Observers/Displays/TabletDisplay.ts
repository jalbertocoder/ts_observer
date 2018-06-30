import { Observer } from '../Observer';
import { DisplayElement } from './DisplayElement';
import { WeatherStation } from '../../Observables/WeatherStation';

class TabletDisplay implements Observer, DisplayElement {
    weatherStation: WeatherStation;
    currentTemperature: number;

    constructor(weatherStation: WeatherStation) {
        this.weatherStation = weatherStation;
    }

    update(): void {
        console.log('TabletDisplay has been updated');
        this.currentTemperature = this.weatherStation.getTemperature();
    }

    display(): void {
        console.log('TabletDisplay current Temperature is => ', this.currentTemperature);
    }
}

export { TabletDisplay };
