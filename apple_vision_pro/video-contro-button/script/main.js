document.addEventListener("DOMContentLoaded", function() {
  const video = document.querySelector('.intro-video'); // 获取video元素的引用
  const btn = document.querySelector('button.on-off');
  const img = document.querySelector('button.on-off img');
  let isPlaying = video.paused ? false : true; // 根据video的初始状态设置isPlaying

  btn.addEventListener("click", controlVideo);

  function controlVideo() {
    if (isPlaying) {
      video.pause(); // 暂停视频
      img.setAttribute('src', './image/resume_icon.png');
    } else {
      video.play(); // 播放视频
      img.setAttribute('src', './image/pause_icon.png');
    }
    isPlaying = !isPlaying;
  }
  
  // function updateBtn() {
  //   const imgSrc = isPlaying ? 'image/pause_icon.png' : 'image/resume_icon.png';
  //   img.setAttribute('src', imgSrc);
  //   isPlaying = !isPlaying;
  // }
    const progressIndicator = document.querySelector('.progress-indicator');
    const totalLength = 2 * Math.PI * 22.5; // circumference of the circle
  
    video.addEventListener('timeupdate', function() {
      const percentage = video.currentTime / video.duration;
      const offset = totalLength * (1 - percentage);
      progressIndicator.style.strokeDashoffset = offset;
    });
});


