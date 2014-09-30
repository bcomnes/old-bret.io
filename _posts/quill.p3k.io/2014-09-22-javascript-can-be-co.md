---
h: entry
date: "2014-09-22T16:24:20+00:00"
tags: null
location: null
place-name: null
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
