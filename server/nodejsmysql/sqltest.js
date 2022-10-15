const { Connection, Request } = require("tedious");
// Create connection to database
const config = {
    authentication: {
        options: {
            userName: "aezouhri", // update me
            password: "SoundG8goats" // update me
        },
        type: "default"
    },
    server: "soundgateserver.database.windows.net", // update me
    options: {
        database: "SoundG8DB", //update me
        encrypt: true
    }
};


const connection = new Connection(config);


connection.on("connect", err => {
    if (err) {
        console.error(err.message);
    } else {
        readDatabase();
        setTimeout(function () {
            //your code to be executed after 1 second
            connection.close();
        }, delayInMilliseconds);
    }
});

connection.connect();
var delayInMilliseconds = 1000; //1 second


function readDatabase() {
    console.log("Reading rows from the Table...");

    // Read all rows from table
    const request = new Request(
        `SELECT * FROM [dbo].[TableTest]`,
        (err, rowCount) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log(`${rowCount} row(s) returned`);
            }
        }

    );

    request.on("row", columns => {
        columns.forEach(column => {
            console.log("%s\t%s", column.metadata.colName, column.value);
        });
    });

    connection.execSql(request);
}

function writeDatabase()