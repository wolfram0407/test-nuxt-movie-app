const experss = require('express')
const axios = require('axios');



const app = experss()
const { OMDB_API_KEY } = process.env;
app.use(experss.json())
// app.all() 보다 post get 등으로 따로 등록이 안전
app.post('/', async (req,res) =>{
  const payload = req.body;
  const { title, type, year, page, id } = payload;

  console.log('OMDB_API_KEY: ', OMDB_API_KEY);
  console.log('params: ', payload);

  const url = id
    ? `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}&plot=full`
    : `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`;

  try {
    const { data } = await axios.get(url);
    if (data.Error) {
      res.status(400).json(date.Error)
    }
    res.status(200).json(data)
  } catch (error) {
    res.status(error.response.status).json(error.message)
  }
})

module.exports = app