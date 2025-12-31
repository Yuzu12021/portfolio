// main.js

// スクロールアニメーション
document.addEventListener("DOMContentLoaded", () => {
  const animatedElems = document.querySelectorAll("[data-animate]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          // 一度表示したら監視を外す（何度も発火させたくない場合）
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  animatedElems.forEach((el) => observer.observe(el));
});

// （余裕があれば：Hero画像にちょっとだけパララックス）
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  const frame = document.querySelector(".hero-photo-frame");
  if (!hero || !frame) return;

  const rect = hero.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;

  // Heroが画面にある範囲だけ軽く動かす
  if (rect.top < windowHeight && rect.bottom > 0) {
    const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
    const translateY = (progress - 0.5) * 14; // -7px〜+7pxくらい
    frame.style.transform = `translateY(${translateY.toFixed(1)}px)`;
  } else {
    frame.style.transform = "translateY(0)";
  }
});
// ▼work-titleが見えたらクラス付与
const titles = document.querySelectorAll('.work-title');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-active');
    }
  });
}, {
  root: null,
  threshold: 0.5, // 画面の50%入ったら発火（お好みで）
});

// 監視スタート
titles.forEach(title => observer.observe(title));

document.addEventListener("DOMContentLoaded", () => {
  const heroSlides = document.querySelectorAll(".hero-photo-frame.slideshow-hero img");
  if (!heroSlides.length) return;

  // すでに active が付いている画像を探す（HTML側の指定を尊重）
  let current = Array.from(heroSlides).findIndex(img =>
    img.classList.contains("active")
  );

  // なければ先頭を active にする
  if (current === -1) {
    current = 0;
    heroSlides[current].classList.add("active");
  }

  const interval = 6000; // 6秒ごとに切り替え

  setInterval(() => {
    heroSlides[current].classList.remove("active");
    current = (current + 1) % heroSlides.length;
    heroSlides[current].classList.add("active");
  }, interval);
});
