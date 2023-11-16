const express = require('express');
const axios = require('axios');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
      }

    console.log(url);
    const shortenedURL = await axios.post('https://cleanuri.com/api/v1/shorten', { url });
    res.json({shortenedURL: shortenedURL.data.result_url})
  } catch (error) { 
    console.error(error);
    res.status(500).json({ error: 'An error occurred while shortening the URL' });
  }
});

module.exports = router;