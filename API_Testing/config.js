'use strict';

const BASE_URL = process.env.BASE_URL || 'https://api.github.com';
const BASE_TOKEN =process.env.BASE_TOKEN || 'Basic ZG9sdWFuaWxAZ21haWwuY29tOkFuaWxAMTIxOA==';

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