const registration=require('../Models/registration_model')
const mongoose=require('mongoose')
const Registration = require('../Models/registration_model')
const pro=require('../Models/productModel')
const product=require('../Models/productModel')
const sub=require('../Models/subscribeModel')
const subscribe=require('../Models/subscribeModel')

const url='mongodb://localhost"27017/userTest'

beforeAll(async()=>{
await mongoose.connect(url,{
useNewUrlParser:true,
useCreateIndex:true
})
})

afterAll(async()=>{
await mongoose.connection.close()
})

//insert user
describe('Testing for user insert',()=>{
it('addUserTest',()=>{
const register={
'fullname':'Riya',
'address':'ktm',
'phone':'12345',
'email':'email123@gmail.com',
'password':'12345',
'userType':'Customer'
}
return registration.create(register)
.then((usersData)=>{
expect(usersData.fullname).toEqual('Riya')
})
})
})

//insert product


describe('Testing for product insert',()=>{
    it('addProductTest',()=>{
    const addproduct={
    'productName':'shubham',
    'productRate':'1234',
    'productImage':'wow',
    'productDescription':'its awesome',
    'productCompany':'some',
    'productCategory':'wow',
    'productQuantity':'12'
    }
    return pro.create(addproduct)
    .then((products)=>{
    expect(products.productName).toEqual('shubham')
    })
    })
    })

    //insert product


describe('Testing for product insert',()=>{
    it('addProductTest',()=>{
    const subscription={
    'email':'riu9898@gmail.com'
    }
    return sub.create(subscription)
    .then((subs)=>{
    expect(subs.email).toEqual('riu9898@gmail.com')
    })
    })
    })
it('delete test', async () => {
    const status = await pro.deleteMany();
    expect(status.ok).toBe(1);
    });

    it('to test the update', async () => {
        return pro.findOneAndUpdate({_id :Object('606c114131a01f35b4d38e25')},
        {$set : {productName:'ram'}})
        .then((products)=>{
        expect(products.productName).toEqual('ram')
        })
        })
      