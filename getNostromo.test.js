jest.mock('./helpers/getData');
const { getNostromo } = require('./getNostromo');

describe('its a test', () => {
  it('does things', () => {
    const res = getNostromo();
    expect(res).toEqual({ status: 200, searchTopic: 'Nostromo', from: 'mock function' }); 
  });
});
