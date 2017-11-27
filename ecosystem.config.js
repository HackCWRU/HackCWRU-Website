module.exports = {
  apps: [{
    name: 'app',
    script: './lib/index.js',
    exec_mode: 'cluster',
    watch: true,
    instances: 0,
    env: {
      NODE_ENV: 'development',
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 80,
    },
  }],
};
