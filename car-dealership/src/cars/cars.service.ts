import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.inteface';
import { v4 as uuid } from 'uuid'
import { CreateCarDTO, UpdateCarDTO } from 'src/cars/dto/index';
@Injectable()
export class CarsService {

    private cars: Car[] = [
       
    ]

    findAll() {
        return this.cars
    }

    findOneById(id: string) {
        const car = this.cars.find(car => car.id === id)

        if (!car) { throw new NotFoundException(`car with id ${id} not found`) }

        return car
    }

    createCar(createCarDTO: CreateCarDTO) {

        const car: Car = {
            id: uuid(),
            ...createCarDTO
        }

        this.cars.push(car)
        return car
    }

    updateCar(id: string, updateCarDTO: UpdateCarDTO) {

        const carDB = this.findOneById(id);

        const updatedCar = { ...carDB, ...updateCarDTO, id };

        this.cars = this.cars.map(car =>
            car.id === id ? updatedCar : car
        );

        return updatedCar;
    }

    delete( id: string){

        const cardDelete = this.findOneById(id)
        this.cars = this.cars.filter(car => car.id !== id )
        return cardDelete;
    }

    fillCarsWithSeedData(car: Car[]){
        this.cars = car
    }



}
