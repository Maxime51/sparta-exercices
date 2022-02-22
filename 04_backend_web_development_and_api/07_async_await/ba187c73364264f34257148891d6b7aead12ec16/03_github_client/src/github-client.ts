import fetch from "node-fetch";

export type Repo = {
  url: string;
  name: string;
  [key: string]: string | number | boolean | null;
};

export type GitHub = {
  message: string;
  repos_url: string;
};

export const getReposUrl = async (nickname: string): Promise<void> => {
  try {
    const callApi = await fetch(`https://api.github.com/users/${nickname}`);
    const jsonCallApi = await callApi.json();
    if (jsonCallApi.message === "Not Found") {
      throw new Error("The user doesn't exist");
    } else {
      return jsonCallApi.repos_url;
    }
  } catch (jsonCallApi) {
    throw new Error("The user doesn't exist");
  }
};

export const getRepos = async (url: string): Promise<[]> => {
  // Code here
  try {
    const callApi = await fetch(url);
    const jsonCallApi = await callApi.json();
    const arrayOfRepos = jsonCallApi.map((element: { name: string }) => {
      return element;
    });
    return arrayOfRepos;
  } catch (error) {
    throw new Error("Not found");
  }
};

export const printRepos = (ListOfRepos: Repo[]): Repo[] => {
  ListOfRepos.forEach((element, index) => {
    console.log(`${index + 1} - ${element.name}`);
  });
  return ListOfRepos;
};

export const printRepository = async (repository: Repo): Promise<void> => {
  // Code here
  try {
    console.log(`${repository.name}`);
    console.log(`${repository.description}`);
    console.log(`${repository.subscribers_count}`);
    console.log(`${repository.stargazers_count}`);
    console.log(`${repository.language}`);
    console.log(`${repository.url}`);
  } catch (error) {
    throw new Error("Not found");
  }
};

export const getProjectInformations = async (url: string): Promise<Repo> => {
  try {
    const callApi = await fetch(url);
    const jsonCallApi = await callApi.json();
    return {
      name: jsonCallApi.name,
      url: jsonCallApi.url,
      ["description"]: jsonCallApi.description,
      ["subscribers_count"]: jsonCallApi.subscribers_count,
      ["stargazers_count"]: jsonCallApi.stargazers_count,
      ["language"]: jsonCallApi.language,
    };
  } catch (error) {
    throw new Error("Not found");
  }
};
