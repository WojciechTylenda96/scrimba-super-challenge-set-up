import {propertyForSaleArr} from './properties/propertyForSaleArr.js'
import {placeholderPropertyObj} from './properties/placeholderPropertyObj.js'

function getPropertyHtml(propertiesArray = [placeholderPropertyObj]) {
    const htmlCode = propertiesArray.map(function(property){
        return `
        <section class="card">
            <img src="/images/${property.image}">
            <div class="card-right">
                <h2>${property.propertyLocation}</h2>
                <h3>${property.priceGBP}£</h3>
                <p>${property.comment}</p>
                <h3>${property.roomsM2.reduce(function(total, currentM2){
                    return total + currentM2})}m&sup2;</h3>
            </div>
        </section> `
    }).join('')
    return htmlCode
}

document.getElementById('container').innerHTML = getPropertyHtml()
