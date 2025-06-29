// スプラッシュアニメーション
window.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('splash-logo');
  if (splash) {
    setTimeout(() => {
      splash.classList.add('hide');
      setTimeout(() => {
        splash.style.display = 'none';
      }, 1000); // アニメーション後に非表示
    }, 1500); // 表示時間（ミリ秒）
  }
});

// フォーム送信時にアラート表示＆リセット
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('お問い合わせありがとうございます！\n担当者よりご連絡いたします。');
      form.reset();
    });
  }
});

// カードにホバー時のアニメーションを追加
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 12px 36px rgba(80,80,200,0.18)';
    card.style.transform = 'scale(1.05)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = '';
    card.style.transform = '';
  });
});

// ハンバーガーメニュー開閉
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
    });
    // メニュークリックで自動で閉じる（スマホ用）
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
      });
    });
  }
});