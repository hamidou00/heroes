
// tiny script to converted heroes's id from string to number :)

const fs = require("fs");
const r = fs.readFileSync("./backup/heroes-fake-db.json");
const o = JSON.parse(r.toString());

const newO = {
  heroes: o.heroes.map((h) => {
    h.id = Number(h.id);
    return h;
  }),
};

console.log(newO);

fs.writeFileSync("./heroes-fake-db.json", JSON.stringify(newO));
