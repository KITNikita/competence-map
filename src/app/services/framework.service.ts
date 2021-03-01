import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Framework} from '../models/framework';

@Injectable()
export class FrameworkService {

  private readonly resourceUrl: string;

  constructor(private httpClient: HttpClient) {
    this.resourceUrl = '/frameworks';
  }

  getAll(): Promise<Framework[]> {
    return this.httpClient.get<Framework[]>(`${this.resourceUrl}`)
      .toPromise();
  }

  get(id: number): Promise<Framework> {
    return this.httpClient.get<Framework>(`${this.resourceUrl}/${id}`)
      .toPromise();
  }
}
