const fs = require('fs');

function convertToSeparateGeoJSON() { 
    
    const jsonFile = fs.readFileSync('fixedGeojson.json', 'utf8');
    const geoJsonList = JSON.parse(jsonFile);
    let extraCities = {};
    let x = 1;
    for(let i = 0; i < geoJsonList.length; i++){
        const geoJsonObject = {
            ...geoJsonList[i]
        }

        let name = `${geoJsonList[i].properties.id}.geojson`;
        try{
            const jsonFile = fs.writeFileSync(`${name}`, JSON.stringify(geoJsonObject, null, 2));       
            try{
                extraCities[`${geoJsonList[i].properties.id}`] = `${geoJsonList[i].properties.id}`
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
        console.log(x, Object.keys(extraCities).length, geoJsonList.length)
    }catch(e){
        console.log(e)
    }
}

convertToSeparateGeoJSON()