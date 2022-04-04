# lesson

# Инициализация git
---
git init инициализируем гит

git config --local user.name "Andrey Vinogradov" называем себя локально(--global глобально на всём компьютере)

git config --local user.email Vinogradow.Andrej@yandex.ru почта локально(--global глобально на всём компьютере)

git status показывает состояние проекта (фиксированные изменения и коммиты)

git log показывает какие коммиты, когда и кем были выполнены


# Синхронизация с GitHub
---
git remote add origin https://github.com/имяПользователя/названиеПроекта добавление удаленного репозитория(связь между локальным и удаленным)

git push -u origin master(или main) пуш файлов в GitHub, при этом запоминается путь, куда именно пушить (origin master)


# Работа с ветками в GitHub
---
git branch -M main переименовывает ветку в main
после следует прописать git push -u origin main


# Порядок залива коммита через терминал Visual Studio Code
---
git add -A зафиксировать все изменения в проекте 

git commit -a -m "Название комита" создать название комита

git push залить комит

git pull вытащить комит



# Ошибки:
---
fatal: Unable to create 'D:/all_projects/lestorg/.git/index.lock': File exists.

Решение: rm .git/index.lock

# Работа с json сервером
---
npx json-server db.json запуск сервера

# Работа с Webpack
---
mkdir webpack-demo

cd webpack-demo

npm init -y

npm install webpack webpack-cli --save-dev

npx webpack - запуск Webpack

Условия: в корне папки src лежит index.js

# Работа с Babeljs (подгоняет код под старые браузеры)
---
npm install --save-dev @babel/core @babel/cli @babel/preset-env устанавливаем в проект https://babeljs.io/docs/en/usage

$ npm install --save @babel/polyfill устанавливаем полифилы

$ npm i --save-dev babel-loader устанавливаем связь webpack с babel

$ npm i --save-dev core-js устанавливаем библиотеку core-js(берёт только нужные полифилы) https://github.com/zloirock/core-js

$ npm install es6-promise установка es6 

$ npm i nodelist-foreach-polyfill установка полифилла для forEach(всё искать на https://www.npmjs.com/)

# Работа с jQuery (
---
npm i jquery --save устанавливает библиотеку в проект
import 'jquery'; прописать надо в файле sctipt.js. подключает библиотеку
