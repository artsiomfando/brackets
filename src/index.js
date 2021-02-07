module.exports = function check(str, bracketsConfig) {
  let cloneStr = str;
    let newArr = [];

    for (let i = 0; i < bracketsConfig.length; i++) {
        newArr.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
    }

    let k = 1;
    while (k <= Math.ceil(str.length / 2)) {
        k++;
        for (let j = 0; j < newArr.length; j++) {
            cloneStr = cloneStr.replace(newArr[j], "");
        }
    }

    return cloneStr.length === 0 ? true : false;
}
