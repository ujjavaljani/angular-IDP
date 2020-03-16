import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
// import 'rxjs/Rx';
@Injectable()
export class APIService {
  constructor(private http: HttpClient, private authService: AuthService) {}
  API(
    httpMethod: any,
    APIEndPoint: string,
    payload: object,
    authRequire?: boolean
  ) {
    const reqHeaders = {};
    if (authRequire) {
      reqHeaders['x-access-token'] = this.authService.loginData.token;
      // reqHeaders['x-access-token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWQ4YjU4OGVhMjdjOTExMGEwMDU5OGVhIiwiaWF0IjoxNTg0MDgwMjgzLCJleHAiOjE1ODQxNjY2ODN9.XqAWK8quoPkneV-cHgwnjH491MPGFM0DowS7jJxAYA4';
    }
    const APIHeaders = new HttpHeaders(reqHeaders);
    if (httpMethod === 'GET') {
      return this.http.get(APIEndPoint, { headers: APIHeaders });
    } else if (httpMethod === 'POST') {
      return this.http.post(APIEndPoint, payload, { headers: APIHeaders });
    }
    // const req = new HttpRequest(httpMethod, APIEndPoint, payload, {headers : APIHeaders});
    // return this.http.request(req).pipe(
    //   // .map((response:Response) => {
    //   //   console.log("error in reponse",response);
    //   // })
    //   catchError(this.errorHandle());
    // )
  }
}
