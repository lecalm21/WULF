function convertHptoKW(hp) {
  hpConverted = hp / 1.341;
  console.log(hpConverted);
    return parseFloat(hpConverted.toFixed(2));
}

module.exports = {
  convertHptoKW: convertHptoKW
};
