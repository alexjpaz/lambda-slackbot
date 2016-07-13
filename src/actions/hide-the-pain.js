module.exports = function(event) {
  var images = [
    "http://i.imgur.com/LbDUJDk.jpg",
    "http://i.imgur.com/am3qXZ1.jpg",
    "http://i3.kym-cdn.com/photos/images/newsfeed/000/839/199/8a9.jpg",
    "http://i0.kym-cdn.com/entries/icons/original/000/016/546/5024850.gif",
    "http://i2.kym-cdn.com/photos/images/masonry/001/119/076/193.jpg",
    "http://i.imgur.com/MI2Pf2H.jpg?1",
    "http://i.imgur.com/AHOj2rP.jpg",
    "http://ci.memecdn.com/379/8119379.jpg",
    "http://ci.memecdn.com/432/7818432.jpg"
  ];
  function getRandomImage() {
   return images[Math.floor(Math.random()*images.length)];
  }
  return {
    text: getRandomImage(),
    username: "Harold",
    icon_url: "http://i.imgur.com/7Sg9EpC.png"
  }
};
