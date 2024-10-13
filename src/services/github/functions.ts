import { User, Repository, Commit } from './types';

export function getUser(id: number): Promise<User> {
    console.log('Fetching user Details..');
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 100, email: 'satya@gmail.com' });
        }, 2000);
    });
}

export function getRepositories(email: string): Promise<Repository[]> {
    console.log("Fetching Repositories of the User..")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{ name: 'repository 01' }, { name: 'repository 02' }, { name: 'repository 03' }]);
        }, 2000);
    });
}

export function getCommits(repositoryName: string): Promise<Commit[]> {
    console.log("fetching Commit for the Repository..");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{ commitId: 'commit 01', time: new Date().toISOString() }, { commitId: 'commit 02', time: new Date().toISOString() }]);
        }, 2000);
    });

}
