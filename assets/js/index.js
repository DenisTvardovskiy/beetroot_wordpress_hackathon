let darkBg = document.getElementById('darkBg');
let allCountries = document.getElementsByClassName('svgMap-country');

for(let i = 0; i < allCountries.length; i++){
    console.log(allCountries[i].getAttribute('data-id'));

    if(i % 2 === 0){
        allCountries[i].setAttribute("fill", "red");
    }
    else if(i % 3 === 0){
        allCountries[i].setAttribute("fill", "green");
    }
    else if(i % 3 !== 0){
        allCountries[i].setAttribute("fill", "orange");
    }
    else if(i % 5 !== 0){
        allCountries[i].setAttribute("fill", "yellow");
    }
}


// append data-tag for check