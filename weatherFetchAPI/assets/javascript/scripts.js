fetch(`https://api.waqi.info/feed/here/?token=9618831b634035f7761dde5f90311d91ff1fbfce`)
.then(data => data.json())
.then(intel => {
    data = intel.data;
    // console.log(data);
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

    const selector = selector => document.querySelector(selector);

    // document.querySelector("#aqi").append(city);
    selector("#aqi").append(city);
    selector("#cqt").append(aqi);


    if (aqi <= 50) {
        selector("#qsig").append("SAFE");
    } else if (aqi <= 100) {
        selector("#qsig").append("MODERATE");
    } else if (aqi <= 150) {
        selector("#qsig").append("BAD FOR THOSE WHO HAVE BREATHING PROBLEMS");
    } else if (aqi <= 200) {
        selector("#qsig").append("BAD FOR HEALTH");
    } else if (aqi <= 300) {
        selector("#qsig").append("VERY BAD FOR EVERYONE'S HEALTH");
    } else {
        selector("#qsig").append("HAZARD");
    }
});