'use strict';

const searchItem = () => {

}
const reRender = (x,y) => {
  x.empty();

}
const Search = (update) => {
  const searchSection = $('<section class="searchSection"></section>');
  const input = $('<input type="text" placeholder="Ingresa tu distrito a buscar"></input>');
  const searchItemSection = $('<section class="searchItemSection"></section>');
  searchSection.append(input);
  searchSection.append(searchItemSection);
  input.on('keyup',_=>{
    reRender(searchItemSection,filterByDistrict(state.stations,input.val()));
      console.log(input.val());
  });
  return searchSection;
}
