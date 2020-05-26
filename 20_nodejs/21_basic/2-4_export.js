console.log(module);
console.log("\n");
console.log(exports);
console.log("\n");
console.log(module.exports === exports);
console.log("\n");

exports.name = "펭수";
console.log(module.exports); // { name: '펭수' }
console.log("\n");

module.exports = { name: "펭수" };
exports.name = "펭순";
console.log(exports === module.exports); // false
console.log("\n");
console.log(module.exports); // { name: '펭수' }
console.log("\n");
console.log(exports); // { name: '펭순' }
