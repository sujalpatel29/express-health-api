const os = require("os");

exports.getHealthStatus = (req, res) => {
  const healthData = {
    status: "OK",
    timestamp: new Date(),
    uptime: process.uptime().toFixed(2) + " seconds",
    memoryUsage: process.memoryUsage().rss / 1024 / 1024 + " MB",
    cpuLoad: os.loadavg(),
    environment: process.env.NODE_ENV,
    appName: process.env.APP_NAME,
    version: process.env.APP_VERSION
  };

  res.status(200).json(healthData);
};