import envVariables from '../envVariables/envVariables'
import { Client, ID, Databases, Storage } from 'appwrite';

export class Service {

    client = new Client();
    databases;
    storage;

    constructor(){
        this.client
            .setEndpoint(envVariables.appwriteUrl)
            .setProject(envVariables.appwriteProjectId)
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createItem({id, media_type, title, poster_path }){
        try {
            return await this.databases.createDocument(
                envVariables.appwriteDatabaseId,
                envVariables.appwriteCollectionId,
                ID.unique(),
                {
                    id,
                    media_type,
                    title,
                    poster_path
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createItem :: error", error);
        }
    }

    async deleteItem({itemID}){
        try {
            await this.client.deleteDocument(
                envVariables.appwriteDatabaseId,
                envVariables.appwriteCollectionId,
                itemID
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deleteItem :: error", error);
            return false
        }
    }

    async listItems(){
        try {
            return await this.client.listDocuments(
                envVariables.appwriteDatabaseId,
                envVariables.appwriteCollectionId
            )
        } catch (error) {
            console.log("Appwrite service :: listItems :: error", error);
        }
    }
}

const service = new Service();

export default service