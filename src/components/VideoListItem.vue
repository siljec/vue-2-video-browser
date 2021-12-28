<template>
    <li class="list-group-item media" @click="onVideoSelect">
        <img :src="thumbnailUrl" alt="" class="me-3"/>
        <div class="media-body">{{ video.snippet.title }}</div>
    </li>
</template>

<script>
export default {
    name: 'VideoListItem',
    computed: {
        thumbnailUrl() {
            return this.video.snippet.thumbnails.default.url;
        }
    },
    props: ['video'],
    methods: {
        onVideoSelect() {
            this.$emit('videoSelect', this.video);
        }
    }
}
</script>

<style scoped>
    li {
        display: flex;
        cursor: pointer;
    }
    li:hover {
        background-color: lightgray;
    }
</style>