const fs = require('fs');

function convertToSeparateGeoJSON() {
    const jsonFile = fs.readFileSync('cities.json', 'utf8');
    const geoJsonList = JSON.parse(jsonFile);
    let extraCities = {};
    for(let i = 0; i < geoJsonList["features"].length; i++){
        const geoJsonObject = {
            ...geoJsonList["features"][i],
            properties: {
                id: geoJsonList["features"][i].properties.name
            }
        }

        let name = `${geoJsonList["features"][i].properties.name}.geojson`;
        name = name.replace("?", "")
        try{
            // const jsonFile = fs.writeFileSync(`${name}`, JSON.stringify(geoJsonObject, null, 2));            
            try{
                extraCities[`${geoJsonList["features"][i].properties.name}`] = `${geoJsonList["features"][i].properties.name}`
            }catch(e){
                
            }
        }catch(e){
        }
    }
    try{
        const jsonFile = fs.writeFileSync(`cityData.json`, JSON.stringify(Object.keys(extraCities).map(city => {
            return {
                place: city,
                geojson: city
            }
        }), null, 2));            
    }catch(e){
        console.log(e)
    }
}

convertToSeparateGeoJSON()