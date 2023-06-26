# React Native Weather App 

I created a weather app that requests the 5 day / 3 hour forecast from [OpenWeather](https://openweathermap.org/forecast5#geo5) using the device's current location. 

The app has 3 screens that update based on the weather. The weather effects changes in the styles (background color), icons, and text namely the temperatures (in F°) and custom messages.

The _first screen_ shows the current weather including the current temperature, what it currently feels like, and the day's highest and lowest temperature. The background color of the screen changes based on the weather condition (sunny, rainy, etc) as well as a message describing the condition. 

The _second screen_ is a scrollable list of upcoming weather forecast (every 3 hours). Each list item has an icon depending on the weather condition, the day and time of the forecast, as well as the forecast high/low temp.  

The _third screen_ shows the city details of the device's current location including the city name, the country the city is in, as well the sunrise and sunset times. 

The app uses [these](https://icons.expo.fyi) icons and [Moment.js](https://momentjs.com/docs/#/displaying/) to format the days/times

---

## Struggles 


**.env**

The tutorial recommended using `react-native-env` but I ran into a couple problems with it 

I scoured the internet for a solution to be able to use it. Tried cleaning my cache and [editing the script](https://github.com/facebook/react-native/issues/29351#issuecomment-657929014) but neither of those solved the issue for me.

Eventually used ` babel-plugin-inline-dotenv` from [this](https://stackoverflow.com/questions/57060316/environment-variables-in-babel-config-js) stackoverflow post 


And then days later, when writing this, I decided for shits and gigs lets try `react-native-dotenv` again.... and it worked ;-; I don't think I changed anything from the first time I'd tried, but obviously I must've. [Here](https://www.npmjs.com/package/react-native-dotenv) is where I eventually found success

---

## Improvements + Questions

- [ ] would like to be able to type in a location/city not just use current location -- i think this is #1 priority bc I will have to research documentation on my own

- [ ] I want to also load the error screen when the API call errors and returns a '400' and also show custom error messages depending on the error

- [ ] Why do the images load so slow ;-; ?

- [ ] It seems like moment shows the times wrong? For example it will show that sunrise is at 7:39 AM and sunset is at 7:43 AM which is silly

- [ ] How to cut off the list of forecast to maybe like 15 items? Bc otherwise i think it keeps fetching data? 

- [ ] Obviously its not the prettiest I want to try and make it prettier but I don't know if thats the best use of my time?

---

Made using the [freeCodeCamp](https://www.youtube.com/watch?v=obH0Po_RdWk) tutorial using [React Native](
https://reactnative.dev/docs/environment-setup) and [Expo](https://docs.expo.dev/). 
