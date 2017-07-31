const markdown = require("./markdown");

var extractedMethods = require("./extractedMethods");

exports["default"] = function(
  text,
  users,
  streams,
  auth,
  realm_users,
  realm_filters,
  realm_emoji
) {
  var self = extractedMethods.getUserByEmail(users, auth.email);
  var people = {
    get_by_name: function get_by_name(name) {
      var user = extractedMethods.getUserByFullName(users, name);
      if (user === extractedMethods.NULL_USER) return undefined;
      return { user_id: user.id, full_name: user.fullName };
    },
    is_my_user_id: function is_my_user_id(user_id) {
      return self.id === user_id;
    }
  };
  var stream_data = {
    get_sub: function get_sub(streamName) {
      var stream = extractedMethods.getStreamByName(streams, streamName);
      return stream === extractedMethods.NULL_STREAM ? undefined : stream;
    }
  };
  markdown.initialize(
    people,
    stream_data,
    auth.realm,
    realm_users,
    realm_filters,
    realm_emoji
  );
  return markdown.apply_markdown(text, people, stream_data);
};

var _extends = function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      target[key] = source[key];
    }
  }

  return target;
};

module.exports = _extends(exports["default"], exports);
