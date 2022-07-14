const axios = require('axios');

/*
Testing axios async/await to get values from remote file

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
  datas=value; // value into global variable because theJSON wasn't the same as returned
  console.log(value);});
setTimeout(()=>{console.log(JSON.stringify(datas));},500); //if you set time faster, it will be undefined