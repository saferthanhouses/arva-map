SystemJS.config({
  babelOptions: {
    "plugins": [
      "babel-plugin-transform-decorators-legacy",
      "babel-plugin-transform-class-properties",
      [
        "babel-plugin-transform-builtin-extend",
        {
          "globals": [
            "Array"
          ],
          "approximate": true
        }
      ],
      [
        "babel-plugin-transform-es2015-spread",
        {
          "loose": true
        }
      ],
      [
        "babel-plugin-transform-es2015-for-of",
        {
          "loose": true
        }
      ]
    ]
  },
  arvaOptions: {
    "fileMappings": {
      "github:bizboard/arva-js@develop": "../arva-js",
      "github:bizboard/famous-flex@master": "../famous-flex",
      "bitbucket:bizboard/arva-kit@master": "../arva-kit"
    },
    "iconOptions": {
      "form": "rounded",
      "thickness": "bold"
    }
  },
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "app/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.21",
      "babel-plugin-transform-decorators-legacy": "npm:babel-plugin-transform-decorators-legacy@1.3.4",
      "babel-plugin-transform-async-functions": "npm:babel-plugin-transform-async-functions@6.22.0",
      "babel-plugin-transform-class-properties": "npm:babel-plugin-transform-class-properties@6.24.1"
    },
    "packages": {
      "npm:babel-plugin-transform-class-properties@6.24.1": {
        "map": {
          "babel-helper-function-name": "npm:babel-helper-function-name@6.24.1",
          "babel-plugin-syntax-class-properties": "npm:babel-plugin-syntax-class-properties@6.13.0",
          "babel-runtime": "npm:babel-runtime@6.23.0",
          "babel-template": "npm:babel-template@6.24.1"
        }
      },
      "npm:babel-plugin-transform-decorators-legacy@1.3.4": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.23.0",
          "babel-template": "npm:babel-template@6.24.1",
          "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.13.0"
        }
      },
      "npm:babel-plugin-transform-async-functions@6.22.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.23.0",
          "babel-plugin-syntax-async-functions": "npm:babel-plugin-syntax-async-functions@6.13.0"
        }
      },
      "npm:babel-helper-function-name@6.24.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.23.0",
          "babel-template": "npm:babel-template@6.24.1",
          "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.24.1",
          "babel-traverse": "npm:babel-traverse@6.24.1",
          "babel-types": "npm:babel-types@6.24.1"
        }
      },
      "npm:babel-template@6.24.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.23.0",
          "babel-traverse": "npm:babel-traverse@6.24.1",
          "babel-types": "npm:babel-types@6.24.1",
          "lodash": "npm:lodash@4.17.4",
          "babylon": "npm:babylon@6.17.1"
        }
      },
      "npm:babel-helper-get-function-arity@6.24.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.23.0",
          "babel-types": "npm:babel-types@6.24.1"
        }
      },
      "npm:babel-traverse@6.24.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.23.0",
          "babel-types": "npm:babel-types@6.24.1",
          "babel-code-frame": "npm:babel-code-frame@6.22.0",
          "babel-messages": "npm:babel-messages@6.23.0",
          "globals": "npm:globals@9.17.0",
          "invariant": "npm:invariant@2.2.2",
          "lodash": "npm:lodash@4.17.4",
          "debug": "npm:debug@2.6.6",
          "babylon": "npm:babylon@6.17.1"
        }
      },
      "npm:babel-runtime@6.23.0": {
        "map": {
          "regenerator-runtime": "npm:regenerator-runtime@0.10.5",
          "core-js": "npm:core-js@2.4.1"
        }
      },
      "npm:babel-types@6.24.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.23.0",
          "lodash": "npm:lodash@4.17.4",
          "to-fast-properties": "npm:to-fast-properties@1.0.3",
          "esutils": "npm:esutils@2.0.2"
        }
      },
      "npm:babel-messages@6.23.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.23.0"
        }
      },
      "npm:babel-code-frame@6.22.0": {
        "map": {
          "esutils": "npm:esutils@2.0.2",
          "js-tokens": "npm:js-tokens@3.0.1",
          "chalk": "npm:chalk@1.1.3"
        }
      },
      "npm:invariant@2.2.2": {
        "map": {
          "loose-envify": "npm:loose-envify@1.3.1"
        }
      },
      "npm:loose-envify@1.3.1": {
        "map": {
          "js-tokens": "npm:js-tokens@3.0.1"
        }
      },
      "npm:debug@2.6.6": {
        "map": {
          "ms": "npm:ms@0.7.3"
        }
      },
      "npm:chalk@1.1.3": {
        "map": {
          "supports-color": "npm:supports-color@2.0.0",
          "ansi-styles": "npm:ansi-styles@2.2.1",
          "strip-ansi": "npm:strip-ansi@3.0.1",
          "has-ansi": "npm:has-ansi@2.0.0",
          "escape-string-regexp": "npm:escape-string-regexp@1.0.5"
        }
      },
      "npm:strip-ansi@3.0.1": {
        "map": {
          "ansi-regex": "npm:ansi-regex@2.1.1"
        }
      },
      "npm:has-ansi@2.0.0": {
        "map": {
          "ansi-regex": "npm:ansi-regex@2.1.1"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "app": {
      "main": "app.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "assert": "npm:jspm-nodelibs-assert@0.2.1",
    "bizboard/arva-js": "github:bizboard/arva-js@develop",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.3",
    "constants": "npm:jspm-nodelibs-constants@0.2.1",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.1",
    "events": "npm:jspm-nodelibs-events@0.2.2",
    "fs": "npm:jspm-nodelibs-fs@0.2.1",
    "os": "npm:jspm-nodelibs-os@0.2.1",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "saferthanhouses/famous-map": "github:saferthanhouses/famous-map@update%2Fmapbox-gl-breaking-changes",
    "stream": "npm:jspm-nodelibs-stream@0.2.1",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.1",
    "timers": "npm:jspm-nodelibs-timers@0.2.1",
    "util": "npm:jspm-nodelibs-util@0.2.2",
    "vm": "npm:jspm-nodelibs-vm@0.2.1"
  },
  packages: {
    "npm:jspm-nodelibs-stream@0.2.1": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.2.9"
      }
    },
    "npm:readable-stream@2.2.9": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "core-util-is": "npm:core-util-is@1.0.2",
        "isarray": "npm:isarray@1.0.0",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "string_decoder": "npm:string_decoder@1.0.0",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.3": {
      "map": {
        "buffer": "npm:buffer@5.0.6"
      }
    },
    "npm:buffer@5.0.6": {
      "map": {
        "ieee754": "npm:ieee754@1.1.8",
        "base64-js": "npm:base64-js@1.2.0"
      }
    },
    "npm:string_decoder@1.0.0": {
      "map": {
        "buffer-shims": "npm:buffer-shims@1.0.0"
      }
    },
    "npm:jspm-nodelibs-os@0.2.1": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.1": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "browserify-sign": "npm:browserify-sign@4.0.4",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "create-hmac": "npm:create-hmac@1.1.6",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "create-hash": "npm:create-hash@1.1.3",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.12",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:browserify-sign@4.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "create-hmac": "npm:create-hmac@1.1.6",
        "create-hash": "npm:create-hash@1.1.3",
        "bn.js": "npm:bn.js@4.11.6",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "elliptic": "npm:elliptic@6.4.0",
        "parse-asn1": "npm:parse-asn1@5.1.0"
      }
    },
    "npm:create-hmac@1.1.6": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "create-hash": "npm:create-hash@1.1.3",
        "cipher-base": "npm:cipher-base@1.0.3",
        "ripemd160": "npm:ripemd160@2.0.1",
        "safe-buffer": "npm:safe-buffer@5.0.1",
        "sha.js": "npm:sha.js@2.4.8"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "browserify-des": "npm:browserify-des@1.0.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "miller-rabin": "npm:miller-rabin@4.0.0"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.1.0"
      }
    },
    "npm:create-hash@1.1.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.3",
        "ripemd160": "npm:ripemd160@2.0.1",
        "sha.js": "npm:sha.js@2.4.8"
      }
    },
    "npm:pbkdf2@3.0.12": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "create-hmac": "npm:create-hmac@1.1.6",
        "ripemd160": "npm:ripemd160@2.0.1",
        "safe-buffer": "npm:safe-buffer@5.0.1",
        "sha.js": "npm:sha.js@2.4.8"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "inherits": "npm:inherits@2.0.3",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "cipher-base": "npm:cipher-base@1.0.3",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.3",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "elliptic": "npm:elliptic@6.4.0"
      }
    },
    "npm:elliptic@6.4.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "hmac-drbg": "npm:hmac-drbg@1.0.1",
        "brorand": "npm:brorand@1.1.0",
        "hash.js": "npm:hash.js@1.0.3",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:parse-asn1@5.1.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "create-hash": "npm:create-hash@1.1.3",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.12",
        "asn1.js": "npm:asn1.js@4.9.1"
      }
    },
    "npm:cipher-base@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:ripemd160@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "hash-base": "npm:hash-base@2.0.2"
      }
    },
    "npm:sha.js@2.4.8": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.1.0"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:hmac-drbg@1.0.1": {
      "map": {
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "hash.js": "npm:hash.js@1.0.3",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:asn1.js@4.9.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.1": {
      "map": {
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:hash-base@2.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "github:bizboard/arva-js@develop": {
      "map": {
        "camelcase": "npm:camelcase@2.1.1",
        "eventemitter3": "npm:eventemitter3@1.2.0",
        "bowser": "npm:bowser@1.6.1",
        "lodash": "npm:lodash@4.17.4",
        "fastclick": "npm:fastclick@1.0.6",
        "ordered-hashmap": "npm:ordered-hashmap@1.0.0",
        "lodash-decorators": "npm:lodash-decorators@3.0.2",
        "xml2js": "npm:xml2js@0.4.17",
        "famous": "github:bizboard/famous@develop",
        "firebase": "github:firebase/firebase-bower@3.9.0",
        "famous-flex": "github:bizboard/famous-flex@master",
        "request-animation-frame-mock": "github:erykpiast/request-animation-frame-mock@0.1.8"
      }
    },
    "npm:lodash-decorators@3.0.2": {
      "map": {
        "lodash": "npm:lodash@4.17.4"
      }
    },
    "npm:xml2js@0.4.17": {
      "map": {
        "sax": "npm:sax@1.2.2",
        "xmlbuilder": "npm:xmlbuilder@4.2.1"
      }
    },
    "npm:xmlbuilder@4.2.1": {
      "map": {
        "lodash": "npm:lodash@4.17.4"
      }
    },
    "npm:jspm-nodelibs-timers@0.2.1": {
      "map": {
        "timers-browserify": "npm:timers-browserify@1.4.2"
      }
    },
    "npm:timers-browserify@1.4.2": {
      "map": {
        "process": "npm:process@0.11.10"
      }
    },
    "github:bizboard/famous-flex@master": {
      "map": {
        "es6-map": "npm:es6-map@0.1.5"
      }
    },
    "npm:es6-map@0.1.5": {
      "map": {
        "d": "npm:d@1.0.0",
        "es6-set": "npm:es6-set@0.1.5",
        "es6-symbol": "npm:es6-symbol@3.1.1",
        "event-emitter": "npm:event-emitter@0.3.5",
        "es6-iterator": "npm:es6-iterator@2.0.1",
        "es5-ext": "npm:es5-ext@0.10.18"
      }
    },
    "npm:es6-set@0.1.5": {
      "map": {
        "d": "npm:d@1.0.0",
        "es6-iterator": "npm:es6-iterator@2.0.1",
        "event-emitter": "npm:event-emitter@0.3.5",
        "es6-symbol": "npm:es6-symbol@3.1.1",
        "es5-ext": "npm:es5-ext@0.10.18"
      }
    },
    "npm:es6-symbol@3.1.1": {
      "map": {
        "d": "npm:d@1.0.0",
        "es5-ext": "npm:es5-ext@0.10.18"
      }
    },
    "npm:event-emitter@0.3.5": {
      "map": {
        "d": "npm:d@1.0.0",
        "es5-ext": "npm:es5-ext@0.10.18"
      }
    },
    "npm:es6-iterator@2.0.1": {
      "map": {
        "d": "npm:d@1.0.0",
        "es6-symbol": "npm:es6-symbol@3.1.1",
        "es5-ext": "npm:es5-ext@0.10.18"
      }
    },
    "npm:d@1.0.0": {
      "map": {
        "es5-ext": "npm:es5-ext@0.10.18"
      }
    },
    "npm:es5-ext@0.10.18": {
      "map": {
        "es6-iterator": "npm:es6-iterator@2.0.1",
        "es6-symbol": "npm:es6-symbol@3.1.1"
      }
    }
  }
});
