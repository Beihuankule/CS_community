module.exports = {
    configureWebpack: {},
    devServer: { // 环境配置
        host: '0.0.0.0',
        public: 'dev.water-mind.com',
        port: '8080',
        https: false,
        disableHostCheck: true,
        open: false
    }
}