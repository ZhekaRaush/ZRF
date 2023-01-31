// Подключение основного модуля GULP
const { watch, series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();
// Конфигурация
const path = require('./config/path.js');

// Удаление директорий
const clear = require('./task/clear.js');
// Обработчик HTML
const html = require('./task/html.js');
// Обработчик SCSS
const scss = require('./task/scss.js');
// Обработчик JavaScript
const js = require('./task/js.js');
// Обработчик Изображений
const img = require('./task/img.js');


// Сервер
const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root
        }
    })
};

// Наблюдение
const watcher = () => {
    watch(path.html.watch, html).on("all", browserSync.reload);
    watch(path.scss.watch, scss).on("all", browserSync.reload);
    watch(path.js.watch, js).on("all", browserSync.reload);
    watch(path.img.watch, img).on("all", browserSync.reload);
};

// Задачи
exports.html = html;
exports.scss = scss;
exports.js = js;
exports.img = img;

// Сборка проекта
exports.default = series(
    clear,
    parallel(html, scss, js, img),
    parallel(watcher, server)
);