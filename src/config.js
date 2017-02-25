const merge = require('lodash/merge')

const browser = typeof window !== 'undefined'
const ip = process.env.IP || '0.0.0.0'
const port = process.env.PORT || 3000
const basename = `/${process.env.PUBLIC_PATH || ''}`.replace('//', '/')

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    baseUrl: `http://${ip}:${port}${basename}`,
    apiUrl: `http://${ip}:${port}/api`,
    fbAppId: '991453140998882',
    googleClientId: '464712936089-q953apdu1bjiqtcjndktnnk1ts4f2cgv.apps.googleusercontent.com',
    mongo: {
      options: {
        db: {
          safe: true
        }
      }
    },
    basename,
    browser,
    ip,
    port
  },
  test: {
    mongo: {
      uri: `mongodb://${ip}/arc-test`,
      options: {
        debug: false
      }
    }
  },
  development: {
    mongo: {
      uri: `mongodb://${ip}/arc-dev`,
      options: {
        debug: true
      }
    }
  },
  production: {
    ip: process.env.IP || '0.0.0.0',
    port: process.env.PORT || 8080,
    baseUrl: 'https://arc.diegohaz.com',
    apiUrl: 'https://arc.diegohaz.com/api',
    mongo: {
      uri: process.env.MONGODB_URI || 'mongodb://localhost/arc'
    }
  }
}

module.exports = merge(config.all, config[config.all.env])
