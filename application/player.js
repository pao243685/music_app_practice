export default {
    _past_songs: [],
    _nextSongs: [],
    getNextSong: function (){
        return this._nextSongs.pop();
    }
}
