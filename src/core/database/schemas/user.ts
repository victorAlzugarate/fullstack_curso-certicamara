import * as mongose from 'mongoose'
import * as bcrypt from 'bcrypt'
import validator from 'validator'

const userSchema = new mongose.Schema({
    email: {
        type: String,
        required: [true, 'Correo requerido'],
        unique: true,
        validate: {
            validator: function(value){
                return validator.isEmail(value)
            },
            message: props => 'Email invalido'
        }
    },
    password: {
        type: String,
        required: [true, 'Contraseña requerida']
    },
    isActive: {
        type: Boolean,
        default: true
    },
    mustChangePassword: {
        type: Boolean,
        default: true
    },
    isEmailVerified: {
        type: Boolean,
        default: false
    },
    creationDate: {
        type: Date,
        default: Date.now()
    },
    udpateDate: {
        type: Date,
        default: null
    }

}, { versionKey: false})


userSchema.pre('save', true, async function(next, done){
    const user = this
    if(user.isNew){
        //TODO: Validar que el usuario no esté registrado
        
        if(!(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(user.get('password')))){
            user.invalidate('password', 'La constaseña no cumple con los requerimientos minimos de seguridad')
            done(new Error('Contraseña invalida'))
        } else {
            const hashPassword = await bcrypt.hash(user.get('password'), 10)
            user.set('password', hashPassword)
        }
    } else if (user.isModified('password')){
        if(!(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(user.get('password')))){
            user.invalidate('password', 'La constaseña no cumple con los requerimientos minimos de seguridad')
            done(new Error('Contraseña invalida'))
        } else {
            const hashPassword = await bcrypt.hash(user.get('password'), 10)
            user.set('password', hashPassword)
        }
    }
    next()
    done()
})

userSchema.methods.CreateUser = async function(raw: any): Promise<any> {
    const user = new User(raw)
    await user.save()
    return user._id
}

userSchema.methods.CreateUser2 = async function(email: string, newPassword: string): Promise<any> {
    
    const user = new User()

    user?.set('email', email)
    user?.set('password', newPassword)
    await user.save()
    return user
}

userSchema.methods.ToggleActive = async function(email: string): Promise<any> {
    var query = { 'email': email }
    const user = await User.findOne(query)
    const isActive = user?.get('isActive')
    user?.set('isActive', !isActive)
    user?.set('udpateDate', Date.now())
    user?.save()
    return user?._id
}

userSchema.methods.ChangePassword = async function(email: string, newPassword: string){
    const user = await User.findOne({'email': email})
    user?.set('password', newPassword)
    user?.set('mustChangePassword', false)
    user?.set('udpateDate', Date.now())
    await user?.save()
    return user?._id
}

const User = mongose.model('User', userSchema)

export { User }
