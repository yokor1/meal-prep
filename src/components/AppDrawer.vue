<template>
    <v-navigation-drawer app clipped :value="drawer" stateless>
        <v-list dense>

                <v-list-tile v-for="listItem of listItems" :to="listItem.link">

                    <v-list-tile-action>
                        <v-icon >{{listItem.icon}}</v-icon>
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
                link: '/'
            },
            {
                title: 'About',
                icon: 'info',
                link: 'about'
            }
        ]
    })
};
</script>

<style scoped>
</style>
