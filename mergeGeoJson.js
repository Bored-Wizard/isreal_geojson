const fs = require('fs');

const merging = () => {
    const cityData = fs.readFileSync('cityData.json', 'utf8');
    let cityJSONData = JSON.parse(cityData);
    const bibleCityData = fs.readFileSync('prevCityData.json', 'utf8');
    let bibleCityJSONData = JSON.parse(bibleCityData);
    for(let i = 0; i < bibleCityJSONData.length; i++){
        cityJSONData.push({
            place: bibleCityJSONData[i]["0"].place,
            geojson: bibleCityJSONData[i]["0"].geojson.replace(".geojson", "")
        })
    }
    const jsonFile = fs.writeFileSync(`newCityData.json`, JSON.stringify(cityJSONData));
}

merging()