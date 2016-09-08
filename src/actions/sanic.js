const images = [
    "https://i.ytimg.com/vi/paZcBwCLLBM/maxresdefault.jpg",
    "http://i0.kym-cdn.com/photos/images/newsfeed/000/506/223/2ab.gif",
    "http://img05.deviantart.net/abd7/i/2013/212/1/8/sonic_the_hedgehog__gotta_go_fast__by_jakepark3r0-d6g301p.jpg",
    "http://40.media.tumblr.com/ba9d9fc7aba9b951f1b10e42b16bef5f/tumblr_ni9cqwZKLO1t2axlxo1_250.jpg",
    "http://24.media.tumblr.com/tumblr_mdry9xHC4d1r8xipxo1_500.png",
    "https://i.ytimg.com/vi/LsHktS5cjvw/maxresdefault.jpg",
  ];

module.exports = function(event) {
  function getRandomImage() {
   return images[Math.floor(Math.random()*images.length)];
  }
  return {
    text: getRandomImage(),
    username: "Sanic",
    icon_url: "http://i1.kym-cdn.com/entries/icons/square/000/006/360/3090611.png"
  }
};
