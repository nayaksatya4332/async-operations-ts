import { User, Repository, Commit } from './types';

export function getUser(id: number, callback: (arg: User) => void):void {
    console.log('Fetching user Details..');
    setTimeout(() => {
        callback({ id: 100, email: 'satya@gmail.com' });
    }, 2000);
}

export function getRepositories(email: string, callback: (args: Repository[]) => void):void {
    console.log("Fetching Repositories of the User..")
    setTimeout(() => {
        callback([{ name: 'repository 01' }, { name: 'repository 02' }, { name: 'repository 03' }]);
    }, 2000);
}

export function getCommits(repositoryName: string, callback: (commits: Commit[]) => void):void {
    console.log("fetching Commit for the Repository..");
    setTimeout(() => {
        callback([{ commitId: 'commit 01', time: new Date().toISOString() }, { commitId: 'commit 02', time: new Date().toISOString() }]);
    }, 2000);
}
