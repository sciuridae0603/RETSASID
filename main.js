//(function() {
  "use strict";

  //------ Loading Firebase
  var firebaseConfig = {
    apiKey: "AIzaSyApiBCODvfZljh4PitNIYShm34CL3xUSWU",
    authDomain: "retsasid-bcd47.firebaseapp.com",
    databaseURL: "https://retsasid-bcd47.firebaseio.com",
    storageBucket: "retsasid-bcd47.appspot.com",
    messagingSenderId: "134020889043"
  };
  firebase.initializeApp(firebaseConfig);
  var provider = new firebase.auth.GoogleAuthProvider();

  var user = new Vue({
    el: '#user',
    data: {
      token: '',
      user: '',
      email: '',
      photoUrl: '',
      uid: 0,
      modal: {
        title: '',
        body: ''
      }
    },
    methods: {
      updateUser: function (user) {
        this.user = user.displayName;
        this.email = user.email;
        this.photoUrl = user.photoURL;
        this.uid = user.uid;
      },
      login: function () {
        firebase.auth().signInWithPopup(provider).catch(function(error) {
          console.log(error);
          //@TODO: fix me
        });
      },
      showReportModal: function (title, body) {
        $('#input-modal').modal('show');
      },
      report: function (title, body) {
        let newPost = firebase.database().ref(`/user-posts/${this.uid}`).push();
        newPost.set({
          title: this.modal.title,
          body: this.modal.body
        });

        //Close modal & clear data
        $('#input-modal').modal('hide');
        this.modal.title = '';
        this.modal.body = '';
      }
    }
  });
  firebase.auth().onAuthStateChanged((currentUser) => {
    if (!currentUser) {
      user.uid = 0;
      return;
    }

    user.updateUser(currentUser);
  });

  var report = new Vue({
    el: '#report',
    data: {
      posts: {},
      modal: {
        title: '',
        body: ''
      }
    },
    methods: {
      initPosts: function () {
        var postsRecentRef = firebase.database().ref('/posts').limitToLast(20);
        postsRecentRef.on('child_added', (data) => {
          this.posts[data.key] = data.val();
        });
        postsRecentRef.on('child_changed', (data) => {
          this.posts[data.key] = data.val();
        });
        postsRecentRef.on('child_removed', (data) => {
          delete this.posts[data.key];
        });
      },
      loadPosts: function () {
        firebase.database().ref('/posts').orderByKey().once('value').then((snapshot) => {
          this.posts = snapshot.val();
        });
      },
      show: function (key) {
        this.modal.title = this.posts[key].title;
        this.modal.body = this.posts[key].body;
        $('#report-modal').modal('show');
      }
    }
  });
  report.initPosts();
  report.loadPosts();

  //------ 各站公告
  var railway = new Vue({    //Railway
    el: '#railway',
    data: {
      announcements: []
    },
    methods: {
      getAnnouncements: function () {
        $.getJSON('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20%0Awhere%20url%3D%27http%3A%2F%2Fwww.railway.gov.tw%2Ftw%2Fnews.aspx%3Fn%3D6807%27%0Aand%20xpath%3D%27%2F%2F*[%40id%3D%22DG%22]%2Ftbody%2Ftr%27%20limit%2010%20offset%202&format=json&diagnostics=false&callback=', (data) => {
          for (let i in data.query.results.tr) {
            let td = data.query.results.tr[i].td;
            this.announcements.push({
              title: td[1].a.span.title,
              url: "http://www.railway.gov.tw/tw/" + td[1].a.href,
              date: td[3].content
            });

          }
        });
      }
    }
  });
  railway.getAnnouncements();

  var hsrailway = new Vue({ //High speed railway
    el: '#hsrailway',
    data: {
      announcements: []
    },
    methods: {
      getAnnouncements: function () {
        $.getJSON('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20%0Awhere%20url%3D%27https%3A%2F%2Fwww.thsrc.com.tw%2Ftw%2FNews%2FIndex%27%0Aand%20xpath%3D%27%2F%2F*%5B%40id%3D%22printcontent%22%5D%2Fsection%2Fsection%5B2%5D%2Ful%2Fli%27%20limit%2010&format=json&diagnostics=false&callback=', (data) => {
          for (let i in data.query.results.li) {
            let a = data.query.results.li[i].a;
            this.announcements.push({
              title: a.title,
              url: "https://www.thsrc.com.tw" + a.href,
              date: a.strong
            });
          }
        });
      }
    }
  });
  hsrailway.getAnnouncements();

  var tyap = new Vue({      //Taoyuan Airport
    el: '#tyap',
    data: {
      announcements: []
    },
    methods: {
      getAnnouncements: function () {
        $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Fwww.taoyuan-airport.com%2Fchinese%2FNews%2F91a31292-f767-434d-944b-5623423ed3a0'%20and%20xpath%3D'%2F%2F*%5B%40id%3D%22news%22%5D%2Ftr'%20limit%2010%20offset%201&format=json&diagnostics=true&callback=", (data) => {
          for (let i in data.query.results.tr) {
            let td = data.query.results.tr[i].td;
            this.announcements.push({
              title: td[1].span.a.content,
              url: "http://www.taoyuan-airport.com" + td[1].span.a.href,
              date: td[2].span.content
            });
          }
        });

      }
    }
  });
  tyap.getAnnouncements();

  var ssap = new Vue({      //Songshan Airport
    el: '#ssap',
    data: {
      announcements: []
    },
    methods: {
      getAnnouncements: function () {
        $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20%0Awhere%20url%3D%27http%3A%2F%2Fwww.tsa.gov.tw%2Ftsa%2Fzh%2Fnews.aspx%3Fkindid%3D11082%27%0Aand%20xpath%3D%27%2F%2F*%5B%40id%3D%22arrival_flights%22%5D%2Fdiv%2Fdiv%5B1%5D%2Ftable%2Ftbody%2Ftr%27%20limit%2010&format=json&diagnostics=false&callback=", (data) => {
          for (let i in data.query.results.tr) {
            let td = data.query.results.tr[i].td;
            this.announcements.push({
              title: td[1].a.title.trim(),
              url: "http://www.tsa.gov.tw/tsa/zh/" + td[1].a.href.trim(),
              date: td[0].content.trim()
            });
          }
        });
      }
    }
  });
  ssap.getAnnouncements();

  //緊急電話
  var phone = new Vue({
    el: '#phone',
    data: {
      numbers: []
    },
    methods: {
      getData: function () {
        $.getJSON("./json/phone.json", (data) => {
          for (let i in data.data) {
            this.numbers.push(data.data[i]);
          }
        });
      }
    }
  });
  phone.getData();

  //天氣
  var weather = new Vue({
    el: '#weather',
    data: {
      uv: {},
      airquality: {},
      districts: {},
      gps: {
        log: 0,
        lat: 0,
        countyName: ''
      }
    },
    methods: {
      getData: function () {
        $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%27http%3A%2F%2Fwww.cwb.gov.tw%2FV7%2Fforecast%2Ff_index.htm%27%20%20and%20xpath%3D%27%2F%2F*%5B%40class%3D%22big01%22%20or%20%40class%3D%22big03%22%20or%20%40class%3D%22big04%22%5D%2F*%2Ftable%2Ftbody%2Ftr%27&format=json&diagnostics=false&callback=", (data) => {
          for (let i in data.query.results.tr) {
            let tr = data.query.results.tr[i];
            if (typeof tr.id === "undefined") continue;
            this.districts[tr.td[0].a.content] = {
              id: tr.id.replace('List', ''),
              name: tr.td[0].a.content,
              temperature: tr.td[1].a.content,
              rain: tr.td[2].a.content,
              icon: "./images/weather/" + tr.td[3].div.a.img.src.match(/\d+/g)[0] + ".gif",
              describe: tr.td[3].div.a.img.alt
            };
          }
        });
      },
      getCountyName: function (log, lat) {
        $.getJSON(`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%3D'http%3A%2F%2Fapi.nlsc.gov.tw%2Fother%2FTownVillagePointQuery%2F${log.toFixed(4)}%2F${lat.toFixed(2)}'&format=json&callback=`, (data) => {
          this.gps.countyName = data.query.results.townVillageItem.ctyName;

        });
      },
      locateUserLocation: function () {
        navigator.geolocation.getCurrentPosition((position) => {
          this.gps.log = position.coords.longitude;
          this.gps.lat = position.coords.latitude;
          this.getCountyName(position.coords.longitude, position.coords.latitude);
        }, () => {});
      },
      getUv: function () {
        $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Fopendata.epa.gov.tw%2Fws%2FData%2FUV%2F%3Fformat%3Djson'&format=json&callback=", (data) => {
          let uvData = JSON.parse(data.query.results.body);
          for (let i in uvData) {
            this.uv[uvData[i].County] = uvData[i];
          }
        });
      },
      getAirQuality: function () {
        $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Fopendata2.epa.gov.tw%2FAQX.json'&format=json&callback=", (data) => {
          let airquality= JSON.parse(data.query.results.body);
          for (let i in airquality) {
            this.airquality[airquality[i].County] = airquality[i];
          }
        });
      }
    }
  });
  weather.getData();
  weather.locateUserLocation();
  weather.getUv();
  weather.getAirQuality();
//})();

