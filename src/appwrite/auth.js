import envVariables from '../envVariables/envVariables'
import { Account, Client, ID } from 'appwrite';
import { useSelector } from 'react-redux';

export class AuthService {

    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(envVariables.appwriteUrl)
            .setProject(envVariables.appwriteProjectId)
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                return (
                    // this.login(email, password)
                    console.log('user exists')
                )
            }else{
                return userAccount
            }
        } catch (error) {
            console.log('Appwrite Service :: createAccount() :: error', error);
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailSession(email, password)
        } catch (error) {
            console.log('Appwrite Service :: login() :: error', error);
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log('Appwrite Service :: getCurrentUser() :: error', error);
            
        }
    }

    async logout(){
        try {
            await this.account.deleteSession(useSelector(state => state.userData.$id))
        } catch (error) {
            console.log('Appwrite Service :: logout() :: error', error);
        }
    }
}

const authService = new AuthService();

export default authService