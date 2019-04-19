

githubDataPull = () => {
    return $.get('https://api.github.com/users/leeroywking/repos', 'json')
  };

githubDataParse = () => {
    return console.log(githubDataPull().responseJSON)
}

githubDataParse();

// $('#main > section.one')
// .css('background-image','url(../../images/banner.jpg)')
// .fadeOut(10000)