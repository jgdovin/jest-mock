const fetch = require('node-fetch');

const getWikiData = async topic => {
  return await fetch(`https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&rvsection=0&titles=${topic}&format=json`)
  .then(async res => res.json());
};

module.exports = { getWikiData };