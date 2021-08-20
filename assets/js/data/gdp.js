var svgMapDataGPD = {
  data: {
    gdp: {
      name: 'GDP per capita',
      format: '{0} USD',
      thousandSeparator: ','
    },
    change: {
      name: 'Change to year before',
      format: '{0} %'
    },
    gdpAdjusted: {
      name: 'Purchasing Power Parity',
      format: '{0} USD',
      thousandSeparator: ',',
      thresholdMax: 60000,
      thresholdMin: 1000
    },
    changeAdjusted: {
      name: 'Change to year before',
      format: '{0} %'
    }
  },
  applyData: 'gdpAdjusted',
  values: {}
}
// ${node.overview.map((item)=>{
//   <li data-content="">${item}</li>
// })}
//
// ${node.localRestrictionsPolicies.map((item)=>{
//                     <li className="list-inline-item">
//                       <div className="t-chip small mb-2 warning"
//                            title=${item.description}>${item.title}
// </div>
// </li>
// })}

// ${node.whatToExpectInCountry.map((item)=>{
// <div className="mb-4">
//   <p className="font-weight-bold mb-0">${item.title}</p>
// <p>${item.content}</p>
// </div>
// })}