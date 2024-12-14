import axios from "axios";

type DiscordWebhookField = {
  name: string;
  value: string;
};

type DiscordWebhookOptions = {
  url: string;
  title: string;
  description: string;
  fields: DiscordWebhookField[];
  color?: number;
};

export const sendDiscordWebhook = async (
  options: DiscordWebhookOptions
): Promise<boolean> => {
  if (!options.url) {
    throw new Error("Webhook URL is required");
  }

  try {
    await axios.post(options.url, {
      embeds: [
        {
          title: options.title,
          description: options.description,
          fields: options.fields,
          color: options.color ?? 0xff_00_00, // Default to red if no color provided
          timestamp: new Date().toISOString(),
        },
      ],
    });
    return true;
  } catch (error) {
    console.error("Failed to send Discord webhook:", error);
    return false;
  }
};
