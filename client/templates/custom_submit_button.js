Template.__checkName("custom_submit_button");                                                                                 // 2
Template["submit_button"] = new Template("Template.submit_button", (function() {                                       // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": function() {                                                                                              // 6
      return [ "submit-button ", Spacebars.mustache(view.lookup("moduleClass")) ];                                     // 7
    }                                                                                                                  // 8
  }, "\n    ", HTML.A({                                                                                                // 9
    id: "submit",                                                                                                      // 10
    "class": "submit btn btn-primary login-button",                                                                                 // 11
    href: function() {                                                                                                 // 12
      return Spacebars.mustache(view.lookup("pathFor"), "postSubmit");                                                 // 13
    }                                                                                                                  // 14
  }, Blaze.View("lookup:_", function() {                                                                               // 15
    return Spacebars.mustache(view.lookup("_"), "post");                                                               // 16
  })), "\n  ");                                                                                                        // 17
}));      