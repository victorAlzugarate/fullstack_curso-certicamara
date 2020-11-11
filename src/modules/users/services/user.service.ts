
import { LoginUserDto, ChangePasswordUserDto } from '../dtos'
import { userRepository } from '../repository'

export interface IUserService {
    login(userLogin: LoginUserDto): Promise<any>
    create(user: LoginUserDto): Promise<any>
    changePassword(changePassword: ChangePasswordUserDto): Promise<any>
    toogle(email: string): Promise<any>
}

export class UserService implements IUserService{
    changePassword(changePassword: ChangePasswordUserDto): Promise<any> {
        return userRepository.changePassword(changePassword)
    }
    toogle(email: string): Promise<any> {
        return userRepository.toggle(email)
    }
    login(userLogin: LoginUserDto): Promise<any> {
        return userRepository.login(userLogin)
    }    
    create(user: LoginUserDto): Promise<any> {
        return userRepository.create(user)
    }    
}