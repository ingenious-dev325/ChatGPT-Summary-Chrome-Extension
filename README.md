# Glarity - Summary for Google/YouTube with ChatGPT

Chrome extension to view ChatGPT summaries alongside Google search results and YouTube videos, also supports github or any page summary.

## ⚠️ Tips:

If you cannot choose the OpenAI API model, please delete the plugin and reinstall it.


## Supported Websites

- Google
- YouTube
- Github
- Any website

## Features

- Supports Google search
- Supports YouTube
- Supports Github
- Supports Bing
- Support summary of any web page
- Supports the official OpenAI API (GPT-3.5-turbo/text-davinci-003)
- Supports ChatGPT Plus
- Markdown rendering
- Code highlights
- Dark mode
- Provide feedback to improve ChatGPT
- Copy to clipboard
- Switch languages

## Screenshot

### Google

![Screenshot](screenshots/google-vs-chatgpt.png?raw=true)
![Screenshot](screenshots/extension-google.png?raw=true)

### YouTube

![Screenshot](screenshots/extension-youtube.jpeg?raw=true)

### Github

![Github](screenshots/github-en.png?raw=true)

## Build from source

1. Clone the repo
2. Install dependencies with `npm`
3. `npm run build`

### Packages

- [Chromium](packages/Glarity-chromium.zip)
- [Firefox](packages/Glarity-firefox.zip)

### Chrome

1. Go to `chrome://extensions/`.
2. At the top right, turn on `Developer mode`.
3. Click `Load unpacked`.
4. Find and select extension folder(`build/chromium/`).
