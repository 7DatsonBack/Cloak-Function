self.__uv$config = {
    prefix: '/service/',
    bare: '/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/src/handler.js',
    bundle: '/src/bundle.js',
    config: '/src/config.js',
    sw: '/src/sw.js',
};
