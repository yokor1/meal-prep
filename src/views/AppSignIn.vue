<template>
    <v-container>
        <v-layout row  justify-center>

            <v-flex class="elevation-3" lg6 >
                <div class="elevation-3 headline brown darken-4 white--text pa-3 text-lg-center">Login</div>
                <v-form v-model="valid" class="pa-3">
                    <v-text-field
                            v-model="username"
                            :rules="usernameRules"
                            :counter="10"
                            label="Username"
                            type="text"
                            required
                    ></v-text-field>
                    <v-text-field
                            v-model="password"
                            :rules="passwordRules"
                            label="Password"
                            type="password"
                            required
                    ></v-text-field>
                    <div class="text-lg-center">
                        <v-btn color="brown" dark>
                            Submit  <v-icon right>send</v-icon>
                        </v-btn>
                    </div>

                </v-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'AppSignIn',
    data: () => ({
        valid: false,
        username: '',
        usernameRules: [
            v => !!v || 'Username is required',
        ],
        password: '',
        passwordRules: [
            v => !!v || 'Password is required',
        ]
    })
};
</script>

<style scoped>
</style>
