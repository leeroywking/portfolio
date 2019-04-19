

// githubDataPull = () => {
//     return $.get('https://api.github.com/users/leeroywking/repos', 'json')
//   };

// githubDataParse = () => {
//     return console.log(githubDataPull().responseJSON)
// }

// githubDataParse();

// $('#main > section.one')
// .css('background-image','url(../../images/pano.jpg)')


const nextBackground = BGindex => {
  let backgrounds = [
    'url(../../images/pano.jpg)',
    'url(../../images/banner.jpg)'
  ]
  $('#main > section.one').css('background-image', backgrounds[BGindex]);
}

nextBackground();
