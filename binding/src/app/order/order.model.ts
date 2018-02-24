export class order{
    orderId: number;
    orderItem: string;
    orderDescription: string;
    orderUnits:number;
    ordercost:number;
    orderStatus:string;
    constructor(orderId:number,orderItem:string,orderDescription:string,orderUnits:number,ordercost:number,orderstatus:string){
        this.orderId=orderId;
        this.orderItem=orderItem;
        this.orderDescription=orderDescription;
        this.orderUnits=orderUnits;
        this.ordercost=ordercost;
        this.orderStatus=orderstatus;

    }
}