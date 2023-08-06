export function removeDuplicates(playlist) {
  const uniquePlaylist = new Set(playlist);
  return [...uniquePlaylist];
}

export function hasTrack(playlist, track) {
  const set = new Set(playlist);
  return set.has(track);
}

export function addTrack(playlist, track) {
  const set = new Set(playlist);
  const added = set.add(track);
  return [...added];
}

export function deleteTrack(playlist, track) {
  const set = new Set(playlist);
  playlist.forEach((item) => {
    if (item === track) set.delete(item);
  });
  return [...set];
}

export function listArtists(playlist) {
  return Array.from(new Set(playlist.map((track) => track.split(' - ').pop())));
}
