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

Result:

![result](https://i.imgur.com/ormLcyT.png)

## API

### `sendDiscordWebhook(options: DiscordWebhookOptions): Promise<boolean>`

Sends a Discord webhook with the provided options.

#### Parameters

- `options` (DiscordWebhookOptions): An object containing the following properties:
  - `url` (string, required): The URL of the Discord webhook.
  - `title` (string, required): The title of the webhook message.
  - `description` (string, required): The description of the webhook message.
  - `fields` (DiscordWebhookField[], required): An array of fields to include in the webhook message. Each field is an object with `name` and `value` properties.
  - `color` (number, optional): The color of the webhook message. Defaults to red (0xff0000) if not provided.

#### Returns

A Promise that resolves to a boolean indicating whether the webhook was sent successfully.

#### Throws

Throws an error if the webhook URL is not provided.

## Types

### `DiscordWebhookField`

Represents a field in the Discord webhook message.

- `name` (string): The name of the field.
- `value` (string): The value of the field.

### `DiscordWebhookOptions`

Represents the options for sending a Discord webhook.

- `url` (string): The URL of the Discord webhook.
- `title` (string): The title of the webhook message.
- `description` (string): The description of the webhook message.
- `fields` (DiscordWebhookField[]): An array of fields to include in the webhook message.
- `color` (number, optional): The color of the webhook message.
