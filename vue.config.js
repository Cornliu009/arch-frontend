module.exports = {
    runtimeCompiler: true,
    devServer: {
        port: 8080,
        disableHostCheck: true,
        public: process.env.VUE_APP_APP_HOST,
        overlay: false,
    },
    lintOnSave: process.env.NODE_ENV !== 'production',
};
