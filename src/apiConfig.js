const apiConfig = {
    SERVER_PREFIX: process.env.SERVER_PREFIX || 'api',
    SERVER_PORT: process.env.SERVER_PORT || 800,
    SERVER_HOST: process.env.SERVER_HOST || 'localhost',
    SERVER_PROTOCOL: process.env.SERVER_PROTOCOL || 'http'
};

export default {
    api: apiConfig.SERVER_PROTOCOL + '://' + apiConfig.SERVER_HOST + ':' + apiConfig.SERVER_PORT + '/' + apiConfig.SERVER_PREFIX
};
