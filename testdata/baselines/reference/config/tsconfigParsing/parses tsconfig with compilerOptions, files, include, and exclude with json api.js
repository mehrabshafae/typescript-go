Fs::
//// [/apath/dist/output.js]


//// [/apath/node_modules/module.ts]


//// [/apath/src/app.ts]


//// [/apath/src/index.ts]


//// [/apath/tsconfig.json]
{
  "compilerOptions": {
    "outDir": "./dist",
    "strict": true,
    "noImplicitAny": true,
    "target": "ES2017",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "moduleDetection": "auto",
    "jsx": "react",
	"maxNodeModuleJsDepth": 1,
	"paths": {
      "jquery": ["./vendor/jquery/dist/jquery"]
    }
  },
  "files": ["/apath/src/index.ts", "/apath/src/app.ts"],
  "include": ["/apath/src/**/*"],
  "exclude": ["/apath/node_modules", "/apath/dist"]
}


configFileName:: /apath/tsconfig.json
FileNames::
/apath/src/index.ts,/apath/src/app.ts
Errors::

