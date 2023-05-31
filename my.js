const { gulpfile } = require("gulp-cli/lib/shared/cli-options")

//Подключаем gulp
В пустой папке npm unit.Там пишем название сборки,и enter до конца
Появляется файл package.json
В нем 
"main": "index.js",
"type": "module", //добавляем,для подключения моделей es6
Устанавливаем gulp глобально(1 раз на компьютер)
npm i gulp-cli
Устанавливаем gulp локально для отдельного проекта
npm i gulp -D
Теперь у нас будет установлена новая версия gulp (видно в package.json "devDependencies":"gulp": "^4.0.2")
Теперь у нас появились node_modules и package-lock.json

//Создаем файлы и папки  
gulpfile.js
папку src
папку gulp,а в ней папки config и tasks
В папке config настройки,а именно
 в файле Path.js пути
 в файле plugins.js для плагинов
 в файле ftp.js настройки,для выгрузки файлов на ftp сервер


//* Path.js
// Получаем имя папки проекта
import * as nodePath from 'path'; //импортируем модуль
const rootFolder = nodePath.basename(nodePath.resolve());

// Пути к папке с исходниками и папке с результатом
const buildFolder = `./dist`; //путь к папке с результатом
const srcFolder = `./src`; //путь к папке с исходниками

//
