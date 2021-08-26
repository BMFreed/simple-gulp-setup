const { src, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const bulk = require("gulp-sass-bulk-importer");
const prefixer = require("gulp-autoprefixer");
const clean = require("gulp-clean-css");
const concat = require("gulp-concat");
const map = require("gulp-sourcemaps");

module.exports = function style() {
    return src("src/scss/**/*.scss")
        .pipe(map.init())
        .pipe(bulk())
        .pipe(
            sass({
                outputStyle: "compressed",
            }).on("error", sass.logError)
        )
        .pipe(prefixer())
        .pipe(
            clean({
                level: 2,
            })
        )
        .pipe(concat("style.min.css"))
        .pipe(map.write("../sourcemaps/"))
        .pipe(dest("build/css/"));
};
