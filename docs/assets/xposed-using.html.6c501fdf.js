import{_ as s,o as n,c as o,a}from"./app.3b272ad4.js";const e={},l=a(`<h1 id="\u4F5C\u4E3A-xposed-\u6A21\u5757\u4F7F\u7528\u7684\u76F8\u5173\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u4E3A-xposed-\u6A21\u5757\u4F7F\u7528\u7684\u76F8\u5173\u914D\u7F6E" aria-hidden="true">#</a> \u4F5C\u4E3A Xposed \u6A21\u5757\u4F7F\u7528\u7684\u76F8\u5173\u914D\u7F6E</h1><blockquote><p>\u8FD9\u91CC\u4ECB\u7ECD\u4E86 <code>YukiHookAPI</code> \u4F5C\u4E3A Xposed \u6A21\u5757\u4F7F\u7528\u7684\u76F8\u5173\u914D\u7F6E\u65B9\u6CD5\u3002</p></blockquote><h2 id="\u4F9D\u8D56\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4F9D\u8D56\u914D\u7F6E" aria-hidden="true">#</a> \u4F9D\u8D56\u914D\u7F6E</h2><blockquote><p>\u4F5C\u4E3A Xposed \u6A21\u5757\uFF0C<code>YukiHookAPI</code> \u63D0\u4F9B\u4E86\u4E00\u4E2A\u81EA\u52A8\u5904\u7406\u7A0B\u5E8F\u3002</p></blockquote><p>\u4F60\u9700\u8981\u5728\u4F60\u7684 <code>build.gradle</code> \u4E2D\u96C6\u6210 <code>com.highcapable.yukihookapi:ksp-xposed</code> \u4F9D\u8D56\u7684\u6700\u65B0\u7248\u672C\u3002</p><h2 id="\u81EA\u5B9A\u4E49\u5904\u7406\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u5904\u7406\u7A0B\u5E8F" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u5904\u7406\u7A0B\u5E8F</h2><blockquote><p>\u4F60\u53EF\u4EE5\u5BF9 <code>YukiHookAPI</code> \u5C06\u5982\u4F55\u751F\u6210 <code>xposed_init</code> \u5165\u53E3\u8FDB\u884C\u76F8\u5173\u914D\u7F6E\u3002</p></blockquote><h3 id="injectyukihookwithxposed-\u6CE8\u89E3" tabindex="-1"><a class="header-anchor" href="#injectyukihookwithxposed-\u6CE8\u89E3" aria-hidden="true">#</a> InjectYukiHookWithXposed \u6CE8\u89E3</h3><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">annotation</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">InjectYukiHookWithXposed</span><span style="color:#ADBAC7;">(</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> sourcePath</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">String</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> modulePackageName</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">String</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> entryClassName</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">String</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> isUsingResourcesHook</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">Boolean</span></span>
<span class="line"><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><code>@InjectYukiHookWithXposed</code> \u6CE8\u89E3\u662F\u4E00\u4E2A\u6807\u8BB0\u6A21\u5757 Hook \u5165\u53E3\u7684\u91CD\u8981\u6CE8\u89E3\u3002</p><div class="custom-container danger"><p class="custom-container-title">\u7279\u522B\u6CE8\u610F</p><p><strong>@InjectYukiHookWithXposed</strong> \u6CE8\u89E3\u7684 <strong>Class</strong> \u5FC5\u987B\u5B9E\u73B0 <strong>IYukiHookXposedInit</strong> \u63A5\u53E3\u3002</p><p>\u5728\u4F60\u5F53\u524D\u9879\u76EE\u4E2D\u7684\u6240\u6709 <strong>Class</strong> \u6807\u8BB0\u4E2D<strong>\u53EA\u80FD\u5B58\u5728\u4E00\u6B21</strong>\uFF0C\u82E5\u5B58\u5728\u591A\u4E2A\u58F0\u660E\u81EA\u52A8\u5904\u7406\u7A0B\u5E8F<u><strong>\u4F1A\u5728\u7F16\u8BD1\u65F6\u629B\u51FA\u5F02\u5E38</strong></u>\uFF0C\u4F60\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5176\u76F8\u5173\u53C2\u6570\u3002</p></div><h4 id="sourcepath-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#sourcepath-\u53C2\u6570" aria-hidden="true">#</a> sourcePath \u53C2\u6570</h4><p><code>sourcePath</code> \u53C2\u6570\u51B3\u5B9A\u4E86\u81EA\u52A8\u5904\u7406\u7A0B\u5E8F\u81EA\u52A8\u67E5\u627E\u5E76\u5339\u914D\u4F60\u5F53\u524D\u9879\u76EE\u8DEF\u5F84\u7684\u91CD\u8981\u6807\u8BC6\uFF0C\u6B64\u53C2\u6570\u7684\u5185\u5BB9\u4E3A\u76F8\u5BF9\u8DEF\u5F84\u5339\u914D\uFF0C\u9ED8\u8BA4\u53C2\u6570\u4E3A <code>src/main</code>\u3002</p><div class="custom-container danger"><p class="custom-container-title">\u7279\u522B\u6CE8\u610F</p><p>\u5982\u679C\u4F60\u7684\u9879\u76EE\u4E0D\u5728 <strong>../src/main..</strong> \u6216\u4F60\u624B\u52A8\u4F7F\u7528 <strong>sourceSets</strong> \u8BBE\u7F6E\u4E86\u9879\u76EE\u8DEF\u5F84\uFF0C\u4F60\u5C31\u9700\u8981\u624B\u52A8\u8BBE\u7F6E <strong>sourcePath</strong> \u53C2\u6570\uFF0C\u5426\u5219\u81EA\u52A8\u5904\u7406\u7A0B\u5E8F\u5C06\u65E0\u6CD5\u8BC6\u522B\u4F60\u7684\u9879\u76EE\u8DEF\u5F84\u5E76<u><strong>\u4F1A\u5728\u7F16\u8BD1\u65F6\u629B\u51FA\u5F02\u5E38</strong></u>\u3002</p></div><blockquote><p>\u793A\u4F8B\u5982\u4E0B</p></blockquote><div class="language-kotlin ext-kt line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">@InjectYukiHookWithXposed</span><span style="color:#ADBAC7;">(</span><span style="color:#6CB6FF;">sourcePath</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;src/custom&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>sourcePath</code> \u4F7F\u7528\u7684\u6587\u4EF6\u8DEF\u5F84\u5206\u9694\u7B26\u5199\u6CD5\u6839\u636E <code>Windows</code> \u548C <code>Unix</code> \u5C06\u81EA\u52A8\u8FDB\u884C\u8BC6\u522B\uFF0C\u4F7F\u7528 <code>/</code> \u6216 <code>\\</code> \u5747\u53EF\u3002</p><h4 id="modulepackagename-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#modulepackagename-\u53C2\u6570" aria-hidden="true">#</a> modulePackageName \u53C2\u6570</h4><p><code>modulePackageName</code> \u662F\u4F60\u5F53\u524D\u9879\u76EE\u7684 <code>applicationId</code>\uFF0C\u4E5F\u5C31\u662F\u4F60\u7684\u6A21\u5757\u5305\u540D (\u6700\u7EC8\u751F\u6210\u7684\u5E94\u7528\u5305\u540D)\uFF0C\u7559\u7A7A\u6216\u4E0D\u586B\u65F6\u81EA\u52A8\u5904\u7406\u7A0B\u5E8F\u5C06\u5BF9\u5F53\u524D\u9879\u76EE\u6587\u4EF6\u8FDB\u884C\u5206\u6790\u5E76\u751F\u6210\u3002</p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u82E5\u4F60\u60F3\u4F7F\u7528\u6A21\u5757\u5305\u540D\u81EA\u52A8\u751F\u6210\uFF0C\u4F60\u9700\u8981\u786E\u4FDD\u4F60\u7684\u9879\u76EE\u547D\u540D\u7A7A\u95F4\u5728 <strong>AndroidManifest.xml</strong>\u3001<strong>build.gradle</strong> \u6216 <strong>build.gradle.kts</strong> \u4E2D\u5B58\u5728\u5982\u4E0B\u4EFB\u610F\u5B9A\u4E49\u65B9\u5F0F\u3002</p></div><p>\u793A\u4F8B\u547D\u540D\u7A7A\u95F4 <code>com.example.demo</code>\uFF0C\u4EE5\u4E0B\u5B9A\u4E49\u65B9\u5F0F\u4EFB\u9009\u5176\u4E00\u3002</p><p>\u4EE5\u4E0B\u5B9A\u4E49\u65B9\u5F0F\u4EC5\u4F9B\u53C2\u8003\uFF0C\u901A\u5E38\u60C5\u51B5\u4E0B<strong>\u53EA\u8981\u4F60\u7684\u9879\u76EE\u80FD\u591F\u6B63\u5E38\u751F\u6210 <code>BuildConfig.java</code> \u6587\u4EF6\uFF0C\u5C31\u4E0D\u9700\u8981\u505A\u989D\u5916\u64CD\u4F5C</strong>\u3002</p><blockquote><p><code>AndroidManifest.xml</code> \u793A\u4F8B</p></blockquote><div class="language-xml ext-xml line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">&lt;</span><span style="color:#8DDB8C;">manifest</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">xmlns:android</span><span style="color:#ADBAC7;">=</span><span style="color:#96D0FF;">&quot;http://schemas.android.com/apk/res/android&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#6CB6FF;">package</span><span style="color:#ADBAC7;">=</span><span style="color:#96D0FF;">&quot;com.example.demo&quot;</span><span style="color:#ADBAC7;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>build.gradle</code> \u793A\u4F8B</p></blockquote><div class="language-groovy ext-groovy line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">android {</span></span>
<span class="line"><span style="color:#ADBAC7;">    namespace </span><span style="color:#96D0FF;">&#39;com.example.demo&#39;</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>build.gradle.kts</code> \u793A\u4F8B</p></blockquote><div class="language-kotlin ext-kt line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">android {</span></span>
<span class="line"><span style="color:#ADBAC7;">    namespace </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;com.example.demo&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u82E5\u4F60\u7684\u6A21\u5757\u5305\u540D\u662F\u975E\u5E38\u89C4\u624B\u6BB5\u8FDB\u884C\u81EA\u52A8\u751F\u6210\u7684\uFF0C\u6216\u4F60\u8BA4\u4E3A\u6709\u5FC5\u8981\u624B\u52A8\u5B9A\u4E49\u6A21\u5757\u5305\u540D\uFF0C\u90A3\u4E48\u4F60\u53EF\u4EE5\u76F4\u63A5\u8BBE\u7F6E <code>modulePackageName</code> \u7684\u53C2\u6570\u3002</p><blockquote><p>\u793A\u4F8B\u5982\u4E0B</p></blockquote><div class="language-kotlin ext-kt line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">@InjectYukiHookWithXposed</span><span style="color:#ADBAC7;">(</span><span style="color:#6CB6FF;">modulePackageName</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;com.example.demo&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u53EA\u8981\u4F60\u81EA\u5B9A\u4E49\u4E86 <code>modulePackageName</code> \u7684\u53C2\u6570\uFF0C\u4F60\u5C31\u4F1A\u5728\u7F16\u8BD1\u65F6\u6536\u5230\u8B66\u544A\u3002</p><blockquote><p>\u793A\u4F8B\u5982\u4E0B</p></blockquote><div class="language-text ext-text"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#adbac7;">You set the customize module package name to &quot;com.example.demo&quot;, please check for yourself if it is correct</span></span>
<span class="line"><span style="color:#adbac7;"></span></span></code></pre></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u624B\u52A8\u5B9A\u4E49\u7684\u6A21\u5757\u5305\u540D\u9664\u4E86\u683C\u5F0F\u4E4B\u5916\uFF0C\u81EA\u52A8\u5904\u7406\u7A0B\u5E8F\u5C06\u4E0D\u4F1A\u518D\u68C0\u67E5\u6A21\u5757\u5305\u540D\u662F\u5426\u6B63\u786E\uFF0C\u9700\u8981\u4F60\u81EA\u884C\u786E\u8BA4\u5176\u6709\u6548\u6027\u3002</p></div><h4 id="entryclassname-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#entryclassname-\u53C2\u6570" aria-hidden="true">#</a> entryClassName \u53C2\u6570</h4><p><code>entryClassName</code> \u51B3\u5B9A\u4E86\u81EA\u52A8\u5904\u7406\u7A0B\u5E8F\u5982\u4F55\u751F\u6210 <code>xposed_init</code> \u4E2D\u7684\u5165\u53E3\u7C7B\u540D\uFF0C\u9ED8\u8BA4\u4F1A\u4F7F\u7528\u4F60\u7684\u5165\u53E3\u7C7B\u5305\u540D\u63D2\u5165 <code>_YukiHookXposedInit</code> \u540E\u7F00\u8FDB\u884C\u751F\u6210\u3002</p><p>\u5047\u8BBE\u8FD9\u662F\u4F60\u7684\u5165\u53E3\u7C7B\u3002</p><blockquote><p>\u793A\u4F8B\u5982\u4E0B</p></blockquote><div class="language-kotlin ext-kt line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">@InjectYukiHookWithXposed</span></span>
<span class="line"><span style="color:#F47067;">object</span><span style="color:#ADBAC7;"> HookEntry </span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">IYukiHookXposedInit</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Xposed \u5165\u53E3\u7C7B\u5904\u7406\u5982\u4E0B\u3002</p><blockquote><p>\u793A\u4F8B\u5982\u4E0B</p></blockquote><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">HookEntry_YukiHookXposedInit</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">IXposedHookZygoteInit</span><span style="color:#ADBAC7;">, </span><span style="color:#F69D50;">IXposedHookLoadPackage</span><span style="color:#ADBAC7;">, ...</span></span>
<span class="line"></span></code></pre></div><p>\u7F16\u8BD1\u540E\u7684\u7C7B\u540D\u7ED3\u6784\u5982\u4E0B\u3002</p><blockquote><p>\u793A\u4F8B\u5982\u4E0B</p></blockquote><div class="language-text ext-text"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#adbac7;">...hook.HookEntry \u2190 \u4F60\u7684\u5165\u53E3\u7C7B</span></span>
<span class="line"><span style="color:#adbac7;">...hook.HookEntry_Impl \u2190 \u81EA\u52A8\u751F\u6210\u7684 Impl \u7C7B</span></span>
<span class="line"><span style="color:#adbac7;">...hook.HookEntry_YukiHookXposedInit \u2190 \u81EA\u52A8\u751F\u6210\u7684 Xposed \u5165\u53E3\u7C7B</span></span>
<span class="line"><span style="color:#adbac7;"></span></span></code></pre></div><p>\u6211\u4EEC\u73B0\u5728\u5B9A\u4E49\u5165\u53E3\u7C7B\u540D\u79F0\u4E3A <code>HookXposedEntry</code>\u3002</p><blockquote><p>\u793A\u4F8B\u5982\u4E0B</p></blockquote><div class="language-kotlin ext-kt line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">@InjectYukiHookWithXposed</span><span style="color:#ADBAC7;">(</span><span style="color:#6CB6FF;">entryClassName</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;HookXposedEntry&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#F47067;">object</span><span style="color:#ADBAC7;"> HookEntry </span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">IYukiHookXposedInit</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Xposed \u5165\u53E3\u7C7B\u5904\u7406\u5982\u4E0B\u3002</p><blockquote><p>\u793A\u4F8B\u5982\u4E0B</p></blockquote><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">HookXposedEntry</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">IXposedHookZygoteInit</span><span style="color:#ADBAC7;">, </span><span style="color:#F69D50;">IXposedHookLoadPackage</span><span style="color:#ADBAC7;">, ...</span></span>
<span class="line"></span></code></pre></div><p>\u7F16\u8BD1\u540E\u7684\u7C7B\u540D\u7ED3\u6784\u5982\u4E0B\u3002</p><blockquote><p>\u793A\u4F8B\u5982\u4E0B</p></blockquote><div class="language-text ext-text"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#adbac7;">...hook.HookEntry \u2190 \u4F60\u7684\u5165\u53E3\u7C7B</span></span>
<span class="line"><span style="color:#adbac7;">...hook.HookEntry_Impl \u2190 \u81EA\u52A8\u751F\u6210\u7684 Impl \u7C7B</span></span>
<span class="line"><span style="color:#adbac7;">...hook.HookXposedEntry \u2190 \u81EA\u52A8\u751F\u6210\u7684 Xposed \u5165\u53E3\u7C7B</span></span>
<span class="line"><span style="color:#adbac7;"></span></span></code></pre></div><div class="custom-container tip"><p class="custom-container-title">\u5C0F\u63D0\u793A</p><p>\u5165\u53E3\u7C7B\u53EF\u4EE5\u4F7F\u7528 <strong>class</strong> \u6216 <strong>object</strong> \u5B9A\u4E49\uFF0C\u4F46\u662F\u5EFA\u8BAE\u4F7F\u7528 <strong>object</strong> \u5B9A\u4E49\u6765\u4FDD\u8BC1\u6BCF\u4E00\u4E2A\u6CE8\u5165\u7684\u8FDB\u7A0B\u90FD\u662F\u5355\u4F8B\u8FD0\u884C\u3002</p></div><div class="custom-container danger"><p class="custom-container-title">\u7279\u522B\u6CE8\u610F</p><p>\u4F60\u5B9A\u4E49\u7684 <strong>entryClassName</strong> \u4E0D\u53EF\u4E0E <strong>xposed_init</strong> \u4E2D\u7684\u7C7B\u540D\u76F8\u540C\uFF0C\u5426\u5219\u81EA\u52A8\u5904\u7406\u7A0B\u5E8F<u><strong>\u4F1A\u5728\u7F16\u8BD1\u65F6\u629B\u51FA\u5F02\u5E38</strong></u>\u3002</p></div><h4 id="isusingresourceshook-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#isusingresourceshook-\u53C2\u6570" aria-hidden="true">#</a> isUsingResourcesHook \u53C2\u6570</h4><p><code>isUsingResourcesHook</code> \u51B3\u5B9A\u4E86\u81EA\u52A8\u5904\u7406\u7A0B\u5E8F\u662F\u5426\u751F\u6210\u9488\u5BF9 Resources Hook \u7684\u76F8\u5173\u4EE3\u7801\uFF0C\u6B64\u529F\u80FD\u9ED8\u8BA4\u662F\u542F\u7528\u7684\u3002</p><p>\u542F\u7528\u540E\u751F\u6210\u7684\u5165\u53E3\u7C7B\u5C06\u4E3A\u5982\u4E0B\u6240\u793A\u3002</p><blockquote><p>\u793A\u4F8B\u5982\u4E0B</p></blockquote><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">_YukiHookXposedInit</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">IXposedHookZygoteInit</span><span style="color:#ADBAC7;">, </span><span style="color:#F69D50;">IXposedHookLoadPackage</span><span style="color:#ADBAC7;">, </span><span style="color:#F69D50;">IXposedHookInitPackageResources</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">initZygote</span><span style="color:#ADBAC7;">(sparam</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">IXposedHookZygoteInit.StartupParam?</span><span style="color:#ADBAC7;">) {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// ...</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">handleLoadPackage</span><span style="color:#ADBAC7;">(lpparam</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">XC_LoadPackage.LoadPackageParam?</span><span style="color:#ADBAC7;">) {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// ...</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">handleInitPackageResources</span><span style="color:#ADBAC7;">(resparam</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">XC_InitPackageResources.InitPackageResourcesParam?</span><span style="color:#ADBAC7;">) {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// ...</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre></div><p>\u82E5\u4F60\u5F53\u524D\u7684\u9879\u76EE\u5E76\u4E0D\u9700\u8981\u7528\u5230 Resources Hook\uFF0C\u53EF\u4EE5\u8BBE\u7F6E <code>isUsingResourcesHook = false</code> \u6765\u5173\u95ED\u81EA\u52A8\u751F\u6210\u3002</p><blockquote><p>\u793A\u4F8B\u5982\u4E0B</p></blockquote><div class="language-kotlin ext-kt line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">@InjectYukiHookWithXposed</span><span style="color:#ADBAC7;">(</span><span style="color:#6CB6FF;">isUsingResourcesHook</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">false</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5173\u95ED\u540E\u751F\u6210\u7684\u5165\u53E3\u7C7B\u5C06\u4E3A\u5982\u4E0B\u6240\u793A\u3002</p><blockquote><p>\u793A\u4F8B\u5982\u4E0B</p></blockquote><div class="language-kotlin ext-kt"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">_YukiHookXposedInit</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">IXposedHookZygoteInit</span><span style="color:#ADBAC7;">, </span><span style="color:#F69D50;">IXposedHookLoadPackage</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">initZygote</span><span style="color:#ADBAC7;">(sparam</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">IXposedHookZygoteInit.StartupParam?</span><span style="color:#ADBAC7;">) {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// ...</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">handleLoadPackage</span><span style="color:#ADBAC7;">(lpparam</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">XC_LoadPackage.LoadPackageParam?</span><span style="color:#ADBAC7;">) {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// ...</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre></div><div class="custom-container tip"><p class="custom-container-title">\u5C0F\u63D0\u793A</p><p>\u7531\u4E8E Xposed \u5165\u53E3\u7C7B\u662F\u88AB <strong>YukiHookAPI</strong> \u52A8\u6001\u751F\u6210\u7684\uFF0C\u5B83\u4F1A\u540C\u65F6\u751F\u6210\u5982\u4E0B\u4E24\u4E2A\u6587\u4EF6\u3002</p><ul><li><p><strong>assets/xposed_init</strong></p></li><li><p><strong>resources/META-INF/yukihookapi_init</strong></p></li></ul><p>\u5982\u679C\u4F60\u6B63\u5728\u4F7F\u7528 <strong>Git</strong> \u4EE3\u7801\u63A7\u5236\u7CFB\u7EDF\uFF0C\u4F60\u53EF\u4EE5\u5C06\u8FD9\u4E24\u4E2A\u6587\u4EF6\u6DFB\u52A0\u5230 <strong>.gitignore</strong> \u6587\u4EF6\u4E2D\u3002</p></div><h3 id="iyukihookxposedinit-\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#iyukihookxposedinit-\u63A5\u53E3" aria-hidden="true">#</a> IYukiHookXposedInit \u63A5\u53E3</h3><p><code>IYukiHookXposedInit</code> \u63A5\u53E3\u4E3A\u4F60\u7684 Hook \u5165\u53E3\u7C7B\u5FC5\u987B\u5B9E\u73B0\u7684\u63A5\u53E3\uFF0C\u8FD9\u662F\u4F60\u7684\u6A21\u5757\u5F00\u59CB Hook \u7684\u8D77\u70B9\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u5C0F\u63D0\u793A</p><p>\u66F4\u591A\u529F\u80FD\u8BF7\u53C2\u8003 <a href="../api/public/com/highcapable/yukihookapi/hook/xposed/proxy/IYukiHookXposedInit">IYukiHookXposedInit</a>\u3002</p></div><p>\u5F53\u4F60\u7684\u6A21\u5757\u88AB Xposed \u88C5\u8F7D\u540E\uFF0C<code>onHook</code> \u65B9\u6CD5\u5C06\u4F1A\u88AB\u56DE\u8C03\uFF0C\u4F60\u9700\u8981\u5728\u6B64\u65B9\u6CD5\u4E2D\u5F00\u59CB\u4F7F\u7528 <code>YukiHookAPI</code>\u3002</p><blockquote><p>\u57FA\u672C\u7684\u8C03\u7528\u6D41\u7A0B\u4E3A <code>_YukiHookXposedInit</code> \u2192 <code>IYukiHookXposedInit.onXposedEvent</code> \u2192 <code>IYukiHookXposedInit.onInit</code> \u2192 <code>IYukiHookXposedInit.onHook</code></p></blockquote><p>\u8BE6\u60C5\u8BF7\u53C2\u8003 <a href="../config/api-example">API \u57FA\u672C\u914D\u7F6E</a>\u3002</p><h2 id="\u539F\u751F-xposed-api-\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u539F\u751F-xposed-api-\u4E8B\u4EF6" aria-hidden="true">#</a> \u539F\u751F Xposed API \u4E8B\u4EF6</h2><p>\u82E5\u4F60\u5F53\u524D\u7684 Xposed \u6A21\u5757\u4F7F\u7528\u4E86\u7B2C\u4E09\u65B9\u7684\u8D44\u6E90\uFF0C\u4F46\u662F\u77ED\u65F6\u95F4\u5185\u53EF\u80FD\u65E0\u6CD5\u8F6C\u79FB\u5B83\u4EEC\uFF0C\u6B64\u65F6\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>onXposedEvent</code> \u5B9E\u73B0\u76D1\u542C\u539F\u751F Xposed API \u7684\u5168\u90E8\u88C5\u8F7D\u4E8B\u4EF6\u3002</p><blockquote><p>\u793A\u4F8B\u5982\u4E0B</p></blockquote><div class="language-kotlin ext-kt line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F47067;">@InjectYukiHookWithXposed</span></span>
<span class="line"><span style="color:#F47067;">object</span><span style="color:#ADBAC7;"> HookEntry </span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">IYukiHookXposedInit</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">onHook</span><span style="color:#ADBAC7;">() {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">onXposedEvent</span><span style="color:#ADBAC7;">() {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// \u76D1\u542C\u539F\u751F Xposed API \u7684\u88C5\u8F7D\u4E8B\u4EF6</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F69D50;">YukiXposedEvent</span><span style="color:#ADBAC7;">.events {</span></span>
<span class="line"><span style="color:#ADBAC7;">            onInitZygote {</span></span>
<span class="line"><span style="color:#ADBAC7;">                </span><span style="color:#768390;">// it \u5BF9\u8C61\u5373 [StartupParam]</span></span>
<span class="line"><span style="color:#ADBAC7;">            }</span></span>
<span class="line"><span style="color:#ADBAC7;">            onHandleLoadPackage {</span></span>
<span class="line"><span style="color:#ADBAC7;">                </span><span style="color:#768390;">// it \u5BF9\u8C61\u5373 [LoadPackageParam]</span></span>
<span class="line"><span style="color:#ADBAC7;">            }</span></span>
<span class="line"><span style="color:#ADBAC7;">            onHandleInitPackageResources {</span></span>
<span class="line"><span style="color:#ADBAC7;">                </span><span style="color:#768390;">// it \u5BF9\u8C61\u5373 [InitPackageResourcesParam]</span></span>
<span class="line"><span style="color:#ADBAC7;">            }</span></span>
<span class="line"><span style="color:#ADBAC7;">        }</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>onXposedEvent</code> \u4E0E <code>onHook</code> \u65B9\u6CD5\u5B8C\u5168\u72EC\u7ACB\u5B58\u5728\uFF0C\u4E92\u4E0D\u5F71\u54CD\uFF0C\u4F60\u53EF\u4EE5\u7EE7\u7EED\u5728 <code>onHook</code> \u65B9\u6CD5\u4E2D\u4F7F\u7528 <code>YukiHookAPI</code>\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u5C0F\u63D0\u793A</p><p>\u66F4\u591A\u529F\u80FD\u8BF7\u53C2\u8003 <a href="../api/public/com/highcapable/yukihookapi/hook/xposed/proxy/IYukiHookXposedInit#onxposedevent-method">IYukiHookXposedInit.onXposedEvent</a> \u65B9\u6CD5\u3002</p></div>`,81),p=[l];function c(t,r){return n(),o("div",null,p)}const d=s(e,[["render",c],["__file","xposed-using.html.vue"]]);export{d as default};