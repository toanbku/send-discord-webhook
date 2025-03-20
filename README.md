# Send Discord Webhook

Lightweight support for sending Discord webhooks without remembering syntax

## Installation

Using npm:

```bash
npm install send-discord-webhook
```

Using yarn

```bash
yarn add send-discord-webhook
```

## Usage

```js
import { sendDiscordWebhook } from "send-discord-webhook";

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
```

### Advanced Usage

```js
await sendDiscordWebhook({
  url: process.env.DISCORD_WEBHOOK_URL,
  username: "Custom Bot Name",
  avatar_url: "https://example.com/avatar.png",
  content: "This is a message with a mention: @everyone",
  allowedMentions: {
    parse: ["users"], // Only parse user mentions
  },
  embeds: [
    {
      title: "Advanced Embed",
      description: "This is an advanced embed with more features",
      url: "https://example.com",
      color: 0x00ff00, // Green
      author: {
        name: "Author Name",
        url: "https://author.com",
        icon_url: "https://author.com/icon.png",
      },
      thumbnail: { url: "https://example.com/thumbnail.png" },
      image: { url: "https://example.com/image.png" },
      fields: [
        { name: "Field 1", value: "Value 1", inline: true },
        { name: "Field 2", value: "Value 2", inline: true },
      ],
      footer: {
        text: "Footer text",
        icon_url: "https://example.com/footer-icon.png",
      },
      timestamp: new Date().toISOString(),
    },
  ],
  thread_id: "123456789012345678", // Optional: Send to a specific thread
});
```

Result:

![result](https://i.imgur.com/ormLcyT.png)

## API

### `sendDiscordWebhook(options: DiscordWebhookOptions): Promise<boolean>`

Sends a Discord webhook with the provided options.

#### Parameters

- `options` (DiscordWebhookOptions): An object containing the following properties:
  - `url` (string, required): The URL of the Discord webhook.
  - `username` (string, optional): Custom username for the webhook.
  - `avatar_url` (string, optional): Custom avatar URL for the webhook.
  - `content` (string, optional): Plain text content of the message.
  - `thread_id` (string, optional): ID of the thread to send the message to.
  - `allowedMentions` (object, optional): Controls which mentions ping their targets.
    - `parse` (array, optional): Array of allowed mention types ("roles", "users", "everyone").
    - `users` (array, optional): Array of user IDs to allow mentioning.
    - `roles` (array, optional): Array of role IDs to allow mentioning.
  - `embeds` (array, optional): Array of rich embed objects.
  - **Simple mode (backward compatible):**
    - `title` (string, optional): The title of the webhook message.
    - `description` (string, optional): The description of the webhook message.
    - `fields` (array, optional): An array of fields to include in the message.
    - `color` (number, optional): The color of the webhook message. Defaults to red (0xff0000).

#### Returns

A Promise that resolves to a boolean indicating whether the webhook was sent successfully.

#### Throws

Throws an error if the webhook URL is not provided.

## Types

### `DiscordWebhookField`

Represents a field in the Discord webhook message.

- `name` (string): The name of the field.
- `value` (string): The value of the field.
- `inline` (boolean, optional): Whether the field should be displayed inline.

### `DiscordEmbedAuthor`

Represents author information in an embed.

- `name` (string): Name of the author.
- `url` (string, optional): URL for the author's name to link to.
- `icon_url` (string, optional): URL of the author's icon.

### `DiscordEmbedFooter`

Represents footer information in an embed.

- `text` (string): Footer text.
- `icon_url` (string, optional): URL of the footer icon.

### `DiscordEmbed`

Represents a rich embed in the Discord webhook message.

- `title` (string): The title of the embed.
- `description` (string): The description of the embed.
- `url` (string, optional): URL for the title to link to.
- `color` (number, optional): The color of the embed.
- `fields` (DiscordWebhookField[], optional): Array of fields in the embed.
- `author` (DiscordEmbedAuthor, optional): Author information.
- `thumbnail` (object, optional): Small image in the top right.
  - `url` (string): URL of the thumbnail image.
- `image` (object, optional): Large image below the description.
  - `url` (string): URL of the image.
- `footer` (DiscordEmbedFooter, optional): Footer information.
- `timestamp` (string, optional): ISO8601 timestamp for the embed.

### `DiscordWebhookOptions`

Includes all the parameters described in the API section.
