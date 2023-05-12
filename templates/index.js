var dances = [
  {
    name: 'Windmill',
    description:
      'The windmill is a popular b-boying move that takes practice, skill, and most of all dedication.',
    imageUrl: 'windmill.jpg',
  },
  {
    name: 'Headspin',
    description:
      'The headspin is a breakdance move that involves balancing on and spinning on your head.',
    imageUrl: 'headspin.jpg',
  },
  // 添加更多的动作...
];

// for (var i = 0; i < dances.length; i++) {
//     var dance = dances[i];

//     var danceElement = document.createElement('div');
//     danceElement.className = 'dance';

//     var nameElement = document.createElement('h2');
//     nameElement.textContent = dance.name;
//     danceElement.appendChild(nameElement);

//     var descriptionElement = document.createElement('p');
//     descriptionElement.textContent = dance.description;
//     danceElement.appendChild(descriptionElement);

//     var imageElement = document.createElement('img');
//     imageElement.src = dance.imageUrl;
//     danceElement.appendChild(imageElement);

//     document.getElementById('dances').appendChild(danceElement);
// }
