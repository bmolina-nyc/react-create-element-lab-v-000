//Code React element here



const meInReact = 
  React.createElement('div', {className:'me'},
    React.createElement('h1', {}, "An Awesome Person"),
    React.createElement('p', {}, "Who is learning React"),

  React.createElement('ul', {className: 'me_interests'},
    [
      React.createElement('li', {className: 'JS'}, "JavaScript"),
      React.createElement('li', {className: 'React'}, "React"),
      React.createElement('li', {className: 'Movies'}, "Movies"), 
      React.createElement('li', {className: 'Snacks'}, "Ice cream")
    ]
  ) // 'ul end' 
) // 'div end'


  ReactDOM.render(meInReact, document.getElementById('main'));
