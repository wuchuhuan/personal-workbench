(() => {
  if (!('serviceWorker' in navigator)) return;
  if (location.protocol !== 'https:' && location.hostname !== 'localhost') return;
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch((error) => console.warn('个人工作台离线功能未启用：', error)));
})();
