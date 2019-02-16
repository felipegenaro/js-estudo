fetch(`https://api.waqi.info/feed/here/?token=9618831b634035f7761dde5f90311d91ff1fbfce`)
.then(data => data.json())
.then(intel => {
    data = intel.data;
    console.log(data);
    aqi = data.aqi;
    idx = data.idx;
    city = data.city.name;
    station = data.attributions[0].name;
    // co = data.iaqi.co.v;
    // h = data.iaqi.h.v;
    // no2 = data.iaqi.no2.v;
    // p = data.iaqi.p.v;
    // pm10 = data.iaqi.pm10.v;
    // pm25 = data.iaqi.pm25.v;
    // so2 = data.iaqi.so2.v;
    // t = data.iaqi.t.v;
    // t = data.iaqi.t.v;
    // w = data.iaqi.w;
    // });
// $.getJSON( "https://api.waqi.info/feed/here/?token=9618831b634035f7761dde5f90311d91ff1fbfce", function( result ) {
// 	console.log(result);
// 	aqi = result.data.aqi;
// 	idx = result.data.idx;
// 	city = result.data.city.name;
// 	station = result.data.attributions[0].name;
// 	co = result.data.iaqi.co;
// 	h = result.data.iaqi.h;
// 	no2 = result.data.iaqi.no2;
// 	p = result.data.iaqi.p;
// 	pm10 = result.data.iaqi.pm10;
// 	pm25 = result.data.iaqi.pm25;
// 	so2 = result.data.iaqi.so2;
// 	t = result.data.iaqi.t;
// 	w = result.data.iaqi.w;

    const selector = selector => document.querySelector(selector);

    // document.querySelector('#aqi').append(city);
    selector('#aqi').append(city);
    selector('#cqt').append(aqi);

    // $("#aqi").append(city);
    // $("#cqt").append(aqi);

    if (aqi <= 50)
    {
        // $("#qsig").append("SAFE");
        selector('#qsig').append('SAFE');
    }
    else if (aqi <= 100)
    {
        // $("#qsig").append("MODERADAO");
        selector('#qsig').append('MODERADAO');
    }
    else if (aqi <= 150)
    {
        // $("#qsig").append("MAL A SAUDE DE QUEM JA TA BIXADO");
        selector('#qsig').append('MAL A SAUDE DE QUEM JA TA BIXADO');
    }
    else if (aqi <= 200)
    {
        // $("#qsig").append("RUIM PARA A SAUDE");
        selector('#qsig').append('RUIM PARA A SAUDE');
    }
    else if (aqi <= 300)
    {
        // $("#qsig").append("MUITO RUIM PARA SAUDE");
        selector('#qsig').append('MUITO RUIM PARA SAUDE');
    }
    else
    {
        // $("#qsig").append("HAZARD / DEAD / CHAMA O BOMBEIRO");
        selector('#qsig').append('HAZARD / DEAD / CHAMA O BOMBEIRO');
    }
});