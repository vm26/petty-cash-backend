var express = require('express');
const mongodb = require('mongodb');
var router = express.Router();
const {dbUrl,MongoClient}=require('../dbConfig');

//Adding company details
router.post('/addcompanydetails', async(req, res)=> {
  let client=await MongoClient.connect(dbUrl);
  try {
    let db=await client.db('pettycash');
    let data=await db.collection('company').findOne({company:req.body.company});    
    if(data)
    {
    await db.collection('company').findOneAndReplace({company:req.body.company},req.body);
    }
    else
    await db.collection('company').insertOne(req.body);
    
  res.send({
  statusCode:200,
  message:"Company details saved successfully"
})
  } catch (error) {
    res.send({
      statusCode:500,
     message:"Internal server error"
    })
  } 
 
});

//Fetching company details
router.get('/getcompanydetails', async(req, res)=> {
  let client=await MongoClient.connect(dbUrl);
  try {
    let db=await client.db('pettycash');
    let data=await db.collection('company').find().toArray();
  res.send({ 
    datas:data,    
  statusCode:200,
  message:"Company details fetched"
})
  } catch (error) {
    res.send({
      statusCode:500,
     message:"Internal server error"
    })
  } 
 
});

//Adding bills
router.post('/addbills', async(req, res)=> {
  let client=await MongoClient.connect(dbUrl);
  try {
    let db=await client.db('pettycash');   
    await db.collection('bills').insertOne(req.body);
    
  res.send({
  statusCode:200,
  message:"Bills added successfully"
})
  } catch (error) {
    res.send({
      statusCode:500,
     message:"Internal server error"
    })
  } 
 
});

//get bills
router.get('/getbills', async(req, res)=> {
  let client=await MongoClient.connect(dbUrl);
  try {
    let db=await client.db('pettycash');
    let data=await db.collection('bills').find().toArray();
  res.send({ 
    datas:data,    
  statusCode:200,
  message:"Bills fetched"
})
  } catch (error) {
    res.send({
      statusCode:500,
     message:"Internal server error"
    })
  } 
 
});
//delete bill
router.delete('/deletebill/:id', async(req, res)=> {
  let client=await MongoClient.connect(dbUrl);
  try {
    let db=await client.db('pettycash');
    let data=await db.collection('bills').deleteOne({_id:mongodb.ObjectId(req.params.id)})
  
    res.send({       
  statusCode:200,
  message:"Bill deleted successfully"
})
  } catch (error) {
    res.send({
      statusCode:500,
     message:"Internal server error"
    })
  } 
 
});

//Adding advances
router.post('/addadvances', async(req, res)=> {
  let client=await MongoClient.connect(dbUrl);
  try {
    let db=await client.db('pettycash');   
    await db.collection('advances').insertOne(req.body);
    
  res.send({
  statusCode:200,
  message:"Advances added successfully"
})
  } catch (error) {
    res.send({
      statusCode:500,
     message:"Internal server error"
    })
  } 
 
});

//get advances
router.get('/getadvances', async(req, res)=> {
  let client=await MongoClient.connect(dbUrl);
  try {
    let db=await client.db('pettycash');
    let data=await db.collection('advances').find().toArray();
  res.send({ 
    datas:data,    
  statusCode:200,
  message:"Advances fetched"
})
  } catch (error) {
    res.send({
      statusCode:500,
     message:"Internal server error"
    })
  } 
 
});

//delete advance
router.delete('/deleteadvance/:id', async(req, res)=> {
  let client=await MongoClient.connect(dbUrl);
  try {
    let db=await client.db('pettycash');
    let data=await db.collection('advances').deleteOne({_id:mongodb.ObjectId(req.params.id)})
  
    res.send({       
  statusCode:200,
  message:"Advance deleted successfully"
})
  } catch (error) {
    res.send({
      statusCode:500,
     message:"Internal server error"
    })
  } 
 
});

//Adding advancesalary
router.post('/addadvancesalary', async(req, res)=> {
  let client=await MongoClient.connect(dbUrl);
  try {
    let db=await client.db('pettycash');   
    await db.collection('advancesalary').insertOne(req.body);
    
  res.send({
  statusCode:200,
  message:"Advancesalary added successfully"
})
  } catch (error) {
    res.send({
      statusCode:500,
     message:"Internal server error"
    })
  } 
 
});

//get advancesalaries
router.get('/getadvancesalaries', async(req, res)=> {
  let client=await MongoClient.connect(dbUrl);
  try {
    let db=await client.db('pettycash');
    let data=await db.collection('advancesalary').find().toArray();
  res.send({ 
    datas:data,    
  statusCode:200,
  message:"Advancesalaries fetched"
})
  } catch (error) {
    res.send({
      statusCode:500,
     message:"Internal server error"
    })
  } 
 
});

//delete advancesalary
router.delete('/deleteadvancesalary/:id', async(req, res)=> {
  let client=await MongoClient.connect(dbUrl);
  try {
    let db=await client.db('pettycash');
    let data=await db.collection('advancesalary').deleteOne({_id:mongodb.ObjectId(req.params.id)})
  
    res.send({       
  statusCode:200,
  message:"Advance salary deleted successfully"
})
  } catch (error) {
    res.send({
      statusCode:500,
     message:"Internal server error"
    })
  } 
 
});

//Adding cashsale
router.post('/addcashsales', async(req, res)=> {
  let client=await MongoClient.connect(dbUrl);
  try {
    let db=await client.db('pettycash');   
    await db.collection('cashsales').insertOne(req.body);
    
  res.send({
  statusCode:200,
  message:"CashSale added successfully"
})
  } catch (error) {
    res.send({
      statusCode:500,
     message:"Internal server error"
    })
  } 
 
});

//get cashsales
router.get('/getcashsales', async(req, res)=> {
  let client=await MongoClient.connect(dbUrl);
  try {
    let db=await client.db('pettycash');
    let data=await db.collection('cashsales').find().toArray();
  res.send({ 
    datas:data,    
  statusCode:200,
  message:"Cash Sales fetched"
})
  } catch (error) {
    res.send({
      statusCode:500,
     message:"Internal server error"
    })
  } 
 
});

//delete cashsale
router.delete('/deletecashsale/:id', async(req, res)=> {
  let client=await MongoClient.connect(dbUrl);
  try {
    let db=await client.db('pettycash');
    let data=await db.collection('cashsales').deleteOne({_id:mongodb.ObjectId(req.params.id)})
  
    res.send({       
  statusCode:200,
  message:"Cash Sale deleted successfully"
})
  } catch (error) {
    res.send({
      statusCode:500,
     message:"Internal server error"
    })
  } 
 
});
//Adding fundin
router.post('/addfund', async(req, res)=> {
  let client=await MongoClient.connect(dbUrl);
  try {
    let db=await client.db('pettycash');   
    await db.collection('funds').insertOne(req.body);
    
  res.send({
  statusCode:200,
  message:"Fund added successfully"
})
  } catch (error) {
    res.send({
      statusCode:500,
     message:"Internal server error"
    })
  } 
 
});

//get funds
router.get('/getfunds', async(req, res)=> {
  let client=await MongoClient.connect(dbUrl);
  try {
    let db=await client.db('pettycash');
    let data=await db.collection('funds').find().toArray();
  res.send({ 
    datas:data,    
  statusCode:200,
  message:"Funds fetched"
})
  } catch (error) {
    res.send({
      statusCode:500,
     message:"Internal server error"
    })
  } 
 
});

//delete fund
router.delete('/deletefund/:id', async(req, res)=> {
  let client=await MongoClient.connect(dbUrl);
  try {
    let db=await client.db('pettycash');
    let data=await db.collection('funds').deleteOne({_id:mongodb.ObjectId(req.params.id)})
  
    res.send({       
  statusCode:200,
  message:"Fund deleted successfully"
})
  } catch (error) {
    res.send({
      statusCode:500,
     message:"Internal server error"
    })
  } 
 
});
//Adding cheque
router.post('/addcheque', async(req, res)=> {
  let client=await MongoClient.connect(dbUrl);
  try {
    let db=await client.db('pettycash');   
    await db.collection('cheques').insertOne(req.body);
    
  res.send({
  statusCode:200,
  message:"Cheque added successfully"
})
  } catch (error) {
    res.send({
      statusCode:500,
     message:"Internal server error"
    })
  } 
 
});

//get all transaction history
router.get('/gethistory', async(req, res)=> {
  let client=await MongoClient.connect(dbUrl);
  let arr=[];
  try {
    let db=await client.db('pettycash');
    let data=await db.collection('bills').find().toArray();
    if(data.length>0)
    {
      data.map(item=>{
        item.category='bill';
        arr.push(item);
      })
    }    
    let data1=await db.collection('advances').find().toArray();
    if(data1.length>0)
    {
      data1.map(item=>{
        item.category='advance';
        arr.push(item);
      })
    }
   
    let data2=await db.collection('advancesalary').find().toArray();
    if(data2.length>0)
    {
      data2.map(item=>{
        item.category='advancesal';
        arr.push(item);
      })
    }
    
    let data3=await db.collection('cheques').find().toArray();
    if(data3.length>0)
    {
      data3.map(item=>{
        item.category='cheque';
        arr.push(item);
      })
    }
    
    let data4=await db.collection('funds').find().toArray();
    if(data4.length>0)
    {
      data4.map(item=>{
        item.category='fund';
        arr.push(item);
      })
    }
    
    let data5=await db.collection('cashsales').find().toArray();
    if(data5.length>0)
    {
      data5.map(item=>{
        item.category='cashsale';
        arr.push(item);
      })
    }    
   arr.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
      
  });
 
    console.log(arr);
  res.send({ 
    datas:arr,    
  statusCode:200,
  message:"History fetched"
})
  } catch (error) {
    res.send({
      statusCode:500,
     message:"Internal server error"
    })
  } 
 
});

//get funds
router.get('/getcheques', async(req, res)=> {
  let client=await MongoClient.connect(dbUrl);
  try {
    let db=await client.db('pettycash');
    let data=await db.collection('cheques').find().toArray();
  res.send({ 
    datas:data,    
  statusCode:200,
  message:"Cheques fetched"
})
  } catch (error) {
    res.send({
      statusCode:500,
     message:"Internal server error"
    })
  } 
 
});

//delete fund
router.delete('/deletecheque/:id', async(req, res)=> {
  let client=await MongoClient.connect(dbUrl);
  try {
    let db=await client.db('pettycash');
    let data=await db.collection('cheques').deleteOne({_id:mongodb.ObjectId(req.params.id)})
  
    res.send({       
  statusCode:200,
  message:"Cheque deleted successfully"
})
  } catch (error) {
    res.send({
      statusCode:500,
     message:"Internal server error"
    })
  } 
 
});

//User registration
router.post('/register', async(req, res)=> {
  let client=await MongoClient.connect(dbUrl);
  try {
    let db=await client.db('pettycash');   
    let user=await db.collection('users').findOne({email:req.body.email});
    if(user){
      await db.collection('users').findOneAndReplace({email:req.body.email},req.body);
      res.send({
        statusCode:300,
        message:"Password changed successfully"
      })
    
    }else
    {
      await db.collection('users').insertOne(req.body);
      console.log('registered');
    res.send({
    statusCode:200,
    message:"User registered successfully"
  })

    }
  } catch (error) {
    res.send({
      statusCode:500,
     message:"Internal server error"
    })
  } 
 
});

//User login
router.post('/login', async(req, res)=> {
  let client=await MongoClient.connect(dbUrl);
  try {
    let db=await client.db('pettycash');   
    let user=await db.collection('users').findOne({email:req.body.email});   
    if(user){
      if(user.password==req.body.password){
        console.log('success')
        res.send({
          statusCode:200,
          message:"Login successfull"
        })
      }else
      {
        res.send({
          statusCode:400,
          message:"Incorrect Password"
        })
      }
    }
  } catch (error) {
    res.send({
      statusCode:500,
     message:"Internal server error"
    })
  } 
 
});




module.exports = router;
