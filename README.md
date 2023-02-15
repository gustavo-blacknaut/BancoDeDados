> **Use:**
```
const BancoDeDados = require('blackdb');
const db = new BancoDeDados("database.db");
//O melhor para se usar e .db mas você pode usar diversos como .json, .sql, .txt, .js, .MDF, .mysql

db.set(`valor.preco`, '1') //save:
//{
//  "valor": {
//     "preco": "1",
//  }
//}


db.get(`valor.preco`) //return '1'
```