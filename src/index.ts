import axios from "axios";

type DiscordWebhookField = {
  name: string;
  value: string;
  inline?: boolean;
};

type DiscordEmbedAuthor = {
  name: string;
  url?: string;
  icon_url?: string;
};

type DiscordEmbedFooter = {
  text: string;
  icon_url?: string;
};

type DiscordEmbed = {
  title: string;
  description: string;
  url?: string;
  color?: number;
  fields?: DiscordWebhookField[];
  author?: DiscordEmbedAuthor;
  thumbnail?: { url: string };
  image?: { url: string };
  footer?: DiscordEmbedFooter;
  timestamp?: string;
};

type AllowedMentionTypes = "roles" | "users" | "everyone";

type DiscordWebhookOptions = {
  url: string;
  username?: string;
  avatar_url?: string;
  content?: string;
  embeds?: DiscordEmbed[];
  thread_id?: string;
  allowedMentions?: {
    parse?: AllowedMentionTypes[];
    users?: string[];
    roles?: string[];
  };
  // Using a simpler version for backward compatibility
  title?: string;
  description?: string;
  fields?: DiscordWebhookField[];
  color?: number;
};

export const sendDiscordWebhook = async (
  options: DiscordWebhookOptions
): Promise<boolean> => {
  if (!options.url) {
    throw new Error("Webhook URL is required");
  }

  const payload: any = {};

  // Set optional webhook properties
  if (options.username) {
    payload.username = options.username;
  }
  if (options.avatar_url) {
    payload.avatar_url = options.avatar_url;
  }
  if (options.content) {
    payload.content = options.content;
  }
  if (options.thread_id) {
    payload.thread_id = options.thread_id;
  }
  if (options.allowedMentions) {
    payload.allowed_mentions = options.allowedMentions;
  }

  // Handle embeds - support both legacy and new format
  if (options.embeds) {
    payload.embeds = options.embeds;
  } else if (options.title || options.description || options.fields) {
    payload.embeds = [
      {
        title: options.title,
        description: options.description,
        fields: options.fields || [],
        color: options.color ?? 0xff_00_00, // Default to red if no color provided
        timestamp: new Date().toISOString(),
      },
    ];
  }

  try {
    await axios.post(options.url, payload);
    return true;
  } catch (error) {
    console.error("Failed to send Discord webhook:", error);
    return false;
  }
};
