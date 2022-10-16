const { Connection, Request } = require("tedious");
// Create connection to database

const express = require("express");
const res = require("express/lib/response");
let PORT = process.env.PORT || 4000
app = express()






var delayInMilliseconds = 1000; //1 second
console.log("Connected")

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

}
app.get('/create-user',(req, res) =>{
    const {name,userName,password} = req.query
    createUser(name,userName,password)
})
app.get('/add-friend',(req, res) =>{
    const {userName,friend} = req.query
    let list = ''
    //let sql= `UPDATE [dbo].[User] SET FRIENDS_LIST = 'Alfasdidt' WHERE USERNAME = 	'ssome';`
    let sql = "Select FRIENDS_LIST FROM [dbo].[User] where USERNAME = '"+userName+"'"
    console.log(sql)
    executeSQL(sql, (err, data) => {
        if (err)
            console.error(err);
        list=data.rows[0][0].value
        list=list+friend+","
        let sql2 = "UPDATE [dbo].[User] SET FRIENDS_LIST = '"+list+"' WHERE USERNAME = '"+userName+"'";
        console.log(sql2)
        executeSQL(sql2, (err, data) => {
            if (err)
                console.error(err);
        });
        res.set({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        });
        res.send("list")
    });
})
function readFullRow(colName, table, ID) {
    console.log("Reading rows from the Table...");

    // Read specific row from specific table
    const request = new Request(

        "SELECT * FROM [dbo].[" + table + "] WHERE " + colName + " = '" + ID + "'",

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

}

const executeSQL = (sql, callback) => {
    let connection = new Connection({
        "authentication": {
            "options": {
                "userName": "aezouhri",
                "password": "SoundG8goats"
            },
            "type": "default"
        },
        "server": "soundgateserver.database.windows.net",
        "options": {
            "validateBulkLoadParameters": false,
            "rowCollectionOnRequestCompletion": true,
            "database": "SoundG8DB",
            "encrypt": true
        }
    });
    connection.connect((err) => {
        if (err)
            return callback(err, null);
        const request = new Request(sql, (err, rowCount, rows) => {
            connection.close();
            if (err)
                return callback(err, null);
            callback(null, {rowCount, rows});
        });
        connection.execSql(request);
    });
};
function createUser(name,userName,password) {
    const ID = Math.floor(Math.random() * 100000 + 1000);

    let sql = `INSERT INTO [dbo].[User] (ID,NAME,USERNAME,PASSWORD,FRIENDS_LIST) VALUES('` + ID + `','` + name + `','` + userName + `','` + password + `','');`
    console.log(sql)
    executeSQL(sql, (err, data) => {
        if (err)
            console.error(err);
    });
}
function addFriend(user,Friend)
{




}
//or




app.listen(PORT, () => console.log("Running on port 4000"));
