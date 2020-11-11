export interface ClienteDto{

    name: String,
    sureName: String,
    identification: {
        number: String,
        type : String
    },    
    address:{
        city: String,
        state: String,
        street: String
    },
    phones:{
        number: String,
        type: String
    },
    email: String,
    products:{
        accountNumber: String,
        isActive: Boolean,
        available: Number,
        accountMinimumInflow: Number, 
        creationDate: Date
    },
    urlPicture: String,
    user:{
        email: String,
        password: String,
        isActive:Boolean,
        mustChangePassword:Boolean,
        isEmailVerified:Boolean,
        creationDate:Boolean,
        udpateDate: Date
    }

}