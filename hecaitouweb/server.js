const express = require('express');
// 删除 OpenAI 相关的导入
// const OpenAI = require('openai');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.static('.')); // 服务静态文件

// 删除 OpenAI 初始化
// const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY
// });

// 删除 AI 聊天相关的路由
// app.post('/api/chat', async (req, res) => { ... });
// app.get('/api/test', async (req, res) => { ... });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));