export interface IPermisonServices{
    checkUserChangePassword(userMail: string, userToken: string, url): boolean
}

export class PermissionService implements IPermisonServices{
    checkUserChangePassword(userMail: string, userToken: string, url: any): boolean {
        if(url === '/user/changePassword' || url === '/user/toggleActive'){
            const regEmail = new RegExp(`^${userMail.toLowerCase()}`,'i')
            return regEmail.test(userToken)
        } 
        return true;
    }
}