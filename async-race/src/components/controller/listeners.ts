import { getElement } from '../../functions/functions';
import GarageController from './garageController';

class Listeners {
  private garageController: GarageController;

  constructor() {
    this.garageController = new GarageController();
  }

  public addListeners(): void {
    this.addGarageListeners();
    this.addGenerateButtonListener();
  }

  private addGarageListeners(): void {
    const garage = getElement('.garage');
    garage.addEventListener('click', (event: Event) => {
      if (event.target && event.target instanceof HTMLButtonElement) {
        const targetCarItem = event.target.closest('.garage__item');
        if (targetCarItem) {
          const carId = Number(targetCarItem.id);

          if (event.target.classList.contains('button__remove')) {
            this.garageController.deleteCarFromGarage(carId, targetCarItem).then(() => {
              this.addListeners();
            });
          }
          if (event.target.classList.contains('button__start')) {
            this.garageController.startCar(carId);
          }
          if (event.target.classList.contains('button__stop')) {
            this.garageController.stopCar(carId);
          }
        }
      }
    });
  }

  private addGenerateButtonListener() {
    const generateButton = getElement('.button__generate');
    generateButton.addEventListener('click', () => {
      this.garageController.generateCars();
    });
  }
}
export default Listeners;