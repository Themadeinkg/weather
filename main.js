let API='http://api.openweathermap.org/data/2.5/weather?q=';

let second ='&appid=b067377a72c98ae6963cdae2e35408d9'




let 
input = document.getElementById('input')
 button = document.getElementById('button')
output = document.getElementById('output')


const searchWeahther = async()=>{
    let text = input.value
    const url = API + text + second
    let requset = await fetch(url)
     let response = await requset.json()
     input.value = ''
    renderWeather(response)
    console.log(response)
}


input.addEventListener('keyup', e =>{
    e.preventDefault();
    if(e.keyCode === 13)
    // button.click()
    searchWeahther()
})
button.addEventListener('click', ()=>{
    searchWeahther()
})

const renderWeather = (results)=>{
    output.innerHTML=' '
 let div = document.createElement('div')
       let nameCity = document.createElement('h4')
    let temp = document.createElement('h4')
    let country = document.createElement('h4')
    let wind = document.createElement('h4')
    
    nameCity.innerHTML = 'City '+results.name
    temp.innerHTML = 'Temp '+ (results.main.temp - 273.15).toFixed(1)+' °'
    country.innerHTML = 'Country ' + results.sys.country
    wind.innerHTML ='Wind'+' ' +results.wind.speed + ' m/s'
    

    div.append(nameCity,temp,wind,country)
    output.append(div)
    
}