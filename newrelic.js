'use strict'

/**
 * New Relic agent configuration.
 *
 * See lib/config.defaults.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */
exports.config = {
  /**
   * Array of application names.
   */
  app_name: ['La Bella Scarpa Website'],
  /**
   * Your New Relic license key.
   */
  license_key: 'b4c9dfcbd1dd2b746a6a2c97b0b12f722011575d',
  /**
   * Your New Relic Agent Beta token.
   */
  beta_token: 'b4c9dfcbd1dd2b746a6a2c97b0b12f722011575d',
  logging: {
    /**
     * Level at which to log. 'trace' is most useful to New Relic when diagnosing
     * issues with the agent, 'info' and higher will impose the least overhead on
     * production applications.
     */
    level: 'info'
  }
}
