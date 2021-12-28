<template>
    <div v-if="video" class="col-8">
        <div class="ratio ratio-16x9">
            <iframe :src="videoUrl" frameborder="0"></iframe>
        </div>
        <div class="details">
            <h4>{{ video.snippet.title}}</h4>
            <p>{{ video.snippet.description}}</p>
        </div>
    </div>
</template>

<script>

export default {
    name: "VideoDetail",
    props: ['video'],
    computed: {
        videoUrl() {
            const { videoId } = this.video.id;
            return `https://www.youtube.com/embed/${videoId}`;
        }
    }
}
</script>

<style scoped>
.details {
    margin-top: 10px;
    padding: 8px;
    border: 1px solid #ddd;
}
</style>