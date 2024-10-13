import { getCommits, getRepositories, getUser } from "./services/github/functions";

getUser(100)
    .then((user) => getRepositories(user.email))
    .then((repos) => getCommits(repos[0].name))
    .then((commits) => console.log(commits))
    .catch((error) => console.log(error.message));