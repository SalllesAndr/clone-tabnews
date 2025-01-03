const request = require('supertest');
const app = require('../../../../../pages/api/v1/status');

describe('GET /api/v1/status', () => {
  test('should return 200', async () => {
    const response = await request(app).get('/api/v1/status');
    expect(response.status).toBe(200);
  });
});
