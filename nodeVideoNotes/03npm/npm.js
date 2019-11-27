// 1.npm install xxx --save   npm install xxx --save-dev 添加到package.json文件，删除文件后运行npm install 能再次把依赖插件安装回来
//2.npm install xxx  安装的文件没有添加进package.json文件，运行npm install不会被重新安装
/*
npm install xxx             在该项目下安装
npm install -g xxx          全局安装，
npm install xxx --save      写入到package.json文件的dependencies  有测试文件
npm install xxx --save-dev  写入到package.json文件的devDependencies   没有测试文件
*/

/*
1.npm install本地安装
（1）将安装包放在 ./node_modules 下（运行 npm 命令时所在的目录），如果没有 node_modules 目录，会在当前执行 npm 命令的目录下生成 node_modules 目录。
（2）可以通过 require() 来引入本地安装的包。
2.npm install -g全局安装
(1) 将安装包放在 /usr/local 下或者你 node 的安装目录。
(2)可以直接在命令行里使用。
3.npm install xxxx --save
(1)会把xxxx包安装到node_modules目录中
(2)会在package.json的dependencies属性下添加xxxx
(3)之后运行npm install命令时，会自动安装xxxx到node_modules目录中
(4)之后运行npm install --production或者注明NODE_ENV变量值为production时，会自动安装xxxx到node_modules目录中
4.npm install xxxx --save-dev
(1)会把xxxx包安装到node_modules目录中
(2)会在package.json的devDependencies属性下添加xxxx
(3)之后运行npm install命令时，会自动安装xxxx到node_modules目录中
(4)之后运行npm install --production或者注明NODE_ENV变量值为production时，不会自动安装xxxx到node_modules目录中
*/
