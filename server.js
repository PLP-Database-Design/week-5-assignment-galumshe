//  importing  dependencies
const express = require('express')
const mysql = require('mysql2')
const dotenv = require('dotenv')


const app = express()
dotenv.config()

 // create a connection object
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

// to test the connedction
db.connect((err) => {
    // for when the connection is not sucessful
    if(err) {
        return console.log('error connecting to the mySQl', err)
    }

    //  for when the connection is sucessful
    console.log('MYSQl connection sucessful')
})

//  1 to get patients
app.get('/get-patients', (req, res) => {
    const getPatients = "SELECT * FROM patients"

    db.query (getPatients, (err, result) =>{
        // if theres an error 
        if (err)
            return res.status(500).json('failed to fetch data')
        
        res.status(200).send(result)
    })
     
})

//  2 to get providers
app.get('/get-providers', (req, res) => {
    const getProviders = "SELECT * FROM providers"

    db.query (getProviders, (err, result) =>{
        // if theres an error 
        if (err)
            return res.status(500).json('failed to fetch data')
        
        res.status(200).send(result)
    })
     
})

// 3. Filter patients by First Name
app.get('/get-p-first_name', (req, res) => {
    const getFirstName = "SELECT first_name FROM patients"

    db.query (getFirstName, (err, result) =>{
        // if theres an error 
        if (err)
            return res.status(500).json('failed to fetch data')
        
        res.status(200).send(result)
    })
})
    
// 4. Retrieve all providers by their specialty
app.get('/get-provider-specialty', (req, res) => {
    const getProviderSpecialty = "SELECT provider_specialty FROM providers"

    db.query (getProviderSpecialty, (err, result) =>{
        // if theres an error 
        if (err)
            return res.status(500).json('failed to fetch data')
        
        res.status(200).send(result)
    })
})


// declare the port and listerning to the server
const PORT = 3000;  
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`) // call back function
})

/*
while worrking with nodejs this are the eqivalent of sql statements or close lol!
insert - post()
update - put()
delete - delete()
retrieve - get()
*/

// testing the connection

// FOR TESTING ONLY
// app.get('', (req, res) => {
    //         res.send('hello world. it is a beautiful day ')
    //     })
    //     //  test ends here