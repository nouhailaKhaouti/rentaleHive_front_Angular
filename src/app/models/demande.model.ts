export class demande{
    date_reservation:Date;
    date_experation:Date;
    date_demande:Date;
    description:string;

    constructor(date_experation:Date,date_reservation:Date ){
       this.date_demande=new Date();
       this.date_experation=date_experation;
       this.date_reservation=date_reservation;
       this.description="test test test test test";
    }

}

export class stockQuantity{
    equipment:number;
    quantity:number;
    constructor(equipment:number,quantity:number){
        this.equipment=equipment;
        this.quantity=quantity;
    }
}

export interface demandeRequest{
    demande:demande,
    stockQuantity:Array<stockQuantity>
}

