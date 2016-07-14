const images = [
    "http://i.imgur.com/LbDUJDk.jpg",
    "http://i.imgur.com/am3qXZ1.jpg",
    "http://i3.kym-cdn.com/photos/images/newsfeed/000/839/199/8a9.jpg",
    "http://i0.kym-cdn.com/entries/icons/original/000/016/546/5024850.gif",
    "http://i2.kym-cdn.com/photos/images/masonry/001/119/076/193.jpg",
    "http://i.imgur.com/MI2Pf2H.jpg?1",
    "http://i.imgur.com/AHOj2rP.jpg",
    "http://ci.memecdn.com/379/8119379.jpg",
    "http://ci.memecdn.com/432/7818432.jpg",
    "https://i.imgur.com/LbDUJDk.jpg",   
    "https://i.imgur.com/zcGtCQt.jpg",
    "https://i.imgur.com/VvKmF1N.jpg",
    "https://i.imgur.com/z8OGdZS.jpg",
    "https://i.imgur.com/N4fpSXx.jpg",
    "https://i.imgur.com/mKADafD.jpg",
    "https://i.imgur.com/Y5d5M8D.jpg",
    "https://i.imgur.com/pla7MGJ.jpg",
    "https://i.imgur.com/AHOj2rP.jpg",
    "https://i.imgur.com/ALSWbYz.jpg",
    "https://i.imgur.com/2keTlJ6.jpg",
    "https://i.imgur.com/lxFmo5S.jpg",
    "https://i.imgur.com/OQ25ovu.jpg",
    "https://i.imgur.com/IGcPjz9.jpg",
    "https://i.imgur.com/U3e5lcm.jpg",
    "https://i.imgur.com/3Ahq0Rq.jpg",
    "https://i.imgur.com/BIcjW23.jpg",
    "https://i.imgur.com/hQSJE0Z.jpg",
    "https://i.imgur.com/h1u1B5N.jpg",
    "https://i.imgur.com/LkGeTcj.jpg",
    "https://i.imgur.com/kSFZCw3.jpg",
    "https://i.imgur.com/0PKH4IL.jpg",
    "https://i.imgur.com/B7qbFh5.jpg",
    "https://i.imgur.com/iojvSeD.jpg",
    "https://i.imgur.com/jE2iT91.jpg",
    "https://i.imgur.com/wuusOOL.jpg",
    "https://i.imgur.com/v9G3y1B.jpg",
    "https://i.imgur.com/Sc2bEZF.jpg",
    "https://i.imgur.com/TeZI7LE.jpg",
    "https://i.imgur.com/S3Y0zb4.jpg",
    "https://i.imgur.com/FiNX6oV.jpg",
    "https://i.imgur.com/PHa28Hq.jpg",
    "https://i.imgur.com/mo26XSH.jpg",
    "https://i.imgur.com/tbxlDfd.jpg",
    "https://i.imgur.com/vq8SD5T.jpg",
    "https://i.imgur.com/GLCvtHd.jpg",
    "https://i.imgur.com/6lEg0WW.jpg",
    "https://i.imgur.com/f9quYKr.jpg",
    "https://i.imgur.com/5h8lnZL.jpg",
    "https://i.imgur.com/TvdYTBn.jpg",
    "https://i.imgur.com/mEcYki3.jpg",
    "https://i.imgur.com/cnNfmrh.jpg",
    "https://i.imgur.com/1HFqDcz.jpg",
    "https://i.imgur.com/IcTWvXv.jpg",
    "https://i.imgur.com/DFXJkTR.jpg",
    "https://i.imgur.com/dNYg5A4.jpg",
    "https://i.imgur.com/eCJHxqm.jpg",
    "https://i.imgur.com/dvboNSj.jpg",
    "https://i.imgur.com/wz6bwGj.jpg",

  ];

module.exports = function(event) {
  var params = event.split("&").map(e => e.split('=')).reduce((p,c) => { p[c[0]] = c[1]; return p; }, {});
  
  
  function getRandomImage() {
   return images[Math.floor(Math.random()*images.length)];
  }
  return {
    text: getRandomImage(),
    username: "Harold",
    icon_url: "http://i.imgur.com/7Sg9EpC.png"
  }
};
