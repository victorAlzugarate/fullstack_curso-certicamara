import { Config } from '../../../config'
import { writeLog, logType } from '../../../logger'

import aws from 'aws-sdk'

export const loadProfilePic = (file: any, id: string, name: any): Promise<any> => {
    try{
        aws.config.update({
            accessKeyId: Config.awsId,
            secretAccessKey: Config.awsSecret,
            region: Config.awsRegion
        })
        const s3 = new aws.S3()
        var params = {
            ACL: 'public-read',
            Bucket: Config.awsBucket,
            Body: file,
            Key: `profile/${id}/pp-${Date.now()}-${name}`
        }

        var options = { partSize: 10*1024*1024, queueSize: 1}
        return new Promise((resolve, reject) => {
            s3.upload(params, options, (e: any, data: any) => {
                if(e){
                    writeLog(e, logType.error)
                    return reject(e)
                }
                if(data){
                    return resolve(data.Location)
                }
                return null
            })
        })
    } catch(e){
        writeLog(e, logType.error)
        return new Promise((resolve, reject) => {
            return reject(e);
        })
    }
}

export const deleteProfilePic = (id: string, name: any): Promise<any> => {
    try{        
        aws.config.update({
            accessKeyId: Config.awsId,
            secretAccessKey: Config.awsSecret,
            region: Config.awsRegion
        })    
        const s3 = new aws.S3()        
        var params = {         
            Bucket: Config.awsBucket,        
            Key: `profile/${id}/${name}`
        }           
        return s3.deleteObject(params).promise()
    } catch(e) {
        writeLog(e, logType.error)
        return new Promise((resolve, reject) => {
            return reject(e);
        })
    }    
}