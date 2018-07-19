import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {endpoint} from "../environment/environment";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {Module} from "../model/module";


// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json'
//   })
// };
//

@Injectable()
export class ModuleService {

  apiUrl: string = endpoint + "/api/lookup/get/module";


  constructor(private httpClient: HttpClient) {
  }

  getModules(): Observable<Module> {
    return this.httpClient.get(this.apiUrl, {headers: new HttpHeaders({'Content-Type': 'application/json'})}).map(res => <Module>res);
  }

}
