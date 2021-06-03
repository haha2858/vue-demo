module.exports = {
    //eslint提示
    lintOnSave: false,
    //开发服务器相关配置
    devServer: {
        port: 8888,
        open: true
    },
    css: {//css预设器配置
        loaderOptions: {
            sass: {
                prependData: `@import"./src/styles/main.scss";`
            }
        }
    }
}