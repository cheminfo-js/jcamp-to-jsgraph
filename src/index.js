const convert = require('jcampconverter').convert;
const
/**
 * Returns a very important number
 * @return {number}
 */
module.exports = function jcampToJsGraph(jcamp, options = {}) {
  const converted = convert(jcamp, {
    xy: true
  });

  if (!converted.spectra[0]) return {};

  var spectrum = converted.spectra[0];
  const jsgraph = {
    title: spectrum.title,
    axis: [
      { type: 'bottom', label: spectrum.xUnit },
      { type: 'left', label: spectrum.yUnit },
    ],
    data: [{ x: spectrum.data[0].x, y: spectrum.data[0].y, xAxis: 0, yAxis: 1 }, ]
  };

  console.log(JSON.stringify(jsgraph));
  return jsgraph;
};

