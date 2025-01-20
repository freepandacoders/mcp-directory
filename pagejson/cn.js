export default {
  "metadata": {
    "title": "MCP Center - 模型上下文协议数据分享平台",
    "description": "MCP Center 是一个专注于 Model Context Protocol 的数据聚合平台，为AI模型开发者、研究者和产品经理提供全面的MCP资源。通过智能爬虫技术，我们持续收集、整理和分类最新的MCP相关数据，助力AI模型的创新与优化。",
    "keywords": "MCP 服务器, 优秀 MCP 服务器, Claude MCP, 模型上下文协议, MCP, Model Context Protocol, AI模型开发, 机器学习, 人工智能, 模型训练, AI研究, 数据分析"
  },
  "header": {
    "brand": {
      "title": "MCP Center",
      "url": "/",
      "avatar": {
        "src": "/logo.png"
      }
    },
    "nav": {
      "items": [
        {
          "title": "分类",
          "url": "/categories",
          "target": "_self"
        },
        {
          "title": "提交",
          "url": "https://github.com/wenjingyuer/mcp-directory/issues/1",
          "target": "_blank"
        },
        // {
        //   "title": "电报群",
        //   "url": "https://t.me/+N0gv4O9SXio2YWU1",
        //   "target": "_blank"
        // },
        // {
        //   "title": "Discord",
        //   "url": "https://discord.gg/RsYPRrnyqg",
        //   "target": "_blank"
        // }
      ]
    }
  },
  "hero": {
    "title": "发现优秀的 MCP 服务器",
    "description": "MCP 服务器库"
  },
  "faq": {
    "title": "常见问题",
    "description": "关于 MCP 服务器的常见问题",
    "items": [
      {
        "title": "什么是 MCP（模型上下文协议）？",
        "description": "MCP 是由 Anthropic 开发的开源协议，使 Claude 等 AI 系统能够安全地连接各种数据源。它为 AI 助手通过客户端-服务器架构访问外部数据、工具和提示提供了通用标准。"
      },
      {
        "title": "什么是 MCP 服务器？",
        "description": "MCP 服务器是为 AI 客户端提供上下文、工具和提示的系统。它们可以公开文件、文档、数据库和 API 集成等数据源，使 AI 助手能够以安全的方式访问实时信息。"
      },
      {
        "title": "MCP 服务器是如何工作的？",
        "description": "MCP 服务器通过简单的客户端-服务器架构工作。它们通过标准化协议公开数据和工具，在像 Claude Desktop 这样的主机应用程序内维护与客户端的安全 1:1 连接。"
      },
      {
        "title": "MCP 服务器能提供什么？",
        "description": "MCP 服务器可以共享资源（文件、文档、数据），提供工具（API 集成、操作），以及提供提示（模板化交互）。它们控制自己的资源并维护清晰的系统边界以确保安全。"
      },
      {
        "title": "Claude 如何使用 MCP？",
        "description": "Claude 可以连接到 MCP 服务器以访问外部数据源和工具，通过实时信息增强其功能。目前，这适用于本地 MCP 服务器，企业远程服务器支持即将推出。"
      },
      {
        "title": "MCP 服务器安全吗？",
        "description": "是的，安全性已内置于 MCP 协议中。服务器控制自己的资源，无需与 LLM 提供商共享 API 密钥，系统保持明确的边界。每个服务器管理自己的身份验证和访问控制。"
      },
      {
        "title": "什么是 mcp.center？",
        "description": "mcp.center？ 是一个社区驱动的平台，收集和组织第三方 MCP 服务器。它作为一个中央目录，用户可以在这里发现、分享和了解各种可用于 AI 应用程序的 MCP 服务器。"
      },
      {
        "title": "如何将我的 MCP 服务器提交到 mcp.center？",
        "description": "您可以通过在我们的 GitHub 仓库中创建新问题来提交您的 MCP 服务器。点击导航栏中的提交按钮或直接访问我们的 GitHub issues 页面。请提供有关您的服务器的详细信息，包括其名称、描述、功能和连接信息。",
      }
    ]
  },
  "footer": {
    "brand": {
      "title": "MCP 服务器",
      "description": "最大的 MCP 服务器集合，包括优秀的 MCP 服务器和 Claude MCP 集成。",
      "domain": "https://mcp.center"
    },
    "copyright": {
      "owner": "mcp.center",
      "text": "保留所有权利",
      "url": "https://mcp.center",
      "target": "_blank"
    },
    "nav": {
      "items": [
        {
          "title": "关于",
          "children": [
            {
              "title": "隐私政策",
              "url": "/privacy-policy",
              "target": "_blank"
            },
            {
              "title": "服务条款",
              "url": "/terms-of-service",
              "target": "_blank"
            }
          ]
        },
        {
          "title": "资源",
          "children": [
            {
              "title": "模型上下文协议",
              "url": "https://www.anthropic.com/news/model-context-protocol",
              "target": "_blank"
            },
            {
              "title": "MCP 入门指南",
              "url": "https://modelcontextprotocol.io/introduction",
              "target": "_blank"
            },
            {
              "title": "Claude MCP 服务器",
              "url": "https://github.com/modelcontextprotocol/servers",
              "target": "_blank"
            }
          ]
        },
        {
          "title": "社区",
          "children": [
            // {
            //   "title": "电报群",
            //   "url": "https://t.me/+N0gv4O9SXio2YWU1",
            //   "target": "_blank"
            // },
            // {
            //   "title": "Discord",
            //   "url": "https://discord.gg/RsYPRrnyqg",
            //   "target": "_blank"
            // },
            {
              "title": "GitHub",
              "url": "https://github.com/mcpservers/awesome-mcp-servers/issues/1",
              "target": "_blank"
            }
          ]
        },
        // {
        //   "title": "友情链接",
        //   "children": [
        //     {
        //       "title": "ThinkAny",
        //       "url": "https://thinkany.ai",
        //       "target": "_blank"
        //     },
        //     {
        //       "title": "HeyBeauty",
        //       "url": "https://heybeauty.ai",
        //       "target": "_blank"
        //     },
        //     {
        //       "title": "PodLM",
        //       "url": "https://podlm.ai",
        //       "target": "_blank"
        //     }
        //   ]
        // }
      ]
    },
    "social": {
      "items": {
        "email": {
          "title": "support@mcp.center",
          "url": "mailto:support@mcp.center"
        }
      }
    }
  }
}