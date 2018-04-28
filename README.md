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

# installing typings
npm install -g typings
typings install jquery --save --source dt --global
typings install ionic --save --source dt --global  

# free ES6 book
https://github.com/getify/You-Dont-Know-JS/tree/master/es6%20%26%20beyond

# typescript tutorial
https://www.typescriptlang.org/docs/tutorial.html

# installing CLI
npm install -g angular-cli

# checking the version
ng -v

# creating a new project
ng new name_of_the_project

# running the local server
ng serve --host $IP --port $PORT
http://angular4-luiseufrasio.c9users.io:8080/

# generating components, directives, pipes, services, classes, interfaces, enums
ng generate component Header
ng g directive My
ng g pipe My
ng g service My
ng g class MyClass
ng g interface MyInterface
ng g enum MyEnum

# building the project [dev]
ng build

# starting python server in dist folder
python -m SimpleHTTPServer $PORT

# building the project [prod]
ng build --prod

# installing a third party library and saving in package.json 
npm install moment --save

# installing the typescript type definition file
npm install @types/moment --save

# installing bootstrap file globally
npm install bootstrap@4.0.0-alpha.5

# running all unit tests
ng test