'use strict';

const BASE_URL = process.env.BASE_URL || 'https://api.github.com';https://api.github.com/users/Anildolu/repos
const BASE_TOKEN =process.env.BASE_TOKEN || 'Basic ==';

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