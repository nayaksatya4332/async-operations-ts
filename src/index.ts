import { getCommits, getRepositories, getUser } from "./services/github/functions";

async function displayCommitsOfUser(): Promise<void> {
    try {
        const user = await getUser(100);
        const repositories = await getRepositories(user.email);
        const commits = await getCommits(repositories[0].name);
        console.log(commits);
    } catch (error) {
        if (error instanceof Error)
            console.log(error.message);
    }
}

displayCommitsOfUser();
