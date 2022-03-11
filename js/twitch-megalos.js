var embed = new Twitch.Embed("twitch-embed", {
    width: 480,
    height: 320,
    channel: "megalosteam",
    layout: "video",
    autoplay: false,
    // Only needed if this page is going to be embedded on other websites
    parent: ["embed.example.com", "othersite.example.com"]
  });

  embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
    var player = embed.getPlayer();
    player.play();
  });