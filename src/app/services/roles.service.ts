import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from '../model/Role';
import { HttpClient } from '@angular/common/http';
import {AppConstants} from '../AppConstants'

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(
    private http: HttpClient,
    ) { }

  getAllRoles():Observable<Role[]> {
    return this.http.get<Role[]>(AppConstants.AUTHORIZATION_SERVICE_URL()+"roles/grants")
  }

  grantPermissionToRole(role:string, datatype:string, permission:string):Observable<Object>{
    return this.http.post(AppConstants.AUTHORIZATION_SERVICE_URL()+`roles/${role}/grants/datatypes/${datatype}/${permission}`,null)
  }

  createRole(name:string){
    return this.http.post(AppConstants.AUTHORIZATION_SERVICE_URL()+'roles',{name: name})
  }

  deleteRole(role: string) {
    return this.http.delete(AppConstants.AUTHORIZATION_SERVICE_URL()+'roles/'+role)
  }

  getRoleByUsername(username: string){
    return this.http.get<any>(AppConstants.AUTHORIZATION_SERVICE_URL()+'users/'+username)
  }
}
