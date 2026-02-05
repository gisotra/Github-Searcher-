export interface GithubUser {
    login: string, 
    id: number,
    location: string,
    email: string,
    bio: string,
    followers: number
}

export interface UserRepo { // Represents a Github Repository
    id: number,
    name: string,
    repositoryUrl: string,
    description: string,
    private: false,
    owner: GithubUser
}

