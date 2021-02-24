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

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "eleventy-plugin-pwa"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/css/main.2a7e784bd3ae8e788cc5.css",
    "revision": "7c9e673f343d57a164d6470ed6855ff2"
  },
  {
    "url": "assets/fonts/circular/CircularStd-Black.eot",
    "revision": "065e2ae87e88c578b8528ca29170fe38"
  },
  {
    "url": "assets/fonts/circular/CircularStd-Black.svg",
    "revision": "aa09dfdd4b982dff35b9273c68bd7b05"
  },
  {
    "url": "assets/fonts/circular/CircularStd-Black.ttf",
    "revision": "9b6564ef5769f86ebf152ed5944b7495"
  },
  {
    "url": "assets/fonts/circular/CircularStd-Black.woff",
    "revision": "a26c4cdd07ad2740fe5d28249a2a60c3"
  },
  {
    "url": "assets/fonts/circular/CircularStd-Black.woff2",
    "revision": "409f83fd7fc0d0139d9066aa790827be"
  },
  {
    "url": "assets/fonts/circular/CircularStd-BlackItalic.eot",
    "revision": "67f55d4a26c968ecdb3f2ee4a20a9565"
  },
  {
    "url": "assets/fonts/circular/CircularStd-BlackItalic.svg",
    "revision": "014eb9fc4a16f17d28f474de307b0f1d"
  },
  {
    "url": "assets/fonts/circular/CircularStd-BlackItalic.ttf",
    "revision": "7d63d946ddca2c6ee432395362adae7f"
  },
  {
    "url": "assets/fonts/circular/CircularStd-BlackItalic.woff",
    "revision": "115557e2de79fc8362ed958e4aee1881"
  },
  {
    "url": "assets/fonts/circular/CircularStd-BlackItalic.woff2",
    "revision": "1856f4768a1f86d56a1991fb11930e63"
  },
  {
    "url": "assets/fonts/circular/CircularStd-Bold.eot",
    "revision": "21d4cf5f86faac71d2f0e13b03780148"
  },
  {
    "url": "assets/fonts/circular/CircularStd-Bold.svg",
    "revision": "200f7b4a6dcb495c41faddea243d72d3"
  },
  {
    "url": "assets/fonts/circular/CircularStd-Bold.ttf",
    "revision": "58be4386773c7993ca12962daa081f89"
  },
  {
    "url": "assets/fonts/circular/CircularStd-Bold.woff",
    "revision": "576fa01e72d849787fb4dbe83add039e"
  },
  {
    "url": "assets/fonts/circular/CircularStd-Bold.woff2",
    "revision": "bece46323fd87a2c9deee0481c040cc9"
  },
  {
    "url": "assets/fonts/circular/CircularStd-BoldItalic.eot",
    "revision": "9fda698b04ce02a3f8e7e7995ef2e130"
  },
  {
    "url": "assets/fonts/circular/CircularStd-BoldItalic.svg",
    "revision": "2bfdf80f1e4b317f14f81c3ae4df443d"
  },
  {
    "url": "assets/fonts/circular/CircularStd-BoldItalic.ttf",
    "revision": "2d0a4b1934d2e85fa3fc9c42c963f00f"
  },
  {
    "url": "assets/fonts/circular/CircularStd-BoldItalic.woff",
    "revision": "568e3be1aecb30bc3734d4e8081a4d72"
  },
  {
    "url": "assets/fonts/circular/CircularStd-BoldItalic.woff2",
    "revision": "14d9d9a34db83ad42f383b9e999fce4d"
  },
  {
    "url": "assets/fonts/circular/CircularStd-Book.eot",
    "revision": "813791c94faa94133a99a20cace2dd60"
  },
  {
    "url": "assets/fonts/circular/CircularStd-Book.svg",
    "revision": "0c58dad4d401e5af9098650bc1488e92"
  },
  {
    "url": "assets/fonts/circular/CircularStd-Book.ttf",
    "revision": "765830fa730b8f6dc2fbb04c234757e6"
  },
  {
    "url": "assets/fonts/circular/CircularStd-Book.woff",
    "revision": "672700ab98fdf81b497a580222110788"
  },
  {
    "url": "assets/fonts/circular/CircularStd-Book.woff2",
    "revision": "0d4f18485542c37a382d1b55f794d7a8"
  },
  {
    "url": "assets/fonts/circular/CircularStd-BookItalic.eot",
    "revision": "d3201ba5bcd96e2947b5bfeec9292e58"
  },
  {
    "url": "assets/fonts/circular/CircularStd-BookItalic.svg",
    "revision": "e9206aff0fd220173911c5c023a4cb76"
  },
  {
    "url": "assets/fonts/circular/CircularStd-BookItalic.ttf",
    "revision": "8da81d89d3bd90ff884b6938127defc0"
  },
  {
    "url": "assets/fonts/circular/CircularStd-BookItalic.woff",
    "revision": "b849df2efeb5b7989125dbf752f11bd3"
  },
  {
    "url": "assets/fonts/circular/CircularStd-BookItalic.woff2",
    "revision": "7a1703296a32fb38e7fc24e1bdd56099"
  },
  {
    "url": "assets/fonts/circular/CircularStd-Medium.eot",
    "revision": "002ab06f6f5230642cfbcac27213b96f"
  },
  {
    "url": "assets/fonts/circular/CircularStd-Medium.svg",
    "revision": "5700c035f73bbbcdb6759d95fa0a150a"
  },
  {
    "url": "assets/fonts/circular/CircularStd-Medium.ttf",
    "revision": "110d300dc4510e6c675dc84d771794e7"
  },
  {
    "url": "assets/fonts/circular/CircularStd-Medium.woff",
    "revision": "a0512efdb562668fc1b8732f4a4075be"
  },
  {
    "url": "assets/fonts/circular/CircularStd-Medium.woff2",
    "revision": "0f49ee33633f2d50e1288878e6b9a7b1"
  },
  {
    "url": "assets/fonts/circular/CircularStd-MediumItalic.eot",
    "revision": "c6b7ce3f8c873e1c52e60b6d1cfdc5f3"
  },
  {
    "url": "assets/fonts/circular/CircularStd-MediumItalic.svg",
    "revision": "ea159119b56f8c4ddce05172356d5858"
  },
  {
    "url": "assets/fonts/circular/CircularStd-MediumItalic.ttf",
    "revision": "1969df9e47f35a9337e484cb6d66b08f"
  },
  {
    "url": "assets/fonts/circular/CircularStd-MediumItalic.woff",
    "revision": "eb266d00d820d87282b1c1d2b99e116c"
  },
  {
    "url": "assets/fonts/circular/CircularStd-MediumItalic.woff2",
    "revision": "f7df608f6960bb9454b2603dda0f7c66"
  },
  {
    "url": "assets/fonts/icomoon/icomoon.eot",
    "revision": "c15471fbe2f5c8b86abe8924c010f6e6"
  },
  {
    "url": "assets/fonts/icomoon/icomoon.svg",
    "revision": "d3cd6a2586f7b89b08e64b33b9ecf6cf"
  },
  {
    "url": "assets/fonts/icomoon/icomoon.ttf",
    "revision": "25ac9c6918221a8d4c137c5f6e728249"
  },
  {
    "url": "assets/fonts/icomoon/icomoon.woff",
    "revision": "91e9db32ad46a13516a94620221f110a"
  },
  {
    "url": "assets/fonts/source-sans-pro/source-sans-pro-v14-latin-700.eot",
    "revision": "f7db7429119454dc55845cd4d4013586"
  },
  {
    "url": "assets/fonts/source-sans-pro/source-sans-pro-v14-latin-700.svg",
    "revision": "c1c09b296df000fd064aacb10d4499cd"
  },
  {
    "url": "assets/fonts/source-sans-pro/source-sans-pro-v14-latin-700.ttf",
    "revision": "07d81517c33a1f61c53338fc6221e8e5"
  },
  {
    "url": "assets/fonts/source-sans-pro/source-sans-pro-v14-latin-700.woff",
    "revision": "b03f2ec28f8e60e61974dd8c57610e5b"
  },
  {
    "url": "assets/fonts/source-sans-pro/source-sans-pro-v14-latin-700.woff2",
    "revision": "1a4bcb3ec9c508d478d4dbf6b56f6208"
  },
  {
    "url": "assets/fonts/source-sans-pro/source-sans-pro-v14-latin-italic.eot",
    "revision": "90e0cd5f1aa3786e4bc3ed4cc587c0e8"
  },
  {
    "url": "assets/fonts/source-sans-pro/source-sans-pro-v14-latin-italic.svg",
    "revision": "a3718cb14a6e17a0bacf0f3247e24531"
  },
  {
    "url": "assets/fonts/source-sans-pro/source-sans-pro-v14-latin-italic.ttf",
    "revision": "29806f1a2be3f1988ce07f15f06ddb03"
  },
  {
    "url": "assets/fonts/source-sans-pro/source-sans-pro-v14-latin-italic.woff",
    "revision": "86b2389fa562da6b9425271d1833d490"
  },
  {
    "url": "assets/fonts/source-sans-pro/source-sans-pro-v14-latin-italic.woff2",
    "revision": "dac2fca7ba8512baa24172f1171c961f"
  },
  {
    "url": "assets/fonts/source-sans-pro/source-sans-pro-v14-latin-regular.eot",
    "revision": "8ddcafb98403e3c126c5b64545911b0c"
  },
  {
    "url": "assets/fonts/source-sans-pro/source-sans-pro-v14-latin-regular.svg",
    "revision": "3d536f380466c415ea74e04b54dcc087"
  },
  {
    "url": "assets/fonts/source-sans-pro/source-sans-pro-v14-latin-regular.ttf",
    "revision": "123352716b6df5cc7d06e6edb5f9554b"
  },
  {
    "url": "assets/fonts/source-sans-pro/source-sans-pro-v14-latin-regular.woff",
    "revision": "5cc3aae674ea3b199313b3b83bd795bc"
  },
  {
    "url": "assets/fonts/source-sans-pro/source-sans-pro-v14-latin-regular.woff2",
    "revision": "899c8f78ce650d4009d42443897aa723"
  },
  {
    "url": "assets/images/advisory-council.jpg",
    "revision": "fe6c5919eec073db2ca75a923d4549d5"
  },
  {
    "url": "assets/images/advisory-council.webp",
    "revision": "c1757ad650e0a34138350c3fc9cae7fc"
  },
  {
    "url": "assets/images/bg-directors-bottom.svg",
    "revision": "6a478385d66bd21231e66c91ae934bce"
  },
  {
    "url": "assets/images/bg-directors-right.svg",
    "revision": "3c036d13b23f7aea58d9be634b0709d0"
  },
  {
    "url": "assets/images/bg-directors-top.svg",
    "revision": "8350e3c5895af5822b0d28a880a2edbb"
  },
  {
    "url": "assets/images/bg-education-next-up.svg",
    "revision": "765e4cf72d04ed6766cfee265d247d7e"
  },
  {
    "url": "assets/images/bg-hai-numbers-bottom.svg",
    "revision": "bfd8b035a044df66f6dc590beec0cb3c"
  },
  {
    "url": "assets/images/bg-hai-numbers-right.svg",
    "revision": "e8b277bc9e771ca994bfaf715b8e3031"
  },
  {
    "url": "assets/images/bg-national-cloud-bottom.svg",
    "revision": "64e8bcea4a97b7cd8c28bc2b939788b0"
  },
  {
    "url": "assets/images/bg-next-page.svg",
    "revision": "721386eef44c40d6c83ad846c58f06a4"
  },
  {
    "url": "assets/images/bg-people-next-up.svg",
    "revision": "471f5a7a24998db4ade33091398dca83"
  },
  {
    "url": "assets/images/bg-policy-next-up.svg",
    "revision": "c52e99e440eb68d9b8647e8aeca77e76"
  },
  {
    "url": "assets/images/bg-research-grid-bottom.svg",
    "revision": "50a15b43c25294bbafa26cb6766ab27c"
  },
  {
    "url": "assets/images/bg-research-next-up.svg",
    "revision": "49d7d1efda89c9839fb1a1a338846fcf"
  },
  {
    "url": "assets/images/blake-barlow-qzqqoIIE_j0-unsplash.jpg",
    "revision": "463d63cb9deae4e9d0a2550cd97e0921"
  },
  {
    "url": "assets/images/blake-barlow-qzqqoIIE_j0-unsplash.webp",
    "revision": "7b22ad4b5c3e6df8f7bb0e0c94da38a4"
  },
  {
    "url": "assets/images/CGCS-p2-8.jpg",
    "revision": "fa173925f130e9f786c4e0722a68e838"
  },
  {
    "url": "assets/images/CGCS-p2-8.webp",
    "revision": "8af0799b64bc651ecad114c32cce456a"
  },
  {
    "url": "assets/images/chart-funded-faculty-team-members.gif",
    "revision": "a225dba0102ac6fcee03b3102563b470"
  },
  {
    "url": "assets/images/chart-funded-faculty-team-members.svg",
    "revision": "957e1f109d827cb59b5a2a7722ea0168"
  },
  {
    "url": "assets/images/chart-projects-spanning-multiple-departments.gif",
    "revision": "d3f5e201685a184d4601b78334258c71"
  },
  {
    "url": "assets/images/chart-projects-spanning-multiple-departments.svg",
    "revision": "a9f46991d00d5a8c351e61654691d41f"
  },
  {
    "url": "assets/images/christopher-manning.jpg",
    "revision": "6ea3181dcb887a8781b88de727f2ed8b"
  },
  {
    "url": "assets/images/christopher-manning.webp",
    "revision": "96b0d238c70bdc238fdc5378bc74be4c"
  },
  {
    "url": "assets/images/commitment-to-action-illustration.png",
    "revision": "1dbfe33a989a93ab3f27bbea1b373a27"
  },
  {
    "url": "assets/images/commitment-to-action-illustration.webp",
    "revision": "ffbe980b242f24a578c55bf4786afd07"
  },
  {
    "url": "assets/images/corporate-member-program.jpg",
    "revision": "718b0a3ed5efd22d3bb87d5a54cb0946"
  },
  {
    "url": "assets/images/corporate-member-program.webp",
    "revision": "5ed33a9e686f1c8c20763d39142023d5"
  },
  {
    "url": "assets/images/daniel-e-ho.jpg",
    "revision": "a1b36e3ba2b909cbde0647f59f7781d7"
  },
  {
    "url": "assets/images/daniel-e-ho.webp",
    "revision": "db601e2126e7abe4c858fc33d70950a9"
  },
  {
    "url": "assets/images/deep-ganguli.jpg",
    "revision": "27d548b6af02f22aa0447ec7d286bcd6"
  },
  {
    "url": "assets/images/deep-ganguli.webp",
    "revision": "971d682c8ad71c3d180bf3fd36640c2b"
  },
  {
    "url": "assets/images/del.jpg",
    "revision": "84f0bf83f0ab53ebab43e178e7ca70a7"
  },
  {
    "url": "assets/images/del.webp",
    "revision": "f32ff0e3f6e488b57e93950f98a019d6"
  },
  {
    "url": "assets/images/education.jpg",
    "revision": "0c80108c58ba659762df04374e7eea39"
  },
  {
    "url": "assets/images/education.webp",
    "revision": "93dd6c4ed0d9418fd67736f5c483f6ff"
  },
  {
    "url": "assets/images/emerging-future-leaders.jpg",
    "revision": "613f75129475dfdd5bdf0a8552ed3b05"
  },
  {
    "url": "assets/images/emerging-future-leaders.webp",
    "revision": "713b10d70f2d45eb04a241a964723afc"
  },
  {
    "url": "assets/images/erik-brynjolfsson.jpg",
    "revision": "d721dff962795865eb38ee591c94a7b6"
  },
  {
    "url": "assets/images/erik-brynjolfsson.webp",
    "revision": "9f35967df5c678af411ca248ea69ba97"
  },
  {
    "url": "assets/images/events.jpg",
    "revision": "6487c242ef0d10b92793e19a5f1f4daf"
  },
  {
    "url": "assets/images/events.webp",
    "revision": "7b188b52c9f0c3899105bde2258edf0a"
  },
  {
    "url": "assets/images/executive-challenge-2019-msx-fellows-presentation-01.jpg",
    "revision": "f6986cf1d459805ca08b9be2721f9710"
  },
  {
    "url": "assets/images/executive-challenge-2019-msx-fellows-presentation-01.webp",
    "revision": "4257c11a8bb17f3cb2c659c545c53ae8"
  },
  {
    "url": "assets/images/fei-fei-li.jpg",
    "revision": "9d746edb28f501e9a0d3ee609faaaeef"
  },
  {
    "url": "assets/images/fei-fei-li.webp",
    "revision": "fce8a129b76a6595b6334f2f6971923d"
  },
  {
    "url": "assets/images/hero-home-illustration.png",
    "revision": "af7706132d1ffcafc766549d43bd9974"
  },
  {
    "url": "assets/images/hero-home-illustration.webp",
    "revision": "baa3aa111bfcba91d40ad6a6bd53c499"
  },
  {
    "url": "assets/images/hero-illustration.png",
    "revision": "e2b1dd67a854192c00a6b4e2750bf185"
  },
  {
    "url": "assets/images/hero-illustration.webp",
    "revision": "2b81361adcb9b7e29b7ebe68eedd26ae"
  },
  {
    "url": "assets/images/high-impact-decision-makers.jpg",
    "revision": "1c63a13110c4b62271a198118224676c"
  },
  {
    "url": "assets/images/high-impact-decision-makers.webp",
    "revision": "a2da2a7b74d2b46e70e88d0dd5ff7c46"
  },
  {
    "url": "assets/images/hivan-arvizu-soyhivan-MAnhvw0nDDY-unsplash.jpg",
    "revision": "254b1315d384b5ffc20a4cd8b974f904"
  },
  {
    "url": "assets/images/hivan-arvizu-soyhivan-MAnhvw0nDDY-unsplash.webp",
    "revision": "dbdcdcb4190341d6c6e12bd15aadfbc0"
  },
  {
    "url": "assets/images/james-landay.jpg",
    "revision": "d1ba19c4d5a5360388a662b50a9ce45d"
  },
  {
    "url": "assets/images/james-landay.webp",
    "revision": "400278a290342758b2dcc29df22540c6"
  },
  {
    "url": "assets/images/james-zou.jpg",
    "revision": "90bf451a8fb7862ea5358b29fcd22bf8"
  },
  {
    "url": "assets/images/james-zou.webp",
    "revision": "d061b528827c0956595163b48558f538"
  },
  {
    "url": "assets/images/johannes-eichstaedt.jpg",
    "revision": "53dc58a7c32ac93545f5f49c282ff37a"
  },
  {
    "url": "assets/images/johannes-eichstaedt.webp",
    "revision": "39de325954aced33f25c69b5916d0278"
  },
  {
    "url": "assets/images/john-etchemendy.jpg",
    "revision": "6e785bf38f7e5c181a3b7809197b3ddd"
  },
  {
    "url": "assets/images/john-etchemendy.webp",
    "revision": "ecd37104dadf1012b456a4f152e679d7"
  },
  {
    "url": "assets/images/logo-hai-horz.svg",
    "revision": "4cb27667b6592a07d90e874f4b4ad716"
  },
  {
    "url": "assets/images/logo-stanford-digital-economy-lab-white.svg",
    "revision": "a5d5773206144b63454b4b4d3d1f32b7"
  },
  {
    "url": "assets/images/man-woman.jpg",
    "revision": "2918e994d3fc0f4fdc7975897412212e"
  },
  {
    "url": "assets/images/man-woman.webp",
    "revision": "856d65a3416dd7891ab2d19f99e0f923"
  },
  {
    "url": "assets/images/marietje-schaake.jpg",
    "revision": "ec065ca720bb6fed578d74cc82358526"
  },
  {
    "url": "assets/images/marietje-schaake.webp",
    "revision": "b8e2e405bce20f02045e828c65d9ba05"
  },
  {
    "url": "assets/images/michele-elam.jpg",
    "revision": "2dc40544fd68ddc41dcd1b8acb8f2596"
  },
  {
    "url": "assets/images/michele-elam.webp",
    "revision": "fe43d16c505eee4c0c505530787237e6"
  },
  {
    "url": "assets/images/mike-sellitto.jpg",
    "revision": "82db77661b4e0373ba7038843473b295"
  },
  {
    "url": "assets/images/mike-sellitto.webp",
    "revision": "a7f4a97041d13460fd248873716dea02"
  },
  {
    "url": "assets/images/Obama_Health_Care_Speech_to_Joint_Session_of_Congress.jpg",
    "revision": "c35b5a6e118333a3744fd16e90221e5f"
  },
  {
    "url": "assets/images/Obama_Health_Care_Speech_to_Joint_Session_of_Congress.webp",
    "revision": "04f7a246f4585b420f660f78062846e0"
  },
  {
    "url": "assets/images/people-chatting.jpg",
    "revision": "fe2799d3c356fe12cd4f64ce0e62cef1"
  },
  {
    "url": "assets/images/people-chatting.webp",
    "revision": "1a04a2f3d17e853dc1352ba582527f10"
  },
  {
    "url": "assets/images/people.jpg",
    "revision": "341fa9483f8b2d8c09cce215f60561b1"
  },
  {
    "url": "assets/images/people.webp",
    "revision": "a93091616aa186b38467dd053215d0be"
  },
  {
    "url": "assets/images/policy.jpg",
    "revision": "579df6437f6dceacd2587d5f9ae42a4b"
  },
  {
    "url": "assets/images/policy.png",
    "revision": "3560f4e1b66693f0190dd88db2a80f85"
  },
  {
    "url": "assets/images/policy.webp",
    "revision": "b9a0b5af5dc580da7263bd7a56499bd9"
  },
  {
    "url": "assets/images/ralph-landau.jpg",
    "revision": "82a40282f1c3ffc331e104273a0ee2e0"
  },
  {
    "url": "assets/images/ralph-landau.webp",
    "revision": "ce55475eb6f5b1387cbfa2bbbd28b3b5"
  },
  {
    "url": "assets/images/research.jpg",
    "revision": "78683cba0fe891e7ce3a05d1a0800412"
  },
  {
    "url": "assets/images/research.webp",
    "revision": "b8a3788c1f3ecca23d625ff10e2fde31"
  },
  {
    "url": "assets/images/rob-reich.jpg",
    "revision": "3d46e83d14b7dff4b67bc791f1ffc524"
  },
  {
    "url": "assets/images/rob-reich.webp",
    "revision": "254bc76f160c19bc975597897435518a"
  },
  {
    "url": "assets/images/russ-altman.jpg",
    "revision": "162c23e6c712ef793e2e878245919025"
  },
  {
    "url": "assets/images/russ-altman.webp",
    "revision": "16acf2905bedc84dec2cc1861cd81648"
  },
  {
    "url": "assets/images/section-people.jpg",
    "revision": "aaed717207648c9a01e36d4c97bf51fe"
  },
  {
    "url": "assets/images/section-people.webp",
    "revision": "58b31e1d6dc235b1073c3ace6ee47434"
  },
  {
    "url": "assets/images/sig-fei-fei-li.svg",
    "revision": "3826c40dfa5396f784246c6f41917845"
  },
  {
    "url": "assets/images/sig-john-etchemendy.svg",
    "revision": "cb86145127ea2e4d5eb0190cc1238941"
  },
  {
    "url": "assets/images/slide-research.jpg",
    "revision": "f205ab312d6dd0bb722925b4f9e35df6"
  },
  {
    "url": "assets/images/slide-research.webp",
    "revision": "dc07b9c2c13729ec052f9aa7f5b18392"
  },
  {
    "url": "assets/images/social.jpg",
    "revision": "1564b1640e4c3f1cf3759731b1c5bb4e"
  },
  {
    "url": "assets/images/social.webp",
    "revision": "1240d57b3fed66b10bed554dbfbb2026"
  },
  {
    "url": "assets/images/surya-ganguli.jpg",
    "revision": "971f7fe9a3fda15938d7eaea204d7539"
  },
  {
    "url": "assets/images/surya-ganguli.webp",
    "revision": "ab6e069c0b90b7ab38187aa9f7627c45"
  },
  {
    "url": "assets/images/susan-athey.jpg",
    "revision": "86d648a9e960f0483d3efacec7a7864d"
  },
  {
    "url": "assets/images/susan-athey.webp",
    "revision": "61abcb312a264b7011389cb0ff0d9588"
  },
  {
    "url": "assets/images/thank-you-illustration.png",
    "revision": "35c7afc39bd41705d2bd2ac10bc26943"
  },
  {
    "url": "assets/images/thank-you-illustration.webp",
    "revision": "95bcaadfa83fc6e8905bddf208a0df3e"
  },
  {
    "url": "assets/images/yang-yamazaki.jpg",
    "revision": "9bd13160a4d904ce5cc8dc6073c29f7f"
  },
  {
    "url": "assets/images/yang-yamazaki.webp",
    "revision": "379ed50f4fcfcd85d13624ff641fde41"
  },
  {
    "url": "assets/js/main.310bf62123eef9d57364.js",
    "revision": "7a3a0338099e64cafdd162caae9c0db1"
  },
  {
    "url": "assets/js/sw.310bf62123eef9d57364.js",
    "revision": "c251be0d8396dbd731d20450ddd7a89e"
  },
  {
    "url": "education/index.html",
    "revision": "29c5d7366a6a4dafd91129a7816deb8c"
  },
  {
    "url": "favicon.ico",
    "revision": "dd386d03b0401db417fa328e8fb71a7e"
  },
  {
    "url": "index.html",
    "revision": "64227631e9cdc4c6bc9fb349ad7cb2d4"
  },
  {
    "url": "manifest.json",
    "revision": "738d6feaad520cf2c61ebd30be3e67b7"
  },
  {
    "url": "people/index.html",
    "revision": "ec70ae1531e7d45a1dcf2b3133045b99"
  },
  {
    "url": "policy/index.html",
    "revision": "dec3084115e755bba3bdb7544e34da58"
  },
  {
    "url": "research/index.html",
    "revision": "0ca6c64df8594822a9b98926b1359c03"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
