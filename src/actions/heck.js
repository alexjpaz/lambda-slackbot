const images = [
  "https://i.redditmedia.com/dNFwuwdsIfU_d5db68ChabEWekQCQCX-I69n5ex5stg.jpg?w=576&s=051e0845ac865d7914c697f3ddd1d5c7",
  "http://i.imgur.com/x5yy6LL.jpg",
  "http://i.imgur.com/k1xt5iX.jpg",
  "http://i.imgur.com/uZ764mC.jpg",
  "http://i.imgur.com/s5T8V6f.jpg",
  "http://i.imgur.com/n9ODwnC.jpg",
  "http://i.imgur.com/0b6cKVP.jpg",
  "http://i.imgur.com/OZgZNRY.jpg",
  "http://i.imgur.com/8KaC8b4.jpg",
  "http://i.imgur.com/ZHYkp1C.jpg",
  "http://i.imgur.com/0W2M6tR.jpg",
  "http://i.imgur.com/H80fcZP.jpg",
  "http://i.imgur.com/BQN6191.jpg",
  "http://i.imgur.com/nFZQQyS.jpg",
  "http://i.imgur.com/H0EtSBi.jpg",
  "https://scontent.xx.fbcdn.net/v/t1.0-9/18425421_1696945747002214_924426785056275443_n.jpg?oh=984767c2f6d92b496eb0371d19c197af&oe=59DF11B2"
];

module.exports = function(event) {
  function getRandomImage() {
   return images[Math.floor(Math.random()*images.length)];
  }
  return {
    text: getRandomImage(),
    username: "Heck",
    icon_url: "https://i.redditmedia.com/dNFwuwdsIfU_d5db68ChabEWekQCQCX-I69n5ex5stg.jpg?w=576&s=051e0845ac865d7914c697f3ddd1d5c7g"
  }
};
