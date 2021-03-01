import {ActivatedRoute} from '@angular/router';

export const getRouteData = <T>(route: ActivatedRoute, property: string): T => route.snapshot.data[property] as T;

export const getRouteParam = <T>(route: ActivatedRoute, property: string): T => route.snapshot.params[property] as T;

export const getRouteQueryParam = <T>(route: ActivatedRoute, property: string): T => route.snapshot.queryParams[property] as T;
