"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getUserByFullName = (exports.getUserByFullName = function getUserByFullName(
  users,
  fullName
) {
  return (
    users.find(function(user) {
      return user.fullName === fullName;
    }) || NULL_USER
  );
});

var getUserByEmail = (exports.getUserByEmail = function getUserByEmail(
  users,
  email
) {
  return (
    users.find(function(user) {
      return user.email === email;
    }) || NULL_USER
  );
});

var NULL_USER = (exports.NULL_USER = {
  fullName: "",
  status: "",
  avatarUrl: "",
  email: ""
});

var NULL_STREAM = (exports.NULL_STREAM = {
  stream_id: 0,
  description: "",
  name: "",
  invite_only: true
});

var getStreamByName = (exports.getStreamByName = function getStreamByName(
  streams,
  name
) {
  return (
    streams.find(function(stream) {
      return stream.name === name;
    }) || NULL_STREAM
  );
});
