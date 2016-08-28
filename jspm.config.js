SystemJS.config({
  devConfig: {
    'map': {
      'plugin-babel': 'npm:systemjs-plugin-babel@0.0.10',
      'angular-mocks': 'npm:angular-mocks@1.5.8'
    }
  },
  packages: {
    'src': {
      'defaultExtension': 'js'
    }
  },
  transpiler: 'plugin-babel'
});

SystemJS.config({
  packageConfigPaths: [
    'npm:@*/*.json',
    'npm:*.json',
    'github:*/*.json'
  ],
  map: {
    'angular': 'npm:angular@1.5.8',
    'angular-ui-router': 'npm:angular-ui-router@1.0.0-beta.1',
    'assert': 'github:jspm/nodelibs-assert@0.2.0-alpha',
    'babel': 'npm:babel-core@6.14.0',
    'buffer': 'github:jspm/nodelibs-buffer@0.2.0-alpha',
    'child_process': 'github:jspm/nodelibs-child_process@0.2.0-alpha',
    'constants': 'github:jspm/nodelibs-constants@0.2.0-alpha',
    'crypto': 'github:jspm/nodelibs-crypto@0.2.0-alpha',
    'events': 'github:jspm/nodelibs-events@0.2.0-alpha',
    'fs': 'github:jspm/nodelibs-fs@0.2.0-alpha',
    'http': 'github:jspm/nodelibs-http@0.2.0-alpha',
    'module': 'github:jspm/nodelibs-module@0.2.0-alpha',
    'ngmap': 'github:allenhwkim/angularjs-google-maps@1.17.4',
    'os': 'github:jspm/nodelibs-os@0.2.0-alpha',
    'path': 'github:jspm/nodelibs-path@0.2.0-alpha',
    'process': 'github:jspm/nodelibs-process@0.2.0-alpha',
    'stream': 'github:jspm/nodelibs-stream@0.2.0-alpha',
    'string_decoder': 'github:jspm/nodelibs-string_decoder@0.2.0-alpha',
    'url': 'github:jspm/nodelibs-url@0.2.0-alpha',
    'util': 'github:jspm/nodelibs-util@0.2.0-alpha',
    'vm': 'github:jspm/nodelibs-vm@0.2.0-alpha'
  },
  packages: {
    'npm:babel-core@6.14.0': {
      'map': {
        'babel-template': 'npm:babel-template@6.14.0',
        'babel-runtime': 'npm:babel-runtime@6.11.6',
        'path-is-absolute': 'npm:path-is-absolute@1.0.0',
        'babel-code-frame': 'npm:babel-code-frame@6.11.0',
        'babel-register': 'npm:babel-register@6.14.0',
        'json5': 'npm:json5@0.4.0',
        'convert-source-map': 'npm:convert-source-map@1.3.0',
        'slash': 'npm:slash@1.0.0',
        'babel-helpers': 'npm:babel-helpers@6.8.0',
        'babel-types': 'npm:babel-types@6.14.0',
        'babel-messages': 'npm:babel-messages@6.8.0',
        'shebang-regex': 'npm:shebang-regex@1.0.0',
        'private': 'npm:private@0.1.6',
        'babel-generator': 'npm:babel-generator@6.14.0',
        'minimatch': 'npm:minimatch@3.0.3',
        'debug': 'npm:debug@2.2.0',
        'babel-traverse': 'npm:babel-traverse@6.14.0',
        'babylon': 'npm:babylon@6.9.1',
        'source-map': 'npm:source-map@0.5.6',
        'lodash': 'npm:lodash@4.15.0',
        'path-exists': 'npm:path-exists@1.0.0'
      }
    },
    'npm:babel-template@6.14.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.11.6',
        'babel-types': 'npm:babel-types@6.14.0',
        'babel-traverse': 'npm:babel-traverse@6.14.0',
        'babylon': 'npm:babylon@6.9.1',
        'lodash': 'npm:lodash@4.15.0'
      }
    },
    'npm:babel-code-frame@6.11.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.11.6',
        'esutils': 'npm:esutils@2.0.2',
        'js-tokens': 'npm:js-tokens@2.0.0',
        'chalk': 'npm:chalk@1.1.3'
      }
    },
    'npm:babel-register@6.14.0': {
      'map': {
        'babel-core': 'npm:babel-core@6.14.0',
        'babel-runtime': 'npm:babel-runtime@6.11.6',
        'lodash': 'npm:lodash@4.15.0',
        'core-js': 'npm:core-js@2.4.1',
        'mkdirp': 'npm:mkdirp@0.5.1',
        'source-map-support': 'npm:source-map-support@0.2.10',
        'path-exists': 'npm:path-exists@1.0.0',
        'home-or-tmp': 'npm:home-or-tmp@1.0.0'
      }
    },
    'npm:babel-helpers@6.8.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.11.6',
        'babel-template': 'npm:babel-template@6.14.0'
      }
    },
    'npm:babel-types@6.14.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.11.6',
        'babel-traverse': 'npm:babel-traverse@6.14.0',
        'lodash': 'npm:lodash@4.15.0',
        'esutils': 'npm:esutils@2.0.2',
        'to-fast-properties': 'npm:to-fast-properties@1.0.2'
      }
    },
    'npm:babel-messages@6.8.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.11.6'
      }
    },
    'npm:babel-generator@6.14.0': {
      'map': {
        'babel-messages': 'npm:babel-messages@6.8.0',
        'babel-runtime': 'npm:babel-runtime@6.11.6',
        'babel-types': 'npm:babel-types@6.14.0',
        'source-map': 'npm:source-map@0.5.6',
        'lodash': 'npm:lodash@4.15.0',
        'detect-indent': 'npm:detect-indent@3.0.1'
      }
    },
    'npm:babel-traverse@6.14.0': {
      'map': {
        'babel-code-frame': 'npm:babel-code-frame@6.11.0',
        'babel-messages': 'npm:babel-messages@6.8.0',
        'babel-runtime': 'npm:babel-runtime@6.11.6',
        'babel-types': 'npm:babel-types@6.14.0',
        'babylon': 'npm:babylon@6.9.1',
        'debug': 'npm:debug@2.2.0',
        'lodash': 'npm:lodash@4.15.0',
        'globals': 'npm:globals@8.18.0',
        'invariant': 'npm:invariant@2.2.1'
      }
    },
    'npm:babylon@6.9.1': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.11.6'
      }
    },
    'npm:babel-runtime@6.11.6': {
      'map': {
        'regenerator-runtime': 'npm:regenerator-runtime@0.9.5',
        'core-js': 'npm:core-js@2.4.1'
      }
    },
    'npm:source-map-support@0.2.10': {
      'map': {
        'source-map': 'npm:source-map@0.1.32'
      }
    },
    'npm:debug@2.2.0': {
      'map': {
        'ms': 'npm:ms@0.7.1'
      }
    },
    'npm:minimatch@3.0.3': {
      'map': {
        'brace-expansion': 'npm:brace-expansion@1.1.6'
      }
    },
    'npm:chalk@1.1.3': {
      'map': {
        'ansi-styles': 'npm:ansi-styles@2.2.1',
        'escape-string-regexp': 'npm:escape-string-regexp@1.0.5',
        'strip-ansi': 'npm:strip-ansi@3.0.1',
        'supports-color': 'npm:supports-color@2.0.0',
        'has-ansi': 'npm:has-ansi@2.0.0'
      }
    },
    'npm:mkdirp@0.5.1': {
      'map': {
        'minimist': 'npm:minimist@0.0.8'
      }
    },
    'npm:detect-indent@3.0.1': {
      'map': {
        'minimist': 'npm:minimist@1.2.0',
        'get-stdin': 'npm:get-stdin@4.0.1',
        'repeating': 'npm:repeating@1.1.3'
      }
    },
    'npm:source-map@0.1.32': {
      'map': {
        'amdefine': 'npm:amdefine@1.0.0'
      }
    },
    'npm:invariant@2.2.1': {
      'map': {
        'loose-envify': 'npm:loose-envify@1.2.0'
      }
    },
    'npm:brace-expansion@1.1.6': {
      'map': {
        'concat-map': 'npm:concat-map@0.0.1',
        'balanced-match': 'npm:balanced-match@0.4.2'
      }
    },
    'npm:strip-ansi@3.0.1': {
      'map': {
        'ansi-regex': 'npm:ansi-regex@2.0.0'
      }
    },
    'npm:loose-envify@1.2.0': {
      'map': {
        'js-tokens': 'npm:js-tokens@1.0.3'
      }
    },
    'npm:repeating@1.1.3': {
      'map': {
        'is-finite': 'npm:is-finite@1.0.1'
      }
    },
    'npm:has-ansi@2.0.0': {
      'map': {
        'ansi-regex': 'npm:ansi-regex@2.0.0'
      }
    },
    'npm:home-or-tmp@1.0.0': {
      'map': {
        'user-home': 'npm:user-home@1.1.1',
        'os-tmpdir': 'npm:os-tmpdir@1.0.1'
      }
    },
    'npm:is-finite@1.0.1': {
      'map': {
        'number-is-nan': 'npm:number-is-nan@1.0.0'
      }
    },
    'github:jspm/nodelibs-buffer@0.2.0-alpha': {
      'map': {
        'buffer-browserify': 'npm:buffer@4.9.1'
      }
    },
    'npm:buffer@4.9.1': {
      'map': {
        'ieee754': 'npm:ieee754@1.1.6',
        'isarray': 'npm:isarray@1.0.0',
        'base64-js': 'npm:base64-js@1.1.2'
      }
    },
    'github:jspm/nodelibs-stream@0.2.0-alpha': {
      'map': {
        'stream-browserify': 'npm:stream-browserify@2.0.1'
      }
    },
    'npm:stream-browserify@2.0.1': {
      'map': {
        'readable-stream': 'npm:readable-stream@2.1.5',
        'inherits': 'npm:inherits@2.0.1'
      }
    },
    'npm:readable-stream@2.1.5': {
      'map': {
        'isarray': 'npm:isarray@1.0.0',
        'process-nextick-args': 'npm:process-nextick-args@1.0.7',
        'buffer-shims': 'npm:buffer-shims@1.0.0',
        'core-util-is': 'npm:core-util-is@1.0.2',
        'util-deprecate': 'npm:util-deprecate@1.0.2',
        'string_decoder': 'npm:string_decoder@0.10.31',
        'inherits': 'npm:inherits@2.0.1'
      }
    },
    'github:jspm/nodelibs-http@0.2.0-alpha': {
      'map': {
        'http-browserify': 'npm:stream-http@2.3.1'
      }
    },
    'npm:stream-http@2.3.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'readable-stream': 'npm:readable-stream@2.1.5',
        'xtend': 'npm:xtend@4.0.1',
        'to-arraybuffer': 'npm:to-arraybuffer@1.0.1',
        'builtin-status-codes': 'npm:builtin-status-codes@2.0.0'
      }
    },
    'github:jspm/nodelibs-os@0.2.0-alpha': {
      'map': {
        'os-browserify': 'npm:os-browserify@0.2.1'
      }
    },
    'github:jspm/nodelibs-crypto@0.2.0-alpha': {
      'map': {
        'crypto-browserify': 'npm:crypto-browserify@3.11.0'
      }
    },
    'npm:crypto-browserify@3.11.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'pbkdf2': 'npm:pbkdf2@3.0.4',
        'public-encrypt': 'npm:public-encrypt@4.0.0',
        'browserify-sign': 'npm:browserify-sign@4.0.0',
        'browserify-cipher': 'npm:browserify-cipher@1.0.0',
        'create-hash': 'npm:create-hash@1.1.2',
        'create-ecdh': 'npm:create-ecdh@4.0.0',
        'diffie-hellman': 'npm:diffie-hellman@5.0.2',
        'randombytes': 'npm:randombytes@2.0.3',
        'create-hmac': 'npm:create-hmac@1.1.4'
      }
    },
    'npm:browserify-sign@4.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'create-hash': 'npm:create-hash@1.1.2',
        'create-hmac': 'npm:create-hmac@1.1.4',
        'parse-asn1': 'npm:parse-asn1@5.0.0',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'elliptic': 'npm:elliptic@6.3.1',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:public-encrypt@4.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2',
        'randombytes': 'npm:randombytes@2.0.3',
        'parse-asn1': 'npm:parse-asn1@5.0.0',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:create-hash@1.1.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'sha.js': 'npm:sha.js@2.4.5',
        'ripemd160': 'npm:ripemd160@1.0.1',
        'cipher-base': 'npm:cipher-base@1.0.2'
      }
    },
    'npm:diffie-hellman@5.0.2': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.3',
        'miller-rabin': 'npm:miller-rabin@4.0.0',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:sha.js@2.4.5': {
      'map': {
        'inherits': 'npm:inherits@2.0.1'
      }
    },
    'npm:browserify-cipher@1.0.0': {
      'map': {
        'browserify-des': 'npm:browserify-des@1.0.0',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'browserify-aes': 'npm:browserify-aes@1.0.6'
      }
    },
    'npm:browserify-des@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'cipher-base': 'npm:cipher-base@1.0.2',
        'des.js': 'npm:des.js@1.0.0'
      }
    },
    'npm:pbkdf2@3.0.4': {
      'map': {
        'create-hmac': 'npm:create-hmac@1.1.4'
      }
    },
    'npm:create-hmac@1.1.4': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2',
        'inherits': 'npm:inherits@2.0.1'
      }
    },
    'npm:evp_bytestokey@1.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2'
      }
    },
    'npm:parse-asn1@5.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'pbkdf2': 'npm:pbkdf2@3.0.4',
        'browserify-aes': 'npm:browserify-aes@1.0.6',
        'asn1.js': 'npm:asn1.js@4.8.0'
      }
    },
    'npm:browserify-rsa@4.0.1': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.3',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:create-ecdh@4.0.0': {
      'map': {
        'elliptic': 'npm:elliptic@6.3.1',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:elliptic@6.3.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'hash.js': 'npm:hash.js@1.0.3',
        'bn.js': 'npm:bn.js@4.11.6',
        'brorand': 'npm:brorand@1.0.5'
      }
    },
    'npm:browserify-aes@1.0.6': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'inherits': 'npm:inherits@2.0.1',
        'cipher-base': 'npm:cipher-base@1.0.2',
        'buffer-xor': 'npm:buffer-xor@1.0.3'
      }
    },
    'npm:cipher-base@1.0.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.1'
      }
    },
    'npm:des.js@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:hash.js@1.0.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.1'
      }
    },
    'npm:miller-rabin@4.0.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'brorand': 'npm:brorand@1.0.5'
      }
    },
    'npm:asn1.js@4.8.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'inherits': 'npm:inherits@2.0.1',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'github:jspm/nodelibs-url@0.2.0-alpha': {
      'map': {
        'url-browserify': 'npm:url@0.11.0'
      }
    },
    'npm:url@0.11.0': {
      'map': {
        'punycode': 'npm:punycode@1.3.2',
        'querystring': 'npm:querystring@0.2.0'
      }
    },
    'github:jspm/nodelibs-string_decoder@0.2.0-alpha': {
      'map': {
        'string_decoder-browserify': 'npm:string_decoder@0.10.31'
      }
    }
  }
});
