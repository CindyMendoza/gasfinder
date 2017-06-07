'use strict';

const filterByDistrict = (stations,query) => {
   stations.filter((x)=>{
    const ele = x.district.indexOf(query);
    console.log(stations,query);
    return console.log(ele);
  });

}
