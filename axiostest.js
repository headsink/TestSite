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
const getJson = async () => {
    try{
      const response = await axios.get("https://headsink.github.io/jsonfile/response_1657182877432.json");
      console.log("succes");

    }catch(error){
        console.error(error);
    }
}

getJson();