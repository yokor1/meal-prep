<template>
    <v-container fluid fill-height class="home-hero">
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black white--text text-xs-center">HEALTHY MEALS</div>
            <div class="display-4 font-weight-black white--text text-xs-center mb-3">FOR YOUR TABLE</div>
            <div class="display-1 font-weight-bold white--text text-xs-center">Finally be a foodie at home with fresh, chef-prepared meals delivered daily to your door.</div>
            <v-btn fab class="mt-5 brown darken-4" @click.stop="toDetails()">
                <v-icon large color="white">expand_more</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <div id="details">
                <AppHomeDetails></AppHomeDetails>
            </div>
        </v-layout>
    </v-container>
</template>
<script>
import AppHomeDetails from "../components/AppHomeDetails";
export default {
    name: 'Home',
    components: {AppHomeDetails},
    methods: {
        toDetails() {
            window.location.assign('#details');
        }
    }
};
</script>
<style scoped>
    .home-hero {
        background: url('http://source.unsplash.com/0BhSKStVtdM');
        background-size: cover;
        width: 100%;
        height: 100%;
    }
</style>
