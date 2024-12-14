import { sendDiscordWebhook } from "../dist/src/index.js";

(async () => {
  await sendDiscordWebhook({
    url: process.env.DISCORD_WEBHOOK_URL,
    title: "🚨 Emergency Alert",
    description: `You're sending a Discord webhook without remembering any syntax`,
    fields: [
      {
        name: "Hello",
        value: "World",
      },
      {
        name: "packageName",
        value: "send-discord-webhook",
      },
    ],
  });
})();
