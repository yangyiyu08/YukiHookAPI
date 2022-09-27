import{_ as e,o as s,c as o,a}from"./app.fb8271cf.js";const c={},n=a(`<div class="custom-container warning"><p class="custom-container-title">Notice</p><p>The English translation of this page has not been completed, you are welcome to contribute translations to us.</p><p>You can use the <strong>Chrome Translation Plugin</strong> to translate entire pages for reference.</p></div><h1 id="modifierrules-class" tabindex="-1"><a class="header-anchor" href="#modifierrules-class" aria-hidden="true">#</a> ModifierRules <span class="symbol">- class</span></h1><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">ModifierRules</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">constructor</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.67</code> <code>added</code></p><p><code>v1.1.0</code> <code>modified</code></p><p>\u65B0\u589E <code>Class</code> \u7684\u63CF\u8FF0\u7B26\u5224\u65AD</p><p>\u4F5C\u4E3A lambda \u6574\u4F53\u5224\u65AD\u6761\u4EF6\u4F7F\u7528</p><p>\u79FB\u52A8\u5230 base \u5305\u540D</p><p>\u79C1\u6709\u5316\u6784\u9020\u65B9\u6CD5</p><p><strong>Function Illustrate</strong></p><blockquote><p>\u8FD9\u662F\u4E00\u4E2A <code>Class</code>\u3001<code>Member</code> \u63CF\u8FF0\u7B26\u6761\u4EF6\u5B9E\u73B0\u7C7B\u3002</p></blockquote><p>\u53EF\u5BF9 R8 \u6DF7\u6DC6\u540E\u7684 <code>Class</code>\u3001<code>Member</code> \u8FDB\u884C\u66F4\u52A0\u8BE6\u7EC6\u7684\u5B9A\u4F4D\u3002</p><h2 id="ispublic-i-ext-field" tabindex="-1"><a class="header-anchor" href="#ispublic-i-ext-field" aria-hidden="true">#</a> isPublic <span class="symbol">- i-ext-field</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> isPublic</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">Boolean</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.67</code> <code>added</code></p><p><code>v1.1.0</code> <code>modified</code></p><p>\u7EDF\u4E00\u5408\u5E76\u5230\u6269\u5C55\u65B9\u6CD5\u5E76\u6539\u540D</p><p><strong>Function Illustrate</strong></p><blockquote><p><code>Class</code>\u3001<code>Member</code> \u7C7B\u578B\u662F\u5426\u5305\u542B <code>public</code>\u3002</p></blockquote><h2 id="isprivate-i-ext-field" tabindex="-1"><a class="header-anchor" href="#isprivate-i-ext-field" aria-hidden="true">#</a> isPrivate <span class="symbol">- i-ext-field</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> isPrivate</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">Boolean</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.67</code> <code>added</code></p><p><code>v1.1.0</code> <code>modified</code></p><p>\u7EDF\u4E00\u5408\u5E76\u5230\u6269\u5C55\u65B9\u6CD5\u5E76\u6539\u540D</p><p><strong>Function Illustrate</strong></p><blockquote><p><code>Class</code>\u3001<code>Member</code> \u7C7B\u578B\u662F\u5426\u5305\u542B <code>private</code>\u3002</p></blockquote><h2 id="isprotected-i-ext-field" tabindex="-1"><a class="header-anchor" href="#isprotected-i-ext-field" aria-hidden="true">#</a> isProtected <span class="symbol">- i-ext-field</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> isProtected</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">Boolean</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.67</code> <code>added</code></p><p><code>v1.1.0</code> <code>modified</code></p><p>\u7EDF\u4E00\u5408\u5E76\u5230\u6269\u5C55\u65B9\u6CD5\u5E76\u6539\u540D</p><p><strong>Function Illustrate</strong></p><blockquote><p><code>Class</code>\u3001<code>Member</code> \u7C7B\u578B\u662F\u5426\u5305\u542B <code>protected</code>\u3002</p></blockquote><h2 id="isstatic-i-ext-field" tabindex="-1"><a class="header-anchor" href="#isstatic-i-ext-field" aria-hidden="true">#</a> isStatic <span class="symbol">- i-ext-field</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> isStatic</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">Boolean</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.67</code> <code>added</code></p><p><code>v1.1.0</code> <code>modified</code></p><p>\u7EDF\u4E00\u5408\u5E76\u5230\u6269\u5C55\u65B9\u6CD5\u5E76\u6539\u540D</p><p><strong>Function Illustrate</strong></p><blockquote><p><code>Class</code>\u3001<code>Member</code> \u7C7B\u578B\u662F\u5426\u5305\u542B <code>static</code>\u3002</p></blockquote><p>\u5BF9\u4E8E\u4EFB\u610F\u7684\u9759\u6001 <code>Class</code>\u3001<code>Member</code> \u53EF\u6DFB\u52A0\u6B64\u63CF\u8FF0\u8FDB\u884C\u786E\u5B9A\u3002</p><div class="custom-container warning"><p class="custom-container-title">Notice</p><p>Kotlin \u2192 Jvm \u540E\u7684 <strong>object</strong> \u7C7B\u4E2D\u7684\u65B9\u6CD5\u5E76\u4E0D\u662F\u9759\u6001\u7684\u3002</p></div><h2 id="isfinal-i-ext-field" tabindex="-1"><a class="header-anchor" href="#isfinal-i-ext-field" aria-hidden="true">#</a> isFinal <span class="symbol">- i-ext-field</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> isFinal</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">Boolean</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.67</code> <code>added</code></p><p><code>v1.1.0</code> <code>modified</code></p><p>\u7EDF\u4E00\u5408\u5E76\u5230\u6269\u5C55\u65B9\u6CD5\u5E76\u6539\u540D</p><p><strong>Function Illustrate</strong></p><blockquote><p><code>Class</code>\u3001<code>Member</code> \u7C7B\u578B\u662F\u5426\u5305\u542B <code>final</code>\u3002</p></blockquote><div class="custom-container warning"><p class="custom-container-title">Notice</p><p>Kotlin \u2192 Jvm \u540E\u6CA1\u6709 <strong>open</strong> \u7B26\u53F7\u6807\u8BC6\u7684 <strong>Class</strong>\u3001<strong>Member</strong> \u548C\u6CA1\u6709\u4EFB\u4F55\u5173\u8054\u7684 <strong>Class</strong>\u3001<strong>Member</strong> \u90FD\u5C06\u4E3A <strong>final</strong>\u3002</p></div><h2 id="issynchronized-i-ext-field" tabindex="-1"><a class="header-anchor" href="#issynchronized-i-ext-field" aria-hidden="true">#</a> isSynchronized <span class="symbol">- i-ext-field</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> isSynchronized</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">Boolean</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.67</code> <code>added</code></p><p><code>v1.1.0</code> <code>modified</code></p><p>\u7EDF\u4E00\u5408\u5E76\u5230\u6269\u5C55\u65B9\u6CD5\u5E76\u6539\u540D</p><p><strong>Function Illustrate</strong></p><blockquote><p><code>Class</code>\u3001<code>Member</code> \u7C7B\u578B\u662F\u5426\u5305\u542B <code>synchronized</code>\u3002</p></blockquote><h2 id="isvolatile-i-ext-field" tabindex="-1"><a class="header-anchor" href="#isvolatile-i-ext-field" aria-hidden="true">#</a> isVolatile <span class="symbol">- i-ext-field</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> isVolatile</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">Boolean</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.67</code> <code>added</code></p><p><code>v1.1.0</code> <code>modified</code></p><p>\u7EDF\u4E00\u5408\u5E76\u5230\u6269\u5C55\u65B9\u6CD5\u5E76\u6539\u540D</p><p><strong>Function Illustrate</strong></p><blockquote><p><code>Field</code> \u7C7B\u578B\u662F\u5426\u5305\u542B <code>volatile</code>\u3002</p></blockquote><h2 id="istransient-i-ext-field" tabindex="-1"><a class="header-anchor" href="#istransient-i-ext-field" aria-hidden="true">#</a> isTransient <span class="symbol">- i-ext-field</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> isTransient</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">Boolean</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.67</code> <code>added</code></p><p><code>v1.1.0</code> <code>modified</code></p><p>\u7EDF\u4E00\u5408\u5E76\u5230\u6269\u5C55\u65B9\u6CD5\u5E76\u6539\u540D</p><p><strong>Function Illustrate</strong></p><blockquote><p><code>Field</code> \u7C7B\u578B\u662F\u5426\u5305\u542B <code>transient</code>\u3002</p></blockquote><h2 id="isnative-i-ext-field" tabindex="-1"><a class="header-anchor" href="#isnative-i-ext-field" aria-hidden="true">#</a> isNative <span class="symbol">- i-ext-field</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> isNative</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">Boolean</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.67</code> <code>added</code></p><p><code>v1.1.0</code> <code>modified</code></p><p>\u7EDF\u4E00\u5408\u5E76\u5230\u6269\u5C55\u65B9\u6CD5\u5E76\u6539\u540D</p><p><strong>Function Illustrate</strong></p><blockquote><p><code>Method</code> \u7C7B\u578B\u662F\u5426\u5305\u542B <code>native</code>\u3002</p></blockquote><p>\u5BF9\u4E8E\u4EFB\u610F JNI \u5BF9\u63A5\u7684 <code>Method</code> \u53EF\u6DFB\u52A0\u6B64\u63CF\u8FF0\u8FDB\u884C\u786E\u5B9A\u3002</p><h2 id="isinterface-i-ext-field" tabindex="-1"><a class="header-anchor" href="#isinterface-i-ext-field" aria-hidden="true">#</a> isInterface <span class="symbol">- i-ext-field</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> isInterface</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">Boolean</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.67</code> <code>added</code></p><p><code>v1.1.0</code> <code>modified</code></p><p>\u7EDF\u4E00\u5408\u5E76\u5230\u6269\u5C55\u65B9\u6CD5\u5E76\u6539\u540D</p><p><strong>Function Illustrate</strong></p><blockquote><p><code>Class</code> \u7C7B\u578B\u662F\u5426\u5305\u542B <code>interface</code>\u3002</p></blockquote><h2 id="isabstract-i-ext-field" tabindex="-1"><a class="header-anchor" href="#isabstract-i-ext-field" aria-hidden="true">#</a> isAbstract <span class="symbol">- i-ext-field</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> isAbstract</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">Boolean</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.67</code> <code>added</code></p><p><code>v1.1.0</code> <code>modified</code></p><p>\u7EDF\u4E00\u5408\u5E76\u5230\u6269\u5C55\u65B9\u6CD5\u5E76\u6539\u540D</p><p><strong>Function Illustrate</strong></p><blockquote><p><code>Class</code>\u3001<code>Member</code> \u7C7B\u578B\u662F\u5426\u5305\u542B <code>abstract</code>\u3002</p></blockquote><p>\u5BF9\u4E8E\u4EFB\u610F\u7684\u62BD\u8C61 <code>Class</code>\u3001<code>Member</code> \u53EF\u6DFB\u52A0\u6B64\u63CF\u8FF0\u8FDB\u884C\u786E\u5B9A\u3002</p><h2 id="isstrict-i-ext-field" tabindex="-1"><a class="header-anchor" href="#isstrict-i-ext-field" aria-hidden="true">#</a> isStrict <span class="symbol">- i-ext-field</span></h2><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> isStrict</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">Boolean</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.67</code> <code>added</code></p><p><code>v1.1.0</code> <code>modified</code></p><p>\u7EDF\u4E00\u5408\u5E76\u5230\u6269\u5C55\u65B9\u6CD5\u5E76\u6539\u540D</p><p><strong>Function Illustrate</strong></p><blockquote><p><code>Class</code>\u3001<code>Member</code> \u7C7B\u578B\u662F\u5426\u5305\u542B <code>strictfp</code>\u3002</p></blockquote>`,114),l=[n];function d(t,p){return s(),o("div",null,l)}const r=e(c,[["render",d],["__file","ModifierRules.html.vue"]]);export{r as default};