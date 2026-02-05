export interface GithubUser {
    login: string;
    id: number;
    location: string;
    email: string;
    bio: string;
    followers: number;
}
export interface UserRepo {
    id: number;
    name: string;
    repositoryUrl: string;
    description: string;
    private: false;
    owner: GithubUser;
}
//# sourceMappingURL=User.d.ts.map