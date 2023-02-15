const fs = require("fs");

class BancoDeDados {
  constructor(databaseName) {
    this.databaseName = databaseName;
    this.data = {};

    if (fs.existsSync(this.databaseName)) {
      const rawData = fs.readFileSync(this.databaseName);
      this.data = JSON.parse(rawData);
    }
  }

  set(key, value) {
    const keys = key.split(".");
    let current = this.data;
    for (let i = 0; i < keys.length - 1; i++) {
      if (!current[keys[i]]) {
        current[keys[i]] = {};
      }
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
    this.save();
  }

  get(key) {
    const keys = key.split(".");
    let current = this.data;
    for (let i = 0; i < keys.length; i++) {
      if (!current[keys[i]]) {
        return undefined;
      }
      current = current[keys[i]];
    }
    return current;
  }

  save() {
    fs.writeFileSync(this.databaseName, JSON.stringify(this.data, null, 2));
  }
}

module.exports = BancoDeDados;