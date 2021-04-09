const { getWikiData } = require('./helpers/getData');
const getNostromo = () => {
  return getWikiData('Nostromo')
  .then(res => { return res.query.pages[610602].revisions[0]['*'] });
}

module.exports = {
  getNostromo
};