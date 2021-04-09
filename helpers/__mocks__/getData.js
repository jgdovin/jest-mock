const getWikiData = topic => {
  const then = () => {
    return { status: 200, searchTopic: topic, from: 'mock function' };
  }
  return { then };
};

module.exports = { getWikiData };