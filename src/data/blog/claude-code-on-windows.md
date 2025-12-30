---
title: Windows下配置Claude
description: Windows下配置Claude
pubDate: 2025-12-30 09:28
ai: Windows下配置Claude
tags:
  - Claude
---
看到好多人在教程中说 Claude 在 Windows 中需要安装 WSL，在WSL 中使用 Claude，实测在Windows下可直接使用，在终端中安装配置下模型即可。

```bash
npm install -g @anthropic-ai/claude-code


$env:ANTHROPIC_BASE_URL="https://wanqing.streamlakeapi.com/api/gateway/v1/endpoints/kat-coder-pro-v1/claude-code-proxy"
$env:ANTHROPIC_AUTH_TOKEN="apikey"
$env:ANTHROPIC_MODEL="KAT-Coder" 
$env:ANTHROPIC_SMALL_FAST_MODEL="KAT-Coder" 

```

或者是在 `~/.claude/settings.json`
```json
{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "your_longcat_api_key",
    "ANTHROPIC_BASE_URL": "https://api.longcat.chat/anthropic",
    "ANTHROPIC_MODEL": "LongCat-Flash-Chat",
    "ANTHROPIC_SMALL_FAST_MODEL": "LongCat-Flash-Chat",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "LongCat-Flash-Chat",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "LongCat-Flash-Chat",
    "CLAUDE_CODE_MAX_OUTPUT_TOKENS": "6000",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": 1
  },
  "permissions": {
    "allow": [],
    "deny": []
  }
}

```
