import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
// import 'rxjs/Rx';
@Injectable()
export class APIService {
  constructor(private http: HttpClient) {}
  API(
    httpMethod: any,
    APIEndPoint: string,
    payload: object,
    authRequire?: boolean
  ) {
    const reqHeaders = {};
    if (authRequire) {
      reqHeaders['auth-token'] = 'test';
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
