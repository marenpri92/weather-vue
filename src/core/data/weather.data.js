import { urlBase, apiKey } from '../environment/.env';

export const getCurrentWeather = async (query) => {
    try {
        const resp = await fetch(`${urlBase}/weather?${query}&APPID=${apiKey}&units=metric`);
        const json = await resp.json();

        //Timer to see loading
        await new Promise(resolve => setTimeout(resolve, 500));
        return json;

    } catch (error) {
        throw (error);
    }
}

export const getForecastWeather = async (query) => {
    try {
        const resp = await fetch(`${urlBase}/forecast?${query}&APPID=${apiKey}&units=metric`);
        const json = await resp.json();

        //Timer to see loading
        await new Promise(resolve => setTimeout(resolve, 500));
        return json;

    } catch (error) {
        throw (error);
    }
}
