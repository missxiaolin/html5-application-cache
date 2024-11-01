if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(function (registration) {
        console.log("Service Worker 注册成功:", registration);
      })
      .catch(function (error) {
        console.log("Service Worker 注册失败:", error);
      });
  });
}
