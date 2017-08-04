/* eslint-disable camelcase*/

const parseMarkdown = require("../parseMarkdown");
const markdown = require("../markdown");
const test_cases = require("../test_cases");
var unescape = require("lodash.unescape");

const users = [
  {
    fullName: "Cordelia Lear",
    id: 101,
    email: "cordelia@zulip.com"
  },
  {
    fullName: "Leo",
    id: 102,
    email: "leo@zulip.com"
  },
  {
    fullName: "Iago",
    id: 103,
    email: "iago@zulip.com"
  }
];
const streams = [
  {
    subscribed: false,
    color: "blue",
    name: "Denmark",
    stream_id: 1,
    in_home_view: false
  },
  {
    subscribed: true,
    color: "red",
    name: "social",
    stream_id: 2,
    in_home_view: true,
    invite_only: true
  }
];
const auth = {
  realm: "http://localhost:9991",
  apiKey: "AJHDFIAS8231827381",
  email: "iago@zulip.com"
};
const realm_users = [];
const realm_emoji = {
  burrito: {
    display_url: "/static/generated/emoji/images/emoji/burrito.png",
    source_url: "/static/generated/emoji/images/emoji/burrito.png"
  }
};
const realm_filters = [
  ["#(?P<id>[0-9]{2,8})", "https://trac.zulip.net/ticket/%(id)s"],
  ["ZBUG_(?P<id>[0-9]{2,8})", "https://trac2.zulip.net/ticket/%(id)s"],
  [
    "ZGROUP_(?P<id>[0-9]{2,8}):(?P<zone>[0-9]{1,8})",
    "https://zone_%(zone)s.zulip.net/ticket/%(id)s"
  ]
];

describe("Preview regular test messages from zulip/zerver/fixtures/markdown_test_cases.json", () => {
  let index = 0;
  test_cases.regular_tests.forEach(testCase =>
    test(`Test index ${index++} ${testCase.name} ${testCase.input.replace(
      "\n",
      "\\n"
    )}`, () => {
      let parsedHTML = parseMarkdown.default(
        unescape(testCase.input),
        users,
        streams,
        auth,
        realm_filters,
        realm_emoji
      );
      parsedHTML = unescape(parsedHTML);
      const expected_output = unescape(testCase.expected_output);
      const marked_expected_output = unescape(testCase.marked_expected_output);

      if (testCase.marked_expected_output) {
        expect(parsedHTML).not.toEqual(expected_output);
        expect(parsedHTML).toEqual(marked_expected_output);
      } else if (testCase.backend_only_rendering) {
        expect(markdown.contains_backend_only_syntax(testCase.input)).toBe(
          true
        );
      } else if (testCase.bugdown_matches_marked) {
        expect(parsedHTML).toEqual(expected_output);
      } else {
        expect(parsedHTML).toEqual(expected_output);
      }
    })
  );
});

describe("Preview test messages from frontend_tests/node_tests/markdown.js", () => {
  let index = 0;
  test_cases.testCases.forEach(testCase =>
    test(`Test index ${index++} markdown ${testCase.input.replace(
      "\n",
      "\\n"
    )}`, () => {
      const parsedHTML = parseMarkdown.default(
        testCase.input,
        users,
        streams,
        auth,
        realm_filters,
        realm_emoji
      );
      expect(parsedHTML).toEqual(testCase.expected);
    })
  );
});
