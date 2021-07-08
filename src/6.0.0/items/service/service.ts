import { InstanceLifetimes, IHttpApiOperationResult } from '@omnia/fx-models';
import { Injectable, HttpClientConstructor, HttpClient, Inject } from '@omnia/fx';

@Injectable({ lifetime: InstanceLifetimes.Transient })
export class $outputname$ {

    @Inject<HttpClientConstructor>(HttpClient, {
        configPromise: HttpClient.createOmniaServiceRequestConfig("$guid1$")
    }) protected httpClient: HttpClient;

    constructor() {
    }

    getSomething() {
        return new Promise<null>((resolve, reject) => {
                Promise.resolve("result");
        });
    };



}