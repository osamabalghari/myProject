const cityName = document.getElementById('cityName')
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_real = document.getElementById('temp_real');
const temp_status = document.getElementById('temp_status');





const newEvent = async(event)=>{
    event.preventDefault();
   let cityVal = cityName.value;
    if(cityVal === ""){
        city_name.innerText = `Please write the  city name before search`

    }else{
        try{
            let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=0b0facca3e4e5c332a4c7ef8f9fe8f15`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;
            
        }catch{
            city_name.innerText = `Please write the correct city name`
        }
     
        
    }
}
submitBtn.addEventListener('click', newEvent)