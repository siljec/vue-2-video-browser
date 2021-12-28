<template>
    <div class="container">
        <SearchBar @termChange="onTermChange"></SearchBar>
        <div class="row">
            <VideoDetail :video="selectedVideo"/>
            <VideoList :videos="videos" @videoSelect="onVideoSelect"></VideoList>
        </div>
    </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue';
import VideoList from './components/VideoList.vue';
import VideoDetail from './components/VideoDetail.vue';


import axios from 'axios';
const API_KEY = ''; 

export default {
    name: 'App',
    data() {
        return {
            videos: [],
            selectedVideo: null,
        }
    },
    components: {
        SearchBar,
        VideoList,
        VideoDetail
    },
    methods: {
        onTermChange(searchTerm) {
            axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    key: API_KEY,
                    type: 'video',
                    part: 'snippet',
                    q: searchTerm,
                }
            }).then(response => {
                this.videos = response.data.items;
            });
        },
        onVideoSelect(video) {
            this.selectedVideo = video;
        }
    },
}
</script>
