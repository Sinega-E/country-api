'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function(data, className=''){
    const html=` <article class="country ${className}">
              <img class="country__img" src="${data.flags.png}" />
              <div class="country__data">
                <h3 class="country__name">${data.name.common}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)} million people</p>
                <p class="country__row"><span>🗣️</span>${Object.values(data.languages)}</p>
                <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
                
              </div>
            </article>`;
            countriesContainer.insertAdjacentHTML('beforeend',html);
            countriesContainer.style.opacity=1;
}

const renderError = function(msg){
    countriesContainer.insertAdjacentHTML('beforeend',msg)
    countriesContainer.style.opacity=1;
}

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}


///////////////////////////////////////
// const getCountryData = function(country){


// const request = new XMLHttpRequest();
// request.open('GET',`https://restcountries.com/v3.1/name/${country}`);
// request.send();

// request.addEventListener('load', function(){
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html=` <article class="country">
//           <img class="country__img" src="${data.flags.png}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)} million people</p>
//             <p class="country__row"><span>🗣️</span>${Object.values(data.languages)}</p>
//             <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
            
//           </div>
//         </article>`;
//         countriesContainer.insertAdjacentHTML('beforeend',html);
//         countriesContainer.style.opacity=1;

// });
// }

// getCountryData('india')
// getCountryData('portugal')
// getCountryData('usa')

// const getCountryAndNeighbour = function(country){

//     // AJAX call country 1
//     const request = new XMLHttpRequest();
//     request.open('GET',`https://restcountries.com/v3.1/name/${country}`);
//     request.send();
    
//     request.addEventListener('load', function(){
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);

//         // Render Country
//         renderCountry(data);

//         // Get Neighbour country

//         const [neighbour] = data.borders;
//         if(!neighbour) return;

//         // AJAX call country 2
//         const request2 = new XMLHttpRequest();
//         request2.open('GET',`https://restcountries.com/v3.1/alpha/${neighbour}`);
//         request2.send();

//         request2.addEventListener('load', function(){
//             const [data2]=JSON.parse(this.responseText);
//             console.log(data2);

//         // Render Country
//         renderCountry(data2, 'neighbour');


    //     })
    
    // });
    // }
    
    // // getCountryAndNeighbour('india')
    // getCountryAndNeighbour('usa')

// const d=fetch('https://restcountries.com/v3.1/name/portugal');
// console.log(d)
// -------------------after this
// const getJSON = function(url, errorMsg='Something went wrong'){
//     return fetch(url)
//         .then(response=>{
//             if(!response.ok) 
//                 throw new Error(`${errorMsg} (${response.status})`)
//             return response.json()

//         })
// }
// -----------------------------------------------
// const getCountryData = function(country){
//         // country 1
//         fetch(`https://restcountries.com/v3.1/name/${country}`)
//         .then(response=>{
//             if(!response.ok) 
//                 throw new Error(`Country not found (${response.status})`)
//             return response.json()

//         })
//         .then((data)=>
//         {
//             renderCountry(data[0]);
//             const neighbour = data[0].borders[0];

//             if(!neighbour) return;
//             // country 2
//             return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)

//         }).then(response=>response.json())
//         .then(data=>
//             {
//                 renderCountry(data[0],'neighbour');
//                 const neighbour = data[0].borders[0];
//                 if(!neighbour) return;
              
//                 // country 3
//                 return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
//             }).then(response=>response.json())
//             .then(data=>renderCountry(data[0],'neighbour'))
//             .catch(err=>
//                 {
//                 console.error(`${err}`);
//                 renderError(`Something went wrong. ${err.message}. try again`);
//                 })
//                 .finally(()=>{
//                     countriesContainer.style.opacity=1;
//                 });
// }
// btn.addEventListener('click',function(){
//     getCountryData('hghjejdehjbd')
// })
// // ---after this----------------------------------------------------------------------------------------------------------
// const getCountryData = function(country){
//         // country 1
//         getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
//         .then((data)=>{
//             renderCountry(data[0]);
//             const neighbour = data[0].borders?.[0];

//             if(!neighbour) throw new Error('No neighbour countries found!');
//             // country 2
//             return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`, 'Country not found')

//         })
//         .then(data=>{
//                 renderCountry(data[0],'neighbour');
//                 const neighbour = data[0].borders?.[0];
//                 if(!neighbour) throw new Error('No neighbour countries found!');
              
//                 // country 3
//                 return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`, 'Country not found')
//             })
//             .then(data=>renderCountry(data[0],'neighbour'))
//             .catch(err=>
//                 {
//                 console.error(`${err}`);
//                 renderError(`Something went wrong. ${err.message}. try again`);
//                 })
//                 .finally(()=>{
//                     countriesContainer.style.opacity=1;
//                 });
//             };

//     btn.addEventListener('click',function(){
//         getCountryData('india')
//     });
//----------------------------------------------------------------
    // asynchronous and synchronous working methods
    // console.log('synchronous execution-1');
    // setTimeout(()=>console.log('callback execution'),0);
    // Promise.resolve('Promise Execution-1').then(res=>console.log(res));
    // Promise.resolve('Promise Execution-2').then(res=>{
    //     for(let i =0; i<1;i++){
    //         console.log(res)
    //    }
    // });

    // console.log('synchronous execution-2');

    // const lotteryPromise = new Promise(function(resolve,reject){
    //     console.log('Lottery draw is happening');
    //     setTimeout(() => {
    //         if(Math.random()>=0.5){
    //             resolve('You Win')
    //         }else
    //         reject(new Error('You lost your money'))
    //     }, 2000);
        
    // });

    // lotteryPromise.then(res=>console.log(res))
    // .catch(err=>console.error(err));

    // const wait = function(seconds){
    //     return new Promise(function(resolve){
    //         setTimeout(resolve, seconds*1000);
    //     })
    // };
    // wait(2).then(()=>{
    //     console.log('waited for 2 second')
    //     return wait(1)
    // }).then(()=>console.log('waited for 1 second'))
    
// GEOCODE API
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

// navigator.geolocation.getCurrentPosition(
//     function(position){
//     const {latitude}=position.coords;
//     const {longitude}=position.coords;
//     console.log(latitude,longitude)
// },
// function(){
// alert('no coords')
// })


// const whereAmI = function(lat, lng){

//     fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//    .then(res=>{
//     if(!res.ok) throw new Error(`Problem with geocoding ${res.status}`)
//     return res.json()

//    })
//    .then(data=>
//     {
//         console.log(data);
//         console.log(`you are in ${data.city}, ${data.country}`);
//        return fetch(`https://restcountries.com/v3.1/alpha/${data.country}`)
//     })
//     .then(response=>{
//         if(!response.ok) throw new Error(`country not found ${response.status}`);
//         // country 2
//         return response.json();
//     }).then(data=>renderCountry(data))
//     .catch(err=>console.error(`${err.message}`))
// }
// whereAmI(11.026432,77.0080768)



/////////////////////////////////////////////////////////
// PROMISIFYING GEOLOCATION API
const getPosition =function(){
    return new Promise(function(resolve, reject){
        navigator.geolocation.getCurrentPosition(
            position=>resolve(position),
            err=>reject(err)
        );
        navigator.geolocation.getCurrentPosition(resolve,reject)
    })
};
// getPosition().then(pos=>console.log(pos));

const whereAmI = async function(){
   try
   { // GeoLocation
    const pos = await getPosition();
    const {latitude:lat, longitude:lng} = pos.coords;
    
    // Reverse geocoding
    const resGeo = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`);
    if(!resGeo.ok) throw new Error('problem getting location data')

    const dataGeo= await resGeo.json();

    // Country data
    const res1 = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.countryName}`);
    
    if(!res1.ok) throw new Error('problem getting location data')
    
    const data1 = await res1.json();
    renderCountry(data1[0]);

    // neighbouring country
    const neighbour=data1[0].borders?.[0];
    const res2 = await fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    if(!res2.ok) throw new Error('problem getting location data')

    const data2 = await res2.json();
    renderCountry(data2[0],'neighbour');
}
catch(err){
    console.error(`${err}`);
    renderError(`Something Went Wrong ${err.message}`)
}
}
whereAmI();

//     getPosition().then(pos=>{
//         const {latitude:lat, longitude:lng} = pos.coords;
//         return fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`);
//     })
//     .then(res=>{
//     if(!res.ok) throw new Error(`Problem with geocoding ${res.status}`)
//     return res.json()

//    })
//    .then(data=>
//     { 
//         // `https://restcountries.com/v3.1/alpha/${neighbour}`
    
//         console.log(data);
        
//         console.log(`you are in ${data.city}, ${data.countryName}`);
//        return fetch(`https://restcountries.com/v3.1/name/${data.countryName}`)
//     })
//     .then(res=>{
        
//         if(!res.ok) throw new Error(`country not found ${res.status}`);
//         return res.json();
//     }).then(data=>
//         { 
//             // main country
//             renderCountry(data[0])
//            const neighbour=data[0].borders?.[0]
//            if(!neighbour) throw new Error(`No neighbouring cuntry found`);
//            return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
//             }).then(res=>{
//                 if(!res.ok) throw new Error(`Neighbouring country not found ${res.status}`);
//                 return res.json();
//             })
//             .then(data=>{
//                 renderCountry(data[0],'neighbour');
//                 const neighbour=data[0].borders?.[0];
//                 if(!neighbour) throw new Error(`No neighbouring cuntry found`);
//                 return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)

//                 }).then(res=>{
//                     if(!res.ok) throw new Error(`Neighbouring country not found ${res.status}`);
//                     return res.json();
//                 }).then(data=>renderCountry(data[0],'neighbour'))
//             .catch(err=>console.error(`${err.message}`))

// btn.addEventListener('click',whereAmI)
// whereAmI(11.026432,77.0080768)

///////////////////////////////////////////////////////////////////////////////////

