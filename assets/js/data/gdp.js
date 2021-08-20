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
