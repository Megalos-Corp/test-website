var embed = new Twitch.Embed("twitch-embed", {
    width: 480,
    height: 270,
    channel: "megalosteam",
    layout: "video",
    autoplay: false,
  });

  embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
    var player = embed.getPlayer();
    player.play();
  });