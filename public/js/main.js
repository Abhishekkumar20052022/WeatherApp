const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp_new = document.getElementById("temp_new");
const datahide = document.querySelector(".middle_layer");
const day = document.getElementById("day");
const today = document.getElementById("today");
// function to fetch weather data from API
const getinfo = async (event) => {
    event.preventDefault();
    const city_val= cityName.value;
    if (city_val === "") {
        city_name.innerText = "Please Enter City Name";
        datahide.classList.add("data_hide");
    } else {
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_val}&units=metric&appid=553dd867578ec9077bcdc0e15f4d199b`
            const response = await fetch(url);
            const data =  await response.json();
            
            const arrayData = [data];
            temp_new.innerText =`${arrayData[0].main.temp}`;
            temp_status.innerText = arrayData[0].weather[0].main;
            city_name.innerText = `${arrayData[0].name}, ${arrayData[0].sys.country}`;
            const tempMood =  arrayData[0].weather[0].main;
            console.log(tempMood);

            if (tempMood == "Clear") {
                temp_status.innerHTML =
                    "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
                } else if (tempMood == "Clouds") {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
                } else if (tempMood == "Rain") {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
                } else {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
    
                }
                
                datahide.classList.remove("data_hide");
        }
        catch{
            city_name.innerText = "Invalid City Name";
            datahide.classList.add("data_hide");   
        }
        }
    }
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    const Week_day= new Date();
    day.innerText = `${days[Week_day.getDay()]}`;

    
    const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const todayDate = new Date();
    today.innerText =` ${todayDate.getDate()}-${month[todayDate.getMonth()]}-${todayDate.getFullYear()}`;



submitBtn.addEventListener("click", getinfo);

 