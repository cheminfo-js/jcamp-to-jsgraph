import convert from '..';

describe('test jcamp-to-jsgraph', () => {
  const jcamp = `##TITLE=The title
##JCAMP-DX=4.24
##DATA TYPE=IV SPECTRUM
##ORIGIN=
##OWNER=
##XUNITS=mV
##YUNITS=mA
##FIRSTX=1
##LASTX=5
##FIRSTY=1
##LASTY=4
##$header=
##NPOINTS=5
##PEAK TABLE=(XY..XY)
1 2
2 3
3 4
4 2
5 1
##END
`;
  const options = {};

  const result = convert(jcamp, options);

  console.log(result);
});
