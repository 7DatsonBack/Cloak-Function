self.__uv$config = {
    prefix: '/service/',
    bare: '/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/src/uv.handler.js',
    bundle: '/src/uv.bundle.js',
    config: '/src/uv.config.js',
    sw: '/src/uv.sw.js',
};
