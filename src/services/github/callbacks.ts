import { getCommits, getRepositories } from "./functions";
import { Commit, Repository, User } from "./types";

export function displayCommits(commits: Commit[]): void {
    console.log(commits);
}

export function getReposCallback(repositories: Repository[]): void {
    getCommits(repositories[0].name, displayCommits);
}

export function getUserCallback(user: User): void {
    getRepositories(user.email, getReposCallback);
}

