const express = require('express');
const axios = require('axios');

const router = express.Router();

const apiUrl = 'https://api.tinyurl.com/create';

router.post('/', async (req, res) => {
  try {
    const { url } = req.body;
    const clientApiKey = req.headers.authorization.split(' ')[1];

    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    console.log(url);
    //const response = await axios.post('https://cleanuri.com/api/v1/shorten', { url });
    const response = await axios.post(apiUrl, { url }, {
      headers: {
        'Authorization': 'Bearer ' + clientApiKey,
      }
    });
    const shortenedURL = response.data.data.tiny_url;
    //res.json({shortenedURL: shortenedURL.data.result_url})
    console.log('got ' + shortenedURL);
    res.json({shortenedURL})
  } catch (error) { 
    console.error(error);
    res.status(500).json({ error: 'An error occurred while shortening the URL' });
  }
});

module.exports = router;