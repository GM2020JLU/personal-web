const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.static('hecaitouweb')); // 服务静态文件路径

// 根路由返回 index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/hecaitouweb/index.html');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
