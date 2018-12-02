<template>
    <v-toolbar app color="brown darken-4" dark clipped-left>
        <v-toolbar-side-icon @click.stop="$emit('toggleDrawerEvent')"></v-toolbar-side-icon>
        <v-toolbar-title>Application</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn flat to="/signin">SIGN IN</v-btn>
        <v-btn flat to="/signup">SIGN UP</v-btn>
    </v-toolbar>
</template>
<script>
export default {
    name: 'AppNavigation'
};
</script>
