const api = {
    key : "185554d4c431ca49283f6f1bd1d15a46",
    url : "https://api.openweathermap.org/data/2.5/"
}

//selection
const submitBtn = document.querySelector('.button1');
const cityName = document.querySelector('.input');
const weatherDiv = document.querySelector('.data');
//event listener
submitBtn.addEventListener('click' , getWeatherData);
window.addEventListener('load' , init);

//functions
function init() {
    document.querySelector('.img1').src = 'icon.png';
    //date
    document.querySelector('.date-today').innerText = '';
    //data
    document.querySelector('.city-name').innerText =  '';
    document.querySelector('.current-temp').innerText = '';
    document.querySelector('.summary').innerText = '';
    document.querySelector('.min-max-temp').innerText = '';
    //table head
    document.querySelector('.t1').innerText = '';
    document.querySelector('.t2').innerText = '';
    document.querySelector('.t3').innerText = '';
    document.querySelector('.t4').innerText = '';
    document.querySelector('.t5').innerText = '';
    //border
    document.querySelector('.t1').style.border = 'none';
    document.querySelector('.t2').style.border = 'none';
    document.querySelector('.t3').style.border = 'none';
    document.querySelector('.t4').style.border = 'none';
    document.querySelector('.t5').style.border = 'none';
    document.querySelector('.row1').style.border = 'none';
    document.querySelector('.row2').style.border = 'none';
    document.querySelector('.row3').style.border = 'none';
    document.querySelector('.row4').style.border = 'none';
    document.querySelector('.row5').style.border = 'none';
    
    //9am
    document.querySelector('.img2').src = `icon.png`;
    document.querySelector('.desc1').innerText = '';
    document.querySelector('.temp1').innerText = '';
    //12pm
    document.querySelector('.img3').src = `icon.png`;
    document.querySelector('.desc2').innerText = '';
    document.querySelector('.temp2').innerText = '';
    //3pm
    document.querySelector('.img4').src = 'icon.png';
    document.querySelector('.desc3').innerText = '';
    document.querySelector('.temp3').innerText = '';
    //6pm
    document.querySelector('.img5').src = `icon.png`;
    document.querySelector('.desc4').innerText = '';
    document.querySelector('.temp4').innerText = '';
    //9pm
    document.querySelector('.img6').src = `icon.png`;
    document.querySelector('.desc5').innerText = '';
    document.querySelector('.temp5').innerText = '';
   
    document.querySelector('.table').classList.remove('table-bordered');

}

function getWeatherData(e) {
    e.preventDefault();
     

    if(cityName) 
    {
            fetch(`${api.url}weather?q=${cityName.value}&units=metric&appid=${api.key}`)
            .then((res) => res.json())
            .then((data) => {
                //console.log(data);
                //image
                document.querySelector('.img1').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
                //data
                document.querySelector('.city-name').innerText =  `${data.name},${data.sys.country}`;
                document.querySelector('.date-today').innerText = getDateToday();
                document.querySelector('.current-temp').innerText = `${(data.main.temp).toFixed(1)}°C`;
                document.querySelector('.summary').innerText = data.weather[0].description;
                document.querySelector('.min-max-temp').innerText = `${Math.round(data.main.temp_max)}°C / ${Math.round(data.main.temp_min)}°C`;
                /*
                <h1 class="text-center city-name mt-3">Dhanbad</h1>  
                <h3 class="text-center current-temp mt-3">23°C</h3>  
                <h4 class="text-center summary mt-3">sunny</h4>
                <h4 class="text-center min-max-temp mt-3">35°C / 22°C</h4>
               
            const wdiv = document.createElement('div');
            wdiv.className = 'container text-center mt-3';
            const image1 = document.createElement('img');
            image1.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            wdiv.appendChild(image1);
            weatherDiv.appendChild(wdiv);
            const name = document.createElement('h2');
            name.className = 'text-center mt-3';
            name.classList.add('city-name');
            name.innerText = `${data.name},${data.sys.country}`;
            weatherDiv.appendChild(name);

            const currentTemp = document.createElement('h3');
            currentTemp.className = 'text-center mt-3';
            currentTemp.classList.add('current-temp');
            currentTemp.innerText = `${Math.round(data.main.temp)}°C`;
            weatherDiv.appendChild(currentTemp);

            const description1 = document.createElement('h4');
            description1.className = 'text-center mt-3';
            description1.classList.add('summary');
            description1.innerText = data.weather[0].description;
            weatherDiv.appendChild(description1);

            const minMax = document.createElement('h4');
            minMax.className = 'text-center mt-3';
            minMax.classList.add('min-max-temp');
            minMax.innerText = `${Math.round(data.main.temp_max)}°C / ${Math.round(data.main.temp_min)}°C`;
            weatherDiv.appendChild(minMax);
             */ 
            })
            .catch((err) => {
                alert(err);
            })
            fetch(`${api.url}forecast?q=${cityName.value}&units=metric&appid=${api.key}`)
            .then((res) => res.json())
            .then((data) => {
                //console.log(data);
                document.querySelector('.table').classList.add('table-bordered');
                const tt1 = data.list[0].dt_txt.split(' ');
                const tt2 = data.list[1].dt_txt.split(' ');
                const tt3 = data.list[2].dt_txt.split(' ');
                const tt4 = data.list[3].dt_txt.split(' ');
                const tt5 = data.list[4].dt_txt.split(' ');
                const t1 = tt1[1].split(':');
                const t2 = tt2[1].split(':');
                const t3 = tt3[1].split(':');
                const t4 = tt4[1].split(':');
                const t5 = tt5[1].split(':');
                document.querySelector('.t1').innerText = `${t1[0]}:${t1[1]}`;
                document.querySelector('.t2').innerText = `${t2[0]}:${t2[1]}`;
                document.querySelector('.t3').innerText = `${t3[0]}:${t3[1]}`;
                document.querySelector('.t4').innerText = `${t4[0]}:${t4[1]}`;
                document.querySelector('.t5').innerText = `${t5[0]}:${t5[1]}`;

                document.querySelector('.t1').style.border = '1px solid grey';
                document.querySelector('.t2').style.border = '1px solid grey';
                document.querySelector('.t3').style.border = '1px solid grey';
                document.querySelector('.t4').style.border = '1px solid grey';
                document.querySelector('.t5').style.border = '1px solid grey';

                document.querySelector('.row1').style.border = '1px solid grey';
                document.querySelector('.row2').style.border = '1px solid grey';
                document.querySelector('.row3').style.border = '1px solid grey';
                document.querySelector('.row4').style.border = '1px solid grey';
                document.querySelector('.row5').style.border = '1px solid grey';
                //9am
                document.querySelector('.img2').src = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
                document.querySelector('.desc1').innerText = `${data.list[0].weather[0].description}`;
                document.querySelector('.temp1').innerText = `${(data.list[0].main.temp).toFixed(1)}°C`;
                //12pm
                document.querySelector('.img3').src = `http://openweathermap.org/img/wn/${data.list[1].weather[0].icon}@2x.png`;
                document.querySelector('.desc2').innerText = `${data.list[1].weather[0].description}`;
                document.querySelector('.temp2').innerText = `${(data.list[1].main.temp).toFixed(1)}°C`;
                //3pm
                document.querySelector('.img4').src = `http://openweathermap.org/img/wn/${data.list[2].weather[0].icon}@2x.png`;
                document.querySelector('.desc3').innerText = `${data.list[2].weather[0].description}`;
                document.querySelector('.temp3').innerText = `${(data.list[2].main.temp).toFixed(1)}°C`;
                //6pm
                document.querySelector('.img5').src = `http://openweathermap.org/img/wn/${data.list[3].weather[0].icon}@2x.png`;
                document.querySelector('.desc4').innerText = `${data.list[3].weather[0].description}`;
                document.querySelector('.temp4').innerText = `${(data.list[3].main.temp).toFixed(1)}°C`;
                //9pm
                document.querySelector('.img6').src = `http://openweathermap.org/img/wn/${data.list[4].weather[0].icon}@2x.png`;
                document.querySelector('.desc5').innerText = `${data.list[4].weather[0].description}`;
                document.querySelector('.temp5').innerText = `${(data.list[4].main.temp).toFixed(1)}°C`;
            })
            .catch((error) => console.log(error))

            cityName.value = '';
   } else {
       alert('please enter city name');
   }
  
}

function getDateToday() {
    const now = new Date();
    let month = now.getMonth();
    let date = now.getDate();
    let year = now.getFullYear();
    let day = now.getDay();
    const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const  dayArr =  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return `${dayArr[day]} , ${monthArr[month]} ${date} ${year}`
}