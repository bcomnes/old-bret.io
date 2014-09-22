---
h: entry
date: "2014-09-22T16:24:20+00:00"
tags: null
location: null
place-name: null
in-reply-to: "https://kylewm.com/reply/2014/09/22/1/i-understand-the-code-but-not-why"
reply_url: "https://kylewm.com/reply/2014/09/22/1/i-understand-the-code-but-not-why"
reply_title: kylewm.com
syndicate-to: null
client_id: "https://quill.p3k.io"
client: quill.p3k.io
scope: post
files: null
published: true
syndicate: null
---
Javascript can be confusing

{% highlight js %}
function splitter (obj, field) {
  return function(cb) {
    obj[field] = obj[field].split(',');
    cb();
  }
}
{% endhighlight %}
