const images = [
  "http://i0.kym-cdn.com/photos/images/newsfeed/000/506/223/2ab.gif",
  "http://img05.deviantart.net/abd7/i/2013/212/1/8/sonic_the_hedgehog__gotta_go_fast__by_jakepark3r0-d6g301p.jpg",
  "http://40.media.tumblr.com/ba9d9fc7aba9b951f1b10e42b16bef5f/tumblr_ni9cqwZKLO1t2axlxo1_250.jpg",
  "http://24.media.tumblr.com/tumblr_mdry9xHC4d1r8xipxo1_500.png",
  "http://img10.deviantart.net/2c63/i/2015/116/3/8/day_26___sanic_hegehog_by_moxie2d-d8r3v0h.jpg",
  "http://vignette1.wikia.nocookie.net/sanicsource/images/e/e3/Sonicwut.jpg/revision/latest?cb=20160121233101",
  "https://67.media.tumblr.com/a2e45041814c0413b23d5a1804386267/tumblr_nztyxeHoYK1uzha9uo1_400.gif",
  "http://i.imgur.com/Pc53i.gif",
  "http://i.imgur.com/jxUPIdD.jpg",
  'https://i.redd.it/op1zqj9o5hdy.jpg',  
  "https://68.media.tumblr.com/tumblr_lvyehuapi31qbg1pho1_r1_400.gif",
  "https://i.redd.it/dx6x27omsjmz.jpg",
  "http://www.digitiser2000.com/uploads/4/0/6/6/40667199/9249570_orig.png",
  "https://i.kym-cdn.com/photos/images/newsfeed/000/742/417/c18.png",
  "http://cdn.funnyisms.com/dca8fe0a-04a6-42f0-b913-345b1b153e81.gif",
  "https://i.imgur.com/iMI7FYG.jpg",
  "https://i.pinimg.com/originals/d6/69/73/d66973a8fe008554020965523a4bac0b.jpg",
  "https://pa1.narvii.com/6492/3a688e113c329c1d4d0f01f0870bf2e65b1b7990_hq.gif"
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
