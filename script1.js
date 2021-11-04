
//Dom base build
const section1 = document.createElement('div')
section1.classList.add('section1')
const section2 = document.createElement('div')
section2.classList.add('section2')
const section3 = document.createElement('div')
section3.classList.add('section3')
const btn = document.createElement('button')

document.body.style.backgroundImage = 'url(./Cloud1.jpg)'

function _b(e){ return document.body.appendChild(e)}
_b(section1)
_b(section2)
_b(section3)

//api key- may require renewal/update
const api = '50dc8bd9ee43557076b55889276376a6'
// one weather api- contains much more info 
const one = `https://api.openweathermap.org/data/2.5/onecall?lat=39.162&lon=-84.4569&units=imperial&appid=${api}`
//hourly forecast URL
//const hr = `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=cincinnati&appid=${api}`

//city weather search dom build
const searchDiv = document.createElement('div')
const cityInput = document.createElement('input')
const cityLabel = document.createElement('label')
const citySubmit = document.createElement('input')

searchDiv.classList.add('search-div')
cityInput.setAttribute('id', 'cityInput')
cityInput.setAttribute('type', 'string')
cityInput.setAttribute('name', 'cityInput')
cityInput.setAttribute('placeholder', 'City:')
cityInput.classList.add('search-area', 'city-auto')
cityLabel.setAttribute('for', 'cityInput')
cityLabel.classList.add('city-label', 'search-area')
cityLabel.innerHTML = 'Selcet a city for current weather conditions'
citySubmit.setAttribute('type', 'submit')
citySubmit.setAttribute('value', 'submit')
citySubmit.classList.add('search-area', 'city-auto')

section1.appendChild(searchDiv)
searchDiv.appendChild(cityLabel)
searchDiv.appendChild(cityInput)
searchDiv.appendChild(citySubmit)

//city current weather search render
var infoCity


citySubmit.onclick = ()=>{
    let sity    
    sity = cityInput.value.replace(' ', '%20')
    //section1.removeChild(parent.lastChild)
    const searchResultContainer = document.createElement('div') 
    searchResultContainer.classList.add('search-results-container')
    const cityName = document.createElement('h1')
    cityName.classList.add('src', 'cn')
    const searchTemp = document.createElement('h2')
    searchTemp.classList.add('st', 'src')
    const searchInfo = document.createElement('h2')
    searchInfo.classList.add('si', 'src')
    section1.appendChild(searchResultContainer)

async function clever(sity){
    const urls = `https://api.openweathermap.org/data/2.5/weather?q=${sity}&units=imperial&appid=${api}`;
    
   await axios.get(urls)
   
   .then((response)=>{
        console.table(response)
        infoCity = response
         
        cityName.innerHTML = `${infoCity.data.name}`
        searchTemp.innerHTML = `Tempature: <span style="color: orange">${infoCity.data.main.temp}</span><br>
        Feels Like: <span style="color: green">${infoCity.data.main.feels_like}</span><br>
        Max: <span style="color: red">${infoCity.data.main.temp_max}</span><br>
        Min: <span style="color: blue">${infoCity.data.main.temp_min}</span>`  

        searchInfo.innerHTML = `Weather Details: <span style="color: purple">${infoCity.data.weather[0].description}</span><br>
        Outlook: <span style="color: purple">${infoCity.data.weather[0].main}</span>`
        var img2 = new Image
        img2.src = getIcon(infoCity.data.weather[0].icon)
        img2.classList.add('src')
        searchResultContainer.appendChild(cityName)
        searchResultContainer.appendChild(searchTemp)
        searchResultContainer.appendChild(searchInfo)
        searchResultContainer.appendChild(img2)

        return infoCity
})
    .catch((error) =>{
        console.log(error)
        searchTemp.textContent = 'city cant be found'
    })
}
    console.table(infoCity)
    
    clever(sity)
}


// date logic for cincinnati weekly forecast
var week = []
var today = new Date();
today.setDate(today.getDate())
var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
var day3 = new Date();
day3.setDate(day3.getDate() + 2) 
var day4 = new Date();
day4.setDate(day4.getDate() + 3) 
var day5 = new Date();
day5.setDate(day5.getDate() + 4) 
var day6 = new Date();
day6.setDate(day6.getDate() + 5) 
var day7 = new Date();
day7.setDate(day7.getDate() + 6) 
var day8 = new Date();
day8.setDate(day8.getDate() + 7) 
week.push(today)
week.push(tomorrow)
week.push(day3)
week.push(day4)
week.push(day5)
week.push(day6)
week.push(day7)
week.push(day8)

// image sources
i01 = 'http://openweathermap.org/img/wn/01d@2x.png'
i02 = 'http://openweathermap.org/img/wn/02d@2x.png'
i03 = 'http://openweathermap.org/img/wn/03d@2x.png'
i04 = 'http://openweathermap.org/img/wn/04d@2x.png'
i09 = 'http://openweathermap.org/img/wn/09d@2x.png'
i10 = 'http://openweathermap.org/img/wn/10d@2x.png'
i11 = 'http://openweathermap.org/img/wn/11d@2x.png'
i13 = 'http://openweathermap.org/img/wn/13d@2x.png'
i50 = 'http://openweathermap.org/img/wn/50d@2x.png'

i01n = 'http://openweathermap.org/img/wn/01n@2x.png'
i02n = 'http://openweathermap.org/img/wn/02n@2x.png'
i03n = 'http://openweathermap.org/img/wn/03n@2x.png'
i04n = 'http://openweathermap.org/img/wn/04n@2x.png'
i09n = 'http://openweathermap.org/img/wn/09n@2x.png'
i10n = 'http://openweathermap.org/img/wn/10n@2x.png'
i11n = 'http://openweathermap.org/img/wn/11n@2x.png'
i13n = 'http://openweathermap.org/img/wn/13n@2x.png'
i50n = 'http://openweathermap.org/img/wn/50n@2x.png'


//cincinnati weekly forecast render
let oneReq
axios.get(one)
    .then((response)=>{
        console.table(response)
        return response
    })
    .then((data)=>{

        let cincy = document.createElement('h1')
        cincy.textContent = 'Cincinnati Weather'
        section2.appendChild(cincy)

        for(i=0; i<8; i++){
            let dailyCard = document.createElement('div')
            dailyCard.classList.add('daily-card')
            let dcTitle = document.createElement('h2')
            dcTitle.classList.add('dc-title')
            let dcForecast = document.createElement('h3')
            dcForecast.classList.add('dc-forecast')
            let dcInfo = document.createElement('h3')
            dcInfo.classList.add('dc-info')
            
            
            dcTitle.textContent = String(week[i]).slice(0, 15)
            dcForecast.innerHTML = `Temp High:<span style="color:red"> ${data.data.daily[i].temp.max}</span>, Low: <span style="color:blue">${data.data.daily[i].temp.min}</span> `
            dcInfo.innerHTML = `${data.data.daily[i].weather[0].main} <br> ${data.data.daily[i].weather[0].description}`
            
            
            var img = new Image
            img.src = getIcon(data.data.daily[i].weather[0].icon)
            dcInfo.appendChild(img)
            dailyCard.appendChild(dcTitle)
            dailyCard.appendChild(dcForecast)
            dailyCard.appendChild(dcInfo)
            
            section3.appendChild(dailyCard)
        }
        }
    )
    
 //icon assignment logic
    function getIcon(temp){
    if(temp =='01d'){
            return i01
        }
    if(temp =='02d'){
            return i02
        }
    if(temp == '03d'){
            return i03
        }
    if(temp == '04d'){
            return i04
        }
    if(temp =='09d'){
            return i09
        }
    if(temp =='10d'){
            return i10
        }
    if(temp == '11d'){
            return i11
        }
    if(temp =='13d'){
            return i13
        }
    if(temp =='50d'){
            return i50
        }
    
    if(temp =='01n'){
            return i01n
        }
    if(temp =='02n'){
            return i02n
        }
    if(temp == '03n'){
            return i03n
        }
    if(temp == '04n'){
            return i04n
        }
    if(temp =='09n'){
            return i09n
        }
    if(temp =='10n'){
            return i10n
        }
    if(temp == '11n'){
            return i11n
        }
    if(temp =='13n'){
            return i13n
        }
    if(temp =='50n'){
            return i50n
        }
    
    }    


