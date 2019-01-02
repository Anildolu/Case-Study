'use strict';

const BASE_URL =  'https://api.github.com';
const BASE_TOKEN = '';

class Config {
  
  /**
   * Get the base url of tech stack
   */
  static get restBaseUrl() {
    return `${BASE_URL}`;
  }

  static get basicAuth(){
    return `${BASE_TOKEN}`;
  }
}

module.exports = Config;