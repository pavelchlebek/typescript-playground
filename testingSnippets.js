const axios = require("axios")

const url = `https://randomuser.me/api`

const getData = async () => {
  const response = await axios.get(url)
  const data = response.data
  console.log(JSON.stringify(data))
}

getData()
