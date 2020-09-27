const CustomError = require("../extensions/custom-error");

module.exports = function timeFornatter(sec) {
  if(sec < 3600 && sec > 0) {
    let min = Math.trunc(sec / 60);
    sec = sec % 60;
    min > 0 ? min = min + ' min' : min = '';
    sec > 0 ? sec = sec + ' sec' : sec = '';
    return `${min} ${sec}`.trim();
} else {
  throw new Error('wrong value')
}
};

