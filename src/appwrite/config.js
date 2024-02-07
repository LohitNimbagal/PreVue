import envVariables from '../envVariables/envVariables'
import { Client, ID, Databases, Storage, Permission, Role } from 'appwrite';
import authService from './auth';

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

        authService
            .getCurrentUser()
            .then(async (userData) => {
                if (userData) 
                console.log(userData.$id);

                const response = await service.listItems()
                const isAlreadyAdded = response.documents.some(item => item.id === id);

                if (isAlreadyAdded) return

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
                        },
                        [
                            Permission.read(Role.user(userData.$id)),           // User can view this document
                            Permission.update(Role.user(userData.$id)),         // Writers can update this document 
                            Permission.delete(Role.user(userData.$id)),         // User 5c1f88b42259e can delete this document
                        ]
                    )
                } catch (error) {
                    console.log("Appwrite service :: createItem :: error", error);
                }
            })
        
    }

    async deleteItem(itemID){
        try {
            await this.databases.deleteDocument(
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
            return await this.databases.listDocuments(
                envVariables.appwriteDatabaseId,
                envVariables.appwriteCollectionId
            )
        } catch (error) {
            console.log("Appwrite service :: listItems :: error", error);
        }
    }
}


const service = new Service

export default service;