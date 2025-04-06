import pino from "pino";

const logger = pino({
  level: "info",
  transport: {
    target: 'pino-pretty'
  }
});

logger.info("App started");
logger.warn("Something is not right");
logger.error("Something broke");
