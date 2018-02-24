import {order } from './order.model';
import { Injectable } from '@angular/core';


@Injectable()

export class orderService{
    orderlist: order[];

    getorderlist(){
        this.orderlist =[new order(101, 'watch','Apple watch series 3',4,1340,'processing'),
        new order(101, 'watch','Apple watch series 3',4,1340,'processing'),
        new order(101, 'watch','Apple watch series 3',4,1340,'processing'),
        new order(101, 'watch','Apple watch series 3',4,1340,'processing'),
];
      return this.orderlist;

    }

}