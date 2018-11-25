<template>
    <v-app id="inspire">
        <app-drawer :drawer="drawer"></app-drawer>

        <AppNavigation v-on:toggleDrawerEvent="drawer = !drawer"></AppNavigation>

        <v-content>
            <v-container fill-height fluid>
                <v-layout align-center justify-center>

                </v-layout>
            </v-container>
        </v-content>
        <v-footer app color="brown darken-4" dark>
            <span class="white--text">&copy; 2017</span>
        </v-footer>
    </v-app>
</template>
<script>
import AppNavigation from '../components/AppNavigation';
import AppDrawer from '../components/AppDrawer';

export default {
    components: {
        AppNavigation,
        AppDrawer,
    },
    data: () => ({
        drawer: null,
    }),
};
</script>
