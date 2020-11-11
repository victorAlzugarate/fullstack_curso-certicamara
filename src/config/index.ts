// Import packages
import * as dotenv from 'dotenv'

// Init config
dotenv.config()

// Define const to export
const port = process.env.PORT || 4000
const urlDatabase = process.env.DATA_DB_URL || 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false'
const jwtSecret = process.env.JWT_SECRET || 'MDJPPt3O5CDfhueyi0uV'
const awsBucket = process.env.AWS_BUCKET || "fullstack-demo"
const awsId = process.env.AWS_ID || "AKIAYNQVSAE2TMJ4BF2X"
const awsSecret = process.env.AWS_SECRET || "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"
const awsRegion = process.env.AWS_REGION || 'us-east-2'

// Export configutation
export const Config = {
    port,
    urlDatabase,
    jwtSecret,
    awsBucket,
    awsId,
    awsSecret,
    awsRegion
}