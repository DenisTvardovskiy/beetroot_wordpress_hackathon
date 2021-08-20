let darkBg = document.getElementById('darkBg');
let allCountries = document.getElementsByClassName('svgMap-country');
let mobileSearchTrigger = document.querySelector('.mobile-search-show');
let search = document.getElementById('search');

search.addEventListener('input', _=(e)=>{
    let key = e.target.value.toLowerCase();
    for(let i = 0; i < allCountries.length; i++){
        let countryName = allCountries[i].getAttribute('data-name').toLowerCase();
        if(countryName.includes(key)){
            allCountries[i].style.opacity = "1";
        } else{
            allCountries[i].style.opacity = "0.2";
        }
    }
})

function startSearch(){

}
function toggleClose(){
    search.classList.contains('show')
        ? search.classList.remove('show')
        : search.classList.add('show');
    darkBg.classList.contains('show') ?
        darkBg.classList.remove('show')
        : darkBg.classList.add('show');
}

for(let i = 0; i < allCountries.length; i++){
    // console.log(allCountries[i].getAttribute('data-id'));

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