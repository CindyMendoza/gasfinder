'use strict';

const filterByDistrict = (stations,query) => {
   return stations.filter((x)=>{
    const ele = x.district.indexOf(query) != -1;
    console.log(stations,query);
    return ele;
  });

}
