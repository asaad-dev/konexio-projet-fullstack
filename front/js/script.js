// function getAllCountries() {

//     fetch('../api/countriesData.json').then(function (res) {
//         if(res.ok) {
//             res.json().then(function (json) {
//                 countries = json;
//                 console.log(countries);
//             });
//         } else {
//             console.log("oops, something went wrong");
//         }
//     });
// }

// getAllCountries();



// const data = document.getElementById('btnShowData');
// const { name, capital, currencies, region } = data[Math.floor(Math.random() * 150)];
const ul = document.getElementById('country')

const getAllCountries = async () => {
    const res = await fetch('../api/countriesData.json')
    const data = await res.json();

    return data.map(function (countryData) {
        let li = createNode('li');
        data.innerHTML = countryData;
        append(li);
        append(ul, li);
    });
};

getAllCountries()
    .then(data => console.log("resolved:", data))
    .catch(err => console.log("rejected:", err.message));





