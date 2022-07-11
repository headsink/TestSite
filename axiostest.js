const axios = require('axios');

/*
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
*/

let datas;
async function getJson() {
  
    try{
      const response = await axios.get("https://headsink.github.io/jsonfile/response_1657182877432.json")
      .then((res)=>{return res.data;
      });
      console.log(response);
      return response;

    }catch(error){
        console.error(error);
    }
}
const theJSON = getJson().then((value)=>{
  datas=value;
  console.log(value);});
setTimeout(()=>{console.log(JSON.stringify(datas));},500);
//console.log(JSON.stringify(theJSON.total));