// Custom Post Field
/*
Posts.addField({
  fieldName: 'customPostField',
  fieldSchema: {
    type: String,
    optional: true,
    editableBy: ["member", "admin"]
  }
});
*/
// Custom Comment Field
/*
Comments.addField({
  fieldName: 'customCommentField',
  fieldSchema: {
    type: String,
    optional: true,
    editableBy: ["member", "admin"]
  }
});
*/

// Custom User Field
Users.addField({
  fieldName: 'Job Title',
  fieldSchema: {
    type: String,
    optional: true,
    public: true,
    profile: true,
    editableBy: ["member", "admin"]
  }
});

Users.addField({
  fieldName: 'Company',
  fieldSchema: {
    type: String,
    optional: true,
    public: true,
    profile: true,
    editableBy: ["member", "admin"]
  }
});

// Custom Setting Field
Settings.addField({
  fieldName: "customSettingsField",
  fieldSchema: {
    type: String,
    optional: true,
    autoform: {
      group: "customGroup"
    }
  }
});