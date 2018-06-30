import { WeatherStation } from './Observables/WeatherStation';

import { PhoneDisplay } from './Observers/Displays/PhoneDisplay';
import { TabletDisplay } from './Observers/Displays/TabletDisplay';
import { LaptopDisplay } from './Observers/Displays/LaptopDisplay';

function main() {
    let weatherStation: WeatherStation;
    let phoneDisplay: PhoneDisplay;
    let tabletDisplay: TabletDisplay;
    let laptopDisplay: LaptopDisplay;

    weatherStation = new WeatherStation();

    phoneDisplay = new PhoneDisplay(weatherStation);
    tabletDisplay = new TabletDisplay(weatherStation);
    laptopDisplay = new LaptopDisplay(weatherStation);

    weatherStation.registerObserver(phoneDisplay);
    weatherStation.registerObserver(tabletDisplay);
    weatherStation.registerObserver(laptopDisplay);

    weatherStation.setTemperature(20);

    phoneDisplay.display();
    tabletDisplay.display();
    laptopDisplay.display();

    weatherStation.removeObserver(tabletDisplay);

    weatherStation.setTemperature(10);

    phoneDisplay.display();
    tabletDisplay.display();
    laptopDisplay.display();
}

main();
