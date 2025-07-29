window.addEventListener('load', () => {
  Swal.fire({
    title: 'Hi Sharini! 🎂',
    text: 'Are you ready for a little surprise?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Yes!',
    cancelButtonText: 'Not now 😅'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: 'Do you want to play music in the background?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
      }).then((musicChoice) => {
        if (musicChoice.isConfirmed) {
          const song = document.querySelector('.song');
          if (song) song.play();
        }
        animationTimeline();
      });
    } else {
      Swal.fire('Okay!', 'Come back when you’re ready ❤️', 'info');
    }
  });
});
