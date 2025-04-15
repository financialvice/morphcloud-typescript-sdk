// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Morphcloud from 'sw-morphcloud';

const client = new Morphcloud({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource user', () => {
  // skipped: tests are disabled for the time being
  test.skip('getUsage', async () => {
    const responsePromise = client.user.getUsage();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getUsage: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.user.getUsage({ interval: 'interval' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Morphcloud.NotFoundError);
  });
});
