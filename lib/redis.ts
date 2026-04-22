import { createClient } from "redis";

declare global {
  // eslint-disable-next-line no-var
  var _redisClient: ReturnType<typeof createClient> | undefined;
}

function makeClient() {
  const client = createClient({ url: process.env.REDIS_URL });
  client.on("error", (err) => console.error("Redis error:", err));
  return client;
}

export async function getRedisClient() {
  if (!global._redisClient) {
    global._redisClient = makeClient();
  }
  if (!global._redisClient.isOpen) {
    await global._redisClient.connect();
  }
  return global._redisClient;
}
