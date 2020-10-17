<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">Laravel Vue Datatables Component Example - ItSolutionStuff.com</div>

                    <div class="card-body">
                        <datatable :columns="columns" :data="getUsers.data"></datatable>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    import UserService from "../services/user.service";
    export default {
        name: "UserTable",
        computed: {
            ...mapGetters("auth", [
                "getUsers"
            ])
        },
        data() {
            return {
                columns: [
                    { label: 'Id', field: 'id' },
                    { label: 'Username', field: 'username', headerClass: 'class-in-header second-class' },
                    { label: 'Created At', field: 'created_at' },
                    { label: 'Updated At', field: 'updated_at' }
                ],
                page: 1,
                per_page: 10
            }
        },
        mounted() {
            this.fetchUsers();
        },
        methods: {
            ...mapActions("auth", [
                "setUserLists"
            ]),
            fetchUsers() {
                UserService.getAllUsers().then(
                    response => {
                        this.setUserLists(response.data);
                    }
                )
            }
        }
    }
</script>

<style scoped>

</style>