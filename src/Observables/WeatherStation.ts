import { Observable } from './Observable';
import { Observer } from '../Observers/Observer';

class WeatherStation implements Observable {
    observersList: Observer[] = [];
    temperature: number = 0;

    constructor() {}

    registerObserver(observer: Observer): void {
        this.observersList.push(observer);
    }

    removeObserver(observer: Observer): void {
        const index = this.observersList.indexOf(observer);

        if (index > -1) {
            this.observersList.splice(index,1);
        }
    }

    notifyObservers(): void {
        for (let observer of this.observersList) {
            observer.update();
        }
    }

    setTemperature(temperature: number): void {
        this.temperature = temperature;
        this.notifyObservers();
    }

    getTemperature(): number {
        return this.temperature;
    }
}

export { WeatherStation };