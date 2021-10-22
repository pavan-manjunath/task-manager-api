const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = process.env.MONGODB_URL
const databaseName = 'task-manager'

const id = new ObjectID()

MongoClient.connect(connectionURL, { useNewUrlParser: true }, ( error, client ) => {
    if(error){
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Vikram',
    //     age: 25
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result)
    // })

    // db.collection('users').findOne({ _id: new ObjectID("611a85e680c021065c016070")}, ( error, user) => {
    //     if(error){
    //         return console.log('Unable to fetch user details')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').deleteMany({
    //     age:35
    // })

    // db.collection('users').insertMany([
    //     {
    //         name:'Adam',
    //         age: 25
    //     },
    //     {
    //         name: 'Bell',
    //         age: 35
    //     }
    // ], (error, result) =>{
    //     if(error){
    //         return console.log('Unable to insert documents')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Washing clothes',
    //         completed: false
    //     },
    //     {
    //         description: 'Cleaning vessels',
    //         completed: true
    //     },
    //     {
    //         description: 'cooking',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert documents')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID("6119502f13688a2cc41f8b61")}, (error, tasks) => {
    //     if(error){
    //         return console.log("Unable to fetch tasks!!")
    //     }
    //     console.log(tasks)
    // })

    db.collection('tasks').find({ completed: false}).count(( error, count) => {
        console.log(count)
    })
})

