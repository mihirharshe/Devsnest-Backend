const fs = require("fs");
const yargs = require("yargs");

const argvs = yargs
    .command("write", "Create a file", {
        filename: {
            type: "string",
        },
        content: {
            type: "string"
        }
    })
    .command("remove", "Remove a file", {
        filename: {
            type: "string"
        },
    })
    .help()
    .argv;

    if(argvs._.includes("write")) {
        if(argvs.filename && argvs.content) {
            fs.writeFileSync(argvs.filename, argvs.content);
        }
    }
    else if(argvs._.includes("remove")) {
        if(argvs.filename) {
            fs.unlinkSync(argvs.filename);
        }
    }
