import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title: 'After Hours', duration: '4:05'},
        {title: 'Carry On', duration: '3:38' },
        {title: 'Bittersweet', duration: '2:30'},
        {title: 'Memories', duration: '3:20'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});