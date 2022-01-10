import axios from 'axios';

const MockAdapter = require('axios-mock-adapter');

// This sets the mock adapter on the default instance
const mockAdapter = new MockAdapter(axios);

export default mockAdapter;