//To start - type "npm run html"
const gulp = require("gulp");
const requireDir = require("require-dir");
const tasks = requireDir("./tasks");

exports.style = tasks.style;
exports.libs_style = tasks.libs_style;
exports.build_js = tasks.build_js;
exports.libs_js = tasks.libs_js;
exports.dev_js = tasks.dev_js;
exports.html = tasks.html;
exports.rastr = tasks.rastr;
exports.webp = tasks.webp;
exports.svg_css = tasks.svg_css;
exports.svg_sprite = tasks.svg_sprite;
exports.fonts = tasks.fonts;
exports.bs_html = tasks.bs_html;
exports.watch = tasks.watch;

exports.default = gulp.parallel(
    exports.libs_style,
    exports.style,
    exports.libs_js,
    exports.dev_js,
    exports.rastr,
    exports.webp,
    exports.svg_css,
    exports.svg_sprite,
    exports.fonts,
    exports.html,
    exports.bs_html,
    exports.watch
);
