<template>
    <v-navigation-drawer app clipped :value="drawer" stateless color="brown darken-4">
        <v-list dense>
            <v-list-tile v-for="listItem of listItems">
                <v-list-tile-action>
                    <v-icon>{{listItem.icon}}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{listItem.title}}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>

</template>

<script>
export default {
    name: 'AppDrawer',
    props: ['drawer'],
    data: () => ({
        listItems: [
            {
                title: 'Home',
                icon: 'home',
                link: 'link'
            },
            {
                title: 'About',
                icon: 'info',
                link: 'link'
            }
        ]
    })
};
</script>

<style scoped>
</style>
