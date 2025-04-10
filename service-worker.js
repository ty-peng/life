/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a724d013e8d51517bdd7985894849aa2"
  },
  {
    "url": "assets/css/0.styles.94357969.css",
    "revision": "7c010f84c2ad1e948848031145d38b0b"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/js/1.e166bcad.js",
    "revision": "6d4d2711f54e2c251a281b5934fc7130"
  },
  {
    "url": "assets/js/10.4312bbaa.js",
    "revision": "322627e40deb77bd627238bcf2b93469"
  },
  {
    "url": "assets/js/11.3ed0023c.js",
    "revision": "b60d812f2a029e52058e1574555329ff"
  },
  {
    "url": "assets/js/12.8f198215.js",
    "revision": "8726e37e962d46055fc1a10f7ffeaa49"
  },
  {
    "url": "assets/js/13.03286d84.js",
    "revision": "773cc39046713c6d0f8345eeb3fb15d3"
  },
  {
    "url": "assets/js/14.375469f0.js",
    "revision": "78ff836c1a6b9b7bf98cc8164a03b959"
  },
  {
    "url": "assets/js/15.81897a79.js",
    "revision": "e449b9b8204e370b25ba718a031d6fe1"
  },
  {
    "url": "assets/js/16.d0886c45.js",
    "revision": "235fb9e1781d8e667c1ff5229b6ef652"
  },
  {
    "url": "assets/js/17.45fe1233.js",
    "revision": "0991538ab98be3e4c5155bca996dc0d4"
  },
  {
    "url": "assets/js/18.94aba1cb.js",
    "revision": "3655f0cd6d02a055f032b2ee467f9df6"
  },
  {
    "url": "assets/js/19.6884554d.js",
    "revision": "248fdd1712a59b3d0e3fd8a620235da3"
  },
  {
    "url": "assets/js/20.2a5744e0.js",
    "revision": "96560c6e79801176405176ed4d596c54"
  },
  {
    "url": "assets/js/21.2ab27fb9.js",
    "revision": "427e3ceb731c69d6f59ce2289a6feb68"
  },
  {
    "url": "assets/js/22.22718412.js",
    "revision": "333a353479d53bde63db15eab0879d7f"
  },
  {
    "url": "assets/js/23.910082e3.js",
    "revision": "93913e52107c1dfc733da5e5277a3e5d"
  },
  {
    "url": "assets/js/24.591fdd5a.js",
    "revision": "30f9261d309d0455e56eaa502d7c8756"
  },
  {
    "url": "assets/js/25.47a92386.js",
    "revision": "ed723a10b6f1d156b47f988b7302e268"
  },
  {
    "url": "assets/js/26.b163ac22.js",
    "revision": "8b5f2d19257c06efd73290cb6f42816e"
  },
  {
    "url": "assets/js/27.1c7ccea4.js",
    "revision": "297d878d6a87bbe773de2b7c558dfa16"
  },
  {
    "url": "assets/js/28.bd03cf54.js",
    "revision": "4464acffc990a21e348c548928b7b378"
  },
  {
    "url": "assets/js/29.5c99f6f0.js",
    "revision": "7f80d20589e0a0bce407951843e8635c"
  },
  {
    "url": "assets/js/30.3b764796.js",
    "revision": "5846701d0c8b2f759b3d047b13f3dbf4"
  },
  {
    "url": "assets/js/31.b717b40c.js",
    "revision": "4d56ad354b01d968afefce916df4c09e"
  },
  {
    "url": "assets/js/32.73d6a349.js",
    "revision": "f3eed294941ded51b0dcd81268de7373"
  },
  {
    "url": "assets/js/33.047a9ccf.js",
    "revision": "94b461c89f12566c5b8f6320136a3a66"
  },
  {
    "url": "assets/js/34.3837b8ea.js",
    "revision": "9e7a8069d6f8f6ff7accf9d2927e22a1"
  },
  {
    "url": "assets/js/35.648f562e.js",
    "revision": "469d546665d16c50125993a1105b0657"
  },
  {
    "url": "assets/js/36.df6f9899.js",
    "revision": "b85cfbf24e4c937fe2a4018d733d96a6"
  },
  {
    "url": "assets/js/37.a085c534.js",
    "revision": "455f3249f3c4cea4de9102332e54dbb4"
  },
  {
    "url": "assets/js/38.04f7e832.js",
    "revision": "07d51fcc03eed3b506a913ddb12cf981"
  },
  {
    "url": "assets/js/39.4452505a.js",
    "revision": "9429c1bbd35ed6894bda19053bf5f4a3"
  },
  {
    "url": "assets/js/4.200bf1a6.js",
    "revision": "5d73f4314b318cd7623bcf39c9f77b07"
  },
  {
    "url": "assets/js/40.a2460795.js",
    "revision": "12a88b51d2fa8c3b412504bc03481a31"
  },
  {
    "url": "assets/js/41.96fc6189.js",
    "revision": "219a746e1565bc92e37a2fea62aa9a92"
  },
  {
    "url": "assets/js/42.864d51c0.js",
    "revision": "1c399b150fee7eabf677a4a6f9c0188b"
  },
  {
    "url": "assets/js/43.17da56c0.js",
    "revision": "dbdb76d1692c63da188617c5044332e1"
  },
  {
    "url": "assets/js/44.e5de9ad2.js",
    "revision": "b1c527c500205fea13aaba84e2a9a796"
  },
  {
    "url": "assets/js/45.7c591b10.js",
    "revision": "447c7665bb43059542a7571e020d312c"
  },
  {
    "url": "assets/js/46.6ef12df0.js",
    "revision": "c122c8c740045cdf5c3f2fb51e98695e"
  },
  {
    "url": "assets/js/47.0a7ac5d3.js",
    "revision": "6562a16e0a080601797d67bdc22c26cb"
  },
  {
    "url": "assets/js/48.255a9d63.js",
    "revision": "b6b0ae3a5a8b2798e334b97d1ea8f386"
  },
  {
    "url": "assets/js/49.9103b4e8.js",
    "revision": "2ef77be9e50916e9863533b15ba17e40"
  },
  {
    "url": "assets/js/5.97e0dba5.js",
    "revision": "c8ab1a6220d52f383a4412a09f70bc56"
  },
  {
    "url": "assets/js/50.65182591.js",
    "revision": "e1b69afa604249975149d497537390fc"
  },
  {
    "url": "assets/js/51.89cd5501.js",
    "revision": "beff7088e1839e68da9a91c43f77ea99"
  },
  {
    "url": "assets/js/52.78da10e5.js",
    "revision": "4ea9e2e66ef37ef7a174bdbb1e76edef"
  },
  {
    "url": "assets/js/53.59013b51.js",
    "revision": "b07b9366a043fd25a7b5da7bc0326487"
  },
  {
    "url": "assets/js/54.a1e594e9.js",
    "revision": "8bb95b960e54c63ca25b2f41c7844aeb"
  },
  {
    "url": "assets/js/55.c8195386.js",
    "revision": "97b1b178c807e58bcfc8195d9405add4"
  },
  {
    "url": "assets/js/56.a90e1e95.js",
    "revision": "bd0b49e70ee3c32c64728ae7dacc31fc"
  },
  {
    "url": "assets/js/57.ea15748b.js",
    "revision": "cfc6dc21b91f7e80cc99a43761bba8f8"
  },
  {
    "url": "assets/js/58.1cf0c340.js",
    "revision": "fa941865a22967d5e6c6d5816051019d"
  },
  {
    "url": "assets/js/59.060a6f19.js",
    "revision": "21ac76d68c57b28b0ecaa5c9b19ecae5"
  },
  {
    "url": "assets/js/6.8b28acb6.js",
    "revision": "cba300446c8f6bfc5eff11ab7dc76cd4"
  },
  {
    "url": "assets/js/60.98f4c7fb.js",
    "revision": "b8289e44c989ca2891d711dcf7b29213"
  },
  {
    "url": "assets/js/61.94e1202d.js",
    "revision": "1ca82b460334f48c69eddc1e569e09e9"
  },
  {
    "url": "assets/js/62.e21b6a1e.js",
    "revision": "697f55ea2c78625018d47a8b1935f77f"
  },
  {
    "url": "assets/js/63.cb4ac66c.js",
    "revision": "cadba85b236844e81de7c174d2416cb6"
  },
  {
    "url": "assets/js/64.8f532986.js",
    "revision": "0777d439f71793a0a960c574e8d6fca7"
  },
  {
    "url": "assets/js/65.4bf211af.js",
    "revision": "1ee59512818d58d1413c3fd943d666fd"
  },
  {
    "url": "assets/js/66.7d3dc139.js",
    "revision": "e2f8c74807b3f4af6b481d4be2874754"
  },
  {
    "url": "assets/js/67.f1c521e5.js",
    "revision": "97fde515954bb3ac21a8560a86161409"
  },
  {
    "url": "assets/js/68.25861fd2.js",
    "revision": "e1eec272ac20ed5b3c8dc8d26b266183"
  },
  {
    "url": "assets/js/69.56404762.js",
    "revision": "455de446d457435d553321cac78627f1"
  },
  {
    "url": "assets/js/7.8fa73c9f.js",
    "revision": "abdb9d99a205891921d1fdde3182129b"
  },
  {
    "url": "assets/js/70.be22f651.js",
    "revision": "f2e02bb994b68f9ea12272a87be0434c"
  },
  {
    "url": "assets/js/71.d846985a.js",
    "revision": "2bd8001a695b556c9c9fea92a9358846"
  },
  {
    "url": "assets/js/72.b04fce2a.js",
    "revision": "5979ff599452f6c44dd549c53969db5a"
  },
  {
    "url": "assets/js/8.6bed7804.js",
    "revision": "c56a40dbb0e680b79caef978972d815f"
  },
  {
    "url": "assets/js/9.84cf0239.js",
    "revision": "8d5e5d70f8bb6f00013463c24af38876"
  },
  {
    "url": "assets/js/app.5705883d.js",
    "revision": "9841850c56b9cd582395c8f3fb3fc601"
  },
  {
    "url": "assets/js/vendors~flowchart.d7f907b6.js",
    "revision": "1716d2987dcdce3cd7bf7745de061c76"
  },
  {
    "url": "avatar.png",
    "revision": "f1511f9d0f5eab671ed1e00e7c2a4a75"
  },
  {
    "url": "baidu_verify_UMNmWdWYdG.html",
    "revision": "ccd49ecafa072065494a46dc49f3badc"
  },
  {
    "url": "bg.jpg",
    "revision": "eeb52a7402b93340c8370fedd1e9e745"
  },
  {
    "url": "categories/index.html",
    "revision": "eb0bcc2cc002ad760f2454435ea48b89"
  },
  {
    "url": "categories/小贴士/index.html",
    "revision": "eaea24db98cee4783d68cccbe9cae3a3"
  },
  {
    "url": "categories/游记/index.html",
    "revision": "d6c0895d2823d748363d015039364b1a"
  },
  {
    "url": "categories/照片/index.html",
    "revision": "6b89c343f803aec1456e6998f7742cd7"
  },
  {
    "url": "categories/视频/index.html",
    "revision": "2373ed846c361b6e14e051b46c312d55"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "1e510294ac5d578d8a5cfb83af4aef6f"
  },
  {
    "url": "categories/随笔/page/2/index.html",
    "revision": "d66f0fb3ed7677e17f17f1fccd3da3b4"
  },
  {
    "url": "categories/音乐/index.html",
    "revision": "3b893c4b62eb48540feb6a5621fba039"
  },
  {
    "url": "categories/音乐/page/2/index.html",
    "revision": "804eb76d3227c6f50fff70090bb58763"
  },
  {
    "url": "favorites/animation.html",
    "revision": "ea9aba1d84064306bdfaa2ac00761a87"
  },
  {
    "url": "favorites/book.html",
    "revision": "7c37d5e8d19b040ca169acfc60617fc4"
  },
  {
    "url": "favorites/movie.html",
    "revision": "9a22fe82b90607c5ef35e229132eb676"
  },
  {
    "url": "favorites/tvSeries.html",
    "revision": "d5eceea245c150dd89a42c46d7c3b1b1"
  },
  {
    "url": "favorites/variety.html",
    "revision": "df247f6821f07ed048c21c69bf083649"
  },
  {
    "url": "google6598f2831dbc9230.html",
    "revision": "fe6f2763cc3b4f14854bc6f0dac78347"
  },
  {
    "url": "hero.png",
    "revision": "324856481fc40a7b4cdceade04701f1f"
  },
  {
    "url": "img/cover/animation/DEPTH OF FIELD ～ 爱与憎恨的剧场 中二病でも恋がしたい！ DEPTH OF FIELD 〜 愛と憎しみ劇場_1589003207.8591747.jpg",
    "revision": "1dc40a3c436e87c039e7710848edb405"
  },
  {
    "url": "img/cover/animation/naruto.jpg",
    "revision": "d4f903063c8ff4b91b52328cb0389080"
  },
  {
    "url": "img/cover/animation/Re：从零开始的异世界生活 Reゼロから始める異世界生活_1585969677.9443781.jpg",
    "revision": "364b79959e5e5eb9940a6be3feeed9b1"
  },
  {
    "url": "img/cover/animation/Re：从零开始的异世界生活_冰结之绊.jpg",
    "revision": "853082e53c0d785d39ecf4ec6678f12e"
  },
  {
    "url": "img/cover/animation/Re：从零开始的异世界生活_第二季.jpg",
    "revision": "8b328ede30d59d4d2050c1416373ba87"
  },
  {
    "url": "img/cover/animation/Re：从零开始的异世界生活_雪之回忆.jpg",
    "revision": "3e2d7a83f5719588e3a16409f866efbc"
  },
  {
    "url": "img/cover/animation/一人之下 第一季_1587816625.6930337.jpg",
    "revision": "41bd78575898cd05cad6fe20d175f90e"
  },
  {
    "url": "img/cover/animation/一人之下 第三季_1587816626.661105.jpg",
    "revision": "16b26c075b380dc80abf13e82f2f2c60"
  },
  {
    "url": "img/cover/animation/一人之下 第二季_1587816624.7733808.jpg",
    "revision": "5970fe54b41132a717baeed7a34052a0"
  },
  {
    "url": "img/cover/animation/一人之下_第四季_1636191941.5400083.jpg",
    "revision": "72fb4645f3b41de31989fab661c85b40"
  },
  {
    "url": "img/cover/animation/一人之下2番外篇天师下山_1587816627.4403129.jpg",
    "revision": "49c20cddc639d76cebc1bfd9fd174844"
  },
  {
    "url": "img/cover/animation/不正经的魔术讲师与禁忌教典_ロクでなし魔術講師と禁忌教典_1628572460.0047846.jpg",
    "revision": "51487daa483f21434a309c40d451913e"
  },
  {
    "url": "img/cover/animation/东京食尸鬼 第四季 東京喰種トーキョーグール：re_1585969945.843714.jpg",
    "revision": "869bf8b700db7065f378bade73532737"
  },
  {
    "url": "img/cover/animation/中二病也要谈恋爱！ Lite 中二病でも恋がしたい！ Lite_1589003203.3650713.jpg",
    "revision": "99ffacc6615bb8ece677226fe3d72323"
  },
  {
    "url": "img/cover/animation/中二病也要谈恋爱！ 中二病でも恋がしたい！_1589003197.8079042.jpg",
    "revision": "54b0709406506ff60f75cd6cab213a4b"
  },
  {
    "url": "img/cover/animation/中二病也要谈恋爱！ 闪耀的圣爆诞祭 中二病でも恋がしたい！ 煌めきの…聖爆誕祭_1589003201.3334818.jpg",
    "revision": "2177535396c2b123b133b315d81b8134"
  },
  {
    "url": "img/cover/animation/中二病也要谈恋爱！剧场版 -Take On Me- 映画 中二病でも恋がしたい！ -Take On Me-_1589003198.7844956.jpg",
    "revision": "3231cca9303ea4ad4276be0bc248e10f"
  },
  {
    "url": "img/cover/animation/中二病也要谈恋爱！恋 Lite 中二病でも恋がしたい！戀 Lite_1589003208.825747.jpg",
    "revision": "5f67b89fa8b485828a60875edb6a3456"
  },
  {
    "url": "img/cover/animation/中二病也要谈恋爱！恋 OVA 中二病でも恋がしたい！戀 再生の…邪王真眼黙示録_1589003205.5471196.jpg",
    "revision": "e1c186513226a6296a4d5add0760c0e1"
  },
  {
    "url": "img/cover/animation/中二病也要谈恋爱！恋 SP 中二病でも恋がしたい！戀 SP_1589003206.6409478.jpg",
    "revision": "a551e98c461789a79ec770589e58c9f0"
  },
  {
    "url": "img/cover/animation/中二病也要谈恋爱！恋 中二病でも恋がしたい！戀_1589003199.9848888.jpg",
    "revision": "49bcc090fadc4534166e11fb6ac32d76"
  },
  {
    "url": "img/cover/animation/为美好的世界献上祝福！ この素晴らしい世界に祝福を!_1605425565.4270442.jpg",
    "revision": "f4e71ec9933edfe78a790527ca50634e"
  },
  {
    "url": "img/cover/animation/伍六七之最强发型师_1607848862.3159475.jpg",
    "revision": "7f1c023d91c3ca92ea214504dff214a9"
  },
  {
    "url": "img/cover/animation/佐贺偶像是传奇_ゾンビランドサガ_1625463402.0986917.jpg",
    "revision": "ff2f324097021fbd8173dbf2db86538b"
  },
  {
    "url": "img/cover/animation/佐贺偶像是传奇_卷土重来_ゾンビランドサガ_リベンジ_1625463403.062266.jpg",
    "revision": "37d4834b60b7e9f5b36f4b19e6246ebf"
  },
  {
    "url": "img/cover/animation/元龙_1598680444.8660152.jpg",
    "revision": "04730a3787a99be7d9eb6333d4e3257c"
  },
  {
    "url": "img/cover/animation/元龙_第二季_1616936875.1115298.jpg",
    "revision": "f7a2e7dc95a084ae6c0009a2ecf07b1e"
  },
  {
    "url": "img/cover/animation/全员恶玉 アクダマドライブ_1604816490.532245.jpg",
    "revision": "560d1a814df0eb4c71df5d262347b139"
  },
  {
    "url": "img/cover/animation/全职高手 第二季_1602221982.5260127.jpg",
    "revision": "97dcaa9b4986a4f33155f0e048f44404"
  },
  {
    "url": "img/cover/animation/关于我转生变成史莱姆这档事 第二季 転生したらスライムだった件 第2期_1589002260.311745.jpg",
    "revision": "555ffb8563eda00256775f749dc3ef85"
  },
  {
    "url": "img/cover/animation/关于我转生变成史莱姆这档事 転生したらスライムだった件_1589002258.9276857.jpg",
    "revision": "b64c4b3aa101a33b6e1b7a3a5098c9dc"
  },
  {
    "url": "img/cover/animation/冰菓 氷菓_1586575399.2935002.jpg",
    "revision": "09df73333da8de3ec03a6d6b97c2ff18"
  },
  {
    "url": "img/cover/animation/凡人修仙传 燕家堡之战_1610855727.2835217.jpg",
    "revision": "f8a7cbc0159e7faec10cfb0e94f6496c"
  },
  {
    "url": "img/cover/animation/凡人修仙传 燕家堡之战_1613896836.3889074.jpg",
    "revision": "a4127d0086780003c9d2cbf7763ea53b"
  },
  {
    "url": "img/cover/animation/凡人修仙传_1598791855.6524.jpg",
    "revision": "fc7eb9096a13690ad4ec2d66e6df49e5"
  },
  {
    "url": "img/cover/animation/凸变英雄 LEAF_1585926386.4507935.jpg",
    "revision": "b9f61d2a822e5052e1d5c13d25a664a8"
  },
  {
    "url": "img/cover/animation/凸变英雄 TO BE HERO_1585926335.596215.jpg",
    "revision": "aab4fd801566090a65fcff50026e51c2"
  },
  {
    "url": "img/cover/animation/刀剑神域 ソードアート・オンライン_1585970062.6267538.jpg",
    "revision": "9daa245fe5ece39fdee9a02f71ed227d"
  },
  {
    "url": "img/cover/animation/刺客伍六七 第一季_1585926238.4364276.jpg",
    "revision": "b76700252358ef9cddafc13995490c52"
  },
  {
    "url": "img/cover/animation/刺客伍六七 第三季_1607848863.228451.jpg",
    "revision": "5701db8c55fe3d8c7997a0369635abeb"
  },
  {
    "url": "img/cover/animation/剑网3·侠肝义胆沈剑心 第一季_1585926273.1405962.jpg",
    "revision": "d42191ca8499be8a40b574bc7056de1f"
  },
  {
    "url": "img/cover/animation/剑网3·侠肝义胆沈剑心 第二季_1598791705.330565.jpg",
    "revision": "7c4cd509a9e0b0644c274879d5d3ed68"
  },
  {
    "url": "img/cover/animation/剑网3·侠肝义胆沈剑心之长漂_1604640938.1598358.jpg",
    "revision": "bfb4f862708d27e5b69e09eaa59ed93f"
  },
  {
    "url": "img/cover/animation/剑网3·侠肝义胆沈剑心第三季_1604640806.6842566.jpg",
    "revision": "4b9f20ca4a5819012c4a947e3ade4ba6"
  },
  {
    "url": "img/cover/animation/剧场版 中二病也要谈恋爱！ Lite 映画 中二病でも恋がしたい！ Lite_1589003204.3897648.jpg",
    "revision": "ce01db5c94af996f216df3e4126bc851"
  },
  {
    "url": "img/cover/animation/古见同学有交流障碍症_古見さんは、コミュ症です。_1636192513.477775.jpg",
    "revision": "3eb59611cd0d409094acbd04ef21b162"
  },
  {
    "url": "img/cover/animation/命运之夜 无限剑制 Fate stay night [Unlimited Blade Works]_1585926115.8239627.jpg",
    "revision": "318d8257c46a89bb4ee09936e011f548"
  },
  {
    "url": "img/cover/animation/命运之夜前传 第一期 Fate Zero_1585969392.6366308.jpg",
    "revision": "9055f23f11f0bc5b5dbcac938ac13a5b"
  },
  {
    "url": "img/cover/animation/命运石之门 STEINS;GATE_1589003785.1149235.jpg",
    "revision": "81cb98646dd085a12a2cac2834351e0e"
  },
  {
    "url": "img/cover/animation/命运石之门：横行跋扈的浪荡之徒 STEINS;GATE 横行跋扈のポリオマニア_1589003787.6910338.jpg",
    "revision": "ac783697be87db2abb19df00ca0a3880"
  },
  {
    "url": "img/cover/animation/命运石之门：聪明睿智的认知计算 STEINS;GATE 聡明叡智のコグニティブ・コンピューティング_1589003788.7402122.jpg",
    "revision": "afe82b59a0e7e599d8aca95097d1c1de"
  },
  {
    "url": "img/cover/animation/命运石之门0 STEINS;GATE 0_1589003786.6583555.jpg",
    "revision": "47f8469c8a2fbe6b0eff5f8acc1e1d14"
  },
  {
    "url": "img/cover/animation/命运石之门0：结晶多形的情人节 STEINS;GATE 0 結晶多形のヴァレンティヌス_1589003791.7312207.jpg",
    "revision": "ba680ecbc1820bf75ff66b1affa093ad"
  },
  {
    "url": "img/cover/animation/命运石之门23β：境界面上的缺失之环.jpg",
    "revision": "1fb724860e51c6810584c7239e2bb530"
  },
  {
    "url": "img/cover/animation/命运石之门剧场版：负荷领域的既视感 劇場版 STEINS;GATE 負荷領域のデジャヴ_1589003789.7337732.jpg",
    "revision": "c9c3b235471959ce620a9a6df58b5e3e"
  },
  {
    "url": "img/cover/animation/咒术回战 呪術廻戦_1604816542.0103776.jpg",
    "revision": "ab6cf9eca3ac85105d67ca94c11543c8"
  },
  {
    "url": "img/cover/animation/团子大家族 CLANNAD -クラナド-_1585926172.4044523.jpg",
    "revision": "f0eddb551798b7c5aff92a9eee37e8f9"
  },
  {
    "url": "img/cover/animation/国王排名_王様ランキング_1636194022.432153.jpg",
    "revision": "575f8349250d46d05ac7216087e155ac"
  },
  {
    "url": "img/cover/animation/堀与宫村_ホリミヤ_1615731141.8307843.jpg",
    "revision": "487a9ee87845ec5cc568c8878a5c7657"
  },
  {
    "url": "img/cover/animation/境界的彼方 TV未放送话 境界の彼方 未放映エピソード（第0話）_1589003613.76756.jpg",
    "revision": "4b966d1cf563dfc09732e6761166f01e"
  },
  {
    "url": "img/cover/animation/境界的彼方 偶像裁判！～即使迷茫也要裁决之人～ きょうかいのかなた アイドル裁判！～迷いながらも君を裁く民～_1589003614.5766551.jpg",
    "revision": "f9e924c01ba242dd959d4eab13efca31"
  },
  {
    "url": "img/cover/animation/境界的彼方 剧场版 未来篇 劇場版 境界の彼方 I’LL BE HERE 未来篇_1589003611.6783621.jpg",
    "revision": "0c7bec5e628b349865935b0455a9c4e8"
  },
  {
    "url": "img/cover/animation/境界的彼方 剧场版 过去篇 劇場版 境界の彼方 I’LL BE HERE 過去篇_1589003612.5371315.jpg",
    "revision": "34f1a86de6251bb57b87b64ed86708cd"
  },
  {
    "url": "img/cover/animation/境界的彼方 境界の彼方_1589003610.7269473.jpg",
    "revision": "848473974794fd8f2b8725974cac6f31"
  },
  {
    "url": "img/cover/animation/境界的彼方SP 境界の彼方ミニ劇場_1589003615.747619.jpg",
    "revision": "f8a7cbc0159e7faec10cfb0e94f6496c"
  },
  {
    "url": "img/cover/animation/声之形 聲の形_1591865423.033343.jpg",
    "revision": "a04fe8c3619559465c61214df7a1bc92"
  },
  {
    "url": "img/cover/animation/夏目友人帐 劇場版 夏目友人帳 ～うつせみに結ぶ～_1586575710.5734751.jpg",
    "revision": "93adc25f20c0734a65d14fec183a5108"
  },
  {
    "url": "img/cover/animation/夏目友人帐 夏目友人帳_1586575711.549216.jpg",
    "revision": "3235e580a2326a92e00b677de36d9140"
  },
  {
    "url": "img/cover/animation/夏目友人帐 第三季 夏目友人帳 参_1586575719.189755.jpg",
    "revision": "30c09c0f0361d153dff6b9e786bc3369"
  },
  {
    "url": "img/cover/animation/夏目友人帐 第二季 続 夏目友人帳_1586575717.2175088.jpg",
    "revision": "98f36589b48a0ada985003665d69486d"
  },
  {
    "url": "img/cover/animation/夏目友人帐 第五季 夏目友人帳 伍_1586575713.2895663.jpg",
    "revision": "1b2bd95df99f00a68b39a7754e527d5e"
  },
  {
    "url": "img/cover/animation/夏目友人帐 第五季 特别篇 一夜酒杯 夏目友人帳 伍 特別編 一夜盃_1586575721.841378.jpg",
    "revision": "3892866f6cbef6064af1bb27242384c7"
  },
  {
    "url": "img/cover/animation/夏目友人帐 第五季 特别篇 游戏盛宴 夏目友人帳 伍 特別編 遊戯の宴_1586575720.090627.jpg",
    "revision": "9328f238a1bb065a7670943c5bd0d378"
  },
  {
    "url": "img/cover/animation/夏目友人帐 第六季 夏目友人帳 陸_1586575718.1654663.jpg",
    "revision": "06c243c55c2a69119700a1eb664fcab9"
  },
  {
    "url": "img/cover/animation/夏目友人帐 第六季 特别篇 梦幻的碎片 夏目友人帳 陸 特別編 夢幻のかけら_1586575720.9363923.jpg",
    "revision": "df21b1a8a626ed74d68463bade959761"
  },
  {
    "url": "img/cover/animation/夏目友人帐 第六季 特别篇 铃响的残株 夏目友人帳 陸 特別編 鈴鳴るの切り株_1586575716.1299927.jpg",
    "revision": "7a79a78f6d8ab0d31e452ace56ed194f"
  },
  {
    "url": "img/cover/animation/夏目友人帐 第四季 夏目友人帳 肆_1586575714.298881.jpg",
    "revision": "ef43587ee4bd184ff916cbd0fe4407c8"
  },
  {
    "url": "img/cover/animation/夏目友人帐：曾几何时下雪之日 夏目友人帳 いつかゆきのひに_1586575712.3281357.jpg",
    "revision": "270799ff7d3ccf5c42dd1d37c5b3a90f"
  },
  {
    "url": "img/cover/animation/夏目友人帐：猫咪老师首次变身使者 夏目友人帳 ニャンコ先生とはじめてのおつかい_1586575715.1216898.jpg",
    "revision": "25f3d4a010e224eacd28c81ea078a656"
  },
  {
    "url": "img/cover/animation/大欺诈师 GREAT PRETENDER_1593323282.6797037.jpg",
    "revision": "82e422da3475b7c6f5798f2497cec5ba"
  },
  {
    "url": "img/cover/animation/大理寺日志_1586576302.7692626.jpg",
    "revision": "4f044b73ee5f6f0e1e4e539770e36dc1"
  },
  {
    "url": "img/cover/animation/奇巧计程车_ODD_TAXI_1625463432.550851.jpg",
    "revision": "194edf8e317235c495a9f4c162bf3b4b"
  },
  {
    "url": "img/cover/animation/女高中生的虚度日常 女子高生の無駄づかい_1589002852.7528338.jpg",
    "revision": "b97219089ec3d9e96072356faa7b359c"
  },
  {
    "url": "img/cover/animation/妄想学生会 生徒会役員共_1596356746.1200936.jpg",
    "revision": "55c0c0b188f19c4bef887a362c4494f9"
  },
  {
    "url": "img/cover/animation/家庭教师 家庭教師ヒットマンREBORN!_1585925087.2388551.jpg",
    "revision": "d86e9e566714817c887d45eebea0a141"
  },
  {
    "url": "img/cover/animation/寒蝉鸣泣之时 ひぐらしのなく頃に_1610112378.2165432.jpg",
    "revision": "6998ab0bf42b0b76400aeb63996f137e"
  },
  {
    "url": "img/cover/animation/寒蝉鸣泣之时·业 ひぐらしのなく頃に 業_1610112379.2500236.jpg",
    "revision": "296d0710e5591dbfa9c5e593d8e51353"
  },
  {
    "url": "img/cover/animation/小鸟游六花·改 剧场版 中二病也要谈恋爱！ 小鳥遊六花・改 ～劇場版 中二病でも恋がしたい！～_1589003202.2089472.jpg",
    "revision": "0faeffe5e5022a818d19d9861f940e9d"
  },
  {
    "url": "img/cover/animation/心理测量者3 PSYCHO-PASS サイコパス 3_1585925325.6729088.jpg",
    "revision": "ad01253c24f2a37d0b9071dc6cda3b8c"
  },
  {
    "url": "img/cover/animation/我们仍未知道那天所看见的花的名字_1598682205.0430555.jpg",
    "revision": "73a8aef300ae09f4c72569954d31a6a3"
  },
  {
    "url": "img/cover/animation/我们仍未知道那天所看见的花的名字_剧场版_1598682206.1141315.jpg",
    "revision": "84322230ed54f187abff484a8d76f3d1"
  },
  {
    "url": "img/cover/animation/我家大师兄脑子有坑 第二季_1604640859.9180338.jpg",
    "revision": "9861c654cdeaf64e8538805780570ae6"
  },
  {
    "url": "img/cover/animation/我想吃掉你的胰脏 君の膵臓をたべたい_1589001286.8862827.jpg",
    "revision": "327ccfec98f7303b170c8137ff67efe0"
  },
  {
    "url": "img/cover/animation/我的青春恋爱物语果然有问题 OVA やはり俺の青春ラブコメはまちがっている。 OVA_1589002438.557332.jpg",
    "revision": "85c9cfeedf6214361b0ce3b927eaad09"
  },
  {
    "url": "img/cover/animation/我的青春恋爱物语果然有问题 やはり俺の青春ラブコメはまちがっている。_1585969733.0615635.jpg",
    "revision": "556a17a6562c5116c7b15623e7c176a0"
  },
  {
    "url": "img/cover/animation/我的青春恋爱物语果然有问题 第三季 完 やはり俺の青春ラブコメはまちがっている。完_1589002436.3329194.jpg",
    "revision": "b1917adfed2ecb02b30aa0ac8e9dc8d6"
  },
  {
    "url": "img/cover/animation/我的青春恋爱物语果然有问题 第二季 OVA やはり俺の青春ラブコメはまちがっている。続 OVA_1589002440.034373.jpg",
    "revision": "f842c131bfc4a20019a602b9c0b3e59d"
  },
  {
    "url": "img/cover/animation/我的青春恋爱物语果然有问题 第二季 续 やはり俺の青春ラブコメはまちがっている。続_1589002437.4796777.jpg",
    "revision": "ffd4a659482cf90c164b2c32867d0565"
  },
  {
    "url": "img/cover/animation/持续狩猎史莱姆三百年，不知不觉就练到LV_MAX_スライム倒して300年、知らないうちにレベルMAXになってました_1620549164.1550605.jpg",
    "revision": "be6cceadc6e8919216a01f63dbbac623"
  },
  {
    "url": "img/cover/animation/文豪野犬 文豪ストレイドッグス_1594102113.5871732.jpg",
    "revision": "211770dea7d88efc0e7f6679b3e03b82"
  },
  {
    "url": "img/cover/animation/斗破苍穹_特别篇3_1636192116.074159.jpg",
    "revision": "0dcbf361e278481165db233089a404ad"
  },
  {
    "url": "img/cover/animation/斗破苍穹_第四季_1616334761.8204982.jpg",
    "revision": "704d8727781da35077f2bdb235ac8729"
  },
  {
    "url": "img/cover/animation/新世纪福音战士 新世紀エヴァンゲリオン_1610111952.1978788.jpg",
    "revision": "58bb51510d63629c0dbeefe17dbbce97"
  },
  {
    "url": "img/cover/animation/无头骑士异闻录_デュラララ!!_1618669198.7216098.jpg",
    "revision": "4f3b8bf934f19fd7c5a4b8cba7be8e31"
  },
  {
    "url": "img/cover/animation/无头骑士异闻录：天下泰平_デュラララ!!_第25話_天下泰平_1618669201.4964776.jpg",
    "revision": "bd1d1a559d2b3fafb54935bfaa6f38ad"
  },
  {
    "url": "img/cover/animation/无头骑士异闻录：天网恢恢_デュラララ!!_第12.5話_天網恢恢_1618669205.457372.jpg",
    "revision": "5b0b184b0cd2745ab18ceb7909043317"
  },
  {
    "url": "img/cover/animation/无头骑士异闻录第二季：承_OVA_デュラララ!!×2_承_第4.5話_私の心は鍋模様_1618669207.6425276.jpg",
    "revision": "f26daaf85fb89e1fb0da4478f63729db"
  },
  {
    "url": "img/cover/animation/无头骑士异闻录第二季：承_デュラララ!!×2_承_1618669200.4479094.jpg",
    "revision": "8bde8d5066364d3e1478184f2f59a0a3"
  },
  {
    "url": "img/cover/animation/无头骑士异闻录第二季：结_OVA_デュラララ!!×2_結_第19.5話_デュフフフ!!_1618669211.4411402.jpg",
    "revision": "df0279178de906d0ffbea1f12dda029f"
  },
  {
    "url": "img/cover/animation/无头骑士异闻录第二季：结_デュラララ!!×2_結_1618669203.1638114.jpg",
    "revision": "01c2070a6067ddaeadaff529bcca4e13"
  },
  {
    "url": "img/cover/animation/无头骑士异闻录第二季：转_OVA_デュラララ!!×2_転_第13.5話_お惚気チャカポコ_1618669209.481163.jpg",
    "revision": "66adcae350bcad1ed9175ab9172103a9"
  },
  {
    "url": "img/cover/animation/无头骑士异闻录第二季：转_デュラララ!!×2_転_1618669204.3490984.jpg",
    "revision": "4cf608e579cbb8fcd27af74f7d9d792b"
  },
  {
    "url": "img/cover/animation/星游记 第一季_1612013075.9135053.jpg",
    "revision": "909898173f4d6ccc3f72275abb2b695e"
  },
  {
    "url": "img/cover/animation/极主夫道 極主夫道_1615094066.365526.jpg",
    "revision": "4c88ba1c42cec753a137a13d4cadd182"
  },
  {
    "url": "img/cover/animation/某科学的超电磁炮 とある科学の超電磁砲_1598790861.4960368.jpg",
    "revision": "e6f599856e6e566b5131589e28acaae9"
  },
  {
    "url": "img/cover/animation/某科学的超电磁炮OVA：御坂学姐现在是焦点人物_1598790862.9439692.jpg",
    "revision": "780565c599caa5f0122bb3f5cc1e70a8"
  },
  {
    "url": "img/cover/animation/某科学的超电磁炮OVA：炎炎酷日下做摄影模特也不轻松啊_1598790864.429887.jpg",
    "revision": "537b3f3e12fc1c18d8b5d639936166ff"
  },
  {
    "url": "img/cover/animation/某科学的超电磁炮S OVA とある科学の超電磁砲S 大事なことはぜんぶ銭湯に教わった_1598790867.7153492.jpg",
    "revision": "be0b8d48bf76929d887417f27b54edd5"
  },
  {
    "url": "img/cover/animation/某科学的超电磁炮S とある科学の超電磁砲S_1598790866.0815735.jpg",
    "revision": "fa38c04c9f931476900283fecea96a43"
  },
  {
    "url": "img/cover/animation/某科学的超电磁炮T とある科学の超電磁砲T_1598790869.2180655.jpg",
    "revision": "7df8e355e9dd734442f9a3a7fb4c5c42"
  },
  {
    "url": "img/cover/animation/汉化日记 第一季_1604815396.6564424.jpg",
    "revision": "4a7bdaa808f553a625da972825f810e4"
  },
  {
    "url": "img/cover/animation/汉化日记 第二季_1604815385.2098784.jpg",
    "revision": "e9de57bda7d2a050cac10721908b8fde"
  },
  {
    "url": "img/cover/animation/游戏人生 ノーゲーム・ノーライフ_1589001578.2607884.jpg",
    "revision": "be61befc8b9ec5e06b33e3f5ff58c9e7"
  },
  {
    "url": "img/cover/animation/游戏人生 零 ノーゲーム・ノーライフ ゼロ_1589001580.7540507.jpg",
    "revision": "a56bbea47ea0563a9ed522d741bbcd06"
  },
  {
    "url": "img/cover/animation/炎炎消防队 二之章 炎炎ノ消防隊 弐ノ章_1598790666.003107.jpg",
    "revision": "7320a0a2e48bb68b08f548f6d2aa6b1a"
  },
  {
    "url": "img/cover/animation/炎炎消防队 炎炎ノ消防隊_1598790664.7653487.jpg",
    "revision": "2f03bffe44da8b0f34060c4e5835b942"
  },
  {
    "url": "img/cover/animation/爱，死亡和机器人 第一季 Love, Death & Robots Season 1_1587187812.607653.jpg",
    "revision": "bf037aa181d6f3cd7b5f3b5ad1e6901e"
  },
  {
    "url": "img/cover/animation/电锯人.jpg",
    "revision": "dfc83b362410ee54397644a1f713d931"
  },
  {
    "url": "img/cover/animation/男子高中生的日常 男子高校生の日常_1589003026.677807.jpg",
    "revision": "d00d8179d09087c6bc49d6329a417068"
  },
  {
    "url": "img/cover/animation/知晓天空之蓝的人啊 空の青さを知る人よ_1601270270.8203645.jpg",
    "revision": "0d6ffab1075cbd0e1a2d0ab525ca195c"
  },
  {
    "url": "img/cover/animation/碧蓝之海 ぐらんぶる_1585925141.7311099.jpg",
    "revision": "5c922e608e653aaa14dee7d047e3ed00"
  },
  {
    "url": "img/cover/animation/秦时明月之沧海横流_1602222187.037226.jpg",
    "revision": "13795badaa5afc8755a81f7250f443ea"
  },
  {
    "url": "img/cover/animation/笨女孩_アホガール_1625464670.6890955.jpg",
    "revision": "eb9275594dbb64675c42cc2f0834bef4"
  },
  {
    "url": "img/cover/animation/红白黑黄 第一季 RWBY Season 1_1600613356.4275353.jpg",
    "revision": "14bde917d79f1403855b2184ece6148b"
  },
  {
    "url": "img/cover/animation/绝园的暴风雨 絶園のテンペスト_1598680683.5899887.jpg",
    "revision": "63e83292211c1182ce2748fa0ff29516"
  },
  {
    "url": "img/cover/animation/罪恶王冠 ギルティクラウン_1586575578.8566122.jpg",
    "revision": "8d57e47c8363fa133eb78c59da0c7077"
  },
  {
    "url": "img/cover/animation/美妙世界_すばらしきこのせかい_1620549425.3649762.jpg",
    "revision": "6ae2b50beaba89986bae77195dbe4e31"
  },
  {
    "url": "img/cover/animation/致不灭的你 不滅のあなたへ_1605425771.1585212.jpg",
    "revision": "e3512412253965af1084d01f9280e0da"
  },
  {
    "url": "img/cover/animation/致不灭的你 不滅のあなたへ_1615093823.8227906.jpg",
    "revision": "8a3f3040589e99d036032ee4f69ec6ff"
  },
  {
    "url": "img/cover/animation/葬送的芙莉莲.jpg",
    "revision": "3f44391634e854eeedf63c46659d1e90"
  },
  {
    "url": "img/cover/animation/薇薇_-萤石眼之歌-_Vivy_-Fluorite_Eye’s_Song-_1625463773.5911345.jpg",
    "revision": "01c04e14a9587521145ef94868756df7"
  },
  {
    "url": "img/cover/animation/转生史莱姆日记_転スラ日記_転生したらスライムだった件_1620548939.3626587.jpg",
    "revision": "498ddcca5b1024a61bee098d8691b9d0"
  },
  {
    "url": "img/cover/animation/转生成为了只有乙女游戏破灭Flag的邪恶大小姐_乙女ゲームの破滅フラグしかない悪役令嬢に転生してしまった…_1625296435.1899953.jpg",
    "revision": "1ca568203b6d9def736c7c7f65c1291d"
  },
  {
    "url": "img/cover/animation/转生成为了只有乙女游戏破灭Flag的邪恶大小姐_第二季_乙女ゲームの破滅フラグしかない悪役令嬢に転生してしまった…_X_1625296436.1917613.jpg",
    "revision": "b30e8dfe54778af00541cce37208f261"
  },
  {
    "url": "img/cover/animation/辉夜大小姐想让我告白 第一季 天才们的恋爱头脑战 かぐや様は告らせたい～天才たちの恋愛頭脳戦～_1585970219.5961487.jpg",
    "revision": "efed35f65cf7c5b9c20277ce2d76e98f"
  },
  {
    "url": "img/cover/animation/辉夜大小姐想让我告白 第二季 かぐや様は告らせたい？ ～天才たちの恋愛頭脳戦～_1586668715.4943583.jpg",
    "revision": "63833630ee09db53076d78bb6161c1ba"
  },
  {
    "url": "img/cover/animation/达尔文游戏 ダーウィンズゲーム_1594102176.291782.jpg",
    "revision": "feba54ec1e136e95e4eebf3e8f6867ea"
  },
  {
    "url": "img/cover/animation/进击的巨人 第三季 Part.2 進撃の巨人 Season 3 Part.2_1607307893.38439.jpg",
    "revision": "39173c58ad893fd847fe1ae08234fe39"
  },
  {
    "url": "img/cover/animation/进击的巨人 第四季 進撃の巨人 The Final Season_1607306144.6104312.jpg",
    "revision": "9f21346dd2c832830ac399c644dcfb4e"
  },
  {
    "url": "img/cover/animation/进击的巨人.jpg",
    "revision": "b52d068ea8d96f2f8a9e7328de5839ba"
  },
  {
    "url": "img/cover/animation/进击的巨人第三季.jpg",
    "revision": "deba934b28f073977f44f8e1a211b0e4"
  },
  {
    "url": "img/cover/animation/进击的巨人第二季.jpg",
    "revision": "275b9bb2d10b1e81c9700f70744823ac"
  },
  {
    "url": "img/cover/animation/通灵王_シャーマンキング_1620549486.7020874.jpg",
    "revision": "2f6d763700a96f57fe90f058f22c7302"
  },
  {
    "url": "img/cover/animation/钢之炼金术师 鋼の錬金術師_1610112161.1140132.jpg",
    "revision": "94c3ad9198c106ff7428fc3d209b7955"
  },
  {
    "url": "img/cover/animation/钢之炼金术师FA 鋼の錬金術師 FULLMETAL ALCHEMIST_1610112162.3668275.jpg",
    "revision": "9d536e8f6a3b0139f0d7b320d5561d10"
  },
  {
    "url": "img/cover/animation/银魂 銀魂_1596350080.1353695.jpg",
    "revision": "296429c30046b9a61057666c2fd62fb1"
  },
  {
    "url": "img/cover/animation/镇魂街_第一季_1625463149.6975508.jpg",
    "revision": "2cb4b7714e74e7d958f1d81f87f4fa78"
  },
  {
    "url": "img/cover/animation/镇魂街_第二季_1625463150.8920588.jpg",
    "revision": "ef1321aa8a5de4f4a9a6bcc04ac70eea"
  },
  {
    "url": "img/cover/animation/间谍过家家.jpg",
    "revision": "7cc95be7bc1eb31c1df1801f43675194"
  },
  {
    "url": "img/cover/animation/隐瞒之事 かくしごと_1610855819.9664078.jpg",
    "revision": "fa066b6ae21868fa8b1df56fe0aee2cb"
  },
  {
    "url": "img/cover/animation/雾山五行_1598792049.0016093.jpg",
    "revision": "c50e196e230168313fe95a061f2f7b64"
  },
  {
    "url": "img/cover/animation/青春期猪头少年不做兔女郎学姐的梦 青春ブタ野郎はバニーガール先輩の夢を見ない_1589002733.6539207.jpg",
    "revision": "12c96c661541a4f4cc130b6fb858bc13"
  },
  {
    "url": "img/cover/animation/青春期猪头少年不做怀梦少女的梦 青春ブタ野郎はゆめみる少女の夢を見ない_1589002732.726506.jpg",
    "revision": "21b460e488d988298b558c8ba733c0d1"
  },
  {
    "url": "img/cover/animation/非人哉_1589002638.7049315.jpg",
    "revision": "113e145aff5864c4616e2fbefbb9a5da"
  },
  {
    "url": "img/cover/animation/风灵玉秀_1585969616.0985014.jpg",
    "revision": "88ab60da65c377f12f06b6468bf8b3d4"
  },
  {
    "url": "img/cover/animation/鬼灭之刃 鬼滅の刃_1598792127.4313507.jpg",
    "revision": "42dbd68d2498074a6cb0a0e3b774a17a"
  },
  {
    "url": "img/cover/animation/齐木楠雄的灾难 斉木楠雄のΨ難_1585970519.8406558.jpg",
    "revision": "05e5d9d7b5852358099ef2e51cda5230"
  },
  {
    "url": "img/cover/book/4321_1585897435.8476274.jpg",
    "revision": "992e7e15677bec0065ac38836c4199a5"
  },
  {
    "url": "img/cover/book/三体_1585897694.8293366.jpg",
    "revision": "352b77c9426300b32ac08b8f0db978cc"
  },
  {
    "url": "img/cover/book/人类简史_1585897561.6528192.jpg",
    "revision": "73c0c171203951b1bc9b8189731a3a73"
  },
  {
    "url": "img/cover/book/人行道王国_1585897470.283358.jpg",
    "revision": "75b2d284f18a1e684ca3b3e3fa01a20c"
  },
  {
    "url": "img/cover/book/你当像鸟飞往你的山_1585897725.865459.jpg",
    "revision": "e0dfc7b7804b797f27f0372431469dbc"
  },
  {
    "url": "img/cover/book/最好的时光在路上_1615041403.651003.jpg",
    "revision": "5e196335f62af6202eea8d231ba9822f"
  },
  {
    "url": "img/cover/book/君主论_1585896884.5916448.jpg",
    "revision": "ef8c86e29177d69558b25f4607a7e6ce"
  },
  {
    "url": "img/cover/book/嫌疑人X的献身_1587825216.9453857.jpg",
    "revision": "037b2645f76588d71e79efa63a348bdc"
  },
  {
    "url": "img/cover/book/富爸爸，穷爸爸_1585897639.017536.jpg",
    "revision": "d412a0a3d8f76154122fafe6441a485a"
  },
  {
    "url": "img/cover/book/时间的秩序_1585897590.5492332.jpg",
    "revision": "48d249d28483d1b2fb7641494dc4fe1d"
  },
  {
    "url": "img/cover/book/洞穴奇案_1585896027.198742.jpg",
    "revision": "12ff91107a85e164a9c5c800d6a7f6f2"
  },
  {
    "url": "img/cover/book/潜规则_1585896937.9712746.jpg",
    "revision": "17a25c9fd8f100b92f63bf8a8b46e84f"
  },
  {
    "url": "img/cover/book/爱的博弈_1585897032.5092676.jpg",
    "revision": "9c1020b7b1514f873078b9351a6f3c80"
  },
  {
    "url": "img/cover/book/白夜行_1585895973.8514829.jpg",
    "revision": "d8d6801a69ade76da9dc59464bc85f0b"
  },
  {
    "url": "img/cover/book/看不见的剪辑_1597317749.9047.jpg",
    "revision": "112cb78d6a98050aa22f43d8499e8151"
  },
  {
    "url": "img/cover/book/眨眼之间_1597317912.09056.jpg",
    "revision": "491f89a8395f110cc709e43fa6e706d8"
  },
  {
    "url": "img/cover/book/美丽新世界_1585897386.9219372.jpg",
    "revision": "ec5a1ee8ed29b862780f40c456ce4a03"
  },
  {
    "url": "img/cover/book/血酬定律_1585896971.4534743.jpg",
    "revision": "ffcb9704e0cf0ed521fe8a034f20e63b"
  },
  {
    "url": "img/cover/book/解忧杂货店_1587824761.17957.jpg",
    "revision": "86e6c7aedf3105cda7b303d7bda40bf8"
  },
  {
    "url": "img/cover/book/资本论_1585897326.1348414.jpg",
    "revision": "51d5dd420485891553844480174ab695"
  },
  {
    "url": "img/cover/book/超越感觉_1585897532.9392817.jpg",
    "revision": "c1207982eaab9ccf700210b3df87e844"
  },
  {
    "url": "img/cover/book/黑客与画家_1597317981.5908504.jpg",
    "revision": "ac5500ba67811391054b7cd2f47bc614"
  },
  {
    "url": "img/cover/default.jpg",
    "revision": "5c10cd29509954ea73cbc09d4304ff58"
  },
  {
    "url": "img/cover/movie/七宗罪 Se7en_1605424194.307574.jpg",
    "revision": "a0276c947611a7311dcbb03b043ed3b2"
  },
  {
    "url": "img/cover/movie/三傻大闹宝莱坞 3 Idiots_1601793342.5394852.jpg",
    "revision": "c01d8035edbf61286935543a5062c1af"
  },
  {
    "url": "img/cover/movie/再次出发之纽约遇见你 Begin Again_1601797399.4216352.jpg",
    "revision": "5f773042dbd1b0c45f5c6c1c76e78ba8"
  },
  {
    "url": "img/cover/movie/利刃出鞘 Knives Out_1589622614.554978.jpg",
    "revision": "ac68e5d420cf17356b50c7d91ba507cf"
  },
  {
    "url": "img/cover/movie/可可西里_1601796654.738392.jpg",
    "revision": "8f2fb23fbf7df2baae85453cbd2ad783"
  },
  {
    "url": "img/cover/movie/复仇者联盟3：无限战争 Avengers.jpg",
    "revision": "7da962a91072a78a3d5e7a4e8ac0a065"
  },
  {
    "url": "img/cover/movie/复仇者联盟4：终局之战 Avengers.jpg",
    "revision": "559d432fc35c94b07ad0cf1ea5fe1708"
  },
  {
    "url": "img/cover/movie/大话西游之大圣娶亲 西遊記大結局之仙履奇緣_1601793517.5869331.jpg",
    "revision": "541094105557befc42526d9b01ece668"
  },
  {
    "url": "img/cover/movie/大话西游之月光宝盒 西遊記第壹佰零壹回之月光寶盒_1601793519.0343032.jpg",
    "revision": "ca3aa79b945bd478f586e4e2fc8b3633"
  },
  {
    "url": "img/cover/movie/寄生虫 기생충_1589623219.768211.jpg",
    "revision": "614ab729d659a0da48dc6965d3780994"
  },
  {
    "url": "img/cover/movie/寻梦环游记 Coco_1601794237.4108212.jpg",
    "revision": "073ee045fc09813763dfa6a101ad0ab1"
  },
  {
    "url": "img/cover/movie/小萝莉的猴神大叔 Bajrangi Bhaijaan_1601793808.451275.jpg",
    "revision": "c32ac303e00915d21147108cbe9fd883"
  },
  {
    "url": "img/cover/movie/怦然心动 Flipped_1589623063.6880758.jpg",
    "revision": "c8fe428afd6ff91ccf61935476566f62"
  },
  {
    "url": "img/cover/movie/我不是药神_1601794370.8576474.jpg",
    "revision": "42833315d48542b8f1fd5c98e906befc"
  },
  {
    "url": "img/cover/movie/我和我的家乡_1611370645.3507812.jpg",
    "revision": "4753fb2c574f6bbf234026081929b4f3"
  },
  {
    "url": "img/cover/movie/我是谁：没有绝对安全的系统_Who_Am_I_-_Kein_System_ist_sicher_1620291121.2292316.jpg",
    "revision": "4f581414dd030ff90675d2715df04140"
  },
  {
    "url": "img/cover/movie/控方证人 Witness for the Prosecution_1589622779.5202994.jpg",
    "revision": "87bdc47c4ce640b6869b741b596d099b"
  },
  {
    "url": "img/cover/movie/生化危机 Resident Evil_1601796410.396677.jpg",
    "revision": "74d7027b15312c7e6e5e86ac5376c9af"
  },
  {
    "url": "img/cover/movie/疯狂动物城 Zootopia_1601793897.819059.jpg",
    "revision": "b144c23b4f8e99729e69e9dbc48980f4"
  },
  {
    "url": "img/cover/movie/疯狂的麦克斯4：狂暴之路 Mad Max.jpg",
    "revision": "73ef90dd331d8ce79aae16d2b1acafeb"
  },
  {
    "url": "img/cover/movie/监视资本主义：智能陷阱_The_Social_Dilemma_1640268905.5783172.jpg",
    "revision": "6c8853c6c9e04591f032c3a5b17f27dd"
  },
  {
    "url": "img/cover/movie/盗梦空间 Inception_1589623271.7394319.jpg",
    "revision": "b693f9bea994d730e45ddbdc9523f310"
  },
  {
    "url": "img/cover/movie/盗钥匙的方法 鍵泥棒のメソッド_1606834155.667749.jpg",
    "revision": "97e1825bbec648769324b23d05128007"
  },
  {
    "url": "img/cover/movie/看不见的客人 Contratiempo_1589518291.3730936.jpg",
    "revision": "3aba91d51811844945aa894df6e52a42"
  },
  {
    "url": "img/cover/movie/神偷奶爸 Despicable Me_1601796114.4692767.jpg",
    "revision": "c1eaa8da5c45a4cce4250aea58d985e7"
  },
  {
    "url": "img/cover/movie/穿越时空的少女 時をかける少女_1608474088.6478672.jpg",
    "revision": "24aa72926f189e3d460c3c7f2daf7a32"
  },
  {
    "url": "img/cover/movie/窃听风暴 Das Leben der Anderen_1608474235.761454.jpg",
    "revision": "5745aea684caf06fe46bd04ba330fde1"
  },
  {
    "url": "img/cover/movie/红辣椒 パプリカ_1608474330.818665.jpg",
    "revision": "806c6da9cdd55a0cd90ea78dd2440faf"
  },
  {
    "url": "img/cover/movie/终结者 The Terminator_1601796350.5186133.jpg",
    "revision": "469db37d593f5da82b6aa9a9dc3ea4f8"
  },
  {
    "url": "img/cover/movie/绿皮书 Green Book_1589622940.5721269.jpg",
    "revision": "5fe64b86199e4193a870b727ea13ba67"
  },
  {
    "url": "img/cover/movie/网络谜踪 Searching_1589698684.1172712.jpg",
    "revision": "836d8e6574a95cf7811044ef979a1c20"
  },
  {
    "url": "img/cover/movie/被嫌弃的松子的一生 嫌われ松子の一生_1608474278.109583.jpg",
    "revision": "05d168b82fe1f558fd9a6c73ef03a6ea"
  },
  {
    "url": "img/cover/movie/调音师 Andhadhun_1589623557.2217262.jpg",
    "revision": "3ee982977527b6697f9dca8db1badf32"
  },
  {
    "url": "img/cover/movie/辩护人 변호인_1608474181.4256582.jpg",
    "revision": "9c90070e01da8bc2433229d1ef18ba91"
  },
  {
    "url": "img/cover/movie/这个杀手不太冷 Léon_1601794670.9565396.jpg",
    "revision": "3beebb4581790cfdc9f59f61ae2e42c6"
  },
  {
    "url": "img/cover/movie/送你一朵小红花_1609633472.2473087.jpg",
    "revision": "e8bc9726548ca648346d2e83992ae746"
  },
  {
    "url": "img/cover/tvSeries/3年A班：从现在起，大家都是人质_1608474512.099212.jpg",
    "revision": "77ac87094c7e1af640a3b8b137d4ef1c"
  },
  {
    "url": "img/cover/tvSeries/亚当的超狂工作室 Savage Builds_1605424546.159232.jpg",
    "revision": "57caa602ba667292c643c00ec6d25b19"
  },
  {
    "url": "img/cover/tvSeries/人生删除事务所 dele ディーリー_1585923321.6637092.jpg",
    "revision": "4991e6bdb64948e99c27e730287de4c6"
  },
  {
    "url": "img/cover/tvSeries/仙剑奇侠传_1585923132.341561.jpg",
    "revision": "7be553e2e9a7fca758c92904e6a430af"
  },
  {
    "url": "img/cover/tvSeries/信号 시그널_1585924044.934179.jpg",
    "revision": "a0333ad6f17ef2661999c24966e8a96d"
  },
  {
    "url": "img/cover/tvSeries/匹诺曹 피노키오_1606210299.4421241.jpg",
    "revision": "349450aaacf5a66a0502f222417eda8e"
  },
  {
    "url": "img/cover/tvSeries/半泽直树 半沢直樹_1595146887.3777108.jpg",
    "revision": "01ba6805810901dfff399fe2201c8e72"
  },
  {
    "url": "img/cover/tvSeries/半泽直树2 半沢直樹2_1595146888.5461469.jpg",
    "revision": "7389ea97a65e4efa4861ab317e9e05af"
  },
  {
    "url": "img/cover/tvSeries/去他妈的世界 第一季 The End of the Fucking World Season 1_1585924220.552149.jpg",
    "revision": "875e6226e998ef31eedd49f1a28badda"
  },
  {
    "url": "img/cover/tvSeries/坡道上的家 坂の途中の家_1608474449.0222256.jpg",
    "revision": "99a275da7e772bfdf2ae542e41bba283"
  },
  {
    "url": "img/cover/tvSeries/大江大河_1608516875.2203677.jpg",
    "revision": "fd77c0625390abbf74aa98a19eb394fb"
  },
  {
    "url": "img/cover/tvSeries/大江大河2_1608516876.4397173.jpg",
    "revision": "9c43f11ebb62712c49990a512f26123c"
  },
  {
    "url": "img/cover/tvSeries/天赐的声音 第一季_1611725307.4245465.jpg",
    "revision": "2e03c0b86c4b42a4a7f9921d78b91188"
  },
  {
    "url": "img/cover/tvSeries/天赐的声音 第二季_1611725308.3943996.jpg",
    "revision": "a5c1647e69ca4564e5f580da24a0ca8a"
  },
  {
    "url": "img/cover/tvSeries/姐姐的爱乐之程_1611490586.1068618.jpg",
    "revision": "8afd8dd8037079a40d35f1131ad9eb96"
  },
  {
    "url": "img/cover/tvSeries/巅峰拍档 第二十八季 Top Gear Season 28_1586272743.9453914.jpg",
    "revision": "26064ab920da124739a8fe5d1793e250"
  },
  {
    "url": "img/cover/tvSeries/影响_インフルエンス_1620290930.6554098.jpg",
    "revision": "f3a9141953426f29ac9300ed5fe73400"
  },
  {
    "url": "img/cover/tvSeries/我，喜欢你_1602130189.8904605.jpg",
    "revision": "af4800c3e251751a0f7d59b43302b6d2"
  },
  {
    "url": "img/cover/tvSeries/我们与恶的距离 我們與惡的距離_1585924294.6041443.jpg",
    "revision": "32097172496ee7829f7a1ff357e75693"
  },
  {
    "url": "img/cover/tvSeries/我是大哥大_SP_今日から俺は!!SP_1620290663.829706.jpg",
    "revision": "7a5aa6c52be7ab73bfeaa1e1e5e86c0e"
  },
  {
    "url": "img/cover/tvSeries/我是大哥大_今日から俺は！！_1620290661.694117.jpg",
    "revision": "cf3e85b5e34dbe804b3ba286c55ce671"
  },
  {
    "url": "img/cover/tvSeries/我是大哥大_电影版_今日から俺は！！劇場版_1620290662.9116528.jpg",
    "revision": "d8a76b1d937de274699d257aff5f1c80"
  },
  {
    "url": "img/cover/tvSeries/我是歌手 第一季_1605423874.4925146.jpg",
    "revision": "9668cc38a78bc29453d80b0e0ec0c05d"
  },
  {
    "url": "img/cover/tvSeries/无证之罪_1603034715.5966406.jpg",
    "revision": "06a17236cf9c6aec33cadadd5e23dd87"
  },
  {
    "url": "img/cover/tvSeries/明星大侦探 第一季_1594102371.1799963.jpg",
    "revision": "2a1679ee69092e5d5252d4a28b44d181"
  },
  {
    "url": "img/cover/tvSeries/明星大侦探 第三季_1594102368.61622.jpg",
    "revision": "eff0f88e6653080cf0e392460b431bde"
  },
  {
    "url": "img/cover/tvSeries/明星大侦探 第二季_1594102370.0204074.jpg",
    "revision": "c84957a6017fef82ea2360163abe3562"
  },
  {
    "url": "img/cover/tvSeries/明星大侦探 第五季_1594102372.539142.jpg",
    "revision": "52af648b4b0201cf8324603d273815fd"
  },
  {
    "url": "img/cover/tvSeries/明星大侦探 第四季_1594102367.622257.jpg",
    "revision": "3ec291fe077705392c3c4626e16aa836"
  },
  {
    "url": "img/cover/tvSeries/暴走大事件 第八季_1613896768.529891.jpg",
    "revision": "8e1660de483a22880e97eb444c3a0c15"
  },
  {
    "url": "img/cover/tvSeries/暴走大事件 第六季_1605424009.4009516.jpg",
    "revision": "6423d5ef64e9a342b86675ae1ae4f7e5"
  },
  {
    "url": "img/cover/tvSeries/梦想改造家 第六季_1592891305.6434877.jpg",
    "revision": "11a3bb22ad8430317fbbb7264af7645d"
  },
  {
    "url": "img/cover/tvSeries/沉默的真相_1601793033.7507782.jpg",
    "revision": "363165e442ba009813f41b88657daf56"
  },
  {
    "url": "img/cover/tvSeries/爱情公寓_1585921972.3063571.jpg",
    "revision": "58a2730b184e07d736f5368265d15232"
  },
  {
    "url": "img/cover/tvSeries/生活大爆炸  第一季 The Big Bang Theory Season 1_1585922087.7021892.jpg",
    "revision": "21d9e4a70651ccb321b50ffebd5a811c"
  },
  {
    "url": "img/cover/tvSeries/男人帮_1585924355.9011319.jpg",
    "revision": "a1164c809d31069e294f63de8d3bc310"
  },
  {
    "url": "img/cover/tvSeries/疑犯追踪__第一季_Person_of_Interest_Season_1_1620291014.4971175.jpg",
    "revision": "d29254b761a0c30078bd6c3e02bb2684"
  },
  {
    "url": "img/cover/tvSeries/疑犯追踪_第三季_Person_of_Interest_Season_3_1620291017.8296804.jpg",
    "revision": "14c6823f1eb9cc468281a8c9c79b3a59"
  },
  {
    "url": "img/cover/tvSeries/疑犯追踪_第二季_Person_of_Interest_Season_2_1620291015.4440875.jpg",
    "revision": "158af3341a09aedf71badf2fe05ba1cb"
  },
  {
    "url": "img/cover/tvSeries/疑犯追踪_第五季_Person_of_Interest_Season_5_1620291016.71491.jpg",
    "revision": "44b3a93f0f1a9b6ac2826211e1e47b2e"
  },
  {
    "url": "img/cover/tvSeries/疑犯追踪_第四季_Person_of_Interest_Season_4_1620291019.4423373.jpg",
    "revision": "eab1fc543f4d5b9618b16745c22acadc"
  },
  {
    "url": "img/cover/tvSeries/破产姐妹 第一季 2 Broke Girls Season 1_1585924798.0466225.jpg",
    "revision": "f1c28a6dc73b67725aaa377cfd29e20e"
  },
  {
    "url": "img/cover/tvSeries/绝命毒师 第一季 Breaking Bad Season 1_1585923360.451869.jpg",
    "revision": "a8a723de5403f707fe42f892441bb5aa"
  },
  {
    "url": "img/cover/tvSeries/胜者即是正义 リーガル・ハイ_1593323566.1153116.jpg",
    "revision": "be0d74926a534b061e29feb30ed1cc2b"
  },
  {
    "url": "img/cover/tvSeries/胜者即是正义2 リーガルハイ2_1595147132.5017843.jpg",
    "revision": "aac650bb4195df52b9c694efc226ea21"
  },
  {
    "url": "img/cover/tvSeries/脱口秀大会 第三季_1601270890.8320255.jpg",
    "revision": "54e4b6f648df24b6454cd05bfd179f7a"
  },
  {
    "url": "img/cover/tvSeries/蒙面唱将猜猜猜 第一季_1596179742.8977056.jpg",
    "revision": "d43061e070f5c152387b4f84d383b503"
  },
  {
    "url": "img/cover/tvSeries/蒙面唱将猜猜猜 第五季_1611725887.4262514.jpg",
    "revision": "6a61405a0bf61e24e2e9cb3e260d3f68"
  },
  {
    "url": "img/cover/tvSeries/蒙面唱将猜猜猜 第四季_1596179744.4396722.jpg",
    "revision": "11934c948ec298bfc438957b4bcd7642"
  },
  {
    "url": "img/cover/tvSeries/行骗天下JP コンフィデンスマンJP_1593323492.5273848.jpg",
    "revision": "104ce630aeb4cac828a579b53f6bcc91"
  },
  {
    "url": "img/cover/tvSeries/诗歌之王 第二季_1611725722.9074235.jpg",
    "revision": "d82b1fb4e067df8986ab7427a840383d"
  },
  {
    "url": "img/cover/tvSeries/请回答1988 응답하라 1988_1585923935.8388011.jpg",
    "revision": "6c1422b5f38f84c1e86c58a91152fe7c"
  },
  {
    "url": "img/cover/tvSeries/轮到你了 あなたの番です_1605425270.4120092.jpg",
    "revision": "7d477edcb008bbf652385c079e1df8b3"
  },
  {
    "url": "img/cover/tvSeries/隐秘的角落_1592891172.6912322.jpg",
    "revision": "433946bd5f0b80c7bfa27195b3a4f4be"
  },
  {
    "url": "img/cover/video/狂おしいほど僕には美しい - majiko.jpg",
    "revision": "a46d9e0fab04ff972fb4f52257c14425"
  },
  {
    "url": "img/essay/20200326_130024_yrxnjerdx_1.jpg",
    "revision": "2d69fb61a7add7fdd3acbb5218eaf65e"
  },
  {
    "url": "img/essay/20200326_130024_yrxnjerdx.jpg",
    "revision": "d795fd1d77b78b09797554fbb6626772"
  },
  {
    "url": "img/note/20200325162737-mq-rabbitmq.jpg",
    "revision": "899b3142d83bf840c8f89c4342ed2311"
  },
  {
    "url": "img/note/20200325164844-mq-rabbitmq.jpg",
    "revision": "be1b876e816c7ad03da14f373892966f"
  },
  {
    "url": "img/note/20200325170202-mq-rabbitmq.jpg",
    "revision": "693d6a0432f3d391d1d74bf752b586f2"
  },
  {
    "url": "img/note/20200325170650-mq-rabbitmq.jpg",
    "revision": "3dbcb1d12fcfb3f3367074edcaab5d69"
  },
  {
    "url": "img/note/20200325170750-mq-rabbitmq.jpg",
    "revision": "a492e9bda053d58a5e4b4424909fba11"
  },
  {
    "url": "img/note/20200325170846-mq-rabbitmq.jpg",
    "revision": "200c49ab7bb4c6f73214a7de59411b27"
  },
  {
    "url": "img/other/20200323230011.jpg",
    "revision": "fb6262c55669169d81ca55b6879b3bc9"
  },
  {
    "url": "img/other/20200323234051.jpg",
    "revision": "6357aa782af56c40467967537a685c83"
  },
  {
    "url": "img/other/20200323234753.jpg",
    "revision": "4022cae61e79ab2d4fa0abe1103cca53"
  },
  {
    "url": "img/other/20200325125911.png",
    "revision": "9f6fedff808fd3961181cd6828029963"
  },
  {
    "url": "img/other/20200325130218.png",
    "revision": "115c76c8bbe6a9955026e56586486dbf"
  },
  {
    "url": "img/other/upyun.png",
    "revision": "561e9d0af96ca7983bf3d721fc72ed39"
  },
  {
    "url": "img/photo/daily_20200811_1.jpg",
    "revision": "e04892c72ab483067a88a171d4bdc4c7"
  },
  {
    "url": "img/photo/daily_20200811_2.jpg",
    "revision": "0cb9a9da7fd98e3e9502f2e74a27aefe"
  },
  {
    "url": "img/photo/xili_ecological_park_1.jpg",
    "revision": "c01f5fbfcb10a821560381317be0c081"
  },
  {
    "url": "img/photo/xili_ecological_park_2.jpg",
    "revision": "2542612b7b696fabe41643a5bcffcbcf"
  },
  {
    "url": "img/photo/xili_ecological_park_3.jpg",
    "revision": "a9198ad09a5a13ae3a1f977719c9949f"
  },
  {
    "url": "img/photo/xili_ecological_park_4.jpg",
    "revision": "823c9f4a64d52c8f1fe8b060f9af1b4b"
  },
  {
    "url": "index.html",
    "revision": "a196174e35fcab7eab895d9955250248"
  },
  {
    "url": "logo_original.png",
    "revision": "417aae886a6faa02c41a910188e0cba1"
  },
  {
    "url": "logo.png",
    "revision": "fac1e9667afc37aa618b482fd5776f96"
  },
  {
    "url": "pages/memo.html",
    "revision": "29c2105958dcfb3cdc56fa865f0a1a42"
  },
  {
    "url": "pages/message-board.html",
    "revision": "92a935dbfc111c6df5e5923e0d152676"
  },
  {
    "url": "pages/music.html",
    "revision": "b9243973bfd9bc9d8c203390b08e0410"
  },
  {
    "url": "pages/shici.html",
    "revision": "fb0792d27a0ec3dd6f4daa79df5b6e7e"
  },
  {
    "url": "tag/bilibili/index.html",
    "revision": "0fe27ee65477a2fcf7c37a81e8f82d21"
  },
  {
    "url": "tag/index.html",
    "revision": "61b793f5113530bea294148bb6ca9001"
  },
  {
    "url": "tag/live/index.html",
    "revision": "8f762e3c14532cdcf6b4ad96745ec67d"
  },
  {
    "url": "tag/majiko/index.html",
    "revision": "2cbf05bf33ae59a860f35f34003fef27"
  },
  {
    "url": "tag/miku/index.html",
    "revision": "3f4e9b02bc8be1c86154210c6ffa1b01"
  },
  {
    "url": "tag/出游计划/index.html",
    "revision": "b8b66da418d63b22c8a0b125ba6f5624"
  },
  {
    "url": "tag/出行/index.html",
    "revision": "433b4049ac020acc81ed4da2e156704f"
  },
  {
    "url": "tag/华语/index.html",
    "revision": "77b4a8ed737e439eacb8a9ec562a3484"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "3b1578e1d719b8c42ce2e58a11e2b1ab"
  },
  {
    "url": "tag/去过/index.html",
    "revision": "17302fe7655af4c42924158c2c4f553b"
  },
  {
    "url": "tag/古风/index.html",
    "revision": "9e28d89c3235be4c4dc61c72954d6cc0"
  },
  {
    "url": "tag/句子/index.html",
    "revision": "276cf00fee924ecdab8b181998be3aa4"
  },
  {
    "url": "tag/吃/index.html",
    "revision": "031cdd3322a50d7fc3a6011911d7d3ab"
  },
  {
    "url": "tag/合集/index.html",
    "revision": "b2369ab4df8d32f227702a29400f9376"
  },
  {
    "url": "tag/周杰伦/index.html",
    "revision": "10f97d5848ca52c710a468e177ec3a4d"
  },
  {
    "url": "tag/在路上/index.html",
    "revision": "7382fc3c8cfa1e7cc7237d4ea92a3d9a"
  },
  {
    "url": "tag/好玩/index.html",
    "revision": "4f0da98ae5ec89d837b953b876e70281"
  },
  {
    "url": "tag/宽带/index.html",
    "revision": "fa1992d2ea1b9c9d6c264cf04759710f"
  },
  {
    "url": "tag/尤克里里/index.html",
    "revision": "a00a6bf6207b2630b33de95260704d64"
  },
  {
    "url": "tag/总结/index.html",
    "revision": "bc1065469a0c465aa7efb89e1e67bbb9"
  },
  {
    "url": "tag/想去/index.html",
    "revision": "40fcb1eda3560e3a83569bffa75b907e"
  },
  {
    "url": "tag/指南/index.html",
    "revision": "f5b48794c95f51c83ea6c71384270b7b"
  },
  {
    "url": "tag/旅行/index.html",
    "revision": "d6661507173d9c425e275c94d9f18c2a"
  },
  {
    "url": "tag/日常/index.html",
    "revision": "aca32aceb57b3e06d008fb9c99bf27f4"
  },
  {
    "url": "tag/日语/index.html",
    "revision": "9c39ec146e49135853c4a326a1146ae9"
  },
  {
    "url": "tag/照片/index.html",
    "revision": "3128ba1bf5097b8b28e11e023feda9d5"
  },
  {
    "url": "tag/电话卡/index.html",
    "revision": "87ac5bb4d6581f42ba70eae3e08829ea"
  },
  {
    "url": "tag/视频/index.html",
    "revision": "a5555188958d9a11fa660df997603bce"
  },
  {
    "url": "tag/翻唱/index.html",
    "revision": "dd481668f422a002088622d527542beb"
  },
  {
    "url": "tag/自媒体/index.html",
    "revision": "7f8b1581dc817f877649cae1b5d899c8"
  },
  {
    "url": "tag/茅台/index.html",
    "revision": "af545a5401e885d3c55f18a56c92b241"
  },
  {
    "url": "tag/购物/index.html",
    "revision": "e73c2e739aa5d7b8d4349dbd9830ad8f"
  },
  {
    "url": "tag/酒/index.html",
    "revision": "aee0831f69cdd1b1a2ed6db1f6f562df"
  },
  {
    "url": "tag/闲游/index.html",
    "revision": "9240b2fe689ac20351eaf84c360141d7"
  },
  {
    "url": "tag/音乐/index.html",
    "revision": "92ee1c7e7eca38321dcc0c4110262505"
  },
  {
    "url": "tag/音乐/page/2/index.html",
    "revision": "7c4af5350de9756f46ed291524e792c0"
  },
  {
    "url": "timeline/index.html",
    "revision": "27ae37db940be0ab45ae30cbe28ef8d5"
  },
  {
    "url": "views/essay/202003050000-hello-world.html",
    "revision": "61908b3839c0bc5344235764382a5535"
  },
  {
    "url": "views/essay/202003070000-original-intention.html",
    "revision": "ba6ecdd01976ea22d2df359f6bb0761f"
  },
  {
    "url": "views/essay/202003261315-sentence.html",
    "revision": "13e7d54536101a78a1285969ef3da242"
  },
  {
    "url": "views/essay/202004212232-essay-about-colleague.html",
    "revision": "45bf282100dc2e7ef68354ebe8eff8f0"
  },
  {
    "url": "views/essay/202005162103-sentence.html",
    "revision": "f732b299081ddb4a22fc1c8d4a44f0c6"
  },
  {
    "url": "views/essay/202005261319-sentence.html",
    "revision": "39504236b5b43f88fc7e059b26819cdf"
  },
  {
    "url": "views/essay/202007082222-wish.html",
    "revision": "83ec42b70fba53a6c8dd366a6bd4c4c7"
  },
  {
    "url": "views/essay/202007182105-poems-about-mayday-lyrics.html",
    "revision": "9e46fde88e06cafabf8a0c9e0d3ca9dd"
  },
  {
    "url": "views/essay/202009112138-sentence-xynmsns.html",
    "revision": "52b9074c06b6352a7264fecf2610a494"
  },
  {
    "url": "views/essay/202012072250-jingnv-shijing.html",
    "revision": "cedce3deb386a7d275584a5877cc4f7a"
  },
  {
    "url": "views/essay/202012251801-Merry-Christmas.html",
    "revision": "9e962f1dd7b31b4fa5e88dc696c114f8"
  },
  {
    "url": "views/essay/202101032026-sentence.html",
    "revision": "c77a60b30469a5069f4b14ef1b7ae94d"
  },
  {
    "url": "views/essay/202101071138-sentence.html",
    "revision": "3ed28d13f33af4fa9098a981ed572632"
  },
  {
    "url": "views/essay/202102091800-0208-changsha.html",
    "revision": "8edc111ccf2c775691742b587bdb9a28"
  },
  {
    "url": "views/essay/202102110016-2020-work-summary.html",
    "revision": "c6f8ebc0562cfbbc7a21e1ed8f093186"
  },
  {
    "url": "views/essay/202102142332-0214.html",
    "revision": "97294b9004767b94c126a1be095e6289"
  },
  {
    "url": "views/music/202004061100-music-yanhuolidechengai-hcy.html",
    "revision": "4cd067fd1f960adf57fae4285db17836"
  },
  {
    "url": "views/music/202004111415-music-cengjingwoyexiangguoyiliaobailiao.html",
    "revision": "210d9978219411f5523d20f1b647dc2d"
  },
  {
    "url": "views/music/202004222112-music-yushengcanxiang-majiko.html",
    "revision": "b26ac2f18a80a5b32730fd36ee6accf9"
  },
  {
    "url": "views/music/202008181816-music-majiko-two-songs.html",
    "revision": "3d24c023cce9fe7da68a11eb866a4f8c"
  },
  {
    "url": "views/music/202008192202-music-wozhizaihuni-live.html",
    "revision": "72cb560b4a882af589cf934fcf2473fe"
  },
  {
    "url": "views/photo/202008112342-daily-photo.html",
    "revision": "75400f7a3327fc9f953cd4d5de301a53"
  },
  {
    "url": "views/tips/202012201712-about-moutai.html",
    "revision": "f15c6cac3ab4aac4f50d318a090e8255"
  },
  {
    "url": "views/tips/202012241850-about-home-network.html",
    "revision": "c97d49edf82b2aeddde77940e7fc3770"
  },
  {
    "url": "views/tips/202101031942-about-carsickness.html",
    "revision": "f17d7f3c129dcf0a7428ca3001c9e70e"
  },
  {
    "url": "views/tips/collection-shopping-guide.html",
    "revision": "6f70c83d5643a21aa305f53f6030c1b9"
  },
  {
    "url": "views/travel/202004131000-guangzhou.html",
    "revision": "62dc876d14273ec21dbafd7a669e1829"
  },
  {
    "url": "views/travel/202004181340-chengdu.html",
    "revision": "9b7e3195f8d4f6445bfb5e4735c2b4d1"
  },
  {
    "url": "views/travel/202008042345-xili-ecological-park.html",
    "revision": "8f9ec15dbd3b266b7b019a524675057d"
  },
  {
    "url": "views/travel/202102281437-shenzhen.html",
    "revision": "8d340d5898fb758e55e6d41a30bd4262"
  },
  {
    "url": "views/travel/202109041735-shanxi-xian.html",
    "revision": "c35658b7db04d9293cbb4587c2da4b5f"
  },
  {
    "url": "views/travel/202109181036-shanxi-xian-plan.html",
    "revision": "077a07f84adb45ecad9c1b055b85d8a4"
  },
  {
    "url": "views/travel/on-the-way.html",
    "revision": "269f73bfb694563e99a442332e331ad0"
  },
  {
    "url": "views/video/202004152102-mv-nifengkuangdeyangziwojuedehenmei-majiko.html",
    "revision": "d0f2932d7c5616dba94ea3eb5cace36b"
  },
  {
    "url": "views/video/202006051606-video-ruhai-yka-ukulele.html",
    "revision": "319a59595a01b40b30f03857b6d8a5bd"
  },
  {
    "url": "views/video/202008202130-video-fanfangxiangdezhong-cover-jay-chou.html",
    "revision": "1dfe98c1986b50e70b4ca26c0e907109"
  },
  {
    "url": "views/video/202008292045-mv-nifengkuangdeyangziwojuedehenmei-xiaoyuan.html",
    "revision": "e11c945c1f82ff006ca59ad43e3d5057"
  },
  {
    "url": "views/video/202008312229-video-mikutap.html",
    "revision": "ed865018aa246603be162ee5ed35daee"
  },
  {
    "url": "views/video/202009202156-video-cengjingwoyexiangguoyiliaobailiao-yka-ukulele.html",
    "revision": "d31ec483abd6d4194df27c872a8d5ec8"
  },
  {
    "url": "views/video/202010311200-video-xuexingaiqinggushi-yka-ukulele.html",
    "revision": "ab72606d513504eb2ba8f667298cf580"
  },
  {
    "url": "views/video/202101171301-video-50-websites-BV1Ly4y1i7Ua.html",
    "revision": "ff034e60a919efec0e5f1469bca2aaee"
  },
  {
    "url": "views/video/202102191320-video-jixianghua-bilibili2021.html",
    "revision": "1a19b32e09d674352c5d0bddc58fcd7b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
