// import { urlBase, apiKey } from '../environment/env';
import {  Current, Forecast } from './mocks';

export const getCurrentWeather = async (query) => {
    try {
        // const resp = await fetch(`${urlBase}/weather?${query}&APPID=${apiKey}`);
        // const json = resp.json();
        // return json;

        //eslint-disable-next-line
        console.log('query', query);
        return Current;
    } catch (error) {
        throw (error);
    }
}

export const getForecastWeather = async (query) => {
    try {
        // const resp = await fetch(`${urlBase}/forecast?${query}&APPID=${apiKey}`);
        // const json = resp.json();
        // return json;

        //eslint-disable-next-line
        console.log('query', query);
        return Forecast;
    } catch (error) {
        throw (error);
    }
}
