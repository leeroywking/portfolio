let githubData = $.get('https://api.github.com/users/leeroywking/repos', 'json');
console.log(githubData.responseJSON);

