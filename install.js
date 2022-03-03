const { exec, spawnSync } = require("child_process");
const fs = require("fs");

if(!fs.existsSync(`./app`)){
  fs.mkdirSync(`./app`)
}
if(!fs.existsSync(`./app/back`)){
  fs.mkdirSync(`./app/back`)
}

    spawnSync('tar', ['-xvf','build.tar.gz'],{ stdio: "inherit", stdin: "inherit" });
    spawnSync('npx', ['-p','@quasar/cli','quasar','create','app/front'],{ stdio: "inherit", stdin: "inherit" });
    exec("cd app/front && npm install", () => {
          exec("cd builder && npm install", () => {
             exec("cd builder && npm run build", () => {
               exec("cd app/back && npm install", () => {
                 exec("pm2 start procfile.json", (e,r,t) => {
                   console.log(e,r,t)
                   fs.rmdir('./builder', { recursive: true }, (err) => {})
                   fs.unlinkSync('./build.tar.gz');
                   fs.unlinkSync('./install.js');
                 })
               })
             })
          })
    })
