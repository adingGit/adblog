module.exports = {
  apps : [{
    name: 'adblog',
    script: 'server.js',
    cwd:"./",
    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    args: 'one two',
    instances: 1,
    autorestart: false,
    watch: true,
    max_memory_restart: '1G',
    exec_mode:"fork",
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};
