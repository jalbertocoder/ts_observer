import { Observer } from '../Observers/Observer';

interface Observable {
    registerObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(): void;
}

export { Observable };
