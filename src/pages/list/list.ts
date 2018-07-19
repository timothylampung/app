import {ModuleService} from "../../provider/module-service";
import {Observable} from "rxjs/Observable";
import {Module, ModuleData} from "../../model/module";
import {NavController, NavParams} from "ionic-angular";
import {Component} from "@angular/core";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

    modules$ : Observable<Module>;
    modules : ModuleData[];

  constructor(public navCtrl: NavController,
              private moduleService : ModuleService,
              public navParams: NavParams) {
    this.getList();
  }


  getList (){
    this.modules$ = this.modules$ = this.moduleService.getModules();
    this.modules$.subscribe(x=>{
      this.modules = x.ModuleList;
    })
  }



}
