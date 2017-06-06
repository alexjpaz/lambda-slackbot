const images = [
  "https://i.redditmedia.com/dNFwuwdsIfU_d5db68ChabEWekQCQCX-I69n5ex5stg.jpg?w=576&s=051e0845ac865d7914c697f3ddd1d5c7",
  "http://i.imgur.com/x5yy6LL.jpg",
  "http://i.imgur.com/k1xt5iX.jpg",
  "http://i.imgur.com/uZ764mC.jpg",
  "http://i.imgur.com/s5T8V6f.jpg",
  "http://i.imgur.com/n9ODwnC.jpg"
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
