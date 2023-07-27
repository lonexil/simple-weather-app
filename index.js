const add =async()=>{
cityName =inp.value
endpoint =
  "https://api.openweathermap.org/data/2.5/weather?q=" +
  cityName +
  "&appid=930439268afd4b12a7abc53216636f52";
  let response =await fetch(endpoint)
  let convertedResponse=await (response.json())
  console.log(convertedResponse)
   display1.innerHTML=`  Temp:${convertedResponse.main.temp}degree`
   display2.innerHTML=convertedResponse.name
   display3.innerHTML=convertedResponse.sys.country
}
