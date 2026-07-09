module.exports = {
  apps: [
    {
      name: "luxora",
      script: "server.js",
      env: {
        PORT: 3000,
        NODE_ENV: "production",
      },
    },
  ],
};
