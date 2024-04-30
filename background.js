chrome.downloads.onDeterminingFilename.addListener(function(downloadItem, suggest) {
  if (downloadItem.url.includes('minecraftmaps.com') || downloadItem.url.includes("mediafire.com")) {
    var downloadFolder = "minemaps/downloads/";
    suggest({
      filename: downloadFolder + downloadItem.filename,
    });
  }
});
