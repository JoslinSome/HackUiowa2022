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
        colName="Test2";
        table="TableTest";
        id="excellent";
        // readFullColumn(amount,table);
        readFullRow(colName,table,id);
        setTimeout(function () {
            //your code to be executed after 1 second
            connection.close();
        }, delayInMilliseconds);
    }
});

connection.connect();
var delayInMilliseconds = 1000; //1 second


function readFullColumn(colName,table) {
    console.log("Reading rows from the Table...");

    // Read all rows from table
    const request = new Request(
        'SELECT '+ colName +' FROM [dbo].['+table+']',
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


function readFullRow(colName,table,ID) {
    console.log("Reading rows from the Table...");

    // Read all rows from table
    const request = new Request(

        "SELECT * FROM [dbo].["+table+"] WHERE "+colName+"='"+ID+"'",
        
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

