require.config({
  paths: {
    "jquery": ["../lib/jquery-3.2.1.min", "https://code.jquery.com/jquery-3.1.1.min.js"],
    "bootstrap": ["../lib/bootstrap.min", "https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"],
    "iconfont" : "../lib/iconfont",
    "pagepiling": "../lib/jquery.pagepiling",
    "resume": "../lib/resume"
  },
  shim: {　　　　
    'pagepiling': {　　　　　　
      deps: ['jquery']　　　　
    },
    　
    'resume': {　　　　　　
      deps: ['jquery', 'pagepiling']　　　　
    }　
  }
});
require(["jquery", "bootstrap", "iconfont","pagepiling", "resume"], function($) {
  $(function() {
    // alert("load finished");
  });
});
