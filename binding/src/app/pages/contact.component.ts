import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
    template:'<h4>contact page</h4> <div> id: {{idparm}}</div>',
    selector:'contact'

}

)

export class contactcomponent{
    idparm:any;
    constructor(private _activatedRoute:ActivatedRoute){
        this.idparm =this._activatedRoute.snapshot.params['id']

    }
}