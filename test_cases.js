"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.testCases = [
  { input: "hello", expected: "<p>hello</p>" },
  { input: "hello there", expected: "<p>hello there</p>" },
  {
    input: "hello **bold** for you",
    expected: "<p>hello <strong>bold</strong> for you</p>"
  },
  { input: "__hello__", expected: "<p>__hello__</p>" },
  {
    input: "\n```\nfenced code\n```\n\nand then after\n",
    expected:
      '<div class="codehilite"><pre><span></span>fenced code\n</pre></div>\n\n\n<p>and then after</p>'
  },
  {
    input:
      "\n```\n    fenced code trailing whitespace            \n```\n\nand then after\n",
    expected:
      '<div class="codehilite"><pre><span></span>    fenced code trailing whitespace\n</pre></div>\n\n\n<p>and then after</p>'
  },
  {
    input: "* a\n* list \n* here",
    expected: "<ul>\n<li>a</li>\n<li>list </li>\n<li>here</li>\n</ul>"
  },
  {
    input: "\n```c#\nfenced code special\n```\n\nand then after\n",
    expected:
      '<div class="codehilite"><pre><span></span>fenced code special\n</pre></div>\n\n\n<p>and then after</p>'
  },
  {
    input: "\n```vb.net\nfenced code dot\n```\n\nand then after\n",
    expected:
      '<div class="codehilite"><pre><span></span>fenced code dot\n</pre></div>\n\n\n<p>and then after</p>'
  },
  {
    input: "Some text first\n* a\n* list \n* here\n\nand then after",
    expected:
      "<p>Some text first</p>\n<ul>\n<li>a</li>\n<li>list </li>\n<li>here</li>\n</ul>\n<p>and then after</p>"
  },
  {
    input: "1. an\n2. ordered \n3. list",
    expected: "<p>1. an<br>\n2. ordered<br>\n3. list</p>"
  },
  {
    input: "\n~~~quote\nquote this for me\n~~~\nthanks\n",
    expected:
      "<blockquote>\n<p>quote this for me</p>\n</blockquote>\n<p>thanks</p>"
  },
  {
    input: "This is a @**Cordelia Lear** mention",
    expected:
      '<p>This is a <span class="user-mention" data-user-id="101">@Cordelia Lear</span> mention</p>'
  },
  {
    input: "These @ @**** are not mentions",
    expected: "<p>These @ @<em>**</em> are not mentions</p>"
  },
  {
    input: "These # #**** are not mentions",
    expected: "<p>These # #<em>**</em> are not mentions</p>"
  },
  {
    input: "These @* @*** are not mentions",
    expected: "<p>These @* @*** are not mentions</p>"
  },
  {
    input: "These #* #*** are also not mentions",
    expected: "<p>These #* #*** are also not mentions</p>"
  },
  {
    input: "This is a #**Denmark** stream link",
    expected:
      '<p>This is a <a class="stream" data-stream-id="1" href="http://localhost:9991/#narrow/stream/Denmark">#Denmark</a> stream link</p>'
  },
  {
    input: "This is #**Denmark** and #**social** stream links",
    expected:
      '<p>This is <a class="stream" data-stream-id="1" href="http://localhost:9991/#narrow/stream/Denmark">#Denmark</a> and <a class="stream" data-stream-id="2" href="http://localhost:9991/#narrow/stream/social">#social</a> stream links</p>'
  },
  {
    input: "And this is a #**wrong** stream link",
    expected: "<p>And this is a #**wrong** stream link</p>"
  },
  {
    input: "mmm...:burrito:s",
    expected:
      '<p>mmm...<img alt=":burrito:" class="emoji" src="/static/generated/emoji/images/emoji/unicode/1f32f.png" title="burrito">s</p>'
  },
  {
    input: "This is an :poop: message",
    expected:
      '<p>This is an <img alt=":poop:" class="emoji" src="/static/generated/emoji/images/emoji/unicode/1f4a9.png" title="poop"> message</p>'
  },
  {
    input: "\ud83d\udca9",
    expected:
      '<p><img alt=":poop:" class="emoji" src="/static/generated/emoji/images/emoji/unicode/1f4a9.png" title="poop"></p>'
  },
  {
    input: "\u{1f937}",
    expected: "<p>\u{1f937}</p>"
  },
  {
    input: "This is a realm filter #1234 with text after it",
    expected:
      '<p>This is a realm filter <a href="https://trac.zulip.net/ticket/1234" target="_blank" title="https://trac.zulip.net/ticket/1234">#1234</a> with text after it</p>'
  },
  {
    input: "This is a realm filter with ZGROUP_123:45 groups",
    expected:
      '<p>This is a realm filter with <a href="https://zone_45.zulip.net/ticket/123" target="_blank" title="https://zone_45.zulip.net/ticket/123">ZGROUP_123:45</a> groups</p>'
  },
  {
    input: "This is an !avatar(cordelia@zulip.com) of Cordelia Lear",
    expected:
      '<p>This is an <img alt="cordelia@zulip.com" class="message_body_gravatar" src="/avatar/cordelia@zulip.com?s=30" title="cordelia@zulip.com"> of Cordelia Lear</p>'
  },
  {
    input: "This is a !gravatar(cordelia@zulip.com) of Cordelia Lear",
    expected:
      '<p>This is a <img alt="cordelia@zulip.com" class="message_body_gravatar" src="/avatar/cordelia@zulip.com?s=30" title="cordelia@zulip.com"> of Cordelia Lear</p>'
  },
  {
    input: "Test *italic*",
    expected: "<p>Test <em>italic</em></p>"
  },
  {
    input: "T\n#**Denmark**",
    expected:
      '<p>T<br>\n<a class="stream" data-stream-id="1" href="http://localhost:9991/#narrow/stream/Denmark">#Denmark</a></p>'
  },
  {
    input: "T\n@**Cordelia Lear**",
    expected:
      '<p>T<br>\n<span class="user-mention" data-user-id="101">@Cordelia Lear</span></p>'
  },
  {
    input: "This is a realm filter `hello` with text after it",
    expected:
      "<p>This is a realm filter <code>hello</code> with text after it</p>"
  }
];
  exports.regular_tests = [
    {
      "name": "codeblock_hilite",
      "input": "Hamlet said:\n~~~~.python \ndef speak(self):\n    x = 1\n~~~~",
      "expected_output": `<p>Hamlet said:</p>\n<div class=\"codehilite\"><pre><span></span><span class=\"k\">def</span> <span class=\"nf\">speak</span><span class=\"p\">(</span><span class=\"bp\">self</span><span class=\"p\">):</span>\n    <span class=\"n\">x</span> <span class=\"o\">=</span> <span class=\"mi\">1</span>\n</pre></div>`,
      "marked_expected_output": "<p>Hamlet said:</p>\n<div class=\"codehilite\"><pre><span></span>def speak(self):\n    x = 1\n</pre></div>"
    },
    {
      "name": "basic_paragraph",
      "input": "test_input",
      "expected_output": `<p>test_input</p>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "codeblock_multiline",
      "input": "Hamlet once said\n~~~~\ndef func():\n    x = 1\n\n    y = 2\n\n    z = 3\n~~~~\nAnd all was good.",
      "expected_output": `<p>Hamlet once said</p>\n<div class=\"codehilite\"><pre><span></span>def func():\n    x = 1\n\n    y = 2\n\n    z = 3\n</pre></div>\n\n\n<p>And all was good.</p>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "codeblock_trailing_whitespace",
      "input": "Hamlet once said\n~~~~\ndef func():\n    x = 1\n\n    y = 2\t\t\n\n    z = 3       \n~~~~\nAnd all was good.",
      "expected_output": `<p>Hamlet once said</p>\n<div class=\"codehilite\"><pre><span></span>def func():\n    x = 1\n\n    y = 2\n\n    z = 3\n</pre></div>\n\n\n<p>And all was good.</p>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "codeblock_backticks",
      "input": "\n```\nfenced code\n```\n\n```inline code```\n",
      "expected_output": `<div class=\"codehilite\"><pre><span></span>fenced code\n</pre></div>\n\n\n<p><code>inline code</code></p>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "hanging_multi_codeblock",
      "input": "Hamlet said:\n~~~~\ndef speak(self):\n    x = 1\n# Comment to make this code block longer to test Trac #1162\n~~~~\n\nThen he mentioned ````y = 4 + x**2```` and\n~~~~\ndef foobar(self):\n    return self.baz()",
      "expected_output": `<p>Hamlet said:</p>\n<div class=\"codehilite\"><pre><span></span>def speak(self):\n    x = 1\n# Comment to make this code block longer to test Trac #1162\n</pre></div>\n\n\n<p>Then he mentioned <code>y = 4 + x**2</code> and</p>\n<div class=\"codehilite\"><pre><span></span>def foobar(self):\n    return self.baz()\n</pre></div>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "fenced_quote",
      "input": "Hamlet said:\n~~~ quote\nTo be or **not** to be.\n\nThat is the question\n~~~",
      "expected_output": `<p>Hamlet said:</p>\n<blockquote>\n<p>To be or <strong>not</strong> to be.</p>\n<p>That is the question</p>\n</blockquote>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "fenced_nested_quote",
      "input": "Hamlet said:\n~~~ quote\nPolonius said:\n> This above all: to thine ownself be true,\nAnd it must follow, as the night the day,\nThou canst not then be false to any man.\n\nWhat good advice!\n~~~",
      "expected_output": `<p>Hamlet said:</p>\n<blockquote>\n<p>Polonius said:</p>\n<blockquote>\n<p>This above all: to thine ownself be true,<br>\nAnd it must follow, as the night the day,<br>\nThou canst not then be false to any man.</p>\n</blockquote>\n<p>What good advice!</p>\n</blockquote>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "complexly_nested_quote",
      "input": "I heard about this second hand...\n~~~ quote\n\nHe said:\n~~~ quote\nThe customer is complaining.\n\nThey looked at this code:\n``` \ndef hello(): print 'hello\n```\nThey would prefer:\n~~~\ndef hello()\n  puts 'hello'\nend\n~~~\n\nPlease advise.\n~~~\nShe said:\n~~~ quote\nJust send them this:\n```\necho \"hello\n\"\n```\n~~~",
      "expected_output": `<p>I heard about this second hand...</p>\n<blockquote>\n<p>He said:</p>\n<blockquote>\n<p>The customer is complaining.</p>\n<p>They looked at this code:</p>\n<div class=\"codehilite\"><pre><span></span>def hello(): print &#39;hello\n</pre></div>\n\n\n<p>They would prefer:</p>\n</blockquote>\n<p>def hello()<br>\n  puts 'hello'<br>\nend</p>\n</blockquote>\n<p>Please advise.</p>\n<div class=\"codehilite\"><pre><span></span>She said:\n~~~ quote\nJust send them this:\n\`\`\`\necho &quot;hello\n&quot;\n\`\`\`\n</pre></div>`,
      "bugdown_matches_marked": false
    },
    {
      "name": "fenced_quote_with_hashtag",
      "input": "```quote\n# line 1\n# line 2\n```",
      "expected_output": `<blockquote>\n<p># line 1<br>\n# line 2</p>\n</blockquote>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "dangerous_block",
      "input": "xxxxxx xxxxx xxxxxxxx xxxx. x xxxx xxxxxxxxxx:\n\n```\"xxxx xxxx\\xxxxx\\xxxxxx\"```\n\nxxx xxxx xxxxx:```xx.xxxxxxx(x'^xxxx$', xx.xxxxxxxxx)```\n\nxxxxxxx'x xxxx xxxxxxxxxx ```'xxxx'```, xxxxx xxxxxxxxx xxxxx ^ xxx $ xxxxxx xxxxx xxxxxxxxxxxx xxx xxxx xx x xxxx xx xxxx xx xxx xxxxx xxxxxx?",
      "expected_output": `<p>xxxxxx xxxxx xxxxxxxx xxxx. x xxxx xxxxxxxxxx:</p>\n<p><code>\"xxxx xxxx\\xxxxx\\xxxxxx\"</code></p>\n<p>xxx xxxx xxxxx:<code>xx.xxxxxxx(x'^xxxx$', xx.xxxxxxxxx)</code></p>\n<p>xxxxxxx'x xxxx xxxxxxxxxx <code>'xxxx'</code>, xxxxx xxxxxxxxx xxxxx ^ xxx $ xxxxxx xxxxx xxxxxxxxxxxx xxx xxxx xx x xxxx xx xxxx xx xxx xxxxx xxxxxx?</p>`,
      "bugdown_matches_marked": false
    },
    {
      "name": "dangerous_block",
      "input": "``` one ```\n\n``` two ```\n\n~~~~\nx = 1",
      "expected_output": `<p><code>one</code></p>\n<p><code>two</code></p>\n<div class=\"codehilite\"><pre><span></span>x = 1\n</pre></div>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "four_space_code_block",
      "input": "    def foo(): pass",
      "expected_output": `<div class=\"codehilite\"><pre><span></span>def foo(): pass\n</pre></div>`,
      "marked_expected_output": "<div class=\"codehilite\"><pre>def foo(): pass\n</pre></div>"
    },
    {
      "name": "two_space_not_code_block",
      "input": "  notcode",
      "expected_output": `<p>notcode</p>`,
      "marked_expected_output": "<p>  notcode</p>"
    },
    {
      "name": "ulist_standard",
      "input": "Some text with a list:\n\n* One item\n* Two items\n* Three items",
      "expected_output": `<p>Some text with a list:</p>\n<ul>\n<li>One item</li>\n<li>Two items</li>\n<li>Three items</li>\n</ul>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "ulist_hanging",
      "input": "Some text with a hanging list:\n* One item\n* Two items\n* Three items",
      "expected_output": `<p>Some text with a hanging list:</p>\n<ul>\n<li>One item</li>\n<li>Two items</li>\n<li>Three items</li>\n</ul>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "ulist_hanging_mixed",
      "input": "Plain list\n\n* Alpha\n\n* Beta\n\nThen hang it off:\n* Ypsilon\n* Zeta",
      "expected_output": `<p>Plain list</p>\n<ul>\n<li>\n<p>Alpha</p>\n</li>\n<li>\n<p>Beta</p>\n</li>\n</ul>\n<p>Then hang it off:</p>\n<ul>\n<li>Ypsilon</li>\n<li>Zeta</li>\n</ul>`,
      "bugdown_matches_marked": false
    },
    {
      "name": "ulist_hanging_multi",
      "input": "Plain list\n* Alpha\n* Beta\n\nAnd Again:\n* A\n* B\n* C\n\nOnce more for feeling:\n* Q\n* E\n* D",
      "expected_output": `<p>Plain list</p>\n<ul>\n<li>Alpha</li>\n<li>Beta</li>\n</ul>\n<p>And Again:</p>\n<ul>\n<li>A</li>\n<li>B</li>\n<li>C</li>\n</ul>\n<p>Once more for feeling:</p>\n<ul>\n<li>Q</li>\n<li>E</li>\n<li>D</li>\n</ul>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "ulist_nested_ulist_two_space_indent",
      "input": "Nested list\n* I am outer list\n  * I am inner nested list first item\n  * I am inner nested list second item",
      "expected_output": `<p>Nested list</p>\n<ul>\n<li>I am outer list<ul>\n<li>I am inner nested list first item</li>\n<li>I am inner nested list second item</li>\n</ul>\n</li>\n</ul>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "ulist_list_two_space_indent",
      "input": "* I am outer list\n  I am something inside",
      "expected_output": `<ul>\n<li>I am outer list<br>\n  I am something inside</li>\n</ul>`,
      "marked_expected_output": "<ul>\n<li>I am outer list<br>\nI am something inside</li>\n</ul>"
    },
    {
      "name": "ulist_codeblock",
      "input": "~~~\nint x = 3\n* 4;\n~~~",
      "expected_output": `<div class=\"codehilite\"><pre><span></span>int x = 3\n* 4;\n</pre></div>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "malformed_fence",
      "input": "~~~~~~~~xxxxxxxxx:  xxxxxxxxxxxx xxxxx x xxxxxxxx~~~~~~",
      "expected_output": `<p>~~~~~~~~xxxxxxxxx:  xxxxxxxxxxxx xxxxx x xxxxxxxx~~~~~~</p>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "strikthrough_basic",
      "input": "I like ~~software~~ hardware",
      "expected_output": `<p>I like <del>software</del> hardware</p>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "strikthrough_multiword",
      "input": "I ~~like software~~ love hardware",
      "expected_output": `<p>I <del>like software</del> love hardware</p>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "strikthrough_multiword",
      "input": "I ~~ like software ~~ love hardware",
      "expected_output": `<p>I <del> like software </del> love hardware</p>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "underscore_disabled",
      "input": "_foo_",
      "expected_output": `<p>_foo_</p>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "emphasis_text",
      "input": "*foo*",
      "expected_output": `<p><em>foo</em></p>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "emphasis_code",
      "input": "const char *x = (char *)y",
      "expected_output": `<p>const char *x = (char *)y</p>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "emphasis_with_space",
      "input": "A *foo bar* is a *baz quux*",
      "expected_output": `<p>A <em>foo bar</em> is a <em>baz quux</em></p>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "underscore_strong_disabled",
      "input": "__foo__",
      "expected_output": `<p>__foo__</p>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "star_strong",
      "input": "**foo**",
      "expected_output": `<p><strong>foo</strong></p>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "numbered_list",
      "input": "1. A\n 2. B",
      "expected_output": `<p>1. A<br>\n 2. B</p>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "linkify_interference",
      "input": "link: xx, x xxxxx xx xxxx xx\n\n[xxxxx #xx](http://xxxxxxxxx:xxxx/xxx/xxxxxx%xxxxxx/xx/):**xxxxxxx**\n\nxxxxxxx xxxxx xxxx xxxxx:\n`xxxxxx`: xxxxxxx\n`xxxxxx`: xxxxx\n`xxxxxx`: xxxxx xxxxx",
      "expected_output": `<p>link: xx, x xxxxx xx xxxx xx</p>\n<p><a href=\"http://xxxxxxxxx:xxxx/xxx/xxxxxx%xxxxxx/xx/\" target=\"_blank\" title=\"http://xxxxxxxxx:xxxx/xxx/xxxxxx%xxxxxx/xx/\">xxxxx #xx</a>:<strong>xxxxxxx</strong></p>\n<p>xxxxxxx xxxxx xxxx xxxxx:<br>\n<code>xxxxxx</code>: xxxxxxx<br>\n<code>xxxxxx</code>: xxxxx<br>\n<code>xxxxxx</code>: xxxxx xxxxx</p>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "inline_image",
      "input": "Google logo today: https://www.google.com/images/srpr/logo4w.png\nKinda boring",
      "expected_output": `<p>Google logo today: <a href=\"https://www.google.com/images/srpr/logo4w.png\" target=\"_blank\" title=\"https://www.google.com/images/srpr/logo4w.png\">https://www.google.com/images/srpr/logo4w.png</a><br>\nKinda boring</p>\n<div class=\"message_inline_image\"><a href=\"https://www.google.com/images/srpr/logo4w.png\" target=\"_blank\" title=\"https://www.google.com/images/srpr/logo4w.png\"><img src=\"https://www.google.com/images/srpr/logo4w.png\"></a></div>`,
      "backend_only_rendering": true
    },
    {
      "name": "two_inline_images",
      "input": "Google logo today: https://www.google.com/images/srpr/logo4w.png\nKinda boringGoogle logo today: https://www.google.com/images/srpr/logo4w.png\nKinda boring",
      "expected_output": `<p>Google logo today: <a href=\"https://www.google.com/images/srpr/logo4w.png\" target=\"_blank\" title=\"https://www.google.com/images/srpr/logo4w.png\">https://www.google.com/images/srpr/logo4w.png</a><br>\nKinda boringGoogle logo today: <a href=\"https://www.google.com/images/srpr/logo4w.png\" target=\"_blank\" title=\"https://www.google.com/images/srpr/logo4w.png\">https://www.google.com/images/srpr/logo4w.png</a><br>\nKinda boring</p>\n<div class=\"message_inline_image\"><a href=\"https://www.google.com/images/srpr/logo4w.png\" target=\"_blank\" title=\"https://www.google.com/images/srpr/logo4w.png\"><img src=\"https://www.google.com/images/srpr/logo4w.png\"></a></div><div class=\"message_inline_image\"><a href=\"https://www.google.com/images/srpr/logo4w.png\" target=\"_blank\" title=\"https://www.google.com/images/srpr/logo4w.png\"><img src=\"https://www.google.com/images/srpr/logo4w.png\"></a></div>`,
      "backend_only_rendering": true
    },
    {
      "name": "camo",
      "input": "Google logo today: http://www.google.com/images/srpr/logo4w.png",
      "expected_output": `<p>Google logo today: <a href=\"http://www.google.com/images/srpr/logo4w.png\" target=\"_blank\" title=\"http://www.google.com/images/srpr/logo4w.png\">http://www.google.com/images/srpr/logo4w.png</a></p>\n<div class=\"message_inline_image\"><a href=\"http://www.google.com/images/srpr/logo4w.png\" target=\"_blank\" title=\"http://www.google.com/images/srpr/logo4w.png\"><img src=\"https://external-content.zulipcdn.net/7b6552b60c635e41e8f6daeb36d88afc4eabde79/687474703a2f2f7777772e676f6f676c652e636f6d2f696d616765732f737270722f6c6f676f34772e706e67\"></a></div>`,
      "backend_only_rendering": true
    },
    {
      "name": "nl2br",
      "input": "test\nbar",
      "expected_output": `<p>test<br>\nbar</p>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "nl2br_trailing_space",
      "input": "test  ",
      "expected_output": `<p>test  </p>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "tables",
      "input": "This is a table:\n\nFirst Header  | Second Header\n------------- | -------------\nContent Cell  | Content Cell\nContent Cell  | Content Cell\n",
      "expected_output": `<p>This is a table:</p>\n<table>\n<thead>\n<tr>\n<th>First Header</th>\n<th>Second Header</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Content Cell</td>\n<td>Content Cell</td>\n</tr>\n<tr>\n<td>Content Cell</td>\n<td>Content Cell</td>\n</tr>\n</tbody>\n</table>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "multiline_strong",
      "input": "You can check out **any time you'd like\nBut you can never leave**",
      "expected_output": `<p>You can check out **any time you'd like<br>\nBut you can never leave**</p>`,
      "bugdown_matches_marked": false
    },
    {
      "name": "many_emoji",
      "input":  "test :smile: again :poop:\n:) foo:)bar x::y::z :wasted waste: :fakeemojithisshouldnotrender:",
      "expected_output": `<p>test <img alt=\":smile:\" class=\"emoji\" src=\"/static/generated/emoji/images/emoji/unicode/1f604.png\" title=\"smile\"> again <img alt=\":poop:\" class=\"emoji\" src=\"/static/generated/emoji/images/emoji/unicode/1f4a9.png\" title=\"poop\"><br>\n:) foo:)bar x::y::z :wasted waste: :fakeemojithisshouldnotrender:</p>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "random_emoji_1",
      "input": ":airplane:",
      "expected_output": `<p><img alt=\":airplane:\" class=\"emoji\" src=\"/static/generated/emoji/images/emoji/unicode/2708.png\" title=\"airplane\"></p>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "zulip_emoji",
      "input": ":zulip:",
      "expected_output": `<p><img alt=\":zulip:\" class=\"emoji\" src=\"/static/generated/emoji/images/emoji/unicode/zulip.png\" title=\"zulip\"></p>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "random_emoji_2",
      "input": ":poop:",
      "expected_output": `<p><img alt=\":poop:\" class=\"emoji\" src=\"/static/generated/emoji/images/emoji/unicode/1f4a9.png\" title=\"poop\"></p>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "emojis_without_space",
      "input": ":cat:hello:dog::rabbit:",
      "expected_output": `<p><img alt=\":cat:\" class=\"emoji\" src=\"/static/generated/emoji/images/emoji/unicode/1f408.png\" title=\"cat\">hello<img alt=\":dog:\" class=\"emoji\" src=\"/static/generated/emoji/images/emoji/unicode/1f415.png\" title=\"dog\"><img alt=\":rabbit:\" class=\"emoji\" src=\"/static/generated/emoji/images/emoji/unicode/1f407.png\" title=\"rabbit\"></p>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "emojis_newline",
      "input": ":cat:\n:dog:",
      "expected_output": `<p><img alt=\":cat:\" class=\"emoji\" src=\"/static/generated/emoji/images/emoji/unicode/1f408.png\" title=\"cat\"><br>\n<img alt=\":dog:\" class=\"emoji\" src=\"/static/generated/emoji/images/emoji/unicode/1f415.png\" title=\"dog\"></p>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "not_emoji",
      "input": ":not_an_emoji:",
      "expected_output": `<p>:not_an_emoji:</p>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "unicode_emoji",
      "input": "\ud83d\udca9",
      "expected_output":"<p><img alt=\":poop:\" class=\"emoji\" src=\"\/static\/generated\/emoji\/images\/emoji\/unicode\/1f4a9.png\" title=\"poop\"><\/p>",
      "bugdown_matches_marked": true
    },
    {
      "name": "two_unicode_emoji",
      "input": "\ud83d\udca9\ud83d\udca9",
      "expected_output":"<p><img alt=\":poop:\" class=\"emoji\" src=\"\/static\/generated\/emoji\/images\/emoji\/unicode\/1f4a9.png\" title=\"poop\"><img alt=\":poop:\" class=\"emoji\" src=\"\/static\/generated\/emoji\/images\/emoji\/unicode\/1f4a9.png\" title=\"poop\"><\/p>",
      "bugdown_matches_marked": true
    },
    {
      "name": "two_unicode_emoji_separated_by_text",
      "input": "\ud83d\udca9 word \ud83d\udca9",
      "expected_output":"<p><img alt=\":poop:\" class=\"emoji\" src=\"\/static\/generated\/emoji\/images\/emoji\/unicode\/1f4a9.png\" title=\"poop\"> word <img alt=\":poop:\" class=\"emoji\" src=\"\/static\/generated\/emoji\/images\/emoji\/unicode\/1f4a9.png\" title=\"poop\"><\/p>",
      "bugdown_matches_marked": true
    },
    {
      "name": "miscellaneous_symbols_and_pictographs",
      "input": "Merry Christmas!!\ud83c\udf84",
      "expected_output":"<p>Merry Christmas!!<img alt=\":christmas_tree:\" class=\"emoji\" src=\"\/static\/generated\/emoji\/images\/emoji\/unicode\/1f384.png\" title=\"christmas tree\"><\/p>",
      "bugdown_matches_marked": true
    },
    {
      "name": "miscellaneous_and_dingbats_emoji",
      "input": "\u2693\u2797",
      "expected_output":"<p><img alt=\":anchor:\" class=\"emoji\" src=\"\/static\/generated\/emoji\/images\/emoji\/unicode\/2693.png\" title=\"anchor\"><img alt=\":heavy_division_sign:\" class=\"emoji\" src=\"\/static\/generated\/emoji\/images\/emoji\/unicode\/2797.png\" title=\"heavy division sign\"><\/p>",
      "bugdown_matches_marked": true
    },
    {
      "name": "supplemental_symbols_and_pictographs",
      "input": "I am a robot \ud83e\udd16.",
      "expected_output":"<p>I am a robot <img alt=\":robot_face:\" class=\"emoji\" src=\"\/static\/generated\/emoji\/images\/emoji\/unicode\/1f916.png\" title=\"robot face\">.<\/p>",
      "bugdown_matches_marked": true
    },
    {
      "name": "miscellaneous_symbols_and_arrows",
      "input": "Black upward arrow \u2b06",
      "expected_output":"<p>Black upward arrow <img alt=\":arrow_up:\" class=\"emoji\" src=\"\/static\/generated\/emoji\/images\/emoji\/unicode\/2b06.png\" title=\"arrow up\"><\/p>",
      "bugdown_matches_marked": true
    },
    {
      "name": "unicode_emoji_without_space",
      "input": "Extra\ud83d\udc7dTerrestrial",
      "expected_output":"<p>Extra<img alt=\":alien:\" class=\"emoji\" src=\"\/static\/generated\/emoji\/images\/emoji\/unicode\/1f47d.png\" title=\"alien\">Terrestrial<\/p>",
      "bugdown_matches_marked": true
    },
    {
      "name": "unicode_emojis_new_line",
      "input": "\ud83d\udc7d\n\ud83d\udc7d",
      "expected_output":"<p><img alt=\":alien:\" class=\"emoji\" src=\"\/static\/generated\/emoji\/images\/emoji\/unicode\/1f47d.png\" title=\"alien\"><br>\n<img alt=\":alien:\" class=\"emoji\" src=\"\/static\/generated\/emoji\/images\/emoji\/unicode\/1f47d.png\" title=\"alien\"><\/p>",
      "bugdown_matches_marked": true
    },
    {
      "name": "emoji_alongside_punctuation",
      "input": ":smile:, :smile:; :smile:",
      "expected_output": `<p><img alt=\":smile:\" class=\"emoji\" src=\"/static/generated/emoji/images/emoji/unicode/1f604.png\" title=\"smile\">, <img alt=\":smile:\" class=\"emoji\" src=\"/static/generated/emoji/images/emoji/unicode/1f604.png\" title=\"smile\">; <img alt=\":smile:\" class=\"emoji\" src=\"/static/generated/emoji/images/emoji/unicode/1f604.png\" title=\"smile\"></p>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "safe_html",
      "input": "<h1>stay normal</h1> thanks",
      "expected_output": `<p>&lt;h1&gt;stay normal&lt;/h1&gt; thanks</p>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "safe_html_with_simple_script_tag",
      "input": "<script>alert(1)</script>",
      "expected_output": `<p>&lt;script&gt;alert(1)&lt;/script&gt;</p>`,
      "bugdown_matches_marked": false
    },
    {
      "name": "safe_html_nested_script_tag",
      "input": "<<script>script>evil()<</script>/script>",
      "expected_output": `<p>&lt;&lt;script&gt;script&gt;evil()&lt;&lt;/script&gt;/script&gt;</p>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "safe_html_nested_script_tag_with_parse_error",
      "input": "<<x>script>evil()<</x>/script>",
      "expected_output": `<p>&lt;&lt;x&gt;script&gt;evil()&lt;&lt;/x&gt;/script&gt;</p>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "safe_html_messed_up_complexly_nested_script_tags",
      "input": "<scr<script></script>ipt type=\"text/javascript\">alert(\"foo\");</<script></script>script<del></del>>",
      "expected_output": `<p>&lt;scr&lt;script&gt;&lt;/script&gt;ipt type=\"text/javascript\"&gt;alert(\"foo\");&lt;/&lt;script&gt;&lt;/script&gt;script&lt;del&gt;&lt;/del&gt;&gt;</p>`,
      "bugdown_matches_marked": false
    },
    {
      "name": "safe_html_unclosed_tag",
      "input": "<script src=http://xx.com/xss.js<b>",
      "expected_output": `<p>&lt;script src=http://xx.com/xss.js&lt;b&gt;</p>`,
      "marked_expected_output": "<p>&lt;script src=http://xx.com/xss.js&lt;b&gt;\n\n</p>"
    },
    {
      "name": "safe_html_unclosed_tag_and_quotes",
      "input": "<script src=\"http://xx.com/xss.js\"<b>",
      "expected_output": `<p>&lt;script src=\"http://xx.com/xss.js\"&lt;b&gt;</p>`,
      "marked_expected_output": "<p>&lt;script src=&quot;http://xx.com/xss.js&quot;&lt;b&gt;\n\n</p>"
    },
    {
      "name": "safe_html_in_code",
      "input": "~~~\n<h1>stay normal</h1>",
      "expected_output": `<div class=\"codehilite\"><pre><span></span>&lt;h1&gt;stay normal&lt;/h1&gt;\n</pre></div>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "ulist_with_inline_code",
      "input": "gonna take a break for a bit--all yours if you want to play around too. what I did:\n\n* install cmake\n* git clone zulip desktop\n* run `cmake-gui ..` in `c:\\zulip\\zulip-desktop\\msvcbuild`\n* hit configure/generate until it generated the msvc project (had to make a fix to some cmake files)\n* opened vs2013 \n* tried to build\n",
      "expected_output": `<p>gonna take a break for a bit--all yours if you want to play around too. what I did:</p>\n<ul>\n<li>install cmake</li>\n<li>git clone zulip desktop</li>\n<li>run <code>cmake-gui ..</code> in <code>c:\\zulip\\zulip-desktop\\msvcbuild</code></li>\n<li>hit configure/generate until it generated the msvc project (had to make a fix to some cmake files)</li>\n<li>opened vs2013 </li>\n<li>tried to build</li>\n</ul>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "modal_link",
      "input": "!modal_link(#settings, Settings page)",
      "expected_output": `<p><a href=\"#settings\" title=\"#settings\">Settings page</a></p>`,
      "bugdown_matches_marked": false
    },
    {
      "name": "modal_link_escaped",
      "input": "`!modal_link(#settings, Settings page)`",
      "expected_output": `<p><code>!modal_link(#settings, Settings page)</code></p>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "avatar",
      "input": "!avatar(username@example.com)",
      "expected_output": `<p><img alt=\"username@example.com\" class=\"message_body_gravatar\" src=\"/avatar/username@example.com?s=30\" title=\"username@example.com\"></p>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "gravatar",
      "input": "!gravatar(username@example.com)",
      "expected_output": `<p><img alt=\"username@example.com\" class=\"message_body_gravatar\" src=\"/avatar/username@example.com?s=30\" title=\"username@example.com\"></p>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "avatar_escaped",
      "input": "`!avatar(username@example.com)`",
      "expected_output": `<p><code>!avatar(username@example.com)</code></p>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "gravatar_escaped",
      "input": "`!gravatar(username@example.com)`",
      "expected_output": `<p><code>!gravatar(username@example.com)</code></p>`,
      "bugdown_matches_marked": true
    },
    {
      "name": "stream_subscribe_button",
      "input": "!_stream_subscribe_button(streamname)",
      "expected_output": `<p><span class=\"inline-subscribe\" data-stream-name=\"streamname\"><button class=\"inline-subscribe-button btn\">Subscribe to streamname</button><span class=\"inline-subscribe-error\"></span></span></p>`,
      "bugdown_matches_marked": false
    },
    {
      "name": "stream_subscribe_button_escaped",
      "input": "`!_stream_subscribe_button(streamname)`",
      "expected_output": `<p><code>!_stream_subscribe_button(streamname)</code></p>`,
      "bugdown_matches_marked": true
    },
  ];
