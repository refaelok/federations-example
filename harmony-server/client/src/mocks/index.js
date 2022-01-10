import {config} from '../config';
import mockAdapter from './mockAdapter';

/* ---------------- Include Mocks ----------- */
import './login';

if (!config.isMock) {
	mockAdapter.restore();
}

// Mock any GET request to /users
// arguments for reply are (status, data, headers)