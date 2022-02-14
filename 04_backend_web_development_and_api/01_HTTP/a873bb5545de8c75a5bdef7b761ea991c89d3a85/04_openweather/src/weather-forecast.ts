/* eslint-disable @typescript-eslint/no-explicit-any */
import request from "@fewlines-education/request";
import "dotenv/config";

function weatherByZipcode(zipcode: string, countryCode: string): void {
  request(
    `http://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},${countryCode}&units=metric&cnt=16&appid=${process.env.OPENWEATHER_API_KEY}`,
    (error, html) => {
      if (error) {
        console.error(error);
      } else {
        const json = JSON.parse(html);
        const objectDetail = json.list.map(
          (element: { dt_txt: string; main: { temp: any }; weather: { description: any }[] }) => {
            return {
              date: element.dt_txt.split(" ")[0].split("-").reverse().join("/"),
              hour: element.dt_txt.split(" ")[1],
              temperature: `${element.main.temp} °C`,
              weather: element.weather[0].description,
            };
          },
        );
        console.log(`Weather for ${json.city.name}`);
        console.log(objectDetail[0]);
      }
    },
  );
}

function weatherByLatitudeAndLongitude(latitude: number, longitude: number): void {
  request(
    `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&cnt=16&appid=${process.env.OPENWEATHER_API_KEY}`,
    (error, html) => {
      if (error) {
        console.error(error);
      } else {
        const json = JSON.parse(html);

        const objectDetail = json.list.map(
          (element: { dt_txt: string; main: { temp: string }; weather: { description: any }[] }) => {
            return {
              date: element.dt_txt.split(" ")[0].split("-").reverse().join("/"),
              hour: element.dt_txt.split(" ")[1],
              temperature: element.main.temp + " °C",
              weather: element.weather[0].description,
            };
          },
        );
        console.log(`Weather for ${json.city.name}`);
        console.log(objectDetail[0]);
      }
    },
  );
}

// leave lines below for tests to work properly
export { weatherByZipcode, weatherByLatitudeAndLongitude };
