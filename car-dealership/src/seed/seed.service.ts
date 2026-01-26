import { Injectable } from '@nestjs/common';
import { CARD_SEED } from './data/cars.seed';
import { BRAND_SEED } from './data/brand.seed';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';


@Injectable()
export class SeedService {
 
  constructor(
    private readonly cardService: CarsService,
    private readonly brandService: BrandsService
  ){}
  
  populateDB(){

    this.brandService.fillBrandWithSeedData(BRAND_SEED)
    this.cardService.fillCarsWithSeedData(CARD_SEED)
    return 'Seed Executed'
  }
}
