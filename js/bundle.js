// !(function (e) {
//   var t = {};
//   function r(n) {
//     if (t[n]) return t[n].exports;
//     var i = (t[n] = { i: n, l: !1, exports: {} });
//     return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
//   }
//   (r.m = e),
//     (r.c = t),
//     (r.d = function (e, t, n) {
//       r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
//     }),
//     (r.r = function (e) {
//       "undefined" != typeof Symbol &&
//         Symbol.toStringTag &&
//         Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
//         Object.defineProperty(e, "__esModule", { value: !0 });
//     }),
//     (r.t = function (e, t) {
//       if ((1 & t && (e = r(e)), 8 & t)) return e;
//       if (4 & t && "object" == typeof e && e && e.__esModule) return e;
//       var n = Object.create(null);
//       if (
//         (r.r(n),
//         Object.defineProperty(n, "default", { enumerable: !0, value: e }),
//         2 & t && "string" != typeof e)
//       )
//         for (var i in e)
//           r.d(
//             n,
//             i,
//             function (t) {
//               return e[t];
//             }.bind(null, i)
//           );
//       return n;
//     }),
//     (r.n = function (e) {
//       var t =
//         e && e.__esModule
//           ? function () {
//               return e.default;
//             }
//           : function () {
//               return e;
//             };
//       return r.d(t, "a", t), t;
//     }),
//     (r.o = function (e, t) {
//       return Object.prototype.hasOwnProperty.call(e, t);
//     }),
//     (r.p = ""),
//     r((r.s = 0));
// })([
//   function (e, t, r) {
//     e.exports = r(1);
//   },
//   function (e, t, r) {
//     "use strict";
//     r.r(t);
//     r(2), r(3), r(4), r(5), r(6), r(7), r(8), r(9);
//   },
//   function (e, t, r) {},
//   function (e, t) {
//     var r = document.querySelector(".show-more__btn"),
//       n = document.querySelector(".slider-brands__wrapper"),
//       i = r.querySelector("span"),
//       o = r.querySelector(".show-more--img");
//     r.addEventListener("click", function () {
//       "Показать все" === i.textContent
//         ? ((n.style.height = "100%"),
//           (i.textContent = "Скрыть"),
//           (o.style.transform = "rotate(180deg)"))
//         : ((n.style.height = "145px"),
//           (i.textContent = "Показать все"),
//           (o.style.transform = "rotate(0deg)"));
//     });
//   },
//   function (e, t) {
//     var r = document.querySelector(".read__more"),
//       n = document.querySelector(".article__text"),
//       i = r.querySelector("span"),
//       o = r.querySelector(".read__more--icon");
//     r.addEventListener("click", function () {
//       "Читать далее" === i.textContent
//         ? ((n.style.height = "100%"),
//           (i.textContent = "Скрыть"),
//           (o.style.transform = "rotate(180deg)"))
//         : ((n.style.height = "19vw"),
//           (o.style.transform = "rotate(0deg)"),
//           (i.textContent = "Читать далее"));
//     });
//   },
//   function (e, t) {
//     window.addEventListener("DOMContentLoaded", function () {
//       !(function (e, t, r) {
//         var n;
//         e = window.matchMedia(e);
//         var i = function () {
//           return e.matches
//             ? void (n = new Swiper(t, r))
//             : void (void 0 !== n && n.destroy(!0, !0));
//         };
//         e.addEventListener("change", i), i();
//       })("(max-width: 480px)", ".slider-brands", {
//         loop: !0,
//         pagination: { el: ".swiper-pagination", clickable: !0 },
//         breakpoints: {
//           320: { slidesPerView: 1.3 },
//           350: { slidesPerView: 1.5 },
//           480: { slidesPerView: 2 },
//         },
//       });
//     });
//   },
//   function (e, t) {
//     var r = document.querySelector(".button__show-more"),
//       n = document.querySelector(".service__slider"),
//       i = r.querySelector("span"),
//       o = r.querySelector(".button__show-more--image");
//     r.addEventListener("click", function () {
//       "Показать все" === i.textContent
//         ? ((n.style.height = "100%"),
//           (i.textContent = "Скрыть"),
//           (o.style.transform = "rotate(180deg)"))
//         : ((n.style.height = "180px"),
//           (i.textContent = "Показать все"),
//           (o.style.transform = "rotate(0deg)"));
//     });
//   },
//   function (e, t) {
//     window.addEventListener("DOMContentLoaded", function () {
//       !(function (e, t, r) {
//         var n;
//         e = window.matchMedia(e);
//         var i = function () {
//           return e.matches
//             ? void (n = new Swiper(t, r))
//             : void (void 0 !== n && n.destroy(!0, !0));
//         };
//         e.addEventListener("change", i), i();
//       })("(max-width: 480px)", ".service__slider", {
//         loop: !0,
//         pagination: { el: ".swiper-pagination ", clickable: !0 },
//         breakpoints: {
//           320: { slidesPerView: 1 },
//           350: { slidesPerView: 1.3 },
//           480: { slidesPerView: 1.5 },
//         },
//       });
//     });
//   },
//   function (e, t) {
//     var r = document.querySelector(".header"),
//       n = document.querySelector(".aside"),
//       i = document.querySelector(".requere-call"),
//       o = document.querySelector(".feedback"),
//       c = document.querySelector(".blur"),
//       s = document.querySelector(".burger"),
//       a = document.querySelector(".btn__close"),
//       d = document.querySelector(".call"),
//       l = r.querySelector(".call"),
//       u = document.querySelector(".chat"),
//       v = r.querySelector(".chat"),
//       f = o.querySelector(".feedback__close"),
//       _ = i.querySelector(".requere-call__btn-close");
//     s.addEventListener("click", function () {
//       n.classList.add("active"), c.classList.add("active__blur");
//     }),
//       d.addEventListener("click", function () {
//         n.classList.remove("active"),
//           i.classList.add("active__requere"),
//           c.classList.add("active__blur");
//       }),
//       l.addEventListener("click", function () {
//         i.classList.add("active__requere"), c.classList.add("active__blur");
//       }),
//       u.addEventListener("click", function () {
//         o.classList.add("active__feedback"),
//           n.classList.remove("active"),
//           c.classList.add("active__blur");
//       }),
//       v.addEventListener("click", function () {
//         o.classList.add("active__feedback"), c.classList.add("active__blur");
//       }),
//       a.addEventListener("click", function () {
//         n.classList.remove("active"), c.classList.remove("active__blur");
//       }),
//       f.addEventListener("click", function () {
//         o.classList.remove("active__feedback"),
//           c.classList.remove("active__blur");
//       }),
//       _.addEventListener("click", function () {
//         i.classList.remove("active__requere"),
//           c.classList.remove("active__blur");
//       }),
//       c.addEventListener("click", function () {
//         i.classList.remove("active__requere"),
//           o.classList.remove("active__feedback"),
//           n.classList.remove("active"),
//           c.classList.remove("active__blur");
//       });
//   },
//   function (e, t) {
//     window.addEventListener("DOMContentLoaded", function () {
//       !(function (e, t, r) {
//         var n;
//         e = window.matchMedia(e);
//         var i = function () {
//           return e.matches ? void (n = new Swiper(t, r)) : void (void 0 !== n && n.destroy(!0, !0));
//         };
//         e.addEventListener("change", i), i();
//       })("(max-width: 768px)", ".price__slider", {
//         loop: !0,
//         pagination: { el: ".swiper-pagination ", clickable: !0 },
//         breakpoints: {
//           320: { slidesPerView: 1 },
//           350: { slidesPerView: 1.2 },
//           425: { slidesPerView: 1.4 },
//           480: { slidesPerView: 1.7 },
//           520: { slidesPerView: 1.9 },
//           580: { slidesPerView: 2 },
//           630: { slidesPerView: 2.3 },
//           676: { slidesPerView: 2.5 },
//         },
//       });
//     });
//   },
// ]);
