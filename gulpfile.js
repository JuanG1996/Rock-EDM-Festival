const { series, src, dest, watch, parallel } = require("gulp");
const sass = require("gulp-sass");
const imagemin = require("gulp-imagemin");
const notify = require("gulp-notify");
const webp = require("gulp-webp");
const concat = require("gulp-concat");

const paths= {
    imagenes: "./src/img/**/*",
    scss: "src/scss/**/*",
    js: "src/js/**/*"

}

// Funcion que compila SASS

function css(){
    return src(paths.scss)
        .pipe( sass({
            outputStyle: "expanded"
        }) )
        .pipe( dest("./build/css") )
}

function minificarcss(){
    return src(paths.scss)
        .pipe( sass({
            outputStyle: "compressed"
        }) )
        .pipe( dest("./build/css") )
}

function imagenes(){
    return src(paths.imagenes)
    .pipe(imagemin())
    .pipe(dest("./build/img"))
    .pipe(notify({message: "Imagen minificada"}));
}

function javascript(){
    return src(paths.js)
        .pipe(concat("bundle.js"))
        .pipe(dest("build/js"))
}

function versionWebp(){
    return src(paths.imagenes)
    .pipe(webp())
    .pipe(dest("./build/img"))
    .pipe(notify({message: "Version webp lista"}))
}

function watchArchivo(){
    watch(paths.scss, css);
    watch(paths.js, javascript)
}

exports.css = css;
exports.minificarcss = minificarcss;
exports.imagenes = imagenes;
exports.watchArchivo = watchArchivo;
exports.default = parallel(css, javascript, imagenes, versionWebp, watchArchivo);