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
        // colName="Test2";
        // table="TableTest";
        // id="excellent";
        // columnList="(Test , Test2)"
        // values="('Marshall' , 'Ben')"
        // readFullColumn(amount,table);
        // readFullRow(colName,table,id);
        // writeRow(columnList,table,values)
        // map="Test='essayons'"
        // ID="test2"
        // updateRow(map,table,ID)
        setTimeout(function () {
            //Added a delay to allow query to process, we close the connection 1 sec after the query is done
            connection.close();
        }, delayInMilliseconds);
    }
});

connection.connect();
var delayInMilliseconds = 1000; //1 second


function readFullColumn(colName, table) {
    console.log("Reading rows from the Table...");

    // Read all rows from table
    const request = new Request(
        'SELECT ' + colName + ' FROM [dbo].[' + table + ']',
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


function readFullRow(colName, table, ID) {
    console.log("Reading rows from the Table...");

    // Read specific row from specific table
    const request = new Request(

        "SELECT * FROM [dbo].[" + table + "] WHERE " + colName + "='" + ID + "'",

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

function writeRow(colList, table, values) {
    console.log("Writting to table...");

    //Writting to new row to a given table with a set of values
    const request = new Request(
        "INSERT INTO " + table + " " + colList + " VALUES " + values,
        (err) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log("Finished writting");
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

// UPDATE TableTest SET Test = 'changement' WHERE Test2 = 'excellent'

function updateRow(map, table,id) {
    console.log("Updating table...");

    //Updating table at a given ID for given values to update
    const request = new Request(
        "UPDATE "+table+" SET "+map +" WHERE ID" + "=" +"'"+id+"'",
        (err) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log("Table updated");
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