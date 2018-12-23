'use strict';

const BASE_URL = process.env.BASE_URL || 'https://jsonplaceholder.typicode.com';

class Config {
  /**
   * Get the session url
   */
  static get sessionUrl() {
    return process.env.SESSION_URL || 'http://localhost:8080';
  }

  /**
   * Get the base url of tech stack
   */
  static get restBaseUrl() {
    return `${BASE_URL}`;
  }
}

module.exports = Config;