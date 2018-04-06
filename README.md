# angular4
Learning Angular 4 at Udemy.com

# step-by-step

# instalation
npm install -g typescript
tsc -v

# transpilation from TS to JS
tsc hello.ts
node hello.js

# transpilation from TS to JS ES6
tsc -t ES6 -w hello.ts

# creating a configuration file
tsc --init

npm install -g typings
typings install jquery --save --source dt --global
typings install ionic --save --source dt --global  