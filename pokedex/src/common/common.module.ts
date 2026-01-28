import { Module } from '@nestjs/common';
import { AxiosAdapter } from './adapter/AxiosAdapter';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports:[HttpModule],
    providers:[AxiosAdapter],
    exports:[AxiosAdapter]
})
export class CommonModule {

}
