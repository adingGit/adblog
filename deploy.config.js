module.exports = {
  app: [{
    name: 'adblog',
    script: 'app.js',
    node_args: "--harmony",
    env: {
      COMMON_VARIABLE: 'true'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
}