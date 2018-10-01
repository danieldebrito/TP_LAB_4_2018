import { NgModule } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';

@NgModule({
    imports: [
        MenubarModule,
        CardModule,
        ButtonModule
    ],
    exports: [
        MenubarModule,
        CardModule,
        ButtonModule
    ],
})
export class PrimeNGModule { }
