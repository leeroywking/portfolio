

githubDataPull = () => {
    return $.get('https://api.github.com/users/leeroywking/repos', 'json')
  };

githubDataParse = () => {
    return console.log(githubDataPull().responseJSON)
}

githubDataParse();

