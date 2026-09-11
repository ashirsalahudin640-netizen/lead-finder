/**
 * @typedef {"active"|"broken"|"unknown"} WebsiteStatus
 *
 * @typedef {Object} Lead
 * @property {string} id
 * @property {string} businessName
 * @property {string} category
 * @property {string} address
 * @property {string} city
 * @property {string} state
 * @property {string} country
 * @property {{profileExists:boolean, placeId?:string, mapsUrl?:string, rating?:number, businessStatus?:string}} google
 * @property {{exists:boolean, url?:string, status?:WebsiteStatus, https?:boolean, lastChecked?:string}} website
 * @property {{phone?:string, email?:string}} contact
 */
export {};
