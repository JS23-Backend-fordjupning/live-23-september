const { sendResponse } = require("../../responses/index");
const { v4: uuidv4 } = require("uuid");

const keys = [];

// 1. Generera API nyckel
// 2. Returnera genererad api nyckel

module.exports.handler = async (event) => {
  const genereratedKey = uuidv4();

  keys.push({
    key: genereratedKey,
    createdAt: new Date().toLocaleTimeString(),
    requests: 1000,
  });

  return sendResponse({ genereratedKey });
};
