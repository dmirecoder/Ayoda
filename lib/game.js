//module.exports = { _tebaktebakan, _susunkata, _asahotak, _kimia, _bendera, _lagukebangsaan, _ibukota, _siapaaku }

function clue(text) {
ter = '_ '
tex = (text)
return (tex.replace(/[abcdefghijklmnopqrstuvwxyz]/g, ter).replace(/[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/g, ter.toUpperCase()))
}

const negara = [
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Afghanistan.svg/240px-Flag_of_Afghanistan.svg.png",
    "negara":"afganistan",
    "ibu_kota":"kabul",
    "lagu_kebangsaan":"milli surood"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/240px-Flag_of_South_Africa.svg.png",
    "negara":"afrika selatan",
    "ibu_kota":"cape town",
    "lagu_kebangsaan":"nkosi sikelel' iafrika"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Central_African_Republic.svg/240px-Flag_of_the_Central_African_Republic.svg.png",
    "negara":"afrika tengah",
    "ibu_kota":"bangui",
    "lagu_kebangsaan":"la renaissance"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/240px-Flag_of_Albania.svg.png",
    "negara":"albania",
    "ibu_kota":"tirana",
    "lagu_kebangsaan":"himni i flamurit"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/240px-Flag_of_Algeria.svg.png",
    "negara":"aljazair",
    "ibu_kota":"aljir",
    "lagu_kebangsaan":"kassaman"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/240px-Flag_of_the_United_States.svg.png",
    "negara":"amerika serikat",
    "ibu_kota":"washington d.c",
    "lagu_kebangsaan":"the stars stripes forever"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Andorra.svg/240px-Flag_of_Andorra.svg.png",
    "negara":"andorra",
    "ibu_kota":"adorra la vella",
    "lagu_kebangsaan":"el gran carlemany"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/240px-Flag_of_Angola.svg.png",
    "negara":"angola",
    "ibu_kota":"luanda",
    "lagu_kebangsaan":"angola avante"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Antigua_and_Barbuda.svg/240px-Flag_of_Antigua_and_Barbuda.svg.png",
    "negara":"antigua",
    "ibu_kota":"saint john's",
    "lagu_kebangsaan":"fair antigua"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/240px-Flag_of_Saudi_Arabia.svg.png",
    "negara":"arab saudi",
    "ibu_kota":"riyadh",
    "lagu_kebangsaan":"an-nasid al-wartaniyy"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/240px-Flag_of_Argentina.svg.png",
    "negara":"argentina",
    "ibu_kota":"buenos aires",
    "lagu_kebangsaan":"himno nacional argentino"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/240px-Flag_of_Armenia.svg.png",
    "negara":"armenia",
    "ibu_kota":"yerevan",
    "lagu_kebangsaan":"mer hayrenik"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Australia.svg/240px-Flag_of_Australia.svg.png",
    "negara":"australia",
    "ibu_kota":"canberra",
    "lagu_kebangsaan":"advance australia fair"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/240px-Flag_of_Austria.svg.png",
    "negara":"austria",
    "ibu_kota":"wina",
    "lagu_kebangsaan":"land  der berge"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/240px-Flag_of_Azerbaijan.svg.png",
    "negara":"azerbaijan",
    "ibu_kota":"baku",
    "lagu_kebangsaan":"azerbaycan marsi"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Flag_of_the_Bahamas.svg/240px-Flag_of_the_Bahamas.svg.png",
    "negara":"bahama",
    "ibu_kota":"nassau",
    "lagu_kebangsaan":"march on"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Bahrain.svg/240px-Flag_of_Bahrain.svg.png",
    "negara":"bahrain",
    "ibu_kota":"manama",
    "lagu_kebangsaan":"bahrainona"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/240px-Flag_of_Bangladesh.svg.png",
    "negara":"bangladesh",
    "ibu_kota":"dhaka",
    "lagu_kebangsaan":"amar shonar bangla"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flag_of_Barbados.svg/240px-Flag_of_Barbados.svg.png",
    "negara":"barbados",
    "ibu_kota":"bridgetown",
    "lagu_kebangsaan":"in plenty and in time of need"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/240px-Flag_of_the_Netherlands.svg.png",
    "negara":"belanda",
    "ibu_kota":"amsterdam",
    "lagu_kebangsaan":"wilhelmus"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/240px-Flag_of_Belarus.svg.png",
    "negara":"belarus",
    "ibu_kota":"minsk",
    "lagu_kebangsaan":"my belarusy"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/240px-Flag_of_Belgium.svg.png",
    "negara":"belgia",
    "ibu_kota":"brussels",
    "lagu_kebangsaan":"brabanconne"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Flag_of_Belize.svg/240px-Flag_of_Belize.svg.png",
    "negara":"belize",
    "ibu_kota":"belmopan",
    "lagu_kebangsaan":"land of the free"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Benin.svg/240px-Flag_of_Benin.svg.png",
    "negara":"benin",
    "ibu_kota":"porto-novo",
    "lagu_kebangsaan":"l'aube nouvelle"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Flag_of_Bhutan.svg/240px-Flag_of_Bhutan.svg.png",
    "negara":"bhutan",
    "ibu_kota":"thimphu",
    "lagu_kebangsaan":"druk tsendhen"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_Bolivia_%28state%29.svg/240px-Flag_of_Bolivia_%28state%29.svg.png",
    "negara":"bolivia",
    "ibu_kota":"sucre",
    "lagu_kebangsaan":"himno nacional de bolivia"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/240px-Flag_of_Bosnia_and_Herzegovina.svg.png",
    "negara":"bosnia",
    "ibu_kota":"sarajevo",
    "lagu_kebangsaan":"drzavna himna bosne i hercegovine"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_Botswana.svg/240px-Flag_of_Botswana.svg.png",
    "negara":"botswana",
    "ibu_kota":"gaborone",
    "lagu_kebangsaan":"fatshe leno la rona"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/240px-Flag_of_Brazil.svg.png",
    "negara":"brazil",
    "ibu_kota":"brasilia",
    "lagu_kebangsaan":"hino nacional brasileiro"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/240px-Flag_of_the_United_Kingdom.svg.png",
    "negara":"inggris",
    "ibu_kota":"london",
    "lagu_kebangsaan":"god save the queen"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Brunei.svg/240px-Flag_of_Brunei.svg.png",
    "negara":"brunei",
    "ibu_kota":"bandar seri begawan",
    "lagu_kebangsaan":"allah peliharakan sultan"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/240px-Flag_of_Bulgaria.svg.png",
    "negara":"bulgaria",
    "ibu_kota":"sofia",
    "lagu_kebangsaan":"mila rodino"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Burkina_Faso.svg/240px-Flag_of_Burkina_Faso.svg.png",
    "negara":"burkina faso",
    "ibu_kota":"ouagadougou",
    "lagu_kebangsaan":"une seule nuit"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Flag_of_Burundi.svg/240px-Flag_of_Burundi.svg.png",
    "negara":"burundi",
    "ibu_kota":"gitega",
    "lagu_kebangsaan":"burundi bwacu"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/240px-Flag_of_the_Czech_Republic.svg.png",
    "negara":"ceko",
    "ibu_kota":"praha",
    "lagu_kebangsaan":"kde domov muj"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Flag_of_Chad.svg/240px-Flag_of_Chad.svg.png",
    "negara":"chad",
    "ibu_kota":"n'djamena",
    "lagu_kebangsaan":"the chadian hymn"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/240px-Flag_of_Chile.svg.png",
    "negara":"chili",
    "ibu_kota":"santiago",
    "lagu_kebangsaan":"himno nacional de chile"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/240px-Flag_of_the_People%27s_Republic_of_China.svg.png",
    "negara":"china",
    "ibu_kota":"beijing",
    "lagu_kebangsaan":"march of the volunteers"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/265px-Flag_of_Denmark.svg.png",
    "negara":"denmark",
    "ibu_kota":"kopenhagen",
    "lagu_kebangsaan":"der er et yndigt land"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_Djibouti.svg/300px-Flag_of_Djibouti.svg.png",
    "negara":"djibouti",
    "ibu_kota":"djibouti city",
    "lagu_kebangsaan":"jabuuti"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Flag_of_Dominica.svg/360px-Flag_of_Dominica.svg.png",
    "negara":"dominika",
    "ibu_kota":"roseau",
    "lagu_kebangsaan":"isle of beauty"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/300px-Flag_of_Ecuador.svg.png",
    "negara":"ekuador",
    "ibu_kota":"quito",
    "lagu_kebangsaan":"himno nacional de ecuador"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_El_Salvador.svg/355p x-Flag_of_El_Salvador.svg.png",
    "negara":"el salvador",
    "ibu_kota":"san salvador",
    "lagu_kebangsaan":"himno nacional de al salvador"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Flag_of_Eritrea.svg/360px-Flag_of_Eritrea.svg.png",
    "negara":"eritrea",
    "ibu_kota":"asmara",
    "lagu_kebangsaan":"ertra"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/315px-Flag_of_Estonia.svg.png",
    "negara":"estonia",
    "ibu_kota":"tallinn",
    "lagu_kebangsaan":"mu isamaa"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Ethiopia.svg/360px-Flag_of_Ethiopia.svg.png",
    "negara":"ethiopia",
    "ibu_kota":"addis ababa",
    "lagu_kebangsaan":"march forward"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Fiji.svg/360px-Flag_of_Fiji.svg.png",
    "negara":"fiji",
    "ibu_kota":"suva",
    "lagu_kebangsaan":"god bless fiji"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/360px-Flag_of_the_Philippines.svg.png",
    "negara":"filipina",
    "ibu_kota":"manila",
    "lagu_kebangsaan":"lupang hinirang"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/328px-Flag_of_Finland.svg.png",
    "negara":"finlandia",
    "ibu_kota":"helsinki",
    "lagu_kebangsaan":"maamme"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Flag_of_Gabon.svg/267px-Flag_of_Gabon.svg.png",
    "negara":"gabon",
    "ibu_kota":"libreville",
    "lagu_kebangsaan":"la concorde"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_The_Gambia.svg/300px-Flag_of_The_Gambia.svg.png",
    "negara":"gambia",
    "ibu_kota":"banjul",
    "lagu_kebangsaan":"for the gambia our homeland"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/300px-Flag_of_Georgia.svg.png",
    "negara":"georgia",
    "ibu_kota":"tbilis",
    "lagu_kebangsaan":"dzala ertobashia"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Ghana.svg/300px-Flag_of_Ghana.svg.png",
    "negara":"ghana",
    "ibu_kota":"accra",
    "lagu_kebangsaan":"god bless our homeland ghana"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Grenada.svg/334px-Flag_of_Grenada.svg.png",
    "negara":"grenada",
    "ibu_kota":"st. george's",
    "lagu_kebangsaan":"hail grenada"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Guatemala.svg/320px-Flag_of_Guatemala.svg.png",
    "negara":"guatemala",
    "ibu_kota":"guatemala city",
    "lagu_kebangsaan":"homno nacional de guatemala"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Flag_of_Guinea.svg/300px-Flag_of_Guinea.svg.png",
    "negara":"guinea",
    "ibu_kota":"konakry",
    "lagu_kebangsaan":"liberte"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Guinea-Bissau.svg/360px-Flag_of_Guinea-Bissau.svg.png",
    "negara":"guinea bissau",
    "ibu_kota":"bissau",
    "lagu_kebangsaan":"esta e a nossa patria bem amada"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Equatorial_Guinea.svg/300px-Flag_of_Equatorial_Guinea.svg.png",
    "negara":"guinea khatulistiwa",
    "ibu_kota":"malabo",
    "lagu_kebangsaan":"-"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_Guyana.svg/334px-Flag_of_Guyana.svg.png",
    "negara":"guyana",
    "ibu_kota":"george town",
    "lagu_kebangsaan":"dear e a nossa patria bem amada"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Haiti.svg/334px-Flag_of_Haiti.svg.png",
    "negara":"haiti",
    "ibu_kota":"port  au prince",
    "lagu_kebangsaan":"la dessalinienne"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Flag_of_Honduras.svg/360px-Flag_of_Honduras.svg.png",
    "negara":"honduras",
    "ibu_kota":"tegucigalpa",
    "lagu_kebangsaan":"himno nacional de honduras"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/360px-Flag_of_Hungary.svg.png",
    "negara":"hongaria",
    "ibu_kota":"budapest",
    "lagu_kebangsaan":"himnusz"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/300px-Flag_of_India.svg.png",
    "negara":"india",
    "ibu_kota":"new delhi",
    "lagu_kebangsaan":"jana gana mana"
    
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/300px-Flag_of_Indonesia.svg.png",
    "negara":"indonesia",
    "ibu_kota":"jakarta",
    "lagu_kebangsaan":"indonesia raya"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/300px-Flag_of_Iraq.svg.png",
    "negara":"irak",
    "ibu_kota":"bagdad",
    "lagu_kebangsaan":"mawtini"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/350px-Flag_of_Iran.svg.png",
    "negara":"iran",
    "ibu_kota":"teheran",
    "lagu_kebangsaan":"soroud-e melli-e jomhouri-e eslami-e iran"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/360px-Flag_of_Ireland.svg.png",
    "negara":"irlandia",
    "ibu_kota":"dublin",
    "lagu_kebangsaan":"amhran na bhfian"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/278px-Flag_of_Iceland.svg.png",
    "negara":"islandia",
    "ibu_kota":"reykyavik",
    "lagu_kebangsaan":"lofsongur"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/275px-Flag_of_Israel.svg.png",
    "negara":"israel",
    "ibu_kota":"tel aviv",
    "lagu_kebangsaan":"hatikvah"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/300px-Flag_of_Italy.svg.png",
    "negara":"italia",
    "ibu_kota":"roma",
    "lagu_kebangsaan":"il canto degli italiani"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Jamaica.svg/360px-Flag_of_Jamaica.svg.png",
    "negara":"jamaika",
    "ibu_kota":"kingsstone",
    "lagu_kebangsaan":"jamaica land we love"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/300px-Flag_of_Japan.svg.png",
    "negara":"jepang",
    "ibu_kota":"tokyo",
    "lagu_kebangsaan":"kimigayo"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/334px-Flag_of_Germany.svg.png",
    "negara":"jerman",
    "ibu_kota":"berlin",
    "lagu_kebangsaan":"eningkeit und recht und freiheit"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/313px-Flag_of_Cambodia.svg.png",
    "negara":"kamboja",
    "ibu_kota":"phnom penh",
    "lagu_kebangsaan":"nokor reach"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/300px-Flag_of_Cameroon.svg.png",
    "negara":"kamerun",
    "ibu_kota":"yaonde",
    "lagu_kebangsaan":"berceau de nos ancetres"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/360px-Flag_of_Canada.svg.png",
    "negara":"kanada",
    "ibu_kota":"ottawa",
    "lagu_kebangsaan":"o canada"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/360px-Flag_of_Kazakhstan.svg.png",
    "negara":"kazakhstan",
    "ibu_kota":"alma ata",
    "lagu_kebangsaan":"menin qasaqstanim"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Kenya.svg/300px-Flag_of_Kenya.svg.png",
    "negara":"kenya",
    "ibu_kota":"nairobi",
    "lagu_kebangsaan":"ee mungu nguvu yetu"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/334px-Flag_of_Kyrgyzstan.svg.png",
    "negara":"kirgiztan",
    "ibu_kota":"frunze",
    "lagu_kebangsaan":"kytgyz respublikasynyn mamlekettik gimni"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kiribati.svg/360px-Flag_of_Kiribati.svg.png",
    "negara":"kiribati",
    "ibu_kota":"bairiki",
    "lagu_kebangsaan":"teirake kaini kiribati"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/300px-Flag_of_Colombia.svg.png",
    "negara":"kolombia",
    "ibu_kota":"bogota",
    "lagu_kebangsaan":"nimno nacional de la republica de colombia"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Flag_of_the_Comoros.svg/334px-Flag_of_the_Comoros.svg.png",
    "negara":"komoro",
    "ibu_kota":"moroni",
    "lagu_kebangsaan":"udzima wa ya masiwa"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg/267px-Flag_of_the_Democratic_Republic_of_the_Congo.svg.png",
    "negara":"kongo",
    "ibu_kota":"kinshasa",
    "lagu_kebangsaan":"debout congolais"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_the_Republic_of_the_Congo.svg/300px-Flag_of_the_Republic_of_the_Congo.svg.png",
    "negara":"republik kongo",
    "ibu_kota":"brazzaville",
    "lagu_kebangsaan":"la congolaise"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/300px-Flag_of_South_Korea.svg.png",
    "negara":"korea selatan",
    "ibu_kota":"seoul",
    "lagu_kebangsaan":"aegukga"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_North_Korea.svg/360px-Flag_of_North_Korea.svg.png",
    "negara":"korea utara",
    "ibu_kota":"pyongyang",
    "lagu_kebangsaan":"aegukka"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Costa_Rica.svg/334px-Flag_of_Costa_Rica.svg.png",
    "negara":"kosta rika",
    "ibu_kota":"san yose",
    "lagu_kebangsaan":"himno nacional de costa rica"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/360px-Flag_of_Croatia.svg.png",
    "negara":"kroasia",
    "ibu_kota":"zagreb",
    "lagu_kebangsaan":"lijepa nasa domovino"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/360px-Flag_of_Cuba.svg.png",
    "negara":"kuba",
    "ibu_kota":"havana",
    "lagu_kebangsaan":"el himno de bayamo"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Kuwait.svg/360px-Flag_of_Kuwait.svg.png",
    "negara":"kuwait",
    "ibu_kota":"kuwait city",
    "lagu_kebangsaan":"al-nasheed al-watani"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Laos.svg/300px-Flag_of_Laos.svg.png",
    "negara":"laos",
    "ibu_kota":"vientiane",
    "lagu_kebangsaan":"peng xat lao"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/360px-Flag_of_Latvia.svg.png",
    "negara":"latvia",
    "ibu_kota":"riga",
    "lagu_kebangsaan":"dievs sveti latviju"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Flag_of_Lebanon.svg/300px-Flag_of_Lebanon.svg.png",
    "negara":"lebanon",
    "ibu_kota":"beirut",
    "lagu_kebangsaan":"himno nacional lebanon"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Flag_of_Lesotho.svg/300px-Flag_of_Lesotho.svg.png",
    "negara":"lesotho",
    "ibu_kota":"maseru",
    "lagu_kebangsaan":"lesotho fatse la bontata rona"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Flag_of_Liberia.svg/360px-Flag_of_Liberia.svg.png",
    "negara":"liberia",
    "ibu_kota":"monrovia",
    "lagu_kebangsaan":"all hail liberia hail"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Libya.svg/360px-Flag_of_Libya.svg.png",
    "negara":"libya",
    "ibu_kota":"tripoli",
    "lagu_kebangsaan":"libya libya libya"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Flag_of_Liechtenstein.svg/334px-Flag_of_Liechtenstein.svg.png",
    "negara":"liechtenstein",
    "ibu_kota":"vadus",
    "lagu_kebangsaan":"oben am jungen rhein"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Lithuania.svg/334px-Flag_of_Lithuania.svg.png",
    "negara":"lituania",
    "ibu_kota":"vilna",
    "lagu_kebangsaan":"tautiska giesme"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Luxembourg.svg/334px-Flag_of_Luxembourg.svg.png",
    "negara":"luksemburg",
    "ibu_kota":"loxembourg city",
    "lagu_kebangsaan":"ons heemecht"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Madagascar.svg/300px-Flag_of_Madagascar.svg.png",
    "negara":"madagaskar",
    "ibu_kota":"antananarivo",
    "lagu_kebangsaan":"ry tanindrazanay malala oi"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_North_Macedonia.svg/360px-Flag_of_North_Macedonia.svg.png",
    "negara":"makedonia",
    "ibu_kota":"skopje",
    "lagu_kebangsaan":"denes nad makedonija"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Maldives.svg/300px-Flag_of_Maldives.svg.png",
    "negara":"maladewa",
    "ibu_kota":"male",
    "lagu_kebangsaan":"qaumii salaam"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Flag_of_Malawi.svg/300px-Flag_of_Malawi.svg.png",
    "negara":"malawi",
    "ibu_kota":"lilongwe",
    "lagu_kebangsaan":"mulungu dalitsa  malawi"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/360px-Flag_of_Malaysia.svg.png",
    "negara":"malaysia",
    "ibu_kota":"kuala lumpur",
    "lagu_kebangsaan":"negaraku"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Mali.svg/300px-Flag_of_Mali.svg.png",
    "negara":"mali",
    "ibu_kota":"bamako",
    "lagu_kebangsaan":"pour i'afrique et pour toi"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Malta.svg/300px-Flag_of_Malta.svg.png",
    "negara":"malta",
    "ibu_kota":"la valetta",
    "lagu_kebangsaan":"l-innu malti"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/300px-Flag_of_Morocco.svg.png",
    "negara":"maroko",
    "ibu_kota":"rabat",
    "lagu_kebangsaan":"hymne cherifien"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flag_of_the_Marshall_Islands.svg/360px-Flag_of_the_Marshall_Islands.svg.png",
    "negara":"marshall island",
    "ibu_kota":"majuro",
    "lagu_kebangsaan":"forever marshall islands"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Flag_of_Mauritania.svg/300px-Flag_of_Mauritania.svg.png",
    "negara":"mauritania",
    "ibu_kota":"nouakchott",
    "lagu_kebangsaan":"-"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Mauritius.svg/300px-Flag_of_Mauritius.svg.png",
    "negara":"mauritius",
    "ibu_kota":"port luis",
    "lagu_kebangsaan":"motherland"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/350px-Flag_of_Mexico.svg.png",
    "negara":"meksiko",
    "ibu_kota":"mexico city",
    "lagu_kebangsaan":"himno nacional mexicano"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/300px-Flag_of_Egypt.svg.png",
    "negara":"mesir",
    "ibu_kota":"kairo",
    "lagu_kebangsaan":"biladi diladi biladi"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Flag_of_the_Federated_States_of_Micronesia.svg/360px-Flag_of_the_Federated_States_of_Micronesia.svg.png",
    "negara":"federasi mikronesia",
    "ibu_kota":"palikir",
    "lagu_kebangsaan":"patriots of micronesia"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Moldova.svg/360px-Flag_of_Moldova.svg.png",
    "negara":"moldova",
    "ibu_kota":"kishinev",
    "lagu_kebangsaan":"limba noastra"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Flag_of_Monaco.svg/250px-Flag_of_Monaco.svg.png",
    "negara":"monako",
    "ibu_kota":"monako",
    "lagu_kebangsaan":"hymne monegasque"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Mongolia.svg/360px-Flag_of_Mongolia.svg.png",
    "negara":"mongolia",
    "ibu_kota":"ulan bator",
    "lagu_kebangsaan":"mongol ulsiin toriin duulai"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Montenegro.svg/360px-Flag_of_Montenegro.svg.png",
    "negara":"montenegro",
    "ibu_kota":"podgorica",
    "lagu_kebangsaan":"svijetla majska zoro"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Mozambique.svg/300px-Flag_of_Mozambique.svg.png",
    "negara":"mozambik",
    "ibu_kota":"maputo",
    "lagu_kebangsaan":"patria amada"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Myanmar.svg/300px-Flag_of_Myanmar.svg.png",
    "negara":"myanmar",
    "ibu_kota":"naypyidaw",
    "lagu_kebangsaan":"kaba ma kyei"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Namibia.svg/300px-Flag_of_Namibia.svg.png",
    "negara":"namibia",
    "ibu_kota":"windhoek",
    "lagu_kebangsaan":"land of the brave"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Flag_of_Nauru.svg/360px-Flag_of_Nauru.svg.png",
    "negara":"nauru",
    "ibu_kota":"yaren",
    "lagu_kebangsaan":"naur bwiema"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/164px-Flag_of_Nepal.svg.png",
    "negara":"nepal",
    "ibu_kota":"kathmandu",
    "lagu_kebangsaan":"sayaun thunga phool"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Flag_of_Niger.svg/233px-Flag_of_Niger.svg.png",
    "negara":"niger",
    "ibu_kota":"niamey",
    "lagu_kebangsaan":"la nigerienne"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/360px-Flag_of_Nigeria.svg.png",
    "negara":"nigeria",
    "ibu_kota":"lagos",
    "lagu_kebangsaan":"o compatriots"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Nicaragua.svg/334px-Flag_of_Nicaragua.svg.png",
    "negara":"nikaragua",
    "ibu_kota":"managua",
    "lagu_kebangsaan":"salve a ti"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/275px-Flag_of_Norway.svg.png",
    "negara":"norwegia",
    "ibu_kota":"oslo",
    "lagu_kebangsaan":"vi elsker dette landet"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Oman.svg/360px-Flag_of_Oman.svg.png",
    "negara":"oman",
    "ibu_kota":"muskat",
    "lagu_kebangsaan":"nashid as-salaam as-sultani"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/300px-Flag_of_Pakistan.svg.png",
    "negara":"pakistan",
    "ibu_kota":"islamabad",
    "lagu_kebangsaan":"qaumi tarana"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Palau.svg/320px-Flag_of_Palau.svg.png",
    "negara":"palau",
    "ibu_kota":"melekeok",
    "lagu_kebangsaan":"belau rekid"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Palestine.svg/360px-Flag_of_Palestine.svg.png",
    "negara":"palestina",
    "ibu_kota":"yerusalem",
    "lagu_kebangsaan":"fida'i"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/300px-Flag_of_Panama.svg.png",
    "negara":"panama", 
    "ibu_kota":"panama",
    "lagu_kebangsaan":"himno istmeno"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg/300px-Flag_of_C%C3%B4te_d%27Ivoire.svg.png",
    "negara":"pantai gading",
    "ibu_kota":"yamoussoukro",
    "lagu_kebangsaan":"l'abidjanaise"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Flag_of_Papua_New_Guinea.svg/267px-Flag_of_Papua_New_Guinea.svg.png",
    "negara":"papua nugini",
    "ibu_kota":"port moresby",
    "lagu_kebangsaan":"o arise"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/360px-Flag_of_Paraguay.svg.png",
    "negara":"paraguay",
    "ibu_kota":"asuncion",
    "lagu_kebangsaan":"republica o muerte"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/300px-Flag_of_France.svg.png",
    "negara":"perancis",
    "ibu_kota":"paris",
    "lagu_kebangsaan":"la marseillaise"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Flag_of_Peru_%28state%29.svg/300px-Flag_of_Peru_%28state%29.svg.png",
    "negara":"peru",
    "ibu_kota":"lima",
    "lagu_kebangsaan":"himno nacional del peru"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/320px-Flag_of_Poland.svg.png",
    "negara":"polandia",
    "ibu_kota":"warsawa",
    "lagu_kebangsaan":"mazurek dabrowskiego"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/300px-Flag_of_Portugal.svg.png",
    "negara":"portugal",
    "ibu_kota":"lisboa",
    "lagu_kebangsaan":"a portuguesa"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/360px-Flag_of_Qatar.svg.png",
    "negara":"qatar",
    "ibu_kota":"doha",
    "lagu_kebangsaan":"as salam al amiri"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/300px-Flag_of_Romania.svg.png",
    "negara":"rumania",
    "ibu_kota":"bukares",
    "lagu_kebangsaan":"desteapta-te"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/300px-Flag_of_Russia.svg.png",
    "negara":"rusia",
    "ibu_kota":"moskow",
    "lagu_kebangsaan":"gosudarstvenny gimn rossiyskov federatsii"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Rwanda.svg/300px-Flag_of_Rwanda.svg.png",
    "negara":"rwanda",
    "ibu_kota":"kigali",
    "lagu_kebangsaan":"rwanda  nziza"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg/300px-Flag_of_Saint_Kitts_and_Nevis.svg.png",
    "negara":"saint kitts",
    "ibu_kota":"basseterre",
    "lagu_kebangsaan":"o land of beauty"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Saint_Lucia.svg/360px-Flag_of_Saint_Lucia.svg.png",
    "negara":"saint lucia",
    "ibu_kota":"castries",
    "lagu_kebangsaan":"sons and daughters of saint lucia"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg/300px-Flag_of_Saint_Vincent_and_the_Grenadines.svg.png",
    "negara":"saint vincent",
    "ibu_kota":"kingstown",
    "lagu_kebangsaan":"saint vincent"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Samoa.svg/360px-Flag_of_Samoa.svg.png",
    "negara":"samoa",
    "ibu_kota":"apia",
    "lagu_kebangsaan":"the banner of freedom"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Flag_of_San_Marino.svg/267px-Flag_of_San_Marino.svg.png",
    "negara":"san marino",
    "ibu_kota":"san marino",
    "lagu_kebangsaan":"libertas"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Sao_Tome_and_Principe.svg/360px-Flag_of_Sao_Tome_and_Principe.svg.png",
    "negara":"sao tome",
    "ibu_kota":"sao tome",
    "lagu_kebangsaan":"independencia total"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/360px-Flag_of_New_Zealand.svg.png",
    "negara":"selandia baru",
    "ibu_kota":"wellington",
    "lagu_kebangsaan":"god defend new zealand"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/300px-Flag_of_Senegal.svg.png",
    "negara":"senegal",
    "ibu_kota":"dakar",
    "lagu_kebangsaan":"pincez tous vos koras"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/300px-Flag_of_Serbia.svg.png",
    "negara":"serbia",
    "ibu_kota":"beograd",
    "lagu_kebangsaan":"boze pravde"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Seychelles.svg/360px-Flag_of_Seychelles.svg.png",
    "negara":"seychelles",
    "ibu_kota":"victoria",
    "lagu_kebangsaan":"kosta seywa"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Sierra_Leone.svg/300px-Flag_of_Sierra_Leone.svg.png",
    "negara":"sierra leone",
    "ibu_kota":"freetown",
    "lagu_kebangsaan":"high we exalt thee"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/300px-Flag_of_Singapore.svg.png",
    "negara":"singapura",
    "ibu_kota":"singapura",
    "lagu_kebangsaan":"majulah singapura"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Cyprus.svg/300px-Flag_of_Cyprus.svg.png",
    "negara":"siprus",
    "ibu_kota":"nikosia",
    "lagu_kebangsaan":"ymnos is tin eleftherian"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Slovenia.svg/360px-Flag_of_Slovenia.svg.png",
    "negara":"slovenia",
    "ibu_kota":"ljubljana",
    "lagu_kebangsaan":"adravljica"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Slovakia.svg/301px-Flag_of_Slovakia.svg.png",
    "negara":"slovakia",
    "ibu_kota":"bratislava",
    "lagu_kebangsaan":"nad tatrou sa blyska"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Flag_of_the_Solomon_Islands.svg/360px-Flag_of_the_Solomon_Islands.svg.png",
    "negara":"salomo",
    "ibu_kota":"honiara",
    "lagu_kebangsaan":"god save our solomon islands"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Somalia.svg/300px-Flag_of_Somalia.svg.png",
    "negara":"somalia",
    "ibu_kota":"mogadishu",
    "lagu_kebangsaan":"qolobaa calankeed"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/300px-Flag_of_Spain.svg.png",
    "negara":"spanyol",
    "ibu_kota":"madrid",
    "lagu_kebangsaan":"la marcha real"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Sri_Lanka.svg/360px-Flag_of_Sri_Lanka.svg.png",
    "negara":"sri lanka",
    "ibu_kota":"kolombo",
    "lagu_kebangsaan":"sri lanka matha"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Sudan.svg/360px-Flag_of_Sudan.svg.png",
    "negara":"sudan",
    "ibu_kota":"khartoum",
    "lagu_kebangsaan":"nahnu jund allah jundal-watan"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Flag_of_Syria.svg/300px-Flag_of_Syria.svg.png",
    "negara":"suriah",
    "ibu_kota":"damaskus",
    "lagu_kebangsaan":"humat ad-diyar"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Flag_of_Suriname.svg/300px-Flag_of_Suriname.svg.png",
    "negara":"suriname",
    "ibu_kota":"paramaribo",
    "lagu_kebangsaan":"god zij met ons suriname"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Flag_of_Eswatini.svg/300px-Flag_of_Eswatini.svg.png",
    "negara":"swazilant",
    "ibu_kota":"mbabane",
    "lagu_kebangsaan":"nkulunkulu mnikati wetibusiso temaswati"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/320px-Flag_of_Sweden.svg.png",
    "negara":"swedia",
    "ibu_kota":"stockholm",
    "lagu_kebangsaan":"du gamla"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/200px-Flag_of_Switzerland.svg.png",
    "negara":"swiss",
    "ibu_kota":"bern",
    "lagu_kebangsaan":"schweizerpsalm"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Tajikistan.svg/360px-Flag_of_Tajikistan.svg.png",
    "negara":"tajikistan",
    "ibu_kota":"dushanble",
    "lagu_kebangsaan":"surudi milli"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Cape_Verde.svg/340px-Flag_of_Cape_Verde.svg.png ",
    "negara":"tanjung verde",
    "ibu_kota":"praia",
    "lagu_kebangsaan":"cantico da liberrdade"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Tanzania.svg/300px-Flag_of_Tanzania.svg.png",
    "negara":"tanzania",
    "ibu_kota":"dodoma",
    "lagu_kebangsaan":"mungu ibariki afrika"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/300px-Flag_of_Thailand.svg.png",
    "negara":"thailand",
    "ibu_kota":"bangkok",
    "lagu_kebangsaan":"phleng chat"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flag_of_East_Timor.svg/360px-Flag_of_East_Timor.svg.png",
    "negara":"timor leste",
    "ibu_kota":"dili",
    "lagu_kebangsaan":"patria"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Flag_of_Togo.svg/324px-Flag_of_Togo.svg.png",
    "negara":"togo",
    "ibu_kota":"lome",
    "lagu_kebangsaan":"salut a toi"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Tonga.svg/360px-Flag_of_Tonga.svg.png",
    "negara":"tonga",
    "ibu_kota":"nukualofa",
    "lagu_kebangsaan":"ko e fasi 'o e tu'i 'o e 'otu tonga"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Trinidad_and_Tobago.svg/334px-Flag_of_Trinidad_and_Tobago.svg.png",
    "negara":"trinidad",
    "ibu_kota":"port of span",
    "lagu_kebangsaan":"forged from the love of liberty"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/300px-Flag_of_Tunisia.svg.png",
    "negara":"tunisia",
    "ibu_kota":"tunis",
    "lagu_kebangsaan":"humat al-hima"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/300px-Flag_of_Turkey.svg.png",
    "negara":"turki",
    "ibu_kota":"ankara",
    "lagu_kebangsaan":"istiklal marsi"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Turkmenistan.svg/300px-Flag_of_Turkmenistan.svg.png",
    "negara":"turkmenistan",
    "ibu_kota":"ashgabat",
    "lagu_kebangsaan":"turkmenistany dolet gimni"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Tuvalu.svg/360px-Flag_of_Tuvalu.svg.png",
    "negara":"tuvalu",
    "ibu_kota":"funafuti",
    "lagu_kebangsaan":"tuvalu mo te atua"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Flag_of_Uganda.svg/300px-Flag_of_Uganda.svg.png",
    "negara":"uganda",
    "ibu_kota":"kampala",
    "lagu_kebangsaan":"oh uganda"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/300px-Flag_of_Ukraine.svg.png",
    "negara":"ukraina",
    "ibu_kota":"kiev",
    "lagu_kebangsaan":"shche ne vmerla ukraina"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/360px-Flag_of_the_United_Arab_Emirates.svg.png",
    "negara":"uni emirat arab",
    "ibu_kota":"abu dhabi",
    "lagu_kebangsaan":"ishy biladi"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/300px-Flag_of_Uruguay.svg.png",
    "negara":"uruguay",
    "ibu_kota":"montevideo",
    "lagu_kebangsaan":"himno nacional"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/360px-Flag_of_Uzbekistan.svg.png",
    "negara":"uzbekistan",
    "ibu_kota":"tashkent",
    "lagu_kebangsaan":"o'zbekiston respublikasining davlat madhiyasi"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Vanuatu.svg/334px-Flag_of_Vanuatu.svg.png",
    "negara":"vanuatu",
    "ibu_kota":"pelabuhan vila",
    "lagu_kebangsaan":"yumi"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_the_Vatican_City.svg/200px-Flag_of_the_Vatican_City.svg.png",
    "negara":"vatikan",
    "ibu_kota":"vatikan city",
    "lagu_kebangsaan":"inno e marcia"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/300px-Flag_of_Venezuela.svg.png",
    "negara":"venezuela",
    "ibu_kota":"caracas",
    "lagu_kebangsaan":"gloria al bravo pueblo"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/300px-Flag_of_Vietnam.svg.png",
    "negara":"vietnam",
    "ibu_kota":"hanoi",
    "lagu_kebangsaan":"tien quan ca"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Yemen.svg/300px-Flag_of_Yemen.svg.png",
    "negara":"yaman",
    "ibu_kota":"sanaa",
    "lagu_kebangsaan":"al-jumhuriyah al-muttahidah"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/360px-Flag_of_Jordan.svg.png",
    "negara":"yordania",
    "ibu_kota":"amman",
    "lagu_kebangsaan":"as-salam al-malaki al-urduni"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/300px-Flag_of_Greece.svg.png",
    "negara":"yunani",
    "ibu_kota":"athena",
    "lagu_kebangsaan":"hymnos pros tin eleftherian"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Zambia.svg/300px-Flag_of_Zambia.svg.png",
    "negara":"zambia",
    "ibu_kota":"lusaka",
    "lagu_kebangsaan":"stand  and sing of zambia"
  },
  {
    "bendera":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Flag_of_Zimbabwe.svg/360px-Flag_of_Zimbabwe.svg.png",
    "negara":"zimbabwe",
    "ibu_kota":"harare",
    "lagu_kebangsaan":"simudzai mureza wezimbabwe"
  }
]

function _tebaktebakan(){
  return new Promise((resolve, reject) => {
    try {
anu =[
    {
      "pertanyaan": "Hewan, hewan apa yang perut, kepala, mata, bahkan kakinya di kepala?",
      "jawaban": "Kutu"
    },
    {
      "pertanyaan": "Sebutkan 4 nama buah dalam satu detik?",
      "jawaban": "Rujak"
    },
    {
      "pertanyaan": "Bis apa yang bisa dimakan?",
      "jawaban": "Biskuit"
    },
    {
      "pertanyaan": "Dari atas sampai bawah rasanya sama?",
      "jawaban": "Toge"
    },
    {
      "pertanyaan": "Bisa di pegang gak bisa diliat?",
      "jawaban": "Kuping"
    },
    {
      "pertanyaan": "Di kupas kulitnya ada bijinya, digigit bijinya ada batangnya apa coba?",
      "jawaban": "Jagung"
    },
    {
      "pertanyaan": "Lahir di arab, besar di arab, tabi ngga bisa bahasa arab, apa hayo?",
      "jawaban": "Unta"
    },
    {
      "pertanyaan": "Ban apa yang enak dimakan?",
      "jawaban": "Bandeng"
    },
    {
      "pertanyaan": "Buah apa yang selalu membuat kita waspada?",
      "jawaban": "Buahaya"
    },
    {
      "pertanyaan": "Nyarinya susah, setelah dapet dibuang, apaan?",
      "jawaban": "Upil"
    },
    {
      "pertanyaan": "Binatang apa yang gak pernah rugi?",
      "jawaban": "Laba-laba"
    },
    {
      "pertanyaan": "Gajah apa yang belalainya pendek?",
      "jawaban": "Gajah pesek"
    },
    {
      "pertanyaan": "Sapi, sapi apa yang bisa nulis?",
      "jawaban": "Sapidol"
    },
    {
      "pertanyaan": "Aku punya mata 3, kakiku 1, aku suka berdiri dipinggir jalan, apakah aku?",
      "jawaban": "Lampu merah"
    },
    {
      "pertanyaan": "Gimana caranya orang bungkuk tidur?",
      "jawaban": "Merem"
    },
    {
      "pertanyaan": "Apa yang bulet kecil item, tapi kalo dipencet keluar orangnya?",
      "jawaban": "Bel rumah"
    },
    {
      "pertanyaan": "Apaan yang naik turun dibawah puser?",
      "jawaban": "Resleting"
    },
    {
      "pertanyaan": "Hewan apa yang selalu jadi korban pemerasan?",
      "jawaban": "Sapi perah"
    },
    {
      "pertanyaan": "Ban apa yang ada diatas tiang?",
      "jawaban": "Bandera"
    },
    {
      "pertanyaan": "Nasi apa yang gak pernah basi?",
      "jawaban": "Nasihat"
    },
    {
      "pertanyaan": "Benda panjang dan lonjong, huruf awalnya K, huruf akhirnya L, apa hayu?",
      "jawaban": "Kapsul"
    },
    {
      "pertanyaan": "Malam apa yang mengerikan?",
      "jawaban": "Malampir"
    },
    {
      "pertanyaan": "Punya kepala, punya leher, tidak punya tangan, tidak punya kaki, tetapi dia bisa berdiri?",
      "jawaban": "Botol"
    },
    {
      "pertanyaan": "Game apa yang sangat mengerikan?",
      "jawaban": "Gamepa bumi"
    },
    {
      "pertanyaan": "Jamu apa yang kalau diminum merusak badan?",
      "jawaban": "Jamuran"
    },
    {
      "pertanyaan": "Benda apa yang dimasukin malah keluar lagi?",
      "jawaban": "Kancing baju"
    },
    {
      "pertanyaan": "Nenek nenek jatuh di kali, munculnya dimana?",
      "jawaban": "Dikoran"
    },
    {
      "pertanyaan": "Orang apa yang masuk botol?",
      "jawaban": "Orang aring"
    },
    {
      "pertanyaan": "Kue apa yang tengahnya ga ada rasanya?",
      "jawaban": "Donat"
    },
    {
      "pertanyaan": "Kalau dikocok putihnya gak keluar, tapi kalau dipencet malah keluar?",
      "jawaban": "Pasta gigi"
    },
    {
      "pertanyaan": "Kutu apa yang paling mengerikan?",
      "jawaban": "Kutukan"
    },
    {
      "pertanyaan": "Jika ada lilin dan obor, mana yang sebaiknya dinyalakan dulu agar lebih terang?",
      "jawaban": "Korek api"
    },
    {
      "pertanyaan": "Kering tapi basah, apakah itu?",
      "jawaban": "Keringat"
    },
    {
      "pertanyaan": "Makanan apa yang nama dan warnanya sama?",
      "jawaban": "Coklat"
    },
    {
      "pertanyaan": "Es apa yang suka dinaiki orang?",
      "jawaban": "Eskalator"
    },
    {
      "pertanyaan": "Bank apa yang malah rugi?",
      "jawaban": "Bankrut"
    },
    {
      "pertanyaan": "Meski sudah dipotong, tapi tetap panjang, apakah itu?",
      "jawaban": "Kacang panjang"
    },
    {
      "pertanyaan": "Dianggap bertambah, tetapi nyatanya berkurang, apakah itu?",
      "jawaban": "Umur"
    },
    {
      "pertanyaan": "Kereta apa yang tidak bisa menampung orang remaja, dewasa dan orang tua?",
      "jawaban": "Kereta bayi"
    },
    {
      "pertanyaan": "Mata apa yang ukurannya sekitar 15 cm?",
      "jawaban": "Mata uang"
    },
    {
      "pertanyaan": "Kalau hitam dibilang bersih tetapi jika putih dibilang kotor, apakah itu?",
      "jawaban": "Papan tulis"
    },
    {
      "pertanyaan": "Angka itu jumlahnya tak terhingga, tetapi angka apa yang paling tinggi?",
      "jawaban": "Angkasa"
    },
    {
      "pertanyaan": "Mobil apa yang hanya bisa dilihat di HP android dan iphone?",
      "jawaban": "Mobile legend"
    },
    {
      "pertanyaan": "Bisa melihat tetapi tidak bisa mendengar, apakah itu?",
      "jawaban": "Mata"
    },
    {
      "pertanyaan": "Makan gratis, minum gratis bahkan tidur pun juga gratis tapi anehnya tidak ada yang suka, tempat apakah itu?",
      "jawaban": "Ketuaan"
    },
    {
      "pertanyaan": "Ketua apa yang rambutnya putih?",
      "jawaban": "Ketuaan"
    },
    {
      "pertanyaan": "Perang apa yang senjatanya lem?",
      "jawaban": "Perangko"
    },
    {
      "pertanyaan": "Ular apa yang bisa senam?",
      "jawaban": "Ularaga"
    },
    {
      "pertanyaan": "Paku apa yang ditakuti kuda?",
      "jawaban": "Pakusir"
    },
    {
      "pertanyaan": "Bulat berwarna, tapi kalau kentut jadi kurus apa itu?",
      "jawaban": "Balon"
    },
    {
      "pertanyaan": "Kota apa yang paling menyedihkan?",
      "jawaban": "Kota malang"
    },
    {
      "pertanyaan": "Naiknya cepet turunnya lamban?",
      "jawaban": "Ingus"
    },
    {
      "pertanyaan": "Tong…. tong apa yang rasanya enak?",
      "jawaban": "Tongseng"
    },
    {
      "pertanyaan": "Ban itu isinya udara, tetapi ada ban yang isinya udaranya dingin?",
      "jawaban": "Bandung"
    },
    {
      "pertanyaan": "Kota apa yang rasanya pahit?",
      "jawaban": "Pare pare"
    },
    {
      "pertanyaan": "Bel apa yang tidak pernah berbunyi dan sangat licin?",
      "jawaban": "Belut"
    },
    {
      "pertanyaan": "Singa apa yang sering dikunjungi orang?",
      "jawaban": "Singapore"
    },
    {
      "pertanyaan": "Sapi apa yang bisa nempel ditembok?",
      "jawaban": "Sapiderman"
    },
    {
      "pertanyaan": "Binatang apa yang paling banyak muridnya?",
      "jawaban": "Kanguru"
    },
    {
      "pertanyaan": "Ular apa yang paling digemari anak-anak?",
      "jawaban": "Ular tangga"
    },
    {
      "pertanyaan": "Dari atas bisa terbang ke bawah, tetapi sudah sampai ke bawah nggak bisa terbang keatas lagi?",
      "jawaban": "Daun"
    },
    {
      "pertanyaan": "Laut apa yang nggak punya nyawa?",
      "jawaban": "Laut mati"
    },
    {
      "pertanyaan": "Benda apa yang pertumbuhannya dari panjang jadi pendek?",
      "jawaban": "Pensil"
    },
    {
      "pertanyaan": "Mata apa yang malam hari tutup?",
      "jawaban": "Matahari"
    },
    {
      "pertanyaan": "Mata apa yang bisa naklukin banteng?",
      "jawaban": "Matador"
    },
    {
      "pertanyaan": "Om apa yang pagi siang malam seneng dilaut?",
      "jawaban": "Ombak"
    },
    {
      "pertanyaan": "Raja apa yang hobinya terbang?",
      "jawaban": "Rajawali"
    },
    {
      "pertanyaan": "Raja apa yang kepalanya sering dipegang?",
      "jawaban": "Raja catur"
    },
    {
      "pertanyaan": "Rambut apa yang gak perlu disisir?",
      "jawaban": "Rambutan"
    },
    {
      "pertanyaan": "Sapu apa yang bisa dikantongi?",
      "jawaban": "Saputangan"
    },
    {
      "pertanyaan": "Selat apa yang tidak dihimpit oleh dua pulau?",
      "jawaban": "Selatan"
    },
    {
      "pertanyaan": "Tank apa yang diucapin terakhir kali?",
      "jawaban": "Tank you"
    },
    {
      "pertanyaan": "Anak apa yang larinya cepet?",
      "jawaban": "Anak panah"
    },
    {
      "pertanyaan": "Awan apa yang nggak ada dilangit, nggak nurunin hujan, malah bikin orang jengkel?",
      "jawaban": "Sariawan"
    },
    {
      "pertanyaan": "Anak, anaknya siapa yang selalu diinjak-injak?",
      "jawaban": "Anak tangga"
    },
    {
      "pertanyaan": "Tangga apa yang nggak bisa ndinaiki?",
      "jawaban": "Tangga nada"
    },
    {
      "pertanyaan": "Bibir apa yang nyeremin?",
      "jawaban": "Bibir jurang"
    },
    {
      "pertanyaan": "Kerjanya keliling terus setiap hari, tidak pernah capek, siapakah dia?",
      "jawaban": "Jarum jam"
    },
    {
      "pertanyaan": "Mandi apa yang nggak bikin badan basah?",
      "jawaban": "Mandi bola"
    },
    {
      "pertanyaan": "Siapa yang hanya punya ‘HAK’ tapi tidak punya ‘Kejwajiban’?",
      "jawaban": "Sepatu"
    },
    {
      "pertanyaan": "Bulan apa yang tidak tercantum di kalender?",
      "jawaban": "Bulan madu"
    },
    {
      "pertanyaan": "Dia bisa menolong orang dalam kegelapan, tapi dia malah mengorbankan diri pelan-pelan, siapakah dia?",
      "jawaban": "Lilin"
    },
    {
      "pertanyaan": "Makin diisi, makin ringan, apa hayu?",
      "jawaban": "Balon gas"
    },
    {
      "pertanyaan": "Hakim apa yang tugasnya bukan di pengadilan?",
      "jawaban": "Hakim garis"
    },
    {
      "pertanyaan": "Hewan apa yang sering menerima kesalahan orang lain?",
      "jawaban": "Kambing hitam"
    },
    {
      "pertanyaan": "Nama anak yang paling panjang sedunia?",
      "jawaban": "Anak sungai"
    },
    {
      "pertanyaan": "Kecil, kurus, tapi banyak dagingnya, apa hayu?",
      "jawaban": "Sate"
    },
    {
      "pertanyaan": "Masuk kering, keluar lengket, apa hayu?",
      "jawaban": "Permen karet"
    },
    {
      "pertanyaan": "Barang apa yang justru berguna kalo udah pecah?",
      "jawaban": "Telur"
    },
    {
      "pertanyaan": "Apa arti pribahasa ‘sambil menyelam minum air’?",
      "jawaban": "Tenggelam"
    },
    {
      "pertanyaan": "Ibu apa yang kalo berdiri bikin orang tersanjung?",
      "jawaban": "Ibu jari"
    },
    {
      "pertanyaan": "Warna dan buah apa yang disukai wanita?",
      "jawaban": "Merah jambu"
    },
    {
      "pertanyaan": "Kabar apa sebesar gajah tetapi beratnya 0 kg?",
      "jawaban": "Kabar burung"
    },
    {
      "pertanyaan": "Benda apa keluar ketika diputar?",
      "jawaban": "Lipstik"
    },
    {
      "pertanyaan": "Kepalanya merah, jalannya mundur, tapi bukan undur-undur?",
      "jawaban": "Obat nyamuk"
    },
    {
      "pertanyaan": "Bunga-bunga apa yang paling mahal?",
      "jawaban": "Bungalow"
    },
    {
      "pertanyaan": "Apa yang sebesar gajah tetapi beratnya 0 kg?",
      "jawaban": "Bayangan gajah"
    },
    {
      "pertanyaan": "Kebo apa yang bikin capek hayo?",
      "jawaban": "Kebogor"
    },
    {
      "pertanyaan": "Bagaimana caranya menghilangkan bau pete dimulut?",
      "jawaban": "Makan jengkol"
    },
    {
      "pertanyaan": "Apa yang dipunyai kucing tapi tidak dipunyai hewan laen?",
      "jawaban": "Anak kucing   "
    },
    {
      "pertanyaan": "Kera apa yang bisa masuk botol",
      "jawaban": "Keratingdaeng"
    },
    {
      "pertanyaan": "Kemana-mana selalu berlima, tapi yang masuk cuman satu apa hayo?",
      "jawaban": "Ngupil"
    },
    {
      "pertanyaan": "Kota apa yang nilainya selalu tujuh?",
      "jawaban": "Salatiga"
    },
    {
      "pertanyaan": "Bola apa yang mirip sama kucing?",
      "jawaban": "Bolaemon"
    },
    {
      "pertanyaan": "Hewan apa yang bersaudara?",
      "jawaban": "Katak beradik"
    },
    {
      "pertanyaan": "Salah apa yang nggak pernah dihukum tapi rasanya sakit banget?",
      "jawaban": "Salah urat"
    },
    {
      "pertanyaan": "Bel apa yang kalo dipencet bisa melukai?",
      "jawaban": "Beling"
    },
    {
      "pertanyaan": "Kopi apa yang nggak bisa diminum?",
      "jawaban": "Kopiah"
    },
    {
      "pertanyaan": "Kecoa apa yang masuk rumah sakit?",
      "jawaban": "Kecoalakaan"
    },
    {
      "pertanyaan": "Kadal, kadal apa yang bikin sakit perut?",
      "jawaban": "Kadaluarsa"
    },
    {
      "pertanyaan": "Apa bahasa arabnya nenek-nenek jatuh dari lantai 10?",
      "jawaban": "Almarhum"
    },
    {
      "pertanyaan": "Kenapa orang suka berkhayal?",
      "jawaban": "Karena gratis"
    },
    {
      "pertanyaan": "Sate apa yang bisa terbang?",
      "jawaban": "Satelit"
    },
    {
      "pertanyaan": "Sapi apa yang larinya kenceng dan bisa ngerem?",
      "jawaban": "Sapida motor"
    },
    {
      "pertanyaan": "Tukang apa yang kalo berhitung diulang-ulang?",
      "jawaban": "Tukang foto"
    },
    {
      "pertanyaan": "Pedas dibalik jadi sedap, sup dibalik jadi apa?",
      "jawaban": "Tumpah"
    },
    {
      "pertanyaan": "Ikan apa yang walau sudah diair diam saja?",
      "jawaban": "Ikan goreng"
    },
    {
      "pertanyaan": "Negara apa yang namanya mirip nama perempuan?",
      "jawaban": "Yunani"
    },
    {
      "pertanyaan": "Kelapa apa yang bikin badan kurus?",
      "jawaban": "Kelaparan"
    },
    {
      "pertanyaan": "Menarik apa yang nggak butuh tali atau tambang?",
      "jawaban": "Menarik nafas"
    },
    {
      "pertanyaan": "Sungai apa di Jakarta yang alirannya deres?",
      "jawaban": "Kalideres"
    },
    {
      "pertanyaan": "Dia nggak bisa bergerak, tapi bisa naik bisa turun. Apakah itu?",
      "jawaban": "Jalan"
    },
    {
      "pertanyaan": "Ayam apa yang nggak takut sama harimau?",
      "jawaban": "Ayam nekad"
    },
    {
      "pertanyaan": "Kepala kepiting adanya dimana?",
      "jawaban": "Diketek"
    },
    {
      "pertanyaan": "Gigi apa yang nggak bisa ngunyah?",
      "jawaban": "Gigi motor"
    },
    {
      "pertanyaan": "Kota apa yang nggak pernah sendiri?",
      "jawaban": "Samarinda"
    },
    {
      "pertanyaan": "Hidup diatas, matipun diatas. Apakah itu?",
      "jawaban": "Lampu bohlam"
    },
    {
      "pertanyaan": "Negara apa yang paling pedas?",
      "jawaban": "Chili"
    },
    {
      "pertanyaan": "Yang dibeli tidak pakai barang itu, dan yang pakai tidak tahu barang itu. Apakah itu?",
      "jawaban": "Peti mati"
    },
    {
      "pertanyaan": "Es apa yang ditunggu-tunggu banyak orang?",
      "jawaban": "Esok hari"
    },
    {
      "pertanyaan": "Pulau apa yang disukai lebah?",
      "jawaban": "Madura"
    },
    {
      "pertanyaan": "Sabun apa yang genit?",
      "jawaban": "Sabun colek"
    },
    {
      "pertanyaan": "Bola apa yang bikin kita bingung?",
      "jawaban": "Bolak-balik"
    },
    {
      "pertanyaan": "Ban apa yang ganas larinya?",
      "jawaban": "Banteng"
    },
    {
      "pertanyaan": "Hewan apa yang punya kelamin lebih dari satu?",
      "jawaban": "Barongsai"
    },
    {
      "pertanyaan": "Hewan apa yang suka pindah rumah?",
      "jawaban": "Siput"
    },
    {
      "pertanyaan": "Bulu apa yang berat sekali?",
      "jawaban": "Bu Lurah"
    },
    {
      "pertanyaan": "Apa yang pantatnya selalu dihisap?",
      "jawaban": "Rokok"
    },
    {
      "pertanyaan": "Gajah mati meninggalkan gading, harimau mati meninggalkan belang, manusia mati meninggalkan?",
      "jawaban": "Hutang"
    },
    {
      "pertanyaan": "Cuman goyang-goyang kaki dapat duit. Siapakah dia?",
      "jawaban": "Tukang jahit"
    },
    {
      "pertanyaan": "Cuman kipas-kipas tapi dapat duit. Siapakah dia?",
      "jawaban": "Tukang sate"
    },
    {
      "pertanyaan": "Jam apa yang sering dipakai dukun?",
      "jawaban": "Jampi-jampi"
    },
    {
      "pertanyaan": "Binatang apa yang paling banyak lewat di jalan raya?",
      "jawaban": "Kijang"
    },
    {
      "pertanyaan": "Binatang apa yang kalo dikasih obat malah mati?",
      "jawaban": "Nyamuk"
    },
    {
      "pertanyaan": "Monyet apa yang berlari-lari di lapangan?",
      "jawaban": "Monyetak gol"
    },
    {
      "pertanyaan": "Air apa yang perlu digetok?",
      "jawaban": "Air keras"
    },
    {
      "pertanyaan": "Pisau apa yang tidak bisa memotong?",
      "jawaban": "Pisau cukur"
    },
    {
      "pertanyaan": "Kalu dia duduk malah lebih tinggi dari pada saat dia berdiri?",
      "jawaban": "Kucing duduk"
    },
    {
      "pertanyaan": "Masuknya hijau, keluarnya merah. Apa hayu?",
      "jawaban": "Sirih"
    },
    {
      "pertanyaan": "Dokter apa yang tidak boleh jatuh cinta pada pasiennya?",
      "jawaban": "Dokter hewan"
    },
    {
      "pertanyaan": "Bunga apa yang paling disuka cewek?",
      "jawaban": "Bunga bank"
    },
    {
      "pertanyaan": "Ciuman sayang di kening, ciuman cinta di pipi, ciuman panas di..?",
      "jawaban": "Dikompor"
    },
    {
      "pertanyaan": "Kera apa yang paling besar se-jawa barat?",
      "jawaban": "Kerawang"
    },
    {
      "pertanyaan": "Kera apa yang bersaudara?",
      "jawaban": "Kerabat"
    },
    {
      "pertanyaan": "Bentuknya kotak, dipegang empuk, dan bisa dimakan. Apa hayu?",
      "jawaban": "Tahu"
    },
    {
      "pertanyaan": "Panjang, berbulu, kalo dimasukin harus pelan-pelan, kalau tidak nanti berdarah. Apa hayu?",
      "jawaban": "Sikat gigi"
    },
    {
      "pertanyaan": "Seribu dibagi dua, jadi?",
      "jawaban": "Sobek"
    },
    {
      "pertanyaan": "Apa yang dilakukan polisi ditengah jalan?",
      "jawaban": "Tidur"
    },
    {
      "pertanyaan": "Siapa menteri kebersihan china?",
      "jawaban": "Kemo Cheng"
    },
    {
      "pertanyaan": "Berdiri sama tinggi, duduk sama rendah, berlari sama …?",
      "jawaban": "Capeknya"
    },
    {
      "pertanyaan": "Kota apa yang selalu minta perhiasan sama ibunya?",
      "jawaban": "Magelang"
    },
    {
      "pertanyaan": "Apa yang selalu jauh di mata dekat di hati?",
      "jawaban": "Paru paru"
    },
    {
      "pertanyaan": "Yang beli nggak pakai, yang pakai tidak beli, yang jual nggak mau pakai?",
      "jawaban": "Kain kafan"
    },
    {
      "pertanyaan": "Tanah apa yang tidak bisa diwariskan?",
      "jawaban": "Tanah abang"
    },
    {
      "pertanyaan": "Bis apa yang menyesatkan?",
      "jawaban": "Bisikan setan"
    },
    {
      "pertanyaan": "Makan apa yang nggak bakal bikin kenyang?",
      "jawaban": "Makan waktu"
    },
    {
      "pertanyaan": "Surat apa yang tidak pernah dibalas oleh pembacanya?",
      "jawaban": "Surat kabar"
    },
    {
      "pertanyaan": "Hari apa yang nggak sempit?",
      "jawaban": "Hari Lebaran"
    },
    {
      "pertanyaan": "Bentuknya lingkaran, ada kacangnya ditengah-tengah, bisa dijilat, huruf depannya M huruf belakangnya K. Apa hayu?",
      "jawaban": "Martabak"
    },
    {
      "pertanyaan": "Oleh-oleh apa yang dibawa kakek saat pulang dari berendam dilaut?",
      "jawaban": "Telor asin"
    },
    {
      "pertanyaan": "Ayam apa yang selalu dicari orang?",
      "jawaban": "Ayam hilang"
    },
    {
      "pertanyaan": "Orang apa yang berenang tapi rambutnya tidak basah?",
      "jawaban": "Orang botak"
    },
    {
      "pertanyaan": "Barang apa yang kalo perlu dibuang, kalo sudah nggak perlu malah diambil?",
      "jawaban": "Jangkar kapal"
    },
    {
      "pertanyaan": "Negara apa yang doyannya minum?",
      "jawaban": "Australia"
    },
    {
      "pertanyaan": "Buah apa yang nggak bisa dipetik?",
      "jawaban": "Buah jatuh"
    },
    {
      "pertanyaan": "Apa bahasa inggrisnya harimau yang jago main golf?",
      "jawaban": "Tiger wood"
    },
    {
      "pertanyaan": "Sebutkan makanan ala anak punk",
      "jawaban": "Punksit"
    },
    {
      "pertanyaan": "Sebutkan tempat mangkal anak punk",
      "jawaban": "Punkalan ojek"
    },
    {
      "pertanyaan": "Shampoo apa yang bisa mengeluarkan asap?",
      "jawaban": "Shampoorna hijau"
    },
    {
      "pertanyaan": "Suku apa yang suka berjaga-jaga tiap malam?",
      "jawaban": "Sukuriti"
    },
    {
      "pertanyaan": "Tari apa yang paling menakutkan?",
      "jawaban": "Taring harimau"
    },
    {
      "pertanyaan": "Tari apa yang gerakannya tidak usah dipelajari?",
      "jawaban": "Tarik nafas"
    },
    {
      "pertanyaan": "Telor apa yang paling keras?",
      "jawaban": "Telortoar"
    },
    {
      "pertanyaan": "Tempe apa yang menyakitkan?",
      "jawaban": "Tempeleng"
    },
    {
      "pertanyaan": "Tempe apa yang tidak bisa dimakan?",
      "jawaban": "Temperatur"
    },
    {
      "pertanyaan": "Tong apa yang tidak bisa buat nyimpen krupuk?",
      "jawaban": "Tongkat"
    },
    {
      "pertanyaan": "Apa bahasa arabnya diam ditempat?",
      "jawaban": "Takabur"
    },
    {
      "pertanyaan": "Mata apa yang nggak bisa pakai kacamata?",
      "jawaban": "Mata kaki"
    },
    {
      "pertanyaan": "Mi apa yang paling banyak di terminal?",
      "jawaban": "Mikrolet"
    },
    {
      "pertanyaan": "Nada apa yang punya pangkat?",
      "jawaban": "Nada mayor"
    },
    {
      "pertanyaan": "Nasi apa yang nggak bisa hilang?",
      "jawaban": "Nasionalisme"
    },
    {
      "pertanyaan": "Panci apa yang bisa dipakai buat nangkep ikan?",
      "jawaban": "Pancing ikan"
    },
    {
      "pertanyaan": "Resep apa yang dibayar harian?",
      "jawaban": "Resepsionis"
    },
    {
      "pertanyaan": "Sambal yang berbahaya?",
      "jawaban": "Kesambal petir"
    },
    {
      "pertanyaan": "Kasur apa yang tidak bisa ditidurin?",
      "jawaban": "Kasurupan"
    },
    {
      "pertanyaan": "Kencan apa yang paling menyakitkan?",
      "jawaban": "Kencantol kawat"
    },
    {
      "pertanyaan": "Ketan apa yang menyakitkan?",
      "jawaban": "Ketancap pisau"
    },
    {
      "pertanyaan": "Kirim apa yang masuk penjara?",
      "jawaban": "Kiriminal"
    },
    {
      "pertanyaan": "Kue apa yang asem?",
      "jawaban": "Kuetek"
    },
    {
      "pertanyaan": "Kunci apa yang sering ditaruh dikepala?",
      "jawaban": "Kuncir rambut"
    }
  ]
rndm = anu[Math.floor(Math.random() * anu.length)];
clu = clue(rndm.jawaban)
let obj = {
  soal: rndm.pertanyaan,
  jawab: rndm.jawaban,
  clue: clu
}
resolve(obj)
    } catch (e){
      resolve(e)
    }
  })
}

function _susunkata() {
  return new Promise((resolve, reject) =>{
    let anu = [
    {
      "tipe": "Benda",
      "huruf": "T-R-A-G-I",
      "jawaban": "GITAR"
    },
    {
      "tipe": "Benda",
      "huruf": "A-P-S-U-I",
      "jawaban": "PISAU"
    },
    {
      "tipe": "Benda",
      "huruf": "A-P-I-P",
      "jawaban": "PIPA"
    },
    {
      "tipe": "Hewan",
      "huruf": "M-A-Y-A",
      "jawaban": "AYAM"
    },
    {
      "tipe": "Benda",
      "huruf": "A-K-P-L-E-A",
      "jawaban": "KEPALA"
    },
    {
      "tipe": "Benda",
      "huruf": "E-O-N-K-A-R-Y",
      "jawaban": "KERAYON"
    },
    {
      "tipe": "Benda",
      "huruf": "G-U-N-A",
      "jawaban": "UANG"
    },
    {
      "tipe": "Hewan",
      "huruf": "D-A-K-U",
      "jawaban": "KUDA"
    },
    {
      "tipe": "Makanan",
      "huruf": "A-T-D-O-N",
      "jawaban": "DONAT"
    },
    {
      "tipe": "Benda",
      "huruf": "E-P-I-C",
      "jawaban": "PECI"
    },
    {
      "tipe": "Kota",
      "huruf": "G-N-U-L-A-M-P",
      "jawaban": "LAMPUNG"
    },
    {
      "tipe": "Tempat",
      "huruf": "B-U-N-R-A-K-U",
      "jawaban": "KUBURAN"
    },
    {
      "tipe": "Benda",
      "huruf": "S-A-M-U-K",
      "jawaban": "KAMUS"
    },
    {
      "tipe": "Benda",
      "huruf": "B-A-R-D-E-E-N",
      "jawaban": "BENDERA"
    },
    {
      "tipe": "Benda",
      "huruf": "A-N-I-P-O",
      "jawaban": "PIANO"
    },
    {
      "tipe": "Buah",
      "huruf": "A-B-R-A-N-T-U-M",
      "jawaban": "RAMBUTAN"
    },
    {
      "tipe": "Hewan",
      "huruf": "A-N-G-E-R-U-B",
      "jawaban": "BERUANG"
    },
    {
      "tipe": "Hewan",
      "huruf": "B-U-R-N-G-U",
      "jawaban": "BURUNG"
    },
    {
      "tipe": "Hewan",
      "huruf": "B-E-N-G-N-A-T",
      "jawaban": "BANTENG"
    },
    {
      "tipe": "Buah",
      "huruf": "A-N-S-A-N",
      "jawaban": "NANAS"
    },
    {
      "tipe": "Buah",
      "huruf": "A-I-R-D-U-N",
      "jawaban": "DURIAN"
    },
    {
      "tipe": "Hewan",
      "huruf": "K-A-I-N",
      "jawaban": "IKAN"
    },
    {
      "tipe": "Benda",
      "huruf": "I-N-P-U-T",
      "jawaban": "PINTU"
    },
    {
      "tipe": "Hewan",
      "huruf": "A-N-U-M-K-Y",
      "jawaban": "NYAMUK"
    },
    {
      "tipe": "Benda",
      "huruf": "A-D-L-A-N-S",
      "jawaban": "SANDAL"
    },
    {
      "tipe": "Hewan",
      "huruf": "A-K-E-B-U-R",
      "jawaban": "KERBAU"
    },
    {
      "tipe": "Benda",
      "huruf": "S-T-R-E-A-K",
      "jawaban": "KERTAS"
    },
    {
      "tipe": "Benda",
      "huruf": "G-E-N-P-O-T",
      "jawaban": "TOPENG"
    },
    {
      "tipe": "Benda",
      "huruf": "A-S-B-U-N",
      "jawaban": "SABUN"
    },
    {
      "tipe": "Hewan",
      "huruf": "A-U-N-T",
      "jawaban": "UNTA"
    },
    {
      "tipe": "Benda",
      "huruf": "I-L-N-I-L",
      "jawaban": "LILIN"
    },
    {
      "tipe": "Benda",
      "huruf": "M-A-J",
      "jawaban": "JAM"
    },
    {
      "tipe": "Benda",
      "huruf": "A-K-U-P",
      "jawaban": "PAKU"
    },
    {
      "tipe": "Buah",
      "huruf": "A-P-I-N-G-S",
      "jawaban": "PISANG"
    },
    {
      "tipe": "Benda",
      "huruf": "A-T-S",
      "jawaban": "TAS"
    },
    {
      "tipe": "Benda",
      "huruf": "I-R-K-U-S",
      "jawaban": "KURSI"
    },
    {
      "tipe": "Hewan",
      "huruf": "I-P-S-A",
      "jawaban": "SAPI"
    },
    {
      "tipe": "Hewan",
      "huruf": "B-A-N-G-K-I-M",
      "jawaban": "KAMBING"
    },
    {
      "tipe": "Hewan",
      "huruf": "R-A-U-L",
      "jawaban": "ULAR"
    },
    {
      "tipe": "Benda",
      "huruf": "A-L-B-T-A-N",
      "jawaban": "BANTAL"
    },
    {
      "tipe": "Benda",
      "huruf": "E-L-M-I-R-A",
      "jawaban": "LEMARI"
    },
    {
      "tipe": "Benda",
      "huruf": "S-U-I-T",
      "jawaban": "TISU"
    },
    {
      "tipe": "Benda",
      "huruf": "G-I-N-R-I-P",
      "jawaban": "PIRING"
    },
    {
      "tipe": "Tempat",
      "huruf": "A-L-B-I",
      "jawaban": "BALI"
    },
    {
      "tipe": "Benda",
      "huruf": "S-P-I-N-E-L",
      "jawaban": "PENSIL"
    },
    {
      "tipe": "Benda",
      "huruf": "T-U-B-A",
      "jawaban": "BATU"
    },
    {
      "tipe": "Benda",
      "huruf": "A-P-U-S",
      "jawaban": "SAPU"
    },
    {
      "tipe": "Kota",
      "huruf": "B-R-O-G-O",
      "jawaban": "BOGOR"
    },
    {
      "tipe": "Benda",
      "huruf": "A-N-I-S-U-L-K",
      "jawaban": "LUKISAN"
    },
    {
      "tipe": "Benda",
      "huruf": "K-U-S-A-L-K",
      "jawaban": "KULKAS"
    },
    {
      "tipe": "Hewan",
      "huruf": "A-K-D-A-B",
      "jawaban": "BADAK"
    },
    {
      "tipe": "Hewan",
      "huruf": "A-H-J-A-G",
      "jawaban": "GAJAH"
    },
    {
      "tipe": "Benda",
      "huruf": "A-N-Y-P-U-G",
      "jawaban": "PAYUNG"
    },
    {
      "tipe": "Benda",
      "huruf": "A-D-H-U-N-K",
      "jawaban": "HANDUK"
    },
    {
      "tipe": "Buah",
      "huruf": "A-S-M-A-N-G-E",
      "jawaban": "SEMANGKA"
    },
    {
      "tipe": "Benda",
      "huruf": "A-S-E-T-U-P",
      "jawaban": "SEPATU"
    },
    {
      "tipe": "Benda",
      "huruf": "G-U-R-A-P",
      "jawaban": "GARPU"
    },
    {
      "tipe": "Hewan",
      "huruf": "C-U-K-I-N-G",
      "jawaban": "KUCING"
    },
    {
      "tipe": "Hewan",
      "huruf": "B-A-M-O-D",
      "jawaban": "DOMBA"
    },
    {
      "tipe": "Tempat",
      "huruf": "T-H-O-L-E",
      "jawaban": "HOTEL"
    },
    {
      "tipe": "Hewan",
      "huruf": "H-E-A-P-J-A-R",
      "jawaban": "JERAPAH"
    },
    {
      "tipe": "Tempat",
      "huruf": "L-A-T-H-E",
      "jawaban": "HALTE"
    },
    {
      "tipe": "Benda",
      "huruf": "E-R-I-C-M-N",
      "jawaban": "CERMIN"
    },
    {
      "tipe": "Benda",
      "huruf": "M-O-P-E-T-U-R-K",
      "jawaban": "KOMPUTER"
    },
    {
      "tipe": "Benda",
      "huruf": "M-E-T-R-O-S",
      "jawaban": "TERMOS"
    },
    {
      "tipe": "Benda",
      "huruf": "A-C-L-E-A-N",
      "jawaban": "CELANA"
    },
    {
      "tipe": "Benda",
      "huruf": "A-I-R-I-T",
      "jawaban": "TIRAI"
    },
    {
      "tipe": "Tempat",
      "huruf": "A-N-D-R-A-B-A",
      "jawaban": "BANDARA"
    },
    {
      "tipe": "Organ",
      "huruf": "S-U-U-S",
      "jawaban": "USUS"
    },
    {
      "tipe": "Hewan",
      "huruf": "A-G-E-N-T-N-B",
      "jawaban": "BANTENG"
    },
    {
      "tipe": "Hewan",
      "huruf": "A-K-A-D-B",
      "jawaban": "BADAK"
    },
    {
      "tipe": "Buah",
      "huruf": "E-M-N-O-L",
      "jawaban": "LEMON"
    },
    {
      "tipe": "Tempat",
      "huruf": "D-A-N-N-A-K-G",
      "jawaban": "KANDANG"
    },
    {
      "tipe": "Buah",
      "huruf": "A-P-S-I-N-G",
      "jawaban": "PISANG"
    },
    {
      "tipe": "Benda",
      "huruf": "L-I-S-E-T-T-A",
      "jawaban": "SATELIT"
    },
    {
      "tipe": "Benda",
      "huruf": "A-K-E-B-C",
      "jawaban": "BECAK"
    },
    {
      "tipe": "Hewan",
      "huruf": "A-N-A-B-U-G",
      "jawaban": "BANGAU"
    },
    {
      "tipe": "Tumbuhan",
      "huruf": "A-N-B-U-G",
      "jawaban": "BUNGA"
    },
    {
      "tipe": "Benda",
      "huruf": "I-P-T-U-N",
      "jawaban": "PINTU"
    },
    {
      "tipe": "Benda",
      "huruf": "I-P-K-O",
      "jawaban": "KOPI"
    },
    {
      "tipe": "Hewan",
      "huruf": "A-K-R-U-B-E",
      "jawaban": "KERBAU"
    },
    {
      "tipe": "Bagian Tubuh",
      "huruf": "D-I-N-G-U-H",
      "jawaban": "HIDUNG"
    },
    {
      "tipe": "Pekerjaan",
      "huruf": "L-I-P-T-O",
      "jawaban": "PILOT"
    },
    {
      "tipe": "Benda",
      "huruf": "A-C-L-E-A-N",
      "jawaban": "CELANA"
    },
    {
      "tipe": "BENDA",
      "huruf": "H-A-N-A-L-A-M",
      "jawaban": "HALAMAN"
    },
    {
      "tipe": "Tumbuhan",
      "huruf": "G-A-B-W-A-N",
      "jawaban": "BAWANG"
    },
    {
      "tipe": "Benda",
      "huruf": "U-C-T-A-R",
      "jawaban": "CATUR"
    },
    {
      "tipe": "Benda",
      "huruf": "M-R-T-O-O",
      "jawaban": "MOTOR"
    },
    {
      "tipe": "Tempat",
      "huruf": "L-E-A-K-S",
      "jawaban": "KELAS"
    },
    {
      "tipe": "Tempat",
      "huruf": "A-K-E-H-O-L-S",
      "jawaban": "SEKOLAH"
    },
    {
      "tipe": "Hewan",
      "huruf": "J-I-G-N-A-N",
      "jawaban": "ANJING"
    },
    {
      "tipe": "Benda",
      "huruf": "S-A-B-E-R",
      "jawaban": "BERAS"
    },
    {
      "tipe": "Hewan",
      "huruf": "M-U-T-E-S",
      "jawaban": "SEMUT"
    },
    {
      "tipe": "Benda",
      "huruf": "D-A-K-U-H-N",
      "jawaban": "HANDUK"
    },
    {
      "tipe": "Benda",
      "huruf": "A-L-E-N-E-D-J",
      "jawaban": "JENDELA"
    },
    {
      "tipe": "Buah",
      "huruf": "A-K-P-E-A-L",
      "jawaban": "KELAPA"
    },
    {
      "tipe": "Hewan",
      "huruf": "G-L-U-O-N-N-B",
      "jawaban": "BUNGLON"
    },
    {
      "tipe": "Makanan",
      "huruf": "A-A-R-C",
      "jawaban": "ACAR"
    },
    {
      "tipe": "Tempst",
      "huruf": "E-L-H-A-T",
      "jawaban": "HALTE"
    },
    {
      "tipe": "Tempat",
      "huruf": "A-H-A-W-S",
      "jawaban": "SAWAH"
    },
    {
      "tipe": "Tempat",
      "huruf": "D-A-R-A-B-A-N",
      "jawaban": "BANDARA"
    },
    {
      "tipe": "Hewan",
      "huruf": "U-H-I",
      "jawaban": "HIU"
    },
    {
      "tipe": "Sayuran",
      "huruf": "L-O-K",
      "jawaban": "KOL"
    },
    {
      "tipe": "Benda",
      "huruf": "N-A-B",
      "jawaban": "BAN"
    },
    {
      "tipe": "Benda",
      "huruf": "B-R-O",
      "jawaban": "BOR"
    },
    {
      "tipe": "Benda",
      "huruf": "E-R-P",
      "jawaban": "PER"
    },
    {
      "tipe": "Tempat",
      "huruf": "A-U-J-B",
      "jawaban": "BAJU"
    },
    {
      "tipe": "Buah",
      "huruf": "P-E-A-L",
      "jawaban": "APEL"
    },
    {
      "tipe": "Benda",
      "huruf": "K-U-B-U",
      "jawaban": "BUKU"
    },
    {
      "tipe": "Benda",
      "huruf": "B-A-L-O",
      "jawaban": "BOLA"
    },
    {
      "tipe": "Sayuran",
      "huruf": "A-C-B-E",
      "jawaban": "CABE"
    },
    {
      "tipe": "Benda",
      "huruf": "F-I-R-E",
      "jawaban": "FERI"
    },
    {
      "tipe": "Hewan",
      "huruf": "R-U-I-N",
      "jawaban": "NURI"
    },
    {
      "tipe": "Benda",
      "huruf": "Y-O-O-Y",
      "jawaban": "YOYO"
    },
    {
      "tipe": "Benda",
      "huruf": "F-A-S-O",
      "jawaban": "SOFA"
    },
    {
      "tipe": "Benda",
      "huruf": "I-L-T-A",
      "jawaban": "TALI"
    },
    {
      "tipe": "Hewan",
      "huruf": "S-U-R-A",
      "jawaban": "RUSA"
    },
    {
      "tipe": "Benda",
      "huruf": "P-A-U-L",
      "jawaban": "PALU"
    },
    {
      "tipe": "Hewan",
      "huruf": "E-L-E-L",
      "jawaban": "LELE"
    },
    {
      "tipe": "Benda",
      "huruf": "P-I-T-O",
      "jawaban": "TOPI"
    },
    {
      "tipe": "Sayuran",
      "huruf": "A-B-U-L",
      "jawaban": "LABU"
    },
    {
      "tipe": "Benda",
      "huruf": "A-Y-U-K",
      "jawaban": "KAYU"
    },
    {
      "tipe": "Buah",
      "huruf": "L-I-C-E",
      "jawaban": "LECI"
    },
    {
      "tipe": "Benda",
      "huruf": "L-A-J-A",
      "jawaban": "JALA"
    },
    {
      "tipe": "Benda",
      "huruf": "S-A-U-K",
      "jawaban": "KUAS"
    },
    {
      "tipe": "Benda",
      "huruf": "D-I-A-S",
      "jawaban": "DASI"
    },
    {
      "tipe": "Hewan",
      "huruf": "L-A-U-T",
      "jawaban": "ULAT"
    },
    {
      "tipe": "Benda",
      "huruf": "G-A-N-T",
      "jawaban": "TANG"
    },
    {
      "tipe": "Hewan",
      "huruf": "A-P-U-S",
      "jawaban": "PAUS"
    },
    {
      "tipe": "Hewan",
      "huruf": "U-U-Y-Y",
      "jawaban": "YUYU"
    },
    {
      "tipe": "Sayuran",
      "huruf": "A-W-I-S",
      "jawaban": "SAWI"
    },
    {
      "tipe": "Sayuran",
      "huruf": "E-T-G-O",
      "jawaban": "TOGE"
    },
    {
      "tipe": "Buah",
      "huruf": "A-S-O-W",
      "jawaban": "SAWO"
    },
    {
      "tipe": "Buah",
      "huruf": "R-I-C-E",
      "jawaban": "CERI"
    },
    {
      "tipe": "Benda",
      "huruf": "I-K-A-L",
      "jawaban": "KAIL"
    },
    {
      "tipe": "Sayuran",
      "huruf": "A-R-E-P",
      "jawaban": "PARE"
    },
    {
      "tipe": "Benda",
      "huruf": "D-A-R-O",
      "jawaban": "RODA"
    },
    {
      "tipe": "Benda",
      "huruf": "L-E-M-H",
      "jawaban": "HELM"
    },
    {
      "tipe": "Buah",
      "huruf": "P-A-L-E",
      "jawaban": "APEL"
    },
    {
      "tipe": "Benda",
      "huruf": "R-U-M-D",
      "jawaban": "DRUM"
    },
    {
      "tipe": "Hewan",
      "huruf": "A-R-E-K",
      "jawaban": "KERA"
    },
    {
      "tipe": "Benda",
      "huruf": "K-E-N-T",
      "jawaban": "TENK"
    },
    {
      "tipe": "Pekerjaan",
      "huruf": "U-R-U-G",
      "jawaban": "GURU"
    },
    {
      "tipe": "Pekerjaan",
      "huruf": "K-O-I-K",
      "jawaban": "KOKI"
    },
    {
      "tipe": "Buah",
      "huruf": "J-R-U-K-E",
      "jawaban": "JERUK"
    },
    {
      "tipe": "Hewan",
      "huruf": "G-A-L-E-N",
      "jawaban": "ELANG"
    },
    {
      "tipe": "Benda",
      "huruf": "B-E-R-E-M",
      "jawaban": "EMBER"
    },
    {
      "tipe": "Benda",
      "huruf": "B-E-G-O-N",
      "jawaban": "OBENG"
    },
    {
      "tipe": "Benda",
      "huruf": "A-A-L-I-P",
      "jawaban": "PIALA"
    },
    {
      "tipe": "Benda",
      "huruf": "H-A-R-U-M",
      "jawaban": "RUMAH"
    },
    {
      "tipe": "Hewan",
      "huruf": "G-A-I-N-S",
      "jawaban": "SINGA"
    },
    {
      "tipe": "Hewan",
      "huruf": "K-U-S-I-T",
      "jawaban": "TIKUS"
    },
    {
      "tipe": "Benda",
      "huruf": "J-A-W-N-A",
      "jawaban": "WAJAN"
    },
    {
      "tipe": "Hewan",
      "huruf": "B-R-A-Z-E",
      "jawaban": "ZEBRA"
    },
    {
      "tipe": "Benda",
      "huruf": "L-I-T-O-R",
      "jawaban": "TROLI"
    },
    {
      "tipe": "Hewan",
      "huruf": "A-C-M-A-N",
      "jawaban": "MACAN"
    },
    {
      "tipe": "Sayuran",
      "huruf": "M-I-N-U-T",
      "jawaban": "TIMUN"
    },
    {
      "tipe": "Benda",
      "huruf": "B-A-N-O-L",
      "jawaban": "BALON"
    },
    {
      "tipe": "Benda",
      "huruf": "P-A-N-I-C",
      "jawaban": "PANCI"
    },
    {
      "tipe": "Benda",
      "huruf": "C-U-I-N-K",
      "jawaban": "KUNCI"
    },
    {
      "tipe": "Hewan",
      "huruf": "A-P-A-N-D",
      "jawaban": "PANDA"
    },
    {
      "tipe": "Benda",
      "huruf": "A-D-N-E-T",
      "jawaban": "TENDA"
    },
    {
      "tipe": "Hewan",
      "huruf": "N-O-B-I-S",
      "jawaban": "BISON"
    },
    {
      "tipe": "Buah",
      "huruf": "E-L-M-O-N",
      "jawaban": "MELON"
    },
    {
      "tipe": "Hewan",
      "huruf": "A-T-R-I-P",
      "jawaban": "TAPIR"
    },
    {
      "tipe": "Benda",
      "huruf": "S-I-R-S-I",
      "jawaban": "SISIR"
    },
    {
      "tipe": "Benda",
      "huruf": "R-U-S-A-K",
      "jawaban": "KASUR"
    },
    {
      "tipe": "Benda",
      "huruf": "P-O-K-E-R",
      "jawaban": "KOPER"
    },
    {
      "tipe": "Benda",
      "huruf": "A-L-E-G-S",
      "jawaban": "GELAS"
    },
    {
      "tipe": "Hewan",
      "huruf": "A-D-G-U-N",
      "jawaban": "UDANG"
    },
    {
      "tipe": "Benda",
      "huruf": "S-P-I-N-O",
      "jawaban": "SPION"
    },
    {
      "tipe": "Hewan",
      "huruf": "A-T-A-L-L",
      "jawaban": "LALAT"
    },
    {
      "tipe": "Buah",
      "huruf": "J-A-B-M-U",
      "jawaban": "JAMBU"
    },
    {
      "tipe": "Benda",
      "huruf": "A-P-O-M-P",
      "jawaban": "POMPA"
    },
    {
      "tipe": "Benda",
      "huruf": "A-M-U-J-R",
      "jawaban": "JARUM"
    },
    {
      "tipe": "Benda",
      "huruf": "S-K-E-E-T",
      "jawaban": "KESET"
    },
    {
      "tipe": "Hewan",
      "huruf": "A-U-B-A-Y",
      "jawaban": "BUAYA"
    },
    {
      "tipe": "Benda",
      "huruf": "I-T-A-S-K",
      "jawaban": "SIKAT"
    },
    {
      "tipe": "Buah",
      "huruf": "M-O-T-A-T",
      "jawaban": "TOMAT"
    },
    {
      "tipe": "Benda",
      "huruf": "K-E-R-T-O",
      "jawaban": "ROKET"
    },
    {
      "tipe": "Benda",
      "huruf": "T-A-K-E-R",
      "jawaban": "RAKET"
    },
    {
      "tipe": "Benda",
      "huruf": "M-E-T-R-O",
      "jawaban": "REMOT"
    },
    {
      "tipe": "Hewan",
      "huruf": "B-E-L-A-H",
      "jawaban": "LEBAH"
    },
    {
      "tipe": "Hewan",
      "huruf": "C-I-A-K-C",
      "jawaban": "CICAK"
    },
    {
      "tipe": "Hewan",
      "huruf": "A-K-G-A-G",
      "jawaban": "GAGAK"
    },
    {
      "tipe": "Buah",
      "huruf": "L-A-S-K-A",
      "jawaban": "SALAK"
    },
    {
      "tipe": "Benda",
      "huruf": "B-A-S-K-A",
      "jawaban": "ASBAK"
    },
    {
      "tipe": "Benda",
      "huruf": "L-O-B-T-O",
      "jawaban": "BOTOL"
    },
    {
      "tipe": "Hewan",
      "huruf": "G-A-B-O-N",
      "jawaban": "BANGO"
    },
    {
      "tipe": "Hewan",
      "huruf": "C-O-K-E-A",
      "jawaban": "KECOA"
    },
    {
      "tipe": "Hewan",
      "huruf": "P-U-T-I-A",
      "jawaban": "TUPAI"
    },
    {
      "tipe": "Benda",
      "huruf": "B-A-O-I-L",
      "jawaban": "BIOLA"
    },
    {
      "tipe": "Hewan",
      "huruf": "A-K-A-L-O",
      "jawaban": "KOALA"
    },
    {
      "tipe": "Sayuran",
      "huruf": "A-B-A-M-Y",
      "jawaban": "BAYAM"
    },
    {
      "tipe": "Sayuran",
      "huruf": "M-U-R-A-J",
      "jawaban": "JAMUR"
    },
    {
      "tipe": "Benda",
      "huruf": "L-I-U-K-A",
      "jawaban": "KUALI"
    },
    {
      "tipe": "Hewan",
      "huruf": "S-A-G-A-N",
      "jawaban": "ANGSA"
    },
    {
      "tipe": "Benda",
      "huruf": "N-A-B-O-D",
      "jawaban": "BANDO"
    },
    {
      "tipe": "Benda",
      "huruf": "S-T-A-K-E",
      "jawaban": "KASET"
    },
    {
      "tipe": "Benda",
      "huruf": "G-A-P-A-R",
      "jawaban": "PAGAR"
    },
    {
      "tipe": "Hewan",
      "huruf": "K-U-R-A-N",
      "jawaban": "RAKUN"
    },
    {
      "tipe": "Benda",
      "huruf": "B-L-A-K-E",
      "jawaban": "KABEL"
    },
    {
      "tipe": "Benda",
      "huruf": "B-R-O-T-O",
      "jawaban": "ROBOT"
    },
    {
      "tipe": "Benda",
      "huruf": "G-A-E-L-S",
      "jawaban": "GELAS"
    },
    {
      "tipe": "Benda",
      "huruf": "P-I-S-K-A",
      "jawaban": "KIPAS"
    },
    {
      "tipe": "Benda",
      "huruf": "K-E-R-O-K",
      "jawaban": "KOREK"
    },
    {
      "tipe": "Benda",
      "huruf": "A-L-O-N-G",
      "jawaban": "GALON"
    },
    {
      "tipe": "Benda",
      "huruf": "A-C-I-N-D",
      "jawaban": "CANDI"
    },
    {
      "tipe": "Hewan",
      "huruf": "E-N-Y-U-P",
      "jawaban": "PENYU"
    },
    {
      "tipe": "Benda",
      "huruf": "A-P-I-O-N",
      "jawaban": "PIABO"
    },
    {
      "tipe": "Pekerjaan",
      "huruf": "R-U-R-I-K",
      "jawaban": "KURIR"
    },
    {
      "tipe": "Pekerjaan",
      "huruf": "P-U-S-R-I",
      "jawaban": "SUPIR"
    },
    {
      "tipe": "Pekerjaan",
      "huruf": "A-K-R-I-S",
      "jawaban": "KASIR"
    },
    {
      "tipe": "Profesi",
      "huruf": "L-A-T-T-E",
      "jawaban": "ATLET"
    },
    {
      "tipe": "Profesi",
      "huruf": "P-I-K-E-R",
      "jawaban": "KIPER"
    },
    {
      "tipe": "Profesi",
      "huruf": "W-A-I-T-S",
      "jawaban": "WASIT"
    },
    {
      "tipe": "Pekerjaan",
      "huruf": "B-I-B-A-T",
      "jawaban": "TABIB"
    },
    {
      "tipe": "Pekerjaan",
      "huruf": "R-I-K-U-S",
      "jawaban": "KUSIR"
    },
    {
      "tipe": "Tempat",
      "huruf": "H-A-N-T-U",
      "jawaban": "HUTAN"
    },
    {
      "tipe": "Tempat",
      "huruf": "D-R-A-U-P",
      "jawaban": "DAPUR"
    },
    {
      "tipe": "Tempat",
      "huruf": "M-A-N-T-A",
      "jawaban": "TAMAN"
    },
    {
      "tipe": "Tempat",
      "huruf": "P-A-R-A-S",
      "jawaban": "PASAR"
    },
    {
      "tipe": "Benda",
      "huruf": "B-A-K-E-O-N",
      "jawaban": "BONEKA"
    },
    {
      "tipe": "Benda",
      "huruf": "J-A-K-E-M-E",
      "jawaban": "KEMEJA"
    },
    {
      "tipe": "Hewan",
      "huruf": "G-I-A-N-U-A",
      "jawaban": "IGUANA"
    },
    {
      "tipe": "Benda",
      "huruf": "H-A-R-E-U-P",
      "jawaban": "PERAHU"
    },
    {
      "tipe": "Benda",
      "huruf": "A-M-A-K-E-R",
      "jawaban": "KAMERA"
    },
    {
      "tipe": "Benda",
      "huruf": "D-A-P-E-S-E",
      "jawaban": "SEPEDA"
    },
    {
      "tipe": "Benda",
      "huruf": "R-E-T-A-K-E",
      "jawaban": "KERETA"
    },
    {
      "tipe": "Hewan",
      "huruf": "G-U-I-T-A-R",
      "jawaban": "GURITA"
    },
    {
      "tipe": "Buah",
      "huruf": "A-P-E-P-A-Y",
      "jawaban": "PEPAYA"
    },
    {
      "tipe": "Benda",
      "huruf": "A-K-L-U-N-G",
      "jawaban": "KALUNG"
    },
    {
      "tipe": "Benda",
      "huruf": "N-A-T-A-N-E",
      "jawaban": "ANTENA"
    },
    {
      "tipe": "Buah",
      "huruf": "G-R-A-N-G-U",
      "jawaban": "ANGGUR"
    },
    {
      "tipe": "Benda",
      "huruf": "C-R-A-S-K-I",
      "jawaban": "KARCIS"
    },
    {
      "tipe": "Benda",
      "huruf": "P-E-G-S-E-R",
      "jawaban": "GESPER"
    },
    {
      "tipe": "Sayuran",
      "huruf": "A-G-N-A-K-C",
      "jawaban": "KACANG"
    },
    {
      "tipe": "Hewan",
      "huruf": "J-I-G-K-A-N",
      "jawaban": "KIJANG"
    },
    {
      "tipe": "Benda",
      "huruf": "N-A-G-W-A-G",
      "jawaban": "GAWANG"
    },
    {
      "tipe": "Hewan",
      "huruf": "K-O-D-O-M-O",
      "jawaban": "KOMODO"
    },
    {
      "tipe": "Benda",
      "huruf": "G-L-U-I-N-G",
      "jawaban": "GULING"
    },
    {
      "tipe": "Benda",
      "huruf": "A-N-G-Y-G-U",
      "jawaban": "GAYUNG"
    },
    {
      "tipe": "Benda",
      "huruf": "N-A-T-I-N-G",
      "jawaban": "ANTING"
    },
    {
      "tipe": "Benda",
      "huruf": "K-R-O-O-M-P",
      "jawaban": "KOMPOR"
    },
    {
      "tipe": "Benda",
      "huruf": "M-U-S-P-I-T",
      "jawaban": "SUMPIT"
    },
    {
      "tipe": "Benda",
      "huruf": "D-E-M-O-P-T",
      "jawaban": "DOMPET"
    },
    {
      "tipe": "Hewan",
      "huruf": "A-G-N-I-C-C",
      "jawaban": "CACING"
    },
    {
      "tipe": "Hewan",
      "huruf": "C-U-P-A-N-G",
      "jawaban": "CAPUNG"
    },
    {
      "tipe": "Benda",
      "huruf": "G-M-K-O-B-E",
      "jawaban": "GEMBOK"
    },
    {
      "tipe": "Benda",
      "huruf": "G-A-N-B-U-K",
      "jawaban": "BANGKU"
    },
    {
      "tipe": "Benda",
      "huruf": "C-C-I-I-N-N",
      "jawaban": "CINCIN"
    },
    {
      "tipe": "Benda",
      "huruf": "D-O-S-K-E-N",
      "jawaban": "SENDOK"
    },
    {
      "tipe": "Benda",
      "huruf": "G-R-O-LO-B",
      "jawaban": "BORGOL"
    },
    {
      "tipe": "Hewan",
      "huruf": "C-A-L-K-I-N",
      "jawaban": "KANCIL"
    },
    {
      "tipe": "Sayuran",
      "huruf": "L-O-W-E-R-T",
      "jawaban": "WORTEL"
    },
    {
      "tipe": "Hewan",
      "huruf": "E-T-O-N-M-Y",
      "jawaban": "MONYET"
    },
    {
      "tipe": "Benda",
      "huruf": "A-N-I-T-R-A",
      "jawaban": "RANTAI"
    },
    {
      "tipe": "Sayuran",
      "huruf": "J-U-G-N-A-G",
      "jawaban": "JAGUNG"
    },
    {
      "tipe": "Hewan",
      "huruf": "A-R-I-P-K-T",
      "jawaban": "PARKIT"
    },
    {
      "tipe": "Hewan",
      "huruf": "G-U-S-M-A-N",
      "jawaban": "MUSANG"
    },
    {
      "tipe": "Hewan",
      "huruf": "A-N-D-A-K-L",
      "jawaban": "LANDAK"
    },
    {
      "tipe": "Sayuran",
      "huruf": "B-I-C-N-U-S",
      "jawaban": "BUNCIS"
    },
    {
      "tipe": "Buah",
      "huruf": "M-E-D-I-A-L",
      "jawaban": "DELIMA"
    },
    {
      "tipe": "Buah",
      "huruf": "M-A-R-C-I-E",
      "jawaban": "CERMAI"
    },
    {
      "tipe": "Buah",
      "huruf": "G-A-N-G-M-A",
      "jawaban": "MANGGA"
    },
    {
      "tipe": "Hewan",
      "huruf": "A-K-B-A-W-I",
      "jawaban": "BIAWAK"
    },
    {
      "tipe": "Benda",
      "huruf": "C-A-K-E-P-I",
      "jawaban": "KECAPI"
    },
    {
      "tipe": "Benda",
      "huruf": "E-L-G-A-N-G",
      "jawaban": "GELANG"
    },
    {
      "tipe": "Buah",
      "huruf": "A-N-N-A-K-G",
      "jawaban": "NANGKA"
    },
    {
      "tipe": "Buah",
      "huruf": "S-K-A-S-R-I",
      "jawaban": "SIRSAK"
    },
    {
      "tipe": "Benda",
      "huruf": "R-E-S-E-N-T",
      "jawaban": "SENTER"
    },
    {
      "tipe": "Benda",
      "huruf": "P-A-N-G-E-D",
      "jawaban": "PEDANG"
    },
    {
      "tipe": "Benda",
      "huruf": "G-A-T-A-N-G",
      "jawaban": "TANGGA"
    },
    {
      "tipe": "Benda",
      "huruf": "H-E-A-R-U-P",
      "jawaban": "PERAHU"
    },
    {
      "tipe": "Benda",
      "huruf": "A-K-A-K-P-M",
      "jawaban": "KAMPAK"
    },
    {
      "tipe": "Profesi",
      "huruf": "I-S-P-O-I-L",
      "jawaban": "POLISI"
    },
    {
      "tipe": "Profesi",
      "huruf": "L-E-T-A-P-U",
      "jawaban": "PELSUT"
    },
    {
      "tipe": "Profesi",
      "huruf": "A-W-L-P-O-N",
      "jawaban": "POLWAN"
    },
    {
      "tipe": "Profesi",
      "huruf": "R-U-S-S-E-T",
      "jawaban": "SUSTER"
    },
    {
      "tipe": "Tempat",
      "huruf": "I-L-K-I-N-K",
      "jawaban": "KLINIK"
    },
    {
      "tipe": "Tempat",
      "huruf": "T-O-P-E-K-A",
      "jawaban": "APOTEK"
    },
    {
      "tipe": "TeMPAT",
      "huruf": "K-A-R-T-O-N",
      "jawaban": "KANTOR"
    },
    {
      "tipe": "Tempat",
      "huruf": "G-U-N-W-A-R",
      "jawaban": "WARUNG"
    },
    {
      "tipe": "Tempat",
      "huruf": "G-U-N-G-U-N",
      "jawaban": "GUNUNG"
    },
    {
      "tipe": "Tempat",
      "huruf": "B-A-R-K-I-P",
      "jawaban": "PABRIK"
    },
    {
      "tipe": "Hewan",
      "huruf": "I-C-E-L-I-N-K",
      "jawaban": "KELINCI"
    },
    {
      "tipe": "Benda",
      "huruf": "K-I-R-A-S-E-T",
      "jawaban": "SETRIKA"
    },
    {
      "tipe": "Sayuran",
      "huruf": "G-A-N-T-K-E-N",
      "jawaban": "KENTANG"
    },
    {
      "tipe": "Benda",
      "huruf": "G-I-N-G-U-T-N",
      "jawaban": "GUNTING"
    },
    {
      "tipe": "Benda",
      "huruf": "G-A-N-G-N-E-D",
      "jawaban": "GENDANG"
    },
    {
      "tipe": "Tempat",
      "huruf": "A-H-A-W-S",
      "jawaban": "SAWAH"
    },
    {
      "tipe": "Benda",
      "huruf": "CANGKING",
      "jawaban": "KANCING"
    },
    {
      "tipe": "Buah",
      "huruf": "G-A-S-M-I-N-G",
      "jawaban": "MANGGIS"
    },
    {
      "tipe": "Benda",
      "huruf": "R-A-C-K-I-N-G",
      "jawaban": "CANGKIR"
    },
    {
      "tipe": "Benda",
      "huruf": "G-L-E-N-N-C-O",
      "jawaban": "LONCENG"
    },
    {
      "tipe": "Benda",
      "huruf": "A-S-A-W-E-P-T",
      "jawaban": "PESAWAT"
    },
    {
      "tipe": "Benda",
      "huruf": "B-R-O-K-A-G-E",
      "jawaban": "GEROBAK"
    },
    {
      "tipe": "Benda",
      "huruf": "L-U-C-K-N-A-G",
      "jawaban": "CANGKUL"
    },
    {
      "tipe": "Hewan",
      "huruf": "D-E-I-A-L-E-K",
      "jawaban": "KELEDAI"
    },
    {
      "tipe": "Benda",
      "huruf": "A-L-P-O-M-I-N",
      "jawaban": "LAMPION"
    },
    {
      "tipe": "Sayuran",
      "huruf": "K-A-R-A-P-I-P",
      "jawaban": "PAPRIKA"
    },
    {
      "tipe": "Sayuran",
      "huruf": "K-O-L-O-R-I-B",
      "jawaban": "BROKOLI"
    },
    {
      "tipe": "Hewan",
      "huruf": "A-I-A-R-H-U-M",
      "jawaban": "HARIMAU"
    },
    {
      "tipe": "Sayuran",
      "huruf": "J-O-I-N-M-E-L",
      "jawaban": "MELINJO"
    },
    {
      "tipe": "Buah",
      "huruf": "M-A-R-I-S-K-A",
      "jawaban": "MARKISA"
    },
    {
      "tipe": "Benda",
      "huruf": "J-A-G-K-N-A-R",
      "jawaban": "JANGKAR"
    },
    {
      "tipe": "Buah",
      "huruf": "E-K-E-K-M-S-E",
      "jawaban": "KESEMEK"
    },
    {
      "tipe": "Buah",
      "huruf": "R-I-S-A-Y-A-K",
      "jawaban": "SRIKAYA"
    },
    {
      "tipe": "Benda",
      "huruf": "N-O-M-I-T-O-R",
      "jawaban": "MONITOR"
    },
    {
      "tipe": "Benda",
      "huruf": "G-A-N-K-M-U-K",
      "jawaban": "MANGKUK"
    },
    {
      "tipe": "Benda",
      "huruf": "T-A-N-A-G-E-R",
      "jawaban": "GEANAT"
    },
    {
      "tipe": "Benda",
      "huruf": "A-J-I-G-G-E-R",
      "jawaban": "GERGAJI"
    },
    {
      "tipe": "Profesi",
      "huruf": "L-E-A-N-A-N-Y",
      "jawaban": "NELAYAN"
    },
    {
      "tipe": "Profesi",
      "huruf": "L-U-K-E-P-I-S",
      "jawaban": "PELUKIS"
    },
    {
      "tipe": "Profesi",
      "huruf": "S-I-M-I-A-N-S",
      "jawaban": "MASINIS"
    },
    {
      "tipe": "Profesi",
      "huruf": "I-N-K-I-E-S-T",
      "jawaban": "TEKNISI"
    },
    {
      "tipe": "Profesi",
      "huruf": "E-T-A-T-R-A-N",
      "jawaban": "TENTARA"
    },
    {
      "tipe": "Profesi",
      "huruf": "P-E-T-A-W-A-R",
      "jawaban": "PERAWAT"
    },
    {
      "tipe": "Pekerjaan",
      "huruf": "A-L-A-N-Y-EP",
      "jawaban": "PELAYAN"
    },
    {
      "tipe": "Pekerjaan",
      "huruf": "A-D-A-H-K-O-N",
      "jawaban": "NAHKODA"
    },
    {
      "tipe": "Profesi",
      "huruf": "J-E-N-I-P-U-T",
      "jawaban": "PETINJU"
    },
    {
      "tipe": "Tempat",
      "huruf": "A-D-I-T-N-O-S",
      "jawaban": "STADION"
    },
    {
      "tipe": "Hewan",
      "huruf": "A-K-A-K-A-T-K-U",
      "jawaban": "KAKAKTUA"
    },
    {
      "tipe": "Buah",
      "huruf": "O-R-B-I-T-E-R-S",
      "jawaban": "STROBERI"
    },
    {
      "tipe": "Benda",
      "huruf": "A-C-T-A-K-A-M-A",
      "jawaban": "KACAMATA"
    },
    {
      "tipe": "Benda",
      "huruf": "L-E-V-I-T-I-E-S",
      "jawaban": "TELEVISI"
    },
    {
      "tipe": "SayuraN",
      "huruf": "G-U-N-K-K-N-A-G",
      "jawaban": "KANGKUNG"
    },
    {
      "tipe": "Hewan",
      "huruf": "L-A-B-E-L-N-A-G",
      "jawaban": "BELALANG"
    },
    {
      "tipe": "Hewan",
      "huruf": "A-J-A-W-L-I-A-R",
      "jawaban": "RAJAWALI"
    },
    {
      "tipe": "Hewan",
      "huruf": "G-I-T-I-N-P-E-K",
      "jawaban": "KEPITING"
    },
    {
      "tipe": "Benda",
      "huruf": "G-R-U-S-L-I-N-E",
      "jawaban": "SERULIN"
    },
    {
      "tipe": "Hewan",
      "huruf": "N-A-B-T-A-K-E-N",
      "jawaban": "BEKANTAN"
    },
    {
      "tipe": "Benda",
      "huruf": "C-O-N-G-M-E-E-K",
      "jawaban": "KEMOCENG"
    },
    {
      "tipe": "Benda",
      "huruf": "M-E-T-P-E-R-O-T",
      "jawaban": "TEROMPET"
    },
    {
      "tipe": "Benda",
      "huruf": "G-U-N-K-L-A-N-G",
      "jawaban": "ANGKLUNG"
    },
    {
      "tipe": "Profesi",
      "huruf": "A-N-N-Y-Y-I-P-E",
      "jawaban": "PENYANYI"
    },
    {
      "tipe": "Pekerjaan",
      "huruf": "D-A-N-G-P-A-G-E",
      "jawaban": "PEDAGANG"
    },
    {
      "tipe": "Profesi",
      "huruf": "D-R-U-K-I-T-E-R",
      "jawaban": "DIREKTUR"
    },
    {
      "tipe": "Profesi",
      "huruf": "D-E-N-E-P-R-I-S",
      "jawaban": "PRESIDEN"
    }
  ]
  rndm = anu[Math.floor(Math.random() * anu.length)];
  resolve(rndm)
  })
}

function _asahotak() {
  return new Promise((resolve, reject) => {
    let anu = [
    {
      "pertanyaan": "Hewan sejenis kadal yang dapat merubah warna kulitnya?",
      "jawaban": "Bunglon"
    },
    {
      "pertanyaan": "Surat instruksi kepada Soeharto untuk mengambil alih keamanan Indonesia pada tanggal 11 Maret 1966?",
      "jawaban": "Supersemar"
    },
    {
      "pertanyaan": "Sungai terpanjang di Benua Amerika?",
      "jawaban": "Amazon"
    },
    {
      "pertanyaan": "Wanita yang tercatat dalam sejarah sebagai penjahit Bendera Pusaka Indonesia?",
      "jawaban": "Fatmawati"
    },
    {
      "pertanyaan": "Lomba lari jarak jauh sepanjang 42,195 km?",
      "jawaban": "Marathon"
    },
    {
      "pertanyaan": "Garis yang membagi Bumi menjadi dua bagian belahan utara dan belahan selatan?",
      "jawaban": "Khatulistiwa"
    },
    {
      "pertanyaan": "Kota yang berdiri sejak tahun 682 ini disebut sebagai kota tertua di Indonesia?",
      "jawaban": "Palembang"
    },
    {
      "pertanyaan": "Sebutan untuk gaya tarik-menarik yang terjadi di alam semesta termasuk Bumi?",
      "jawaban": "Gravitasi"
    },
    {
      "pertanyaan": "Nama film yang bercerita tentang robot yang dapat berubah menjadi kendaran?",
      "jawaban": "Transformers"
    },
    {
      "pertanyaan": "Petarung di zaman Romawi Kuno yang melakukan pertarungan untuk hiburan umum?",
      "jawaban": "Gladiator"
    },
    {
      "pertanyaan": "Nama kapal penumpang mewah yang tenggelam saat pelayaran perdana tahun 1912?",
      "jawaban": "Titanic"
    },
    {
      "pertanyaan": "Klub sepak bola dari Italia yang memiliki julukan Nyonya Tua?",
      "jawaban": "Juventus"
    },
    {
      "pertanyaan": "Mekanisme sistem pemerintahan negara yang berdasarkan kehendak rakyat?",
      "jawaban": "Demokrasi"
    },
    {
      "pertanyaan": "Nama kesenian drama tari tradisional yang khas dari Bali?",
      "jawaban": "Kecak"
    },
    {
      "pertanyaan": "Nama mata uang yang digunakan di negara Rusia?",
      "jawaban": "Rubel"
    },
    {
      "pertanyaan": "Ilmu alam yang mengamati benda langit serta fenomena di luar atmosfer Bumi?",
      "jawaban": "Astronomi"
    },
    {
      "pertanyaan": "Kaisar Prancis yang menguasai Benua Eropa pada tahun 1803-1815?",
      "jawaban": "Napoleon"
    },
    {
      "pertanyaan": "Seniman terkenal dunia dari Spanyol dengan aliran seni bernama kubisme?",
      "jawaban": "Picasso"
    },
    {
      "pertanyaan": "Nama panglima tertinggi Pasukan Sekutu pada Perang dunia II?",
      "jawaban": "Eisenhower"
    },
    {
      "pertanyaan": "Senjata fiksi dalam dunia Star Wars, digunakan oleh Jedi dan Sith?",
      "jawaban": "Lightsaber"
    },
    {
      "pertanyaan": "Nama semenanjung di Eropa dimana terdapat negara Norwegia dan Swedia?",
      "jawaban": "Skandinavia"
    },
    {
      "pertanyaan": "Stadion sepak bola di London yang juga markas utama klub Arsenal FC?",
      "jawaban": "Emirates"
    },
    {
      "pertanyaan": "Penyanyi wanita terkenal dunia, dulu berada dalam grup Destiny’s Child?",
      "jawaban": "Beyonce"
    },
    {
      "pertanyaan": "Istilah untuk sebuah kepercayaan bahwa Tuhan adalah satu atau tunggal?",
      "jawaban": "Monoteisme"
    },
    {
      "pertanyaan": "Nama kerajaan dimana rajanya menjadi wakil Gubernur DI Yogyakarta saat ini?",
      "jawaban": "Pakualaman"
    },
    {
      "pertanyaan": "Disebut sebagai salah satu matematikawan terbesar sejarah, lahir pada 287 SM?",
      "jawaban": "Archimedes"
    },
    {
      "pertanyaan": "Rangkaian pegunungan tertinggi di Indonesia, terletak di Pulau Papua?",
      "jawaban": "Jayawijaya"
    },
    {
      "pertanyaan": "Kelompok fiksi superhero yang terdiri dari Iron Man, Captain America, Hulk, Thor?",
      "jawaban": "Avengers"
    },
    {
      "pertanyaan": "Nama wilayah luas di Rusia, meliputi hampir seluruh wilayah Asia Utara?",
      "jawaban": "Siberia"
    },
    {
      "pertanyaan": "Suatu benda atau media yang menghantarkan arus listrik dengan mudah?",
      "jawaban": "Konduktor"
    },
    {
      "pertanyaan": "Nama bahasa yang digunakan di Iran, Tajikistan, Afganistan, dan Uzbekistan?",
      "jawaban": "Farsi"
    },
    {
      "pertanyaan": "Daerah dimana terdapat praktik pertanian pertama sekitar tahun 8000 SM?",
      "jawaban": "Mesopotamia"
    },
    {
      "pertanyaan": "Ideologi yang berdasarkan pada prinsip kepemimpinan dengan otoritas absolut?",
      "jawaban": "Fasisme"
    },
    {
      "pertanyaan": "Nama periode geologi dari 252 ke 66 juta tahun yang lalu, disebut juga Zaman Reptil?",
      "jawaban": "Mesozoikum"
    },
    {
      "pertanyaan": "Nama yang dikenal dalam legenda Jawab sebagai arsitek perancang Candi Borobudur?",
      "jawaban": "Gunadharma"
    },
    {
      "pertanyaan": "Tarian tradisional Tionghoa yang menggunakan kostum menyerupai singa",
      "jawaban": "Barongsai"
    },
    {
      "pertanyaan": "Istilah yang artinya perpindahan penduduk dari desa ke kota?",
      "jawaban": "Urbanisasi"
    },
    {
      "pertanyaan": "Grup musik terkenal tahun 1970an asal Bandung, personelnya tiga bersaudara?",
      "jawaban": "Bimbo"
    },
    {
      "pertanyaan": "Nama film aksi laga Indonesia tahun 2009 yang dibintangi oleh Iko Uwais?",
      "jawaban": "Merantau"
    },
    {
      "pertanyaan": "Dikenal sebagai “maestro keroncong Indonesia”, pencipta lagu Bengawan Solo?",
      "jawaban": "Gesang"
    },
    {
      "pertanyaan": "Skala suhu dimana titik beku air berada pada 0 derajat dan titik didih pada 100 derajat?",
      "jawaban": "Celcius"
    },
    {
      "pertanyaan": "Makhluk halus mitos Jawa, berwujud manusia mirip kera, bertubuh besar dan berbulu?",
      "jawaban": "Genderuwo"
    },
    {
      "pertanyaan": "Sebuah distrik di Los Angeles yang terkenal dengan industri perfilmannya yang mendunia?",
      "jawaban": "Hollywood"
    },
    {
      "pertanyaan": "Cabang biologi yang mempelajari pewarisan sifat pada organisme maupun suborganisme?",
      "jawaban": "Genetika"
    },
    {
      "pertanyaan": "Situs manusia purba di Jawa Tengah, juga merupakan Situs Warisan Dunia UNESCO?",
      "jawaban": "Sangiran"
    },
    {
      "pertanyaan": "Bongkahan batu yang berukuran lebih kecil daripada planet, mengorbit Matahari?",
      "jawaban": "Asteroid"
    },
    {
      "pertanyaan": "Istilah untuk hewan pemakan rerumputan atau tumbuhan?",
      "jawaban": "Herbivora"
    },
    {
      "pertanyaan": "Istilah yang berarti pembantaian sistematis terhadap suatu suku atau kelompok?",
      "jawaban": "Genosida"
    },
    {
      "pertanyaan": "Nama penyakit demam yang ditularkan oleh nyamuk Anopheles betina?",
      "jawaban": "Malaria"
    },
    {
      "pertanyaan": "Nama tokoh fiksi budaya Sunda yang sifatnya lucu, polos, tetapi sekaligus cerdas?",
      "jawaban": "Kabayan"
    },
    {
      "pertanyaan": "Asrama tempat belajar para siswa santri yang dibimbin oleh Kiai?",
      "jawaban": "Pesantren"
    },
    {
      "pertanyaan": "Perusahaan video game dari Jepang, pencipta Mario Bros dan Pokemon?",
      "jawaban": "Nintendo"
    },
    {
      "pertanyaan": "Sebuah agama resmi di Indonesia yang berdasarkan pada ajaran Konfusius?",
      "jawaban": "Khong hu cu"
    },
    {
      "pertanyaan": "Nama ensiklopedia online yang bebas ditulis dan disunting oleh siapa saja?",
      "jawaban": "Wikipedia"
    },
    {
      "pertanyaan": "Bangun datar segi empat, sepasang sisi sejajar namun tidak sama panjang?",
      "jawaban": "Trapesium"
    },
    {
      "pertanyaan": "Penyakit dimana hormon pengatur gula dara dari tubuh tidak mencukupi?",
      "jawaban": "Diabetes"
    },
    {
      "pertanyaan": "Negara independen terkecil di dunia yang diakui secara internasional?",
      "jawaban": "Vatikan"
    },
    {
      "pertanyaan": "Kekaisaran kuno di wilayah Yunani yang dipimpin oleh Aleksander Agung?",
      "jawaban": "Makedonia"
    },
    {
      "pertanyaan": "Negara dengan jumlah penduduk Muslim terbanyak kedua di dunia?",
      "jawaban": "Pakistan"
    },
    {
      "pertanyaan": "Gejala penurunan fungsi otak, umumnya terjadi pada usia lanjut?",
      "jawaban": "Demensia"
    },
    {
      "pertanyaan": "Bahan bakar fosil, digunakan di Pembangkit Listrik Tenaga Uap?",
      "jawaban": "Batu bara"
    },
    {
      "pertanyaan": "Nama pura terkenal di Bali yang dibangun pada ujung batu karang?",
      "jawaban": "Uluwatu"
    },
    {
      "pertanyaan": "Sebuah gelar yang diperoleh putra Sultan Agung dari Mataram?",
      "jawaban": "Amangkurat"
    },
    {
      "pertanyaan": "Seorang yang bertugas merawat bayi atau anak pada suatu keluarga?",
      "jawaban": "Pramusiwi"
    },
    {
      "pertanyaan": "Daerah di Jepang dimana terjadi kebocoran nuklir pada tahun 2011?",
      "jawaban": "Fukushima"
    },
    {
      "pertanyaan": "Perlindungan finansial untuk jiwa kesehatan properti dsb?",
      "jawaban": "Asuransi"
    },
    {
      "pertanyaan": "Perusahaan berlogo kuda asal Italia produsen mobil super dan mobil balap?",
      "jawaban": "Ferrari"
    },
    {
      "pertanyaan": "Suku dari sulawesi selatan yang terkenal sebagai pelaut ulung?",
      "jawaban": "BugisVampir yang"
    },
    {
      "pertanyaan": "Vampir yang merupakan tokoh utama fiksi ciptaan Bram Stoker?",
      "jawaban": "Drakula"
    },
    {
      "pertanyaan": "Planet ini merupakan planet terbesar di Tata Surya?",
      "jawaban": "Yupiter"
    },
    {
      "pertanyaan": "Tanaman yang dipakai sebagai bahan pembuat kertas pada Zaman Mesir Kuno?",
      "jawaban": "Papirus"
    },
    {
      "pertanyaan": "Bahan peledak berupa bubuk campuran dari belerang, arang, dan kalium nitrat?",
      "jawaban": "Mesiu"
    },
    {
      "pertanyaan": "Bahasa resmi yang juga digunakan secara luas di Negara Filipina?",
      "jawaban": "Tagalog"
    },
    {
      "pertanyaan": "Negara kecil di Amerika Selatan, terdapat banyak keturunan Suku Jawa?",
      "jawaban": "Suriname"
    },
    {
      "pertanyaan": "Kuda jantan bersayap dari mitologi Yunani?",
      "jawaban": "Pegasus"
    },
    {
      "pertanyaan": "Grup musik Rock alternatif dari London. vokalisnya bernama Chris Martin?",
      "jawaban": "Coldplay"
    },
    {
      "pertanyaan": "Buah yang jika dipotong mempunyai penampang berbentuk bintang?",
      "jawaban": "Belimbing"
    },
    {
      "pertanyaan": "Ensembel musik yang biasanya menonjolkan metalofon, gambang, gendang, dan gong?",
      "jawaban": "Gamelan"
    },
    {
      "pertanyaan": "Nama kota yang selama beberapa abad diperebutkan oleh Islam, Kristen, Yahudi?",
      "jawaban": "Yerusalem"
    },
    {
      "pertanyaan": "Bahasa resmi negara Bangladesh, digunakan oleh sekitar 200 juta orang?",
      "jawaban": "Bengali"
    },
    {
      "pertanyaan": "Minuman memabukkan yang berbahan dasar etanol?",
      "jawaban": "Alkohol"
    },
    {
      "pertanyaan": "Satu-satunya gunung berapi aktif di Eropa Daratan yang letaknya di Italia?",
      "jawaban": "Vesuvius"
    },
    {
      "pertanyaan": "Karakter fiksi berambut sangat panjang tokoh utama film animasi Tangled?",
      "jawaban": "Rapunzel"
    },
    {
      "pertanyaan": "Bencana alam berupa gelombang ombak besar dari laut?",
      "jawaban": "Tsunami"
    },
    {
      "pertanyaan": "Nama kota di negara Turki yang zaman dulu bernama Konstantinopel?",
      "jawaban": "Istanbul"
    },
    {
      "pertanyaan": "Subspesies manusia yang punah dari muka bumi sekitar 30.000 tahun yang lalu?",
      "jawaban": "Neanderthal"
    },
    {
      "pertanyaan": "Nama ritual bunuh diri kaum Samurai di Jepang dengan cara merobek perut?",
      "jawaban": "Seppuku"
    },
    {
      "pertanyaan": "Jenis keju asal Italia yang seringkali terdapat pada hidangan pizza?",
      "jawaban": "Mozzarella"
    },
    {
      "pertanyaan": "Gelar bagi istri dari penguasa monarki pria(raja, sultan, atau kaisar)?",
      "jawaban": "Permaisuri"
    },
    {
      "pertanyaan": "Nama suku yang sejak lama mendiami daerah kutub utara bumi?",
      "jawaban": "Eskimo"
    },
    {
      "pertanyaan": "Unsur paling berlimpah kedua setelah oksigen pada tubuh manusia?",
      "jawaban": "Karbon"
    },
    {
      "pertanyaan": "Peristiwa genosida terhadap penganut Yahudi Eropa selama Perang Dunia II?",
      "jawaban": "Holokaus"
    },
    {
      "pertanyaan": "Proses perubahan gula menjadi etanol yang dilakukan oleh ragi?",
      "jawaban": "Fermentasi"
    },
    {
      "pertanyaan": "Ramalan dalam tradisi jawa yang membahas mengenai adanya ratu adil?",
      "jawaban": "Jayabaya"
    },
    {
      "pertanyaan": "Tokoh abad ke 15 dari Polandia yang mencetuskan teori heliosentrisme?",
      "jawaban": "Copernicus"
    },
    {
      "pertanyaan": "Alat populer untuk menyambung dua sisi kain, digunakan dalam pakaian, tas, dsb?",
      "jawaban": "Ritsleting"
    },
    {
      "pertanyaan": "Satuan perbedaan potensi listrik antara dua titik dalam rangkaian listrik?",
      "jawaban": "Voltase"
    },
    {
      "pertanyaan": "Sistem sosial yang memberikan kekuasaan besar kepada golongan bangsawan?",
      "jawaban": "Feodalisme"
    },
    {
      "pertanyaan": "Nama pemanis buatan/sintetis yang tersusun dari dua macam asam amino?",
      "jawaban": "Aspartam"
    },
    {
      "pertanyaan": "Konsol permainan video yang pertama kali diproduksi oleh Sony tahun 1990an?",
      "jawaban": "PlayStation"
    },
    {
      "pertanyaan": "Nama lain pulau Kalimantan, digunakan saat zaman pemerintahan Hindia Belanda?",
      "jawaban": "Borneo"
    },
    {
      "pertanyaan": "Batu permata atau batu mulia yang warnanya pada kisaran hijau?",
      "jawaban": "Zamrud"
    },
    {
      "pertanyaan": "Nama museum sejarah dan kebudayaan jawa yang berada di Yogyakarta?",
      "jawaban": "Sonobudoyo"
    },
    {
      "pertanyaan": "Cabang ilmu kedokteran yang mempelajari aspek kesehatan jiwa dan tubuh manusia?",
      "jawaban": "Psikiatri"
    },
    {
      "pertanyaan": "Presiden pertama Amerika Serikat, juga menjadi nama Ibukota Amerika Serikat?",
      "jawaban": "Washingthon"
    },
    {
      "pertanyaan": "Satu-satunya jenis hewan mamalia yang bisa terbang?",
      "jawaban": "Kelelawar"
    },
    {
      "pertanyaan": "Gugus kepulauan Oseania, terdiri lebih dari 1000 kepulauan?",
      "jawaban": "Polinesia"
    },
    {
      "pertanyaan": "Gelar penguasa monarki zaman kerajaan, tingkatnya setara dengan kaisar?",
      "jawaban": "Maharaja"
    },
    {
      "pertanyaan": "Nama pulau yang paling berdekatan dengan negara Singapura?",
      "jawaban": "Batam"
    },
    {
      "pertanyaan": "Cabang angkatan bersenjata berkemampuan melakukan penyerbuan secara amfibi?",
      "jawaban": "Marinir"
    },
    {
      "pertanyaan": "Perusahaan operator seluler di Indonesia dengan pelanggan terbanyak?",
      "jawaban": "Telkomsel"
    },
    {
      "pertanyaan": "Nama binatang bercangkang dan berkaki 10?",
      "jawaban": "Kepiting"
    },
    {
      "pertanyaan": "Benda miniatur untuk menggabarkan suatu pemandangan atau suatu adegan?",
      "jawaban": "Diorama"
    },
    {
      "pertanyaan": "Rumah adat masyarakat Toraja, atapnya melengkung menyerupai perahu?",
      "jawaban": "Tonkonan"
    },
    {
      "pertanyaan": "Gua yang menjadi markas besar pangeran Diponegoro pada tahun 1825?",
      "jawaban": "Selarong"
    },
    {
      "pertanyaan": "Sebutan untuk makhluk berwujud perempuan yang tinggal di kahyangan/surga?",
      "jawaban": "Bidadari"
    },
    {
      "pertanyaan": "Pedang melengkung satu mata yang digunakan para Samurai Jepang?",
      "jawaban": "Katana"
    },
    {
      "pertanyaan": "Bahan perhiasan yang diproduksi di dalam jaringan lunak hewan moluska?",
      "jawaban": "Mutiara"
    },
    {
      "pertanyaan": "Nama perusahaan dari Finlandia pengembang game Clash of Clans?",
      "jawaban": "Supercell"
    },
    {
      "pertanyaan": "Minuman tradisional khas Sunda, berbahan utama gula aren dan santan?",
      "jawaban": "Bajigur"
    },
    {
      "pertanyaan": "Aliran musik yang awalnya dikembangkan di jamaika pada tahun 1960an?",
      "jawaban": "Reggae"
    },
    {
      "pertanyaan": "Drama tradisional dari Jawa Timur, bersifat menghibur dan membuat tertawa?",
      "jawaban": "Ludruk"
    },
    {
      "pertanyaan": "Nama asrama sekolah fiksi dimana tokoh Harry Potter belajar sihir?",
      "jawaban": "Hogwarts"
    },
    {
      "pertanyaan": "Kota yang asal mula namanya berasal dari sejarahnya sebagai pembuat terasi?",
      "jawaban": "Cirebon"
    },
    {
      "pertanyaan": "Pejabat umum dalam bidang hukum yang berwenang membuat akta otentik?",
      "jawaban": "Notaris"
    },
    {
      "pertanyaan": "Jenis gula yang diproses dari karbohidrat oleh tubuh manusia?",
      "jawaban": "Glukosa"
    },
    {
      "pertanyaan": "Pisau genggam kecil berbentuk melengkung khas dari Asia Tenggara?",
      "jawaban": "Kerambit"
    },
    {
      "pertanyaan": "Spesies gajah purba dari genus mamut, pemakan dedaunan dan dahan pohon?",
      "jawaban": "Mastodon"
    },
    {
      "pertanyaan": "Sumpah yang dikemukakan Gajah Mada pada upacara pengangkatannya menjadi Patih?",
      "jawaban": "Palapa"
    },
    {
      "pertanyaan": "Produk simpanan di bank, penarikannya hanya bisa dilakukan pada waktu tertentu saja?",
      "jawaban": "Deposito"
    },
    {
      "pertanyaan": "Gejala optik dan meteorologi berupa cahaya beraneka warna yang tampak di langit?",
      "jawaban": "Pelangi"
    },
    {
      "pertanyaan": "Senjata roket militer yang memiliki sistem pengendali otomatis untuk mencari target?",
      "jawaban": "Rudal"
    },
    {
      "pertanyaan": "Sindikat kejahatan terorganisir di Jepang yang memiliki cara dan hukum mereka sendiri?",
      "jawaban": "Yakuza"
    },
    {
      "pertanyaan": "Golongan cendekiawan yang juga merupakan golongan karya atau warna dalam agama Hindu?",
      "jawaban": "Brahmana"
    },
    {
      "pertanyaan": "Musim kering pada daerah tropis yang dipengaruhi oleh sistem muson?",
      "jawaban": "kemarau"
    },
    {
      "pertanyaan": "Sekolah umum yang kurikulumnya terdapat pelajaran-pelajaran tentang ke-islaman?",
      "jawaban": "Madrasah"
    },
    {
      "pertanyaan": "Tanaman yang dapat tumbuh tanpa air pada waktu yang lama, ada di daerah gurun?",
      "jawaban": "Kaktus"
    },
    {
      "pertanyaan": "Sebuah ordo berjari lima dari mamalia, diantaranya termasuk lemur, kera, dan manusia?",
      "jawaban": "Primata"
    },
    {
      "pertanyaan": "Blus tradisional wanita yang terbuat dari bahan tipis, dikenakan dengan sarung atau batik?",
      "jawaban": "Kebaya"
    },
    {
      "pertanyaan": "Jenis protein yang biasanya terkandung di dalam gandum, dihindari penderita celiac?",
      "jawaban": "Gluten"
    },
    {
      "pertanyaan": "Olahraga bela diri yang dikembangkan oleh para Afrika di Brasil pada tahun 1500an?",
      "jawaban": "Capoeira"
    },
    {
      "pertanyaan": "Peristiwa pengikisan padatan seperti batuan/tanah akibat transportasi angin, air, atau es?",
      "jawaban": "Erosi"
    },
    {
      "pertanyaan": "Ikan yang merupakan kerabat dekat ikan tuna, sering diolah menjadi kerupuk, siomay, pempek?",
      "jawaban": "Ikan tenggiri"
    },
    {
      "pertanyaan": "Sebuah jenis tari pergaulan tradisional masyarakat Sunda, khusunya daerah Karawang?",
      "jawaban": "Jaipongan"
    },
    {
      "pertanyaan": "Sistem bilangan dimana penulisan angka menggunakan dua simbol yaitu 0 dan 1?",
      "jawaban": "Biner"
    },
    {
      "pertanyaan": "Rempah dari biji keluarga jahe-jahean, merupakan rempah termahal ketiga di dunia?",
      "jawaban": "Kapulaga"
    },
    {
      "pertanyaan": "Benua yang meliputi Kutub Selatan bumi memiliki suhu yang sangat rendah?",
      "jawaban": "Antartika"
    },
    {
      "pertanyaan": "Senjata pelontar yang banyak digunakan pada Abad Pertengahan untuk menghancurkan dinding?",
      "jawaban": "Trebuset"
    },
    {
      "pertanyaan": "Serpihan putih yang merupakan pengelupasan kulit mati berlebihan di kepala?",
      "jawaban": "Ketombe"
    },
    {
      "pertanyaan": "Ilmu yang mempelajari bahasa dalam naskah-naskah manuskrip zaman kuno?",
      "jawaban": "Filologi"
    },
    {
      "pertanyaan": "Susu yang hanya dihasilkan pada tahap akhir kehamilan beberapa hari setelah melahirkan?",
      "jawaban": "Kolostrum"
    },
    {
      "pertanyaan": "Tanaman asli Jepang terasa tajam/pedas yang dimakan sebagai penyedap masakan Jepang?",
      "jawaban": "Wasabi"
    },
    {
      "pertanyaan": "Olahraga yang menggunakan tongkat pemukul, lapangannya berbentuk bujur sangkar?",
      "jawaban": "Bisbol"
    },
    {
      "pertanyaan": "Bumbu khas untuk masakan Batak Toba yang juga dikenal sebagai merica Batak?",
      "jawaban": "Andaliman"
    },
    {
      "pertanyaan": "Sistem pemerintahan yang dianut oleh negara Inggris, Jepang, Belanda, Malaysia, Singapura?",
      "jawaban": "Parelementer"
    },
    {
      "pertanyaan": "Makanan tradisional Korea berupa asinan sayur hasil fermentasi yang diberi bumbu pedas?",
      "jawaban": "Kimchi"
    },
    {
      "pertanyaan": "Istilah untuk sesuatu yang bertujuan sosial atau lingkungan, bukan bertujuan keuntungan materi?",
      "jawaban": "Nirlaba"
    },
    {
      "pertanyaan": "Gerakan yang memperjuangkan kesetaraan bagi perempuan dalam politik, ekonomi, budaya, dsb?",
      "jawaban": "Feminisme"
    },
    {
      "pertanyaan": "Minuman hasil fermentasi teh dan gula yang berasal dari Asia Timur?",
      "jawaban": "Kombucha"
    },
    {
      "pertanyaan": "Kelompok garis kerras dari Rusia tahun 1903 yang berpikir perubahan harus dimenangkan dengan senjata?",
      "jawaban": "Bolshevic"
    },
    {
      "pertanyaan": "Nama pulau vulkanik yang berada di tengah Danau Toba Sumatera Utara?",
      "jawaban": "Samosir"
    },
    {
      "pertanyaan": "Prajurit pada zaman Yunani Kuno, berfungsi sebagai penombak dalam formasi phalanx?",
      "jawaban": "Hoplites"
    },
    {
      "pertanyaan": "Nama dari sebuah pekan yang terdiri dari 5 hari dalam budaya Jawa dan Bali?",
      "jawaban": "Pancawara"
    },
    {
      "pertanyaan": "Cara penyajian makanan pada masa kolonial Belanda dengan berbagai macam hidangan Nusantara?",
      "jawaban": "Rijsttafel"
    },
    {
      "pertanyaan": "Istilah untuk budidaya menanamdengan memanfaatkan air tanpa menggunakan tanah?",
      "jawaban": "Hidroponik"
    },
    {
      "pertanyaan": "Jenis logam paling berlimpah di Bumi, merupakan konduktor listrik yang paling baik?",
      "jawaban": "Aluminium"
    },
    {
      "pertanyaan": "Sebuah organisasi ekonomi berdasarkan ekonomi rakyat dan asas kekeluargaan?",
      "jawaban": "Koperasi"
    },
    {
      "pertanyaan": "Hari raya umat hindu, dirayakan setiap 210 hari menggunakan perhitungan kalender Bali?",
      "jawaban": "Galungan"
    },
    {
      "pertanyaan": "Ilmu yang mempelajari bentuk permukaan bumi serta permukaan planet, satelit alami, asteroid?",
      "jawaban": "Topografi"
    },
    {
      "pertanyaan": "Persembahan kepada dewa atau arwah nenek moyang oleh penganut kepercayaan kuno di Indonesia?",
      "jawaban": "Sesajen"
    },
    {
      "pertanyaan": "Judul lagurakyat Korea, sekaligus simbol Korea, dikenal di Korea Utara maupun Korea Selatan?",
      "jawaban": "Arirang"
    },
    {
      "pertanyaan": "Istilah bentuk bangsa pengembara yang memilih hidup berpindah-pindah untuk bertahan hidup?",
      "jawaban": "Nomaden"
    },
    {
      "pertanyaan": "Sejenis jamur pinus langka yang menjadi bahan makanan mewah berharga mahal di Jepang?",
      "jawaban": "Matsutake"
    },
    {
      "pertanyaan": "Suatu adat masyarakat yang mengatur alur keturunan berasal dari pihak ibu?",
      "jawaban": "Matrilineal"
    },
    {
      "pertanyaan": "Padang rumput yang dipenuhi semak dan beberapa jenis pohon yang tumbuh menyebar?",
      "jawaban": "Sabana"
    },
    {
      "pertanyaan": "Penjelajah asal italia yang menemukan benua amerika pada tahun 1492?",
      "jawaban": "Capoerira"
    },
    {
      "pertanyaan": "Skor atau skala yang digunakan unuk menilai kondisi kesehatan bayi yang baru lahir?",
      "jawaban": "Apgar"
    },
    {
      "pertanyaan": "Salah satu pulau di Sulawesi Utara yang memiliki biodiversitas kelautan tertinngi di dunia?",
      "jawaban": "Bunaken"
    },
    {
      "pertanyaan": "Ahli pengaplikasian ilmu keuangan dan teori statistik pada persoalan bisnis aktual?",
      "jawaban": "Aktuaris"
    },
    {
      "pertanyaan": "Tradisi sepasang pengantin meminta doa restu kepada orang tua kedua belah pihak?",
      "jawaban": "Sungkem"
    },
    {
      "pertanyaan": "Jenis saus berwarna putih yang terbuat dari minyak nabati, telur ayam, dan cuka?",
      "jawaban": "Mayones"
    },
    {
      "pertanyaan": "Istilah yang artinya tidak memberikan suara atau sikap dalam sebuah pemungutan suara?",
      "jawaban": "Abstain"
    },
    {
      "pertanyaan": "Salah satu bunga nasional indonesia memiliki julukan sebagai puspa bangsa?",
      "jawaban": "Melati"
    },
    {
      "pertanyaan": "Alat musik dawai yang dimainkan dengan cara dipetik, berasal dari Rote, NTT?",
      "jawaban": "Sasando"
    },
    {
      "pertanyaan": "Batu yang menggantungkan dan meneteskan air dari langit-langit gua kapur?",
      "jawaban": "Stalaktit"
    },
    {
      "pertanyaan": "Ikon negara singapura berupa patung berkepala singa dengan berbadan ikan?",
      "jawaban": "Merlion"
    },
    {
      "pertanyaan": "Istilah dalam catur ketika posisi raja tidak bisa lepas dari pergerakan lawan?",
      "jawaban": "Sekakmat"
    },
    {
      "pertanyaan": "Alat untuk mengukur tekanan udara, digunakan dalam peramalan cuaca?",
      "jawaban": "Barometer"
    },
    {
      "pertanyaan": "Presiden amerika ke 32 satu-satunya yang terpilih sebanyak 4 kali?",
      "jawaban": "Roosevelt"
    },
    {
      "pertanyaan": "Jenis rumah arsitektur tradisional Jawa terbangun dari empat tiang utama?",
      "jawaban": "Limasan"
    },
    {
      "pertanyaan": "Istilah bahasa Jepang untuk karakter gambar yang digunakan dalam pesan elektronik?",
      "jawaban": "Emoji"
    },
    {
      "pertanyaan": "Salah satu senjata belati khas Nusantara yang seringkali bilahnya berkelok-kelok?",
      "jawaban": "Keris"
    },
    {
      "pertanyaan": "Penduduk asli benua Australia yang berciri kulit gelap dan rambut keriting?",
      "jawaban": "Aborigin"
    },
    {
      "pertanyaan": "Tarian khas suku gayo dari aceh, ditampilkan untuk merayakan peristiwa penting?",
      "jawaban": "Tari saman"
    },
    {
      "pertanyaan": "Bentuk muda serangga atau amfibia yang perkembangannya melalui metamorfosis?",
      "jawaban": "Larva"
    },
    {
      "pertanyaan": "Tempat kapal ditambatkan di pelabuhan untuk kegiatan bongkar muat barang?",
      "jawaban": "Dermaga"
    },
    {
      "pertanyaan": "Jenis jam tangan yang digerakkan oleh mesin bertenaga listrik atau baterai?",
      "jawaban": "Quartz"
    },
    {
      "pertanyaan": "Suku penganut Agama Hindu yang tinggal di sekitar pegunungan Bromo dan Semeru?",
      "jawaban": "Tengger"
    },
    {
      "pertanyaan": "Mainan yang bisa berputar padaporos dan berkesetimbangan pada suatu titik?",
      "jawaban": "Gasing"
    },
    {
      "pertanyaan": "Tanaman polong-polongan yang merupakan sumber utama protein nabati dunia?",
      "jawaban": "Kedelai"
    },
    {
      "pertanyaan": "Cairan tidak berwarna, tidak berbau, digunakan sebagai senjata kimia pemusnah massal?",
      "jawaban": "Sarin"
    },
    {
      "pertanyaan": "Cabang ilmu kedokteran gigi yang khusus mempelajari ilmu merapikan gigi?",
      "jawaban": "Ortodonti"
    },
    {
      "pertanyaan": "Sstilah yang berasal dari Bahasa Italia, artinya penari baletperempuan?",
      "jawaban": "Balerina"
    },
    {
      "pertanyaan": "Sawah berundak di Bali yang diakui UNESCO sebagai Warisan Budaya Dunia?",
      "jawaban": "Jatiluwih"
    },
    {
      "pertanyaan": "Makanan pokok pengganti nasi yang dibuat dari ketela pohon atau singkong?",
      "jawaban": "Tiwul"
    },
    {
      "pertanyaan": "Bagian mata yang mengubah cahaya menjadi sinyal saraf?",
      "jawaban": "Retina"
    },
    {
      "pertanyaan": "Nama mesin penyandi yang digunakan Jerman nazi pada Perang Dunia II?",
      "jawaban": "Enigma"
    },
    {
      "pertanyaan": "Kosmetika yang terbuat dari lilin, pigmen, minyak, diaplikasikan pada bibir?",
      "jawaban": "Lipstik"
    },
    {
      "pertanyaan": "Bumbu makanan yang terbuat dari fermentasi kedelai, terigu, dan garam?",
      "jawaban": "Tauco"
    },
    {
      "pertanyaan": "Hewan renik yang dapat menurunkan produktivitas hewan yang diumpanginya?",
      "jawaban": "Parasit"
    },
    {
      "pertanyaan": "Cairan manis yang diproduksi bunga untuk menarik kedatangan hewan penyerbuk?",
      "jawaban": "Nektar"
    },
    {
      "pertanyaan": "Proses pembuatan daratan baru dari dasar laut atau dasar sungai?",
      "jawaban": "Reklamasi"
    },
    {
      "pertanyaan": "Istilah untuk keadaan niat sebelum melaksanakan ibadah Haji atau Umroh?",
      "jawaban": "Ihram"
    },
    {
      "pertanyaan": "Alat musik senar khas suku Banjar, dimainkan dengan cara dipetik?",
      "jawaban": "Panting"
    },
    {
      "pertanyaan": "Penyakit virus mematikan yang mewabah di Afrika Barat tahun 2014?",
      "jawaban": "Ebola"
    },
    {
      "pertanyaan": "Jenis musang yang dikenal suka menyantap biji kopi secara utuh?",
      "jawaban": "Luwak"
    },
    {
      "pertanyaan": "Nama pedang yang dimiliki raja Arthur menurut mitologi Britania Raya?",
      "jawaban": "Excalibur"
    },
    {
      "pertanyaan": "Negara yang memiliki bendera merah putih persis seperti Indonesia?",
      "jawaban": "Monako"
    },
    {
      "pertanyaan": "Suatu pertunjukan teater yang menggunakan isyarat gerak tubuh tanpa suara?",
      "jawaban": "Pantomim"
    },
    {
      "pertanyaan": "Tradisi pernikahan calon mempelai wanita tidak diperkenankan keluar rumah?",
      "jawaban": "Pingitan"
    },
    {
      "pertanyaan": "Tipe hewan yang beraktivitas pada malam hari dan tidur pada siang hari?",
      "jawaban": "Nokturnal"
    },
    {
      "pertanyaan": "Kelainan bawaan tidak adanya pigmen melanin pada mata, kulit, rambut?",
      "jawaban": "Albinisme"
    },
    {
      "pertanyaan": "Cabang ilmu linguistik yang mempelajari asal usul kata?",
      "jawaban": "Etimologi"
    },
    {
      "pertanyaan": "Jenis ikan yang dapat melompat kedaratan, terdapat di Pulau Kalimantan?",
      "jawaban": "Tembakul"
    },
    {
      "pertanyaan": "Mata uang elektronik dengan teknologi blockchain yang diciptakan pada tahun 2009?",
      "jawaban": "Bitcoin"
    },
    {
      "pertanyaan": "Pengusaha rokok terbesar tahun 1918 pemilik pabrik kretek tjap bal tiga?",
      "jawaban": "Nitisemito"
    },
    {
      "pertanyaan": "Pelukis ekspresionis ini dikenal sebagai maestro seni lukis Indonesia?",
      "jawaban": "Affandi"
    },
    {
      "pertanyaan": "Nama kepulauan dimana charles darwin melakukan penelitiannya?",
      "jawaban": "Galapagos"
    }
  ]
  rndm = anu[Math.floor(Math.random() * anu.length)];
  clu = clue(rndm.jawaban)
  let obj = {
    soal: rndm.pertanyaan,
    jawab: rndm.jawaban,
    clue: clu
  }
  resolve(obj)
  })
}

function _kimia() {
  return new Promise((resolve) => {
    let anu = [
 {
  "soal" : "H",
  "jawab" : "hidrogen"
 }, 
  {
  "soal" : "He",
  "jawab" : "helium"
 }, 
  {
  "soal" : "Li",
  "jawab" : "lithium"
 }, 
  {
  "soal" : "Be",
  "jawab" : "berilium"
 },
  {
  "soal" : "B",
  "jawab" : "boron"
 }, 
  {
  "soal" : "C",
  "jawab" : "karbon"
 }, 
  {
  "soal" : "N",
  "jawab" : "nitrogen"
 }, 
  {
  "soal" : "O",
  "jawab" : "oksigen"
 },
  {
  "soal" : "F",
  "jawab" : "fluor"
 }, 
  {
  "soal" : "Ne",
  "jawab" : "neon"
 }, 
  {
  "soal" : "Na",
  "jawab" : "natrium"
 }, 
  {
  "soal" : "Mg",
  "jawab" : "magnesium"
 },
  {
  "soal" : "Al",
  "jawab" : "alumunium"
 }, 
  {
  "soal" : "Si",
  "jawab" : "silikon"
 }, 
  {
  "soal" : "P",
  "jawab" : "fosfor"
 }, 
  {
  "soal" : "S",
  "jawab" : "belerang"
 },
  {
  "soal" : "Cl",
  "jawab" : "klor"
 }, 
  {
  "soal" : "Ar",
  "jawab" : "argon"
 }, 
  {
  "soal" : "K",
  "jawab" : "kalium"
 }, 
  {
  "soal" : "Ca",
  "jawab" : "kalsium"
 },
  {
  "soal" : "Sc",
  "jawab" : "skandium"
 }, 
  {
  "soal" : "Ti",
  "jawab" : "titanium"
 }, 
  {
  "soal" : "V",
  "jawab" : "vanadium"
 }, 
  {
  "soal" : "Cr",
  "jawab" : "krom"
 },
  {
  "soal" : "Mn",
  "jawab" : "mangan"
 }, 
  {
  "soal" : "Fe",
  "jawab" : "besi"
 }, 
  {
  "soal" : "Co",
  "jawab" : "kobalt"
 }, 
  {
  "soal" : "Ni",
  "jawab" : "nikel"
 },
  {
  "soal" : "Cu",
  "jawab" : "tembaga"
 }, 
  {
  "soal" : "Zn",
  "jawab" : "seng"
 }, 
  {
  "soal" : "Ga",
  "jawab" : "galium"
 }, 
  {
  "soal" : "Ge",
  "jawab" : "germanium"
 },
  {
  "soal" : "As",
  "jawab" : "arsen"
 }, 
  {
  "soal" : "Se",
  "jawab" : "selenium"
 }, 
  {
  "soal" : "Br",
  "jawab" : "brom"
 }, 
  {
  "soal" : "Kr",
  "jawab" : "kripton"
 },
  {
  "soal" : "Rb",
  "jawab" : "rubidium"
 }, 
  {
  "soal" : "Sr",
  "jawab" : "strontium"
 }, 
  {
  "soal" : "Y",
  "jawab" : "itrium"
 }, 
  {
  "soal" : "Zr",
  "jawab" : "zirkonium"
 },
  {
  "soal" : "Nb",
  "jawab" : "niobium"
 }, 
  {
  "soal" : "Mo",
  "jawab" : "molibden"
 }, 
  {
  "soal" : "Tc",
  "jawab" : "teknetium"
 }, 
  {
  "soal" : "Ru",
  "jawab" : "ruthenium"
 },
  {
  "soal" : "Rh",
  "jawab" : "rodium"
 }, 
  {
  "soal" : "Pd",
  "jawab" : "paladium"
 }, 
  {
  "soal" : "Ag",
  "jawab" : "perak"
 }, 
  {
  "soal" : "Cd",
  "jawab" : "kadmium"
 },
  {
  "soal" : "In",
  "jawab" : "indium"
 }, 
  {
  "soal" : "Sn",
  "jawab" : "timah"
 }, 
  {
  "soal" : "Sb",
  "jawab" : "antimon"
 }, 
  {
  "soal" : "Te",
  "jawab" : "telurium"
 },
  {
  "soal" : "I",
  "jawab" : "yodium"
 }, 
  {
  "soal" : "Xe",
  "jawab" : "xenon"
 }, 
  {
  "soal" : "Cs",
  "jawab" : "sesium"
 }, 
  {
  "soal" : "Ba",
  "jawab" : "barium"
 },
  {
  "soal" : "La",
  "jawab" : "lantanum"
 }, 
  {
  "soal" : "Ce",
  "jawab" : "serium"
 }, 
  {
  "soal" : "Pr",
  "jawab" : "praseodimium"
 }, 
  {
  "soal" : "Nd",
  "jawab" : "neodimium"
 },
  {
  "soal" : "Pm",
  "jawab" : "prometium"
 }, 
  {
  "soal" : "Sm",
  "jawab" : "samarium"
 }, 
  {
  "soal" : "Eu",
  "jawab" : "europium"
 }, 
  {
  "soal" : "Gd",
  "jawab" : "gadolinium"
 },
  {
  "soal" : "Tb",
  "jawab" : "terbium"
 }, 
  {
  "soal" : "Dy",
  "jawab" : "disprosium"
 }, 
  {
  "soal" : "Ho",
  "jawab" : "holmium"
 }, 
  {
  "soal" : "Er",
  "jawab" : "erbium"
 },
  {
  "soal" : "Tm",
  "jawab" : "tulium"
 }, 
  {
  "soal" : "Yb",
  "jawab" : "iterbium"
 }, 
  {
  "soal" : "Lu",
  "jawab" : "lutetium"
 }, 
  {
  "soal" : "Hf",
  "jawab" : "hafnium"
 },
  {
  "soal" : "Ta",
  "jawab" : "tantalum"
 }, 
  {
  "soal" : "W",
  "jawab" : "tungsten"
 }, 
  {
  "soal" : "Re",
  "jawab" : "renium"
 }, 
  {
  "soal" : "Os",
  "jawab" : "osmium"
 },
  {
  "soal" : "Ir",
  "jawab" : "iridium"
 }, 
  {
  "soal" : "Pt",
  "jawab" : "platina"
 }, 
  {
  "soal" : "Au",
  "jawab" : "emas"
 }, 
  {
  "soal" : "Hg",
  "jawab" : "raksa"
 },
  {
  "soal" : "Ti",
  "jawab" : "talium"
 }, 
  {
  "soal" : "Pb",
  "jawab" : "timbal"
 }, 
  {
  "soal" : "Bi",
  "jawab" : "bismut"
 }, 
  {
  "soal" : "Po",
  "jawab" : "polonium"
 },
  {
  "soal" : "At",
  "jawab" : "astatin"
 }, 
  {
  "soal" : "Rn",
  "jawab" : "radon"
 }, 
  {
  "soal" : "Fr",
  "jawab" : "fransium"
 }, 
  {
  "soal" : "Ra",
  "jawab" : "radium"
 },
  {
  "soal" : "Ac",
  "jawab" : "aktinium"
 }, 
  {
  "soal" : "Th",
  "jawab" : "torium"
 }, 
  {
  "soal" : "Pa",
  "jawab" : "protaktinium"
 }, 
  {
  "soal" : "U",
  "jawab" : "uranium"
 },
  {
  "soal" : "Np",
  "jawab" : "neptunium"
 }, 
  {
  "soal" : "Pu",
  "jawab" : "plutonium"
 }, 
  {
  "soal" : "Am",
  "jawab" : "amerisium"
 }, 
  {
  "soal" : "Cm",
  "jawab" : "curium"
 },
  {
  "soal" : "Bk",
  "jawab" : "berkelium"
 }, 
  {
  "soal" : "Cf",
  "jawab" : "kalifornium"
 }, 
  {
  "soal" : "Es",
  "jawab" : "einsteinium"
 }, 
  {
  "soal" : "Fm",
  "jawab" : "fermium"
 },
  {
  "soal" : "Md",
  "jawab" : "mendelevium"
 }, 
  {
  "soal" : "No",
  "jawab" : "nobelium"
 }, 
  {
  "soal" : "Lr",
  "jawab" : "lawrensium"
 }, 
  {
  "soal" : "Rf",
  "jawab" : "rutherfordium"
 },
  {
  "soal" : "Db",
  "jawab" : "dubnium"
 }, 
  {
  "soal" : "Sg",
  "jawab" : "seaborgium"
 }, 
  {
  "soal" : "Bh",
  "jawab" : "bohrium"
 }, 
  {
  "soal" : "Hs",
  "jawab" : "hassium"
 },
  {
  "soal" : "Mt",
  "jawab" : "meitnerium"
 }, 
  {
  "soal" : "Ds",
  "jawab" : "darmstadtium"
 }, 
  {
  "soal" : "Rg",
  "jawab" : "roentgenium"
 },
  {
  "soal" : "Cn",
  "jawab" : "kopernisium"
 }, 
  {
  "soal" : "Nh",
  "jawab" : "nihonium"
 }, 
  {
  "soal" : "Fi",
  "jawab" : "flerovium"
 }, 
  {
  "soal" : "Mc",
  "jawab" : "moskovium"
 },
  {
  "soal" : "Lv",
  "jawab" : "livermorium"
 }, 
  {
  "soal" : "Ts",
  "jawab" : "tenesin"
 }, 
  {
  "soal" : "Og",
  "jawab" : "oganeson"
 }
  ]
  rndm = anu[Math.floor(Math.random() * anu.length)];
  clu = clue(rndm.jawab)
  let obj = {
    soal: rndm.soal,
    jawab: rndm.jawab,
    clue: clu
  }
  resolve(obj)
  })
}

function _bendera() {
  return new Promise((resolve) => {
    rndm = negara[Math.floor(Math.random() * negara.length)];
    clu = clue(rndm.negara)
    let obj = {
      soal: rndm.bendera,
      jawab: rndm.negara,
      clue: clu
    }
    resolve(obj)
  })
}

function _lagukebangsaan() {
  return new Promise((resolve) => {
    rndm = negara[Math.floor(Math.random() * negara.length)];
    clu = clue(rndm.lagu_kebangsaan)
    let obj = {
      soal: rndm.negara,
      jawab: rndm.lagu_kebangsaan,
      clue: clu
    }
    resolve(obj)
  })
}

function _ibukota() {
  return new Promise((resolve) => {
    rndm = negara[Math.floor(Math.random() * negara.length)];
    clu = clue(rndm.ibu_kota)
    let obj = {
      soal: rndm.negara,
      jawab: rndm.ibu_kota,
      clue: clu
    }
    resolve(obj)
  })
}

function _siapaaku() {
  return new Promise((resolve) => {
    let anu = [{"soal":"Aku sebuah kata, jika kamu sebut benar maka salah, jika salah maka benar.","jawaban":"Salah","clue":"_ _ _ _ _ "},{"soal":"Aku dipunyai di setiap rumah. Aku tempat BAB.","jawaban":"Toilet","clue":"_ _ _ _ _ _ "},{"soal":"Aku selalu dipotong tapi tetap tumbuh. Biasanya aku ada di tangan dan kaki.","jawaban":"Kuku","clue":"_ _ _ _ "},{"soal":"Di buah aku nyata, di hewan aku hanya mitos.","jawaban":"Naga","clue":"_ _ _ _ "},{"soal":"Aku kehilangan kepala ketika pagi dan punya lagi waktu malam.","jawaban":"Bantal","clue":"_ _ _ _ _ _ "},{"soal":"Aku adalah sesuatu yang sering dinikmati ketika jam-jam istirahat umumnya malam hari. Aku biasanya empuk.","jawaban":"Kasur","clue":"_ _ _ _ _ "},{"soal":"Kalau demam, aku sering dikompres air hangat. Kalau berpikir keras, aku sering dipegang. Kalau lupa, aku sering ditepuk.","jawaban":"Dahi","clue":"_ _ _ _ "},{"soal":"Aku adalah buah. Kalau masak warnaku kuning. Aku berbentuk lonjong. Aku untuk pencuci mulut.","jawaban":"Pisang","clue":"_ _ _ _ _ _ "},{"soal":"Aku sejenis bom. Aku sangat ditakuti oleh orang-orang. Hiroshima dan Nagaski hancur karena aku.","jawaban":"Atom","clue":"_ _ _ _ "},{"soal":"Aku kecil dan panjang. Setiap rumah pasti ada aku. Aku juga biasanya ditemukan di tiang.","jawaban":"Kabel","clue":"_ _ _ _ _ "},{"soal":"Warnaku bermacam-macam, bentukku bermacam-macam pula. Semua orang menyukai aku. Aku identik dengan seorang wanita.","jawaban":"Bunga","clue":"_ _ _ _ _ "},{"soal":"Aku bisa membersihkan wajah. Warnaku putih. Aku terbuat dari kertas yang lembut. Aku mudah menyerap.","jawaban":"Tisu","clue":"_ _ _ _ "},{"soal":"Aku adalah sebuah planet. Aku terbesar dalam tata surya kita.","jawaban":"Yupiter","clue":"_ _ _ _ _ _ _ "},{"soal":"Aku dipetik bukanlah buah. Digendong bukanlah anak.","jawaban":"Gitar","clue":"_ _ _ _ _ "},{"soal":"Aku adalah sebuah ibukota negara. Ganti huruf vokal pertama ku maka aku dibutuhkan dalam karya sastra. Ganti lagi huruf vokalnya ku menjadi tokoh wayang.","jawaban":"Roma","clue":"_ _ _ _ "},{"soal":"Aku panjang seperti pipa. Badanku lentur. Kegunaanku untuk mengalirkan air.","jawaban":"Selang","clue":"_ _ _ _ _ _ "},{"soal":"Aku merupakan karya seni. Orang suka memajangku. Aku mempunyai estetika.","jawaban":"Lukisan","clue":"_ _ _ _ _ _ _ "},{"soal":"Aku sebuah tempat yang sangat luas, pesawat selalu datang mengunjungi aku. Aku juga sangat sibuk sekali dan tidak pernah tutup. Aku banyak dicari oleh para pengguna transportasi untuk bepergian antar negara.","jawaban":"Bandara","clue":"_ _ _ _ _ _ _ "},{"soal":"Aku sejenis kesenian. Aku sangat terkenal. Aku berasal dari Ponorogo.","jawaban":"Reog","clue":"_ _ _ _ "},{"soal":"Semakin aku diputar ke kanan, aku semakin tinggi dan sebaliknya.","jawaban":"Lipstik","clue":"_ _ _ _ _ _ _ "},{"soal":"Aku lembut, berbulu, dan berada dekat dengan pintu. Akulah yang selalu tinggal di lantai.","jawaban":"Keset","clue":"_ _ _ _ _ "},{"soal":"Aku bersuara bila ada bahaya. Aku juga suka membangunkan orang tidur. Suara aku cukup keras.","jawaban":"Alarm","clue":"_ _ _ _ _ "},{"soal":"Aku adalah lubang di tanah. Aku merupakan tempat menimba. Aku terdapat banyak air.","jawaban":"Sumur","clue":"_ _ _ _ _ "},{"soal":"Orang-orang bermaksiat di atas punggungku, tapi ada saatnya aku menjepit mereka.","jawaban":"Tanah","clue":"_ _ _ _ _ "},{"soal":"Tugas utamaku adalah mengoyak makanan. Aku memiliki bentuk yang runcing. Aku berada di mulut.","jawaban":"Taring","clue":"_ _ _ _ _ _ "},{"soal":"Bentuk aku bermacam-macam. Aku disukai anak-anak. Aku gampang rusak oleh benda tajam atau panas.","jawaban":"Balon","clue":"_ _ _ _ _ "},{"soal":"Aku sangat empuk. Aku bermacam-macam motif. Aku berada di ruang tamu. Biasanya aku untuk duduk.","jawaban":"Sofa","clue":"_ _ _ _ "},{"soal":"Aku berasal dari Sumatra. Jika huruf vokal kedua ku diganti, aku berasal dari Jawa. Jika huruf vokal kedua ku diganti lagi maka aku harus minum obat.","jawaban":"Batak","clue":"_ _ _ _ _ "},{"soal":"Aku bisa menari. Saat aku berputar ke kanan, maka aku akan tertanam.","jawaban":"Baut","clue":"_ _ _ _ "},{"soal":"Darahku dipakai untuk menyamarkan bau. Aku bukanlah aku jika tidak berdarah.","jawaban":"Parfum","clue":"_ _ _ _ _ _ "},{"soal":"Aku panjang dan berair, dibutuhkan manusia tapi hanya terdiri dari satu huruf. Aku biasa juga di matematika.","jawaban":"Kali","clue":"_ _ _ _ "},{"soal":"Aku disukai anak-anak untuk sarapan. Aku sering ada di dalam roti. Kebanyakan rasa aku adalah stroberi atau nanas.","jawaban":"Selai","clue":"_ _ _ _ _ "},{"soal":"Aku adalah ruangan. Di ruanganku ada kompornya. Aku tempat untuk memasak.","jawaban":"Dapur","clue":"_ _ _ _ _ "},{"soal":"Sering dipukuli bukan berarti aku tak disukai, makin dipukul dan makin aku menjerit.","jawaban":"Drum","clue":"_ _ _ _ "},{"soal":"Walaupun tangkaiku tak berdaun, terkadang aku terkait pada daun.","jawaban":"Kacamata","clue":"_ _ _ _ _ _ _ _ "},{"soal":"Aku bisa makan. Aku juga bisa dimakan. Aku hitam putih yang berperang.","jawaban":"Catur","clue":"_ _ _ _ _ "},{"soal":"Aku adalah sebuah kata yang hidup dari penggabungan lima huruf. Banyak yang sudah melihat aku meski tanpa mereka sadari. Begitu aku menampakkan wujud, semua pekerjaan tidak akan pernah terselesaikan.","jawaban":"Error","clue":"_ _ _ _ _ "},{"soal":"Aku adalah Pulau Vulkanik. Aku berada di tengah Danau Toba.","jawaban":"Samosir","clue":"_ _ _ _ _ _ _ "},{"soal":"Aku adalah sebuah benda. Biasanya aku dikasih sebagai suatu penghargaan.","jawaban":"Piala","clue":"_ _ _ _ _ "},{"soal":"Aku adalah mamalia darat terbesar. Aku makan sampai 350 pound per hari. Aku memiliki hidung yang panjang.","jawaban":"Gajah","clue":"_ _ _ _ _ "},{"soal":"Aku selalu dikejar-kejar. Tapi walau sampai kapanpun, dia tidak akan pernah berhasil mendahuluiku.","jawaban":"Roda","clue":"_ _ _ _ "},{"soal":"Walaupun tangkaiku tak berdaun, terkadang aku terkait pada daun.","jawaban":"Kacamata","clue":"_ _ _ _ _ _ _ _ "},{"soal":"Aku memiliki bentuk atas yang memanjang. Bagian bawahku berbentuk lingkaran. Aku dapat menampung air.","jawaban":"Botol","clue":"_ _ _ _ _ "},{"soal":"Aku adalah binatang berkaki sepuluh. Aku hidup di laut.","jawaban":"Kepiting","clue":"_ _ _ _ _ _ _ _ "},{"soal":"Semakin cepat kamu berlari, semakin sulit untuk menangkap aku.","jawaban":"Nafas","clue":"_ _ _ _ _ "},{"soal":"Aku laksana semut beriring, hanya pada laki-laki saja. Munculnya pun di bagian tertentu saja.","jawaban":"Kumis","clue":"_ _ _ _ _ "},{"soal":"Aku adalah sejenis permainan. Aku bisa berputar. Aku terbuat dari kayu.","jawaban":"Gasing","clue":"_ _ _ _ _ _ "},{"soal":"Aku punya kepala. Cairanku putih kental, sedikit lengket, dan berbau khas.","jawaban":"TipeX","clue":"_ _ _ _ _ "},{"soal":"Aku adalah seorang tokoh pewayangan. Aku sangat sakti. Aku juga ada di Mobile Legend.","jawaban":"Gatotkaca","clue":"_ _ _ _ _ _ _ _ _ "},{"soal":"Aku panjang dan berair, dibutuhkan manusia tapi hanya terdiri dari satu huruf. Aku biasa juga di matematika.","jawaban":"Kali","clue":"_ _ _ _ "},{"soal":"Aku sangat membantu siswa dalam menghitung. Aku sangat jago dalam menghitung. Di dalam diriku terdapat angka 1-9.","jawaban":"Kalkulator","clue":"_ _ _ _ _ _ _ _ _ _ "},{"soal":"Aku pandang kamu, kamu pandang aku. Tangan kanan aku naik, tangan kirimu juga naik.","jawaban":"Cermin","clue":"_ _ _ _ _ _ "},{"soal":"Aku bisa menyalakan lampu. Tentu saja aku bisa mematikan lampu. Tapi tanpa listrik aku tidak ada gunanya.","jawaban":"Saklar","clue":"_ _ _ _ _ _ "},{"soal":"Aku bisa bertambah, tapi aku tidak bisa berkurang.","jawaban":"Umur","clue":"_ _ _ _ "},{"soal":"Aku hidup dengan listrik. Aku berbentuk kotak. Kegunaanku untuk membuat roti.","jawaban":"Oven","clue":"_ _ _ _ "},{"soal":"Aku lebih tinggi dari raja.","jawaban":"Mahkota","clue":"_ _ _ _ _ _ _ "},{"soal":"Aku tidak terlihat. Hanya orang-orang tertentu yang dapat melihat saya. Aku juga sangat menarik untuk diperbincangkan.","jawaban":"Hantu","clue":"_ _ _ _ _ "},{"soal":"Aku negara yang terdiri dari nama seorang paman.","jawaban":"USA","clue":"_ _ _ "},{"soal":"Aku sembunyi tapi kepalaku selalu kelihatan.","jawaban":"Paku","clue":"_ _ _ _ "},{"soal":"Aku binatang yang berwarna putih. Leherku panjang. Aku memiliki sayang tapi tidak bisa terbang. Aku biasanya dijadikan hewan peliharaan.","jawaban":"Angsa","clue":"_ _ _ _ _ "},{"soal":"Saya disebut-sebut ketika orang sudah kehabisan cara, tambahkan dua buah huruf di belakang saya, maka saya akrab dengan istilah kehilangan. Lalu jika huruf awalnya dihilangkan lagi, maka sifat saya kebalikan dari yang sebelumnya.","jawaban":"Buntu","clue":"_ _ _ _ _ "},{"soal":"Aku berombak. Aku merupakan batas darat dan laut. Biasanya aku sangat ramai di sore hari.","jawaban":"Pantai","clue":"_ _ _ _ _ _ "},{"soal":"Aku mengeluarkan suara ketika suhunya sangat panas. Aku dapat menampung air untuk minum.","jawaban":"Ketel","clue":"_ _ _ _ _ "},{"soal":"Aku adalah sejenis burung. Aku memiliki dua mata di depan dan banyak mata di ekor saya.","jawaban":"Merak","clue":"_ _ _ _ _ "},{"soal":"Aku bercahaya. Kadang aku berwarna-warni. Aku hidup dengan listrik. Aku bermanfaat di kegelapan.","jawaban":"Lampu","clue":"_ _ _ _ _ "},{"soal":"Aku bagian dari burung tapi tidak bisa terbang, namun aku bisa berada di lautan tanpa basah.","jawaban":"Bayangan","clue":"_ _ _ _ _ _ _ _ "},{"soal":"Aku digunakan untuk minum. Aku berbentuk tabung tanpa tutup. Aku bermacam-macam. Aku terbuat dari atom plastik.","jawaban":"Cangkir","clue":"_ _ _ _ _ _ _ "},{"soal":"Semakin cepat kamu berlari, semakin sulit untuk menangkap aku.","jawaban":"Nafas","clue":"_ _ _ _ _ "},{"soal":"Aku terbuat dari kayu atau bambu. Ujung tubuhku bisa bikin geli. Aku juga sangat suka digunakan untuk membersihkan lantai.","jawaban":"Sapu","clue":"_ _ _ _ "},{"soal":"Aku berwarna putih. Aku bisa bergerak. Bentukku beraneka ragam.","jawaban":"Awan","clue":"_ _ _ _ "},{"soal":"Jika kamu memiliki aku, kamu ingin berbagi aku. Begitu kamu berbagi aku, kamu tidak memiliki aku lagi.","jawaban":"Rahasia","clue":"_ _ _ _ _ _ _ "},{"soal":"Aku selalu membantu para Ibu. Diriku penuh noda, namun bisa menjadi tongkat sakti Ibu-ibu.","jawaban":"Sapu","clue":"_ _ _ _ "},{"soal":"Aku adalah alat pembayaran. Aku juga sebuah mata uang. Aku berasal dari Rusia.","jawaban":"Ruble","clue":"_ _ _ _ _ "},{"soal":"Saat aku ditekan, aku menampilkan kata. Saat aku dikombinasikan, aku mengeluarkan hal menarik.","jawaban":"Keyboard","clue":"_ _ _ _ _ _ _ _ "},{"soal":"Aku sangat rakus. Saat manusia korupsi mereka dianggap sama denganku.","jawaban":"Tikus","clue":"_ _ _ _ _ "},{"soal":"Sering dipukuli bukan berarti aku tak disukai, makin dipukul dan makin aku menjerit.","jawaban":"Drum","clue":"_ _ _ _ "},{"soal":"Aku seekor hewan yang berkulit tebal, berwarna abu-abu. Aku memiliki cula.","jawaban":"Badak","clue":"_ _ _ _ _ "},{"soal":"Kami berdelapan maju dan mundur untuk melindungi raja kami dari serangan musuh.","jawaban":"Pion","clue":"_ _ _ _ "},{"soal":"Aku terbuat dari kain. Aku berbentuk persegi. Biasanya aku untuk mengelap meja.","jawaban":"Serbet","clue":"_ _ _ _ _ _ "},{"soal":"Kadang kau tekan bagianku yang kanan. Kadang juga kau tekan yang kiri. Bagian yang tengahpun tak luput dari sentuhanmu.","jawaban":"Mouse","clue":"_ _ _ _ _ "},{"soal":"Aku alat transportasi. Roda aku terbuat dari kayu. Aku harus ditarik oleh kuda.","jawaban":"Andong","clue":"_ _ _ _ _ _ "},{"soal":"Aku disukai anak-anak untuk sarapan. Aku sering ada di dalam roti. Kebanyakan rasa aku adalah stroberi atau nanas.","jawaban":"Selai","clue":"_ _ _ _ _ "},{"soal":"Aku selalu membantu orang membawa barang. Ukuran aku bermacam-macam. Letak aku di punggung orang yang aku bantu.","jawaban":"Ransel","clue":"_ _ _ _ _ _ "},{"soal":"Ukuranku sangat kecil seperti butiran pasir. Rasaku sangat manis. Aku terbuat dari tanaman tebu.","jawaban":"Gula","clue":"_ _ _ _ "},{"soal":"Aku sebuah tempat yang sangat luas, pesawat selalu datang mengunjungi aku. Aku juga sangat sibuk sekali dan tidak pernah tutup. Aku banyak dicari oleh para pengguna transportasi untuk bepergian antar negara.","jawaban":"Bandara","clue":"_ _ _ _ _ _ _ "},{"soal":"Aku terdapat di kepala. Aku identik dengan tuyul. Aku tidak bisa disisir.","jawaban":"Botak","clue":"_ _ _ _ _ "},{"soal":"Aku bekerja di tempat kotor, setiap kali bekerja tubuhku menjadi korban.","jawaban":"Penghapus","clue":"_ _ _ _ _ _ _ _ _ "},{"soal":"Aku sebuah kota. Aku terkenal karena jam gadangnya.","jawaban":"Padang","clue":"_ _ _ _ _ _ "},{"soal":"Aku selalu membantu para Ibu. Diriku penuh noda, namun bisa menjadi tongkat sakti Ibu-ibu.","jawaban":"Sapu","clue":"_ _ _ _ "},{"soal":"Aku adalah binatang yang paling banyak lewat di jalan raya.","jawaban":"Zebra","clue":"_ _ _ _ _ "},{"soal":"Aku panjang seperti pipa. Badanku lentur. Kegunaanku untuk mengalirkan air.","jawaban":"Selang","clue":"_ _ _ _ _ _ "},{"soal":"Aku satu-satunya buah yang memiliki jantung.","jawaban":"Pisang","clue":"_ _ _ _ _ _ "},{"soal":"Aku buah yang rasanya sama dengan namaku.","jawaban":"Asam","clue":"_ _ _ _ "},{"soal":"Aku adalah sebuah kerajinan tangan. Aku memiliki bentuk seperti wajah manusia.","jawaban":"Topeng","clue":"_ _ _ _ _ _ "},{"soal":"Aku adalah sebuah kerajinan tangan. Aku memiliki bentuk seperti wajah manusia.","jawaban":"Topeng","clue":"_ _ _ _ _ _ "},{"soal":"Aku bagian dari tumbuhan. Aku merupakan bagian dimana terjadi fotosintesis.","jawaban":"Daun","clue":"_ _ _ _ "},{"soal":"Aku digunakan untuk menyeberangi sungai. Aku berada di atas air.","jawaban":"Jembatan","clue":"_ _ _ _ _ _ _ _ "},{"soal":"Aku adalah nama gunung. Aku gunung tertinggi di dunia.","jawaban":"Everest","clue":"_ _ _ _ _ _ _ "},{"soal":"Aku berbentuk bulat. Aku sangat panas. Aku sebagai pusat tata surya.","jawaban":"Matahari","clue":"_ _ _ _ _ _ _ _ "},{"soal":"Aku berada di daerah pegunungan. Aku dapat mengurangi pandangan pengendara. Aku sering muncul di pagi hari.","jawaban":"Kabut","clue":"_ _ _ _ _ "},{"soal":"Aku bercahaya. Kadang aku berwarna-warni. Aku hidup dengan listrik. Aku bermanfaat di kegelapan.","jawaban":"Lampu","clue":"_ _ _ _ _ "},{"soal":"Aku sebuah tempat. Kamu bisa nginap gratis, makan gratis, minum gratis, tapi kamu pasti tidak ingin denganku.","jawaban":"Penjara","clue":"_ _ _ _ _ _ _ "},{"soal":"Saat aku ditekan, aku menampilkan kata. Saat aku dikombinasikan, aku mengeluarkan hal menarik.","jawaban":"Keyboard","clue":"_ _ _ _ _ _ _ _ "},{"soal":"Aku datang tak diundang. Aku pergi tak diantar. Ada yang senang dengan celotehanku. Ada pula yang cuek tak memperhatikanku.","jawaban":"Pengamen","clue":"_ _ _ _ _ _ _ _ "},{"soal":"Aku bercahaya. Kadang aku berwarna-warni. Aku hidup dengan listrik. Aku bermanfaat di kegelapan.","jawaban":"Lampu","clue":"_ _ _ _ _ "},{"soal":"Aku adalah Pulau Vulkanik. Aku berada di tengah Danau Toba.","jawaban":"Samosir","clue":"_ _ _ _ _ _ _ "},{"soal":"Usia aku masih sangat muda. Bentuk aku mungil dan imut. Aku sangat menggemaskan.","jawaban":"Bayi","clue":"_ _ _ _ "},{"soal":"Tubuhku keras dan panjang. Rasaku manis, tapi aku bukan gula.","jawaban":"Tebu","clue":"_ _ _ _ "},{"soal":"Aku salah satu bagian dari anggota tubuh. Tempatku di bagian wajah.","jawaban":"Hidung","clue":"_ _ _ _ _ _ "},{"soal":"Aku adalah sesuatu yang tidak bisa dilihat, tapi bisa dirasakan. Banyak orang yang tidak menyukaiku, termasuk Anda, tapi aku pasti akan dipanggil kapan saja saat ada yang terluka.","jawaban":"Sakit","clue":"_ _ _ _ _ "},{"soal":"Aku adalah anak nenekmu dan kakekmu, tapi bukan pamanmu.","jawaban":"Ayah","clue":"_ _ _ _ "},{"soal":"Aku adalah sebuah nama gunung. Aku terdapat di Jawa Timur.","jawaban":"Bromo","clue":"_ _ _ _ _ "},{"soal":"Aku sebuah Pulau di Indonesia. Aku berdekatan dengan Negara Singapura.","jawaban":"Batam","clue":"_ _ _ _ _ "},{"soal":"Aku hanya bisa dilihat ketika mata ditutup.","jawaban":"Mimpi","clue":"_ _ _ _ _ "},{"soal":"Aku adalah komputer bertenaga surya mini.","jawaban":"Kalkulator","clue":"_ _ _ _ _ _ _ _ _ _ "},{"soal":"Yang palsu laku. Yang asli malah tidak laku.","jawaban":"Gigi","clue":"_ _ _ _ "},{"soal":"Kalau kamu masukan jarimu ke dalam lubangku, kamu akan sangat terkejut.","jawaban":"Colokan","clue":"_ _ _ _ _ _ _ "},{"soal":"Jika aku disebut sekali jadi untung, disebut dua kali jadi binatang.","jawaban":"Laba","clue":"_ _ _ _ "},{"soal":"Aku adalah kotak yang dapat berbicara dan dapat menghibur orang. Aku juga penuh warna.","jawaban":"Televisi","clue":"_ _ _ _ _ _ _ _ "},{"soal":"Aku ringan seperti bulu, namun manusia terkuat tidak bisa menahan aku lebih dari lima menit.","jawaban":"Nafas","clue":"_ _ _ _ _ "},{"soal":"Aku adalah sebuah ibukota negara. Ganti huruf vokal pertama ku maka aku dibutuhkan dalam karya sastra. Ganti lagi huruf vokalnya ku menjadi tokoh wayang.","jawaban":"Roma","clue":"_ _ _ _ "},{"soal":"Aku termasuk hewan melata. Aku pemakan daging. Gigitanku mengandung racun. Aku tidak mempunyai kaki.","jawaban":"Ular","clue":"_ _ _ _ "},{"soal":"Aku suka memainkan peran. Sering muncul di panggung televisi dan film. Aku juga terkenal. Aku berjenis kelamin pria.","jawaban":"Aktor","clue":"_ _ _ _ _ "},{"soal":"Aku adalah surat, tapi bentukku kartu.","jawaban":"SIM","clue":"_ _ _ "},{"soal":"Aku binatang yang berwarna putih. Leherku panjang. Aku memiliki sayang tapi tidak bisa terbang. Aku biasanya dijadikan hewan peliharaan.","jawaban":"Angsa","clue":"_ _ _ _ _ "},{"soal":"Semakin banyak kamu ambil, semakin banyak kamu tinggalkan.","jawaban":"Langkah","clue":"_ _ _ _ _ _ _ "},{"soal":"Aku adalah sebutan untuk kerabat kandung. Aku adalah ayah dari masing-masing orang tua kita.","jawaban":"Kakek","clue":"_ _ _ _ _ "},{"soal":"Aku biasanya berjalan-jalan ketika ujian.","jawaban":"Contekan","clue":"_ _ _ _ _ _ _ _ "},{"soal":"Aku pandang kamu, kamu pandang aku. Tangan kanan aku naik, tangan kirimu juga naik.","jawaban":"Cermin","clue":"_ _ _ _ _ _ "},{"soal":"Semua orang hormat padaku. Setiap negara pasti punya aku. Aku terbuat dari kain.","jawaban":"Bendera","clue":"_ _ _ _ _ _ _ "},{"soal":"Aku adalah buah. Kalau masak warnaku kuning. Aku berbentuk lonjong. Aku untuk pencuci mulut.","jawaban":"Pisang","clue":"_ _ _ _ _ _ "},{"soal":"Aku pasti sepasang. Aku sangat keras. Tidak semua hewan mempunyai aku. Aku di atas kepala.","jawaban":"Tanduk","clue":"_ _ _ _ _ _ "},{"soal":"Aku seperti jeruk dan sangat asam.","jawaban":"Lemon","clue":"_ _ _ _ _ "},{"soal":"Bila kalian jalan, aku juga jalan. Bila kalian berhenti, aku tetap jalan. Tapi bila aku berhenti, kalian akan mati.","jawaban":"Jantung","clue":"_ _ _ _ _ _ _ "},{"soal":"Aku bisa dipegang tapi tidak bisa disentuh.","jawaban":"Janji","clue":"_ _ _ _ _ "},{"soal":"Aku berasal dari Bahasa Sansekerta. Aku memiliki lima dasar.","jawaban":"Pancasila","clue":"_ _ _ _ _ _ _ _ _ "},{"soal":"Aku adalah samudra. Aku samudra terluas di dunia.","jawaban":"Pasifik","clue":"_ _ _ _ _ _ _ "},{"soal":"Aku suka memainkan peran. Sering muncul di panggung televisi dan film. Aku juga terkenal. Aku berjenis kelamin pria.","jawaban":"Aktor","clue":"_ _ _ _ _ "},{"soal":"Aku hitam, kuning, dan merah. Aku mempunyai pasang dan pasti berbeda dengan yang lain.","jawaban":"Plat","clue":"_ _ _ _ "},{"soal":"Aku adalah kertas, namun aku jadi kebutuhan sehari-hari yang memiliki nominal.","jawaban":"Uang","clue":"_ _ _ _ "},{"soal":"Aku termasuk hewan melata. Aku pemakan daging. Gigitanku mengandung racun. Aku tidak mempunyai kaki.","jawaban":"Ular","clue":"_ _ _ _ "},{"soal":"Taringku tajam. Aku gigit bukan sampai putus, tapi untuk bersama.","jawaban":"Staples","clue":"_ _ _ _ _ _ _ "},{"soal":"Aku nomor tiga, tapi bukan angka. Aku akan panas dan dingin pada saat yang sama, tapi tidak pada waktu yang sama. Semua orang dekat denganku, tapi tidak semua orang tahu namaku.","jawaban":"Bumi","clue":"_ _ _ _ "},{"soal":"Aku adalah benda yang dipakai untuk mengambil air saat mandi.","jawaban":"Gayung","clue":"_ _ _ _ _ _ "},{"soal":"Aku termasuk benda padat. Tubuhku sangat keras. Aku sering digunakan untuk pondasi rumah.","jawaban":"Batu","clue":"_ _ _ _ "},{"soal":"Aku suka mempromosikan. Bisa seperti benda, jasa, dan ide. Aku juga bisa meningkatkan penjualan.","jawaban":"Iklan","clue":"_ _ _ _ _ "},{"soal":"Aku berwujud gas. Aku selalu dibutuhkan semua makhluk hidup.","jawaban":"Oksigen","clue":"_ _ _ _ _ _ _ "},{"soal":"Saya adalah sebuah provinsi di Indonesia. Saya disusun oleh sebuah benda yang dicari ketika gelap. Jika huruf awal saya diganti, maka pekerjaan saya telah selesai.","jawaban":"Lampung","clue":"_ _ _ _ _ _ _ "},{"soal":"Semakin cepat kamu berlari, semakin sulit untuk menangkap aku.","jawaban":"Nafas","clue":"_ _ _ _ _ "},{"soal":"Aku dipetik bukanlah buah. Digendong bukanlah anak.","jawaban":"Gitar","clue":"_ _ _ _ _ "},{"soal":"Aku sembunyi tapi kepalaku selalu kelihatan.","jawaban":"Paku","clue":"_ _ _ _ "},{"soal":"Bibir ketemu bibir, tangan meraba-raba lubang, dan kamupun menikmati iramaku.","jawaban":"Suling","clue":"_ _ _ _ _ _ "},{"soal":"Aku dapat menghibur orang. Aku biasanya ada di tempat karaoke. Aku mempunyai irama dan lirik.","jawaban":"Lagu","clue":"_ _ _ _ "},{"soal":"Aku bisa menyalakan lampu. Tentu saja aku bisa mematikan lampu. Tapi tanpa listrik aku tidak ada gunanya.","jawaban":"Saklar","clue":"_ _ _ _ _ _ "},{"soal":"Aku berlubang tapi menghalangi, bisa dilewati walaupun menghalangi.","jawaban":"Jaring","clue":"_ _ _ _ _ _ "},{"soal":"Taringku tajam. Aku gigit bukan sampai putus, tapi untuk bersama.","jawaban":"Staples","clue":"_ _ _ _ _ _ _ "},{"soal":"Anda membuangku di laut saat Anda menggunakan aku dan membawa aku masuk lagi saat Anda selesai.","jawaban":"Jangkar","clue":"_ _ _ _ _ _ _ "},{"soal":"Aku adalah alat tulis. Aku berwarna putih. Aku berbentuk segi panjang. Aku hancur bila kena air.","jawaban":"Buku","clue":"_ _ _ _ "},{"soal":"Terkadang aku menemanimu mengikuti pelajaran di sekolah. Di saat yang lain, aku juga terbang ke tempat lain. Aku merk sebuah pulpen.","jawaban":"Pilot","clue":"_ _ _ _ _ "},{"soal":"Aku terdiri dari 12 bulan.","jawaban":"Tahun","clue":"_ _ _ _ _ "},{"soal":"Aku buah, aku tak pernah matang seumur hidupku.","jawaban":"Kelapa","clue":"_ _ _ _ _ _ "},{"soal":"Badanku lurus, mataku hanya satu, dan ekorku tajam.","jawaban":"Jarum","clue":"_ _ _ _ _ "},{"soal":"Aku lebih tinggi dari raja.","jawaban":"Mahkota","clue":"_ _ _ _ _ _ _ "},{"soal":"Aku memiliki banyak gigi tapi tak pernah gigit.","jawaban":"Sisir","clue":"_ _ _ _ _ "},{"soal":"Aku sudah ada sekitar ribuan tahun bahkan ratusan tahun yang lalu, tetapi usiaku kurang lebih 30 hari.","jawaban":"Bulan","clue":"_ _ _ _ _ "},{"soal":"Sering dipukuli bukan berarti aku tak disukai, makin dipukul dan makin aku menjerit.","jawaban":"Drum","clue":"_ _ _ _ "},{"soal":"Ketika aku hidup aku berpayung.","jawaban":"Jamur","clue":"_ _ _ _ _ "},{"soal":"Hidup selalu di atas matipun selalu di atas.","jawaban":"Lampu","clue":"_ _ _ _ _ "},{"soal":"Aku adalah sesuatu yang sering dinikmati ketika jam-jam istirahat umumnya malam hari. Aku biasanya empuk.","jawaban":"Kasur","clue":"_ _ _ _ _ "},{"soal":"Aku sejenis kesenian. Aku sangat terkenal. Aku berasal dari Ponorogo.","jawaban":"Reog","clue":"_ _ _ _ "},{"soal":"Aku sejenis bom. Aku sangat ditakuti oleh orang-orang. Hiroshima dan Nagaski hancur karena aku.","jawaban":"Atom","clue":"_ _ _ _ "},{"soal":"Aku pasti sepasang. Aku sangat keras. Tidak semua hewan mempunyai aku. Aku di atas kepala.","jawaban":"Tanduk","clue":"_ _ _ _ _ _ "},{"soal":"Aku bekerja di tempat kotor, setiap kali bekerja tubuhku menjadi korban.","jawaban":"Penghapus","clue":"_ _ _ _ _ _ _ _ _ "},{"soal":"Aku berasal dari Bahasa Sansekerta. Aku memiliki lima dasar.","jawaban":"Pancasila","clue":"_ _ _ _ _ _ _ _ _ "},{"soal":"Aku adalah alat pembayaran. Aku juga sebuah mata uang. Aku berasal dari Rusia.","jawaban":"Ruble","clue":"_ _ _ _ _ "},{"soal":"Jauh di mata dekat di hati.","jawaban":"Usus","clue":"_ _ _ _ "},{"soal":"Aku adalah tempat yang banyak airnya. Aku tempat hidup ikan.","jawaban":"Kolam","clue":"_ _ _ _ _ "},{"soal":"Aku berada di dalam tubuh manusia. Aku keluar jika ada yang terluka. Aku berwarna merah.","jawaban":"Darah","clue":"_ _ _ _ _ "},{"soal":"Aku suka memainkan peran. Sering muncul di panggung televisi dan film. Aku juga terkenal. Aku berjenis kelamin pria.","jawaban":"Aktor","clue":"_ _ _ _ _ "},{"soal":"Aku lahir di Arab. Aku tinggal dan besar pun di Arab. Tapi aku sama sekali tidak bisa Bahasa Arab.","jawaban":"Unta","clue":"_ _ _ _ "},{"soal":"Aku merah, aku biru, akupun hijau. Aku juga sering kau kunjungi.","jawaban":"Google","clue":"_ _ _ _ _ _ "},{"soal":"Aku adalah sebuah nama gunung. Aku terdapat di Jawa Timur.","jawaban":"Bromo","clue":"_ _ _ _ _ "},{"soal":"Aku binatang yang hanya bisa jalan mundur. Aku hidup di air.","jawaban":"Udang","clue":"_ _ _ _ _ "},{"soal":"Aku selalu dijadikan alasan siswa jika nilainya jelek.","jawaban":"Pengawas","clue":"_ _ _ _ _ _ _ _ "},{"soal":"Tubuhku panjang. Aku selalu diinjak. Aku terbentang di sungai.","jawaban":"Jembatan","clue":"_ _ _ _ _ _ _ _ "},{"soal":"Aku terlihat datar, tapi sebenarnya dalam. Aku memberikan makanan untukmu. Aku paling luas di bumi.","jawaban":"Laut","clue":"_ _ _ _ "},{"soal":"Aku di atas meja. Biasanya terbuat dari kayu. Aku sebagai tempat puntung rokok.","jawaban":"Asbak","clue":"_ _ _ _ _ "},{"soal":"Aku buah yang rasanya sama dengan namaku.","jawaban":"Asam","clue":"_ _ _ _ "},{"soal":"Aku memiliki rasa yang pahit, tetapi aku sangat dibutuhkan oleh orang yang sakit.","jawaban":"Obat","clue":"_ _ _ _ "},{"soal":"Aku merupakan kendaraan roda tiga. Aku bisa mengangkut penumpang. Aku jalan dengan cara dikayuh.","jawaban":"Becak","clue":"_ _ _ _ _ "},{"soal":"Aku menghasilkan cahaya sendiri. Kalau dilihat dari bumi aku sangat kecil.","jawaban":"Bintang","clue":"_ _ _ _ _ _ _ "},{"soal":"Aku memiliki bentuk tabung. Aku dapat menampung minyak dengan jumlah yang cukup banyak.","jawaban":"Drum","clue":"_ _ _ _ "},{"soal":"Aku akan datang tapi tak pernah sampai.","jawaban":"Besok","clue":"_ _ _ _ _ "},{"soal":"Aku sebuah profesi. Aku yang mengurusi sawah.","jawaban":"Petani","clue":"_ _ _ _ _ _ "},{"soal":"Aku termasuk benda padat. Tubuhku sangat keras. Aku sering digunakan untuk pondasi rumah.","jawaban":"Batu","clue":"_ _ _ _ "},{"soal":"Banyak orang yang sangat sulit mendefinisikan aku. Aku juga dapat membuat orang menjadi senang dan bahkan sangat sedih.","jawaban":"Cinta","clue":"_ _ _ _ _ "},{"soal":"Aku adalah sejenis bangunan. Aku biasanya dijadikan tempat tinggal manusia.","jawaban":"Rumah","clue":"_ _ _ _ _ "},{"soal":"Aku biasanya dipake di kepala. Aku berfungsi sebagai pelindung saat berkendara.","jawaban":"Helm","clue":"_ _ _ _ "},{"soal":"Aku tidak bisa berjalan ke arah kanan dan kiri. Aku hanya bisa berjalan ke atas dan ke bawah.","jawaban":"Lift","clue":"_ _ _ _ "},{"soal":"Aku jenis buku yang kalian baca, tapi tidak dibaca dari awal.","jawaban":"Kamus","clue":"_ _ _ _ _ "},{"soal":"Aku sebuah tempat yang sangat luas, pesawat selalu datang mengunjungi aku. Aku juga sangat sibuk sekali dan tidak pernah tutup. Aku banyak dicari oleh para pengguna transportasi untuk bepergian antar negara.","jawaban":"Bandara","clue":"_ _ _ _ _ _ _ "},{"soal":"Aku bukan benda cair, juga bukan benda padat. Jika aku muncul sekitarku pasti heboh.","jawaban":"Kentut","clue":"_ _ _ _ _ _ "},{"soal":"Aku buah, aku tak pernah matang seumur hidupku.","jawaban":"Kelapa","clue":"_ _ _ _ _ _ "},{"soal":"Aku sering dikunjungi orang. Aku memiliki alamat jelas. Om Google adalah temanku.","jawaban":"Situs","clue":"_ _ _ _ _ "},{"soal":"Aku adalah buah. Bentukku bulat. Aku hanya ada di padang pasir.","jawaban":"Kurma","clue":"_ _ _ _ _ "},{"soal":"Aku disukai banyak orang. Aku memiliki cahaya yang terang, tapi cuma sekilas. Aku mengabadikan momen yang penting.","jawaban":"Kamera","clue":"_ _ _ _ _ _ "},{"soal":"Saya disebut-sebut ketika orang sudah kehabisan cara, tambahkan dua buah huruf di belakang saya, maka saya akrab dengan istilah kehilangan. Lalu jika huruf awalnya dihilangkan lagi, maka sifat saya kebalikan dari yang sebelumnya.","jawaban":"Buntu","clue":"_ _ _ _ _ "},{"soal":"Aku kota yang nilainya selalu tujuh.","jawaban":"Salatiga","clue":"_ _ _ _ _ _ _ _ "},{"soal":"Saya adalah sebuah provinsi di Indonesia. Saya disusun oleh sebuah benda yang dicari ketika gelap. Jika huruf awal saya diganti, maka pekerjaan saya telah selesai.","jawaban":"Lampung","clue":"_ _ _ _ _ _ _ "},{"soal":"Aku terbuat dari besi. Aku digunakan untuk makan. Pasanganku adalah garpu.","jawaban":"Sendok","clue":"_ _ _ _ _ _ "},{"soal":"Aku sangat lucu. Aku adalah mainan. Aku dimainkan oleh anak-anak. Biasanya aku berbentuk tiruan hewan, manusia, dll.","jawaban":"Boneka","clue":"_ _ _ _ _ _ "},{"soal":"Aku di atas meja. Biasanya terbuat dari kayu. Aku sebagai tempat puntung rokok.","jawaban":"Asbak","clue":"_ _ _ _ _ "},{"soal":"Aku sejenis alat musik. Aku berasal dari masyarakat Sunda. Aku terbuat dari bambu.","jawaban":"Angklung","clue":"_ _ _ _ _ _ _ _ "},{"soal":"Aku berwarna hitam saat malam, berwarna biru saat siang.","jawaban":"Langit","clue":"_ _ _ _ _ _ "},{"soal":"Aku adalah sebuah hasil tambang. Orang tergila-gila akan diriku. Aku berwarna kuning.","jawaban":"Emas","clue":"_ _ _ _ "},{"soal":"Aku adalah samudra. Aku samudra terluas di dunia.","jawaban":"Pasifik","clue":"_ _ _ _ _ _ _ "},{"soal":"Aku sebuah kota. Aku terkenal karena jam gadangnya.","jawaban":"Padang","clue":"_ _ _ _ _ _ "},{"soal":"Aku sejenis hewan. Tubuh aku berbulu dan sangat lucu. Manusia sering menjadikan aku temannya.","jawaban":"Kucing","clue":"_ _ _ _ _ _ "},{"soal":"Aku sebuah Pulau di Indonesia. Aku berdekatan dengan Negara Singapura.","jawaban":"Batam","clue":"_ _ _ _ _ "},{"soal":"Aku bagian dari tubuh. Warnaku putih. Salah satu dari aku disebut geraham.","jawaban":"Gigi","clue":"_ _ _ _ "},{"soal":"Aku untuk membawa barang. Aku berwarna-warni. Aku dibawa ke sekolah. Aku biasanya di punggung.","jawaban":"Tas","clue":"_ _ _ "},{"soal":"Aku lubang yang bisa membuka dan menutup. Tiap hari diisi tapi tidak pernah penuh.","jawaban":"Mulut","clue":"_ _ _ _ _ "},{"soal":"Aku nomor tiga, tapi bukan angka. Aku akan panas dan dingin pada saat yang sama, tapi tidak pada waktu yang sama. Semua orang dekat denganku, tapi tidak semua orang tahu namaku.","jawaban":"Bumi","clue":"_ _ _ _ "},{"soal":"Aku tak bernilai jika sendiri. Jika aku disamping yang lain kekuatan mereka bisa bertambah 10 kali lipat.","jawaban":"Nol","clue":"_ _ _ "},{"soal":"Aku selalu membantu orang membawa barang. Ukuran aku bermacam-macam. Letak aku di punggung orang yang aku bantu.","jawaban":"Ransel","clue":"_ _ _ _ _ _ "},{"soal":"Saat aku kau jepit, aku tak menjerit. Saat aku kau injak, aku tak berteriak.","jawaban":"Sandal","clue":"_ _ _ _ _ _ "},{"soal":"Aku gelembung-gelembung kecil. Aku dihasilkan oleh sabun.","jawaban":"Busa","clue":"_ _ _ _ "},{"soal":"Aku adalah hewan. Aku bisa menarik gerobak. Biasanya aku digunakan untuk delman.","jawaban":"Kuda","clue":"_ _ _ _ "},{"soal":"Aku kecil dan berbiji. Aku juga pedas saat dimakan.","jawaban":"Cabe","clue":"_ _ _ _ "},{"soal":"Aku adalah milik negara. Kalau aku mati, yang lain bisa mati.","jawaban":"PLN","clue":"_ _ _ "},{"soal":"Aku  berbentuk butiran-butiran kering. Aku merupakan olahan dari padi.","jawaban":"Beras","clue":"_ _ _ _ _ "},{"soal":"Aku adalah sejenis buah-buahan, biasanya aku diparut untuk dijadikan santan.","jawaban":"Kelapa","clue":"_ _ _ _ _ _ "},{"soal":"Aku adalah samudra. Aku samudra terluas di dunia.","jawaban":"Pasifik","clue":"_ _ _ _ _ _ _ "},{"soal":"Aku adalah binatang yang paling banyak lewat di jalan raya.","jawaban":"Zebra","clue":"_ _ _ _ _ "},{"soal":"Aku Ibu Kota Provinsi yang ada di Indonesia. Aku sering dipakai oleh tukang kayu.","jawaban":"Palu","clue":"_ _ _ _ "},{"soal":"Aku termasuk hewan melata. Aku pemakan daging. Gigitanku mengandung racun. Aku tidak mempunyai kaki.","jawaban":"Ular","clue":"_ _ _ _ "},{"soal":"Aku berbentuk gas. Aku ada jika ada air dan api.","jawaban":"Uap","clue":"_ _ _ "},{"soal":"Aku adalah negara yang tidak pernah gagal.","jawaban":"Brasil","clue":"_ _ _ _ _ _ "},{"soal":"Aku seperti jeruk dan sangat asam.","jawaban":"Lemon","clue":"_ _ _ _ _ "},{"soal":"Aku merupakan alat untuk memukul. Aku digunakan di salah satu cabang olahraga.","jawaban":"Raket","clue":"_ _ _ _ _ "},{"soal":"Aku tidak punya nyawa, tapi bisa mati.","jawaban":"Baterai","clue":"_ _ _ _ _ _ _ "},{"soal":"Semakin cepat kamu berlari, semakin sulit untuk menangkap aku.","jawaban":"Nafas","clue":"_ _ _ _ _ "},{"soal":"Aku sejenis kera. Aku adalah binatang yang dilindungi. Aku berasal dari Kalimantan dan Sumatra.","jawaban":"Orangutan","clue":"_ _ _ _ _ _ _ _ _ "},{"soal":"Aku musuhnya air. Kadang aku untuk memasak. Aku berwujud cair. Aku sangat licin.","jawaban":"Minyak","clue":"_ _ _ _ _ _ "},{"soal":"Bila kalian jalan, aku juga jalan. Bila kalian berhenti, aku tetap jalan. Tapi bila aku berhenti, kalian akan mati.","jawaban":"Jantung","clue":"_ _ _ _ _ _ _ "},{"soal":"Bersisik bukanlah naga, bermahkota bukanlah raja.","jawaban":"Nanas","clue":"_ _ _ _ _ "},{"soal":"Aku bisa dipegang tapi tidak bisa disentuh.","jawaban":"Janji","clue":"_ _ _ _ _ "},{"soal":"Yang palsu laku. Yang asli malah tidak laku.","jawaban":"Gigi","clue":"_ _ _ _ "},{"soal":"Aku musuhnya air. Kadang aku untuk memasak. Aku berwujud cair. Aku sangat licin.","jawaban":"Minyak","clue":"_ _ _ _ _ _ "},{"soal":"Tugas utamaku adalah mengoyak makanan. Aku memiliki bentuk yang runcing. Aku berada di mulut.","jawaban":"Taring","clue":"_ _ _ _ _ _ "},{"soal":"Aku lemah, tapi bisa menghancurkan. Aku tajam walau tak bertulang.","jawaban":"Lidah","clue":"_ _ _ _ _ "},{"soal":"Aku adalah sebuah tempat. Aku sangat dingin. Aku ada yang Utara dan Selatan.","jawaban":"Kutub","clue":"_ _ _ _ _ "},{"soal":"Aku biasanya dipakai untuk menulis dan aku bisa mengeluarkan tinta.","jawaban":"Pena","clue":"_ _ _ _ "},{"soal":"Aku terlepas, namun aku sebenarnya terikat. Aku ditarik dan diulur.","jawaban":"Layangan","clue":"_ _ _ _ _ _ _ _ "},{"soal":"Awalnya merepotkanmu, namun pada akhirnya kamu dan orang tuamu akan bahagia. Aku punya lembaran-lembaran.","jawaban":"Skripsi","clue":"_ _ _ _ _ _ _ "},{"soal":"Aku adalah sebuah kota. Aku bagian dari Negara Kesatuan Republik Indonesia, letakku paling Utara Indonesia.","jawaban":"Sabang","clue":"_ _ _ _ _ _ "},{"soal":"Aku berasal dari Bahasa Sansekerta. Aku memiliki lima dasar.","jawaban":"Pancasila","clue":"_ _ _ _ _ _ _ _ _ "},{"soal":"Aku bisa membersihkan wajah. Warnaku putih. Aku terbuat dari kertas yang lembut. Aku mudah menyerap.","jawaban":"Tisu","clue":"_ _ _ _ "},{"soal":"Aku memiliki tempat hitam dan putih. Aku memiliki raja dan aku juga memiliki lawan yang saling menyerang.","jawaban":"Catur","clue":"_ _ _ _ _ "},{"soal":"Aku punya mulut tapi orang memberi makan bukan dari mulutku. Ketika aku kenyang akhirnya aku dipecahkan.","jawaban":"Celengan","clue":"_ _ _ _ _ _ _ _ "},{"soal":"Aku memiliki bentuk tabung. Aku dapat menampung minyak dengan jumlah yang cukup banyak.","jawaban":"Drum","clue":"_ _ _ _ "},{"soal":"Aku adalah nama lain dari Pulau Kalimantan.","jawaban":"Borneo","clue":"_ _ _ _ _ _ "},{"soal":"Aku adalah sebuah nama gunung. Aku terdapat di Jawa Timur.","jawaban":"Bromo","clue":"_ _ _ _ _ "},{"soal":"Aku terbuat dari kayu. Setiap rumah pasti punya aku. Aku bisa dibuka dan ditutup.","jawaban":"Pintu","clue":"_ _ _ _ _ "},{"soal":"Aku berwujud cair, biasanya warnaku hitam. Aku jadi satu dengan printer.","jawaban":"Tinta","clue":"_ _ _ _ _ "},{"soal":"Aku hidup di dalam tanah. Namun batangku hidup di luar dan daunku suka di lalapan.","jawaban":"Singkong","clue":"_ _ _ _ _ _ _ _ "},{"soal":"Aku hanya bisa dilihat ketika mata ditutup.","jawaban":"Mimpi","clue":"_ _ _ _ _ "},{"soal":"Aku memiliki ukuran besar. Pada beberapa film, aku juga sesosok yang menyeramkan.","jawaban":"Raksasa","clue":"_ _ _ _ _ _ _ "},{"soal":"Aku tak bisa melangkah jauh, tapi aku bisa penentu menang atau kalah.","jawaban":"Rajacatur","clue":"_ _ _ _ _ _ _ _ _ "},{"soal":"Aku sejenis bom. Aku sangat ditakuti oleh orang-orang. Hiroshima dan Nagaski hancur karena aku.","jawaban":"Atom","clue":"_ _ _ _ "},{"soal":"Aku adalah sebuah nama gunung. Aku terdapat di Jawa Timur.","jawaban":"Bromo","clue":"_ _ _ _ _ "},{"soal":"Ku berkejar-kejaran, tapi tidak dalam suatu permainan. Aku bergulung-gulung, tapi bukan kue gulung.","jawaban":"Ombak","clue":"_ _ _ _ _ "},{"soal":"Aku pandang kamu, kamu pandang aku. Tangan kanan aku naik, tangan kirimu juga naik.","jawaban":"Cermin","clue":"_ _ _ _ _ _ "},{"soal":"Aku biasa berkeliling dunia. Aku sering duduk di pojok.","jawaban":"Prangko","clue":"_ _ _ _ _ _ _ "},{"soal":"Aku sejenis musik. Aku berasal dari Indonesia. Aku sangat meriah.","jawaban":"Dangdut","clue":"_ _ _ _ _ _ _ "},{"soal":"Aku salah satu bagian dari anggota tubuh. Tempatku di bagian wajah.","jawaban":"Hidung","clue":"_ _ _ _ _ _ "},{"soal":"Aku berwarna putih. Aku bisa bergerak. Bentukku beraneka ragam.","jawaban":"Awan","clue":"_ _ _ _ "},{"soal":"Aku adalah komputer bertenaga surya mini.","jawaban":"Kalkulator","clue":"_ _ _ _ _ _ _ _ _ _ "},{"soal":"Kau pegang kepalaku. Kemudian kau hantamkan aku ke kertas hingga membuat bekas.","jawaban":"Cap","clue":"_ _ _ "},{"soal":"Bentukku bisa padat atau cair. Jika digosok aku akan berbuih. Aku ada di kamar mandi.","jawaban":"Sabun","clue":"_ _ _ _ _ "},{"soal":"Jika aku kotor tidak dapat dicuci. Jika robek tak dapat dijahit.","jawaban":"Kertas","clue":"_ _ _ _ _ _ "},{"soal":"Aku Bapak Proklamator Republik Indonesia.","jawaban":"Soekarno","clue":"_ _ _ _ _ _ _ _ "},{"soal":"Aku pandang kamu, kamu pandang aku. Tangan kanan aku naik, tangan kirimu juga naik.","jawaban":"Cermin","clue":"_ _ _ _ _ _ "},{"soal":"Aku selalu berpasangan. Aku kiri dan kanan. Aku dipake ke sekolah. Kadang aku tak bertali.","jawaban":"Sepatu","clue":"_ _ _ _ _ _ "},{"soal":"Aku adalah sebuah kapal. Aku sangat mewah. Aku telah tenggelam pada tahun 1992 (seharusnya 1892).","jawaban":"Titanic","clue":"_ _ _ _ _ _ _ "},{"soal":"Bentukku bulat kecil. Biasanya aku terbuat dari emas. Aku diletakkan di jari.","jawaban":"Cincin","clue":"_ _ _ _ _ _ "},{"soal":"Aku kecil dan berbiji. Aku juga pedas saat dimakan.","jawaban":"Cabe","clue":"_ _ _ _ "},{"soal":"Aku berwujud cair. Aku salah satu bahan bakar. Aku tersedia di POM.","jawaban":"Pertamax","clue":"_ _ _ _ _ _ _ _ "},{"soal":"Aku adalah buah yang berambut di dalam tapi mulus di luar.","jawaban":"Kedondong","clue":"_ _ _ _ _ _ _ _ _ "},{"soal":"Aku sebuah profesi. Aku biasanya di rumah sakit. Aku memeriksa orang sakit.","jawaban":"Dokter","clue":"_ _ _ _ _ _ "},{"soal":"Semakin pendek saya, semakin besar saya.","jawaban":"Suhu","clue":"_ _ _ _ "},{"soal":"Aku tidak bisa berjalan ke arah kanan dan kiri. Aku hanya bisa berjalan ke atas dan ke bawah.","jawaban":"Lift","clue":"_ _ _ _ "},{"soal":"Namaku ada ko nya, tapi aku bukan Cina. Aku juga bukan manusia, aku termasuk tempat.","jawaban":"Posko","clue":"_ _ _ _ _ "},{"soal":"Warnaku bermacam-macam, bentukku bermacam-macam pula. Semua orang menyukai aku. Aku identik dengan seorang wanita.","jawaban":"Bunga","clue":"_ _ _ _ _ "},{"soal":"Aku burung yang tidak bisa terbang dan tidak kedinginan walaupun suhu dibawah 0.","jawaban":"Penguin","clue":"_ _ _ _ _ _ _ "},{"soal":"Aku tumpukan tanah yang lebih tinggi dari pada tempat di sekitarku, tetapi aku lebih rendah dari gunung.","jawaban":"Bukit","clue":"_ _ _ _ _ "},{"soal":"Aku buah, aku tak pernah matang seumur hidupku.","jawaban":"Kelapa","clue":"_ _ _ _ _ _ "},{"soal":"Aku menggunakan seragam coklat. Aku bertugas mengayomi masyarakat.","jawaban":"Polisi","clue":"_ _ _ _ _ _ "},{"soal":"Aku adalah hewan. Aku bisa terbang. Aku sangat indah. Aku penghisap bunga.","jawaban":"Kupu","clue":"_ _ _ _ "},{"soal":"Aku berwujud kain. Aku selalu dipakai manusia. Aku terdapat 3 lubang.","jawaban":"Celana","clue":"_ _ _ _ _ _ "}]
    rndm = anu[Math.floor(Math.random() * anu.length)];
    resolve(rndm)
    })
  }

module.exports = { _tebaktebakan, _susunkata, _asahotak, _kimia, _bendera, _lagukebangsaan, _ibukota, _siapaaku }