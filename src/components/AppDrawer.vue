<template>
    <v-navigation-drawer app fixed :value="drawer" stateless>
        <v-list dense>
            <v-list-tile>
                <v-list-tile-action>
                    <v-icon>home</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Home</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
                <v-list-tile-action>
                    <v-icon>contact_mail</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Contact</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>

</template>

<script>
export default {
    name: 'AppDrawer',
    props: ['drawer'],
    data() {
        return {
            dr: this.drawer
        };
    }
};
</script>

<style scoped>
</style>
