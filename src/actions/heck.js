const images = [
  "https://i.redditmedia.com/dNFwuwdsIfU_d5db68ChabEWekQCQCX-I69n5ex5stg.jpg?w=576&s=051e0845ac865d7914c697f3ddd1d5c7",
  "http://i.imgur.com/x5yy6LL.jpg",
  "http://i.imgur.com/k1xt5iX.jpg",
  "http://i.imgur.com/uZ764mC.jpg",
  "https://i.imgur.com/WX8EsA0.gifv",
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
  "http://i2.asntown.net/5/happydog.jpg",
  "https://i.redd.it/fhqy83z5p8lz.jpg",
  "http://i.imgur.com/H0EtSBi.jpg",
  "http://i.imgur.com/Ytd33cN.jpg",
  "http://i.imgur.com/cL5JZkS.png",
  "https://i.redd.it/jp9qss9zrbgz.jpg",
  "https://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/img2_jiemian_com/95bb6a2e735eaa85f23c57a825b1c25e.jpg",
  "https://i.ytimg.com/vi/2qZHh_iN5Zs/hqdefault.jpg",
  "http://thethings0.imgix.net/wp-content/uploads/2017/05/Borking-Doggo.jpg",
  "https://www.shitpostbot.com/img/sourceimages/happy-doggo-57b1df2fb27db.jpeg",
  "https://i.imgflip.com/1c8yl4.jpg",
  "http://i.imgur.com/GQ2igX1.jpg",
  "https://i.imgur.com/21juSck_d.jpg?maxwidth=640&shape=thumb&fidelity=low",
  "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/12745451_677994122303401_3210755303900264114_n.jpg?oh=a13517c26ae9c964e6ed6df4ebad39a3&oe=5A30BC39",
  "https://i.pinimg.com/736x/e8/d9/1a/e8d91a41797d2094f9b1262da034c227.jpg",
  "https://i.pinimg.com/originals/d9/fd/68/d9fd681a2cf1da1737f2643689c9ad47.jpg",
  "https://i.pinimg.com/736x/bd/da/0d/bdda0d5b42daf8990d25fb1d7f43ecdd--snek-memes-bork.jpg",
  "https://i.redd.it/erkpekqxw3821.jpg",
  "https://i.redd.it/kc7abm2qu1f01.jpg",
  "https://i.redd.it/dwzzqsyg9nhz.jpg",
  "https://i.redd.it/0lp75le4mb131.jpg",
  "https://i.redd.it/a41r2vxpxa131.jpg",
  "https://i.redd.it/jvxhuc50r9131.jpg",
  "https://i.imgur.com/LzCxCoW_d.jpg",
  "https://i.redd.it/x41b9uw140g41.jpg"
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
