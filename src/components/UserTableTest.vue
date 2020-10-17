<template>
    <div class="row">
        <div class="col-md-12">
            <h3>User Lists</h3>
            <vdtnet-table
                :fields="fields"
                :opts="options"
            />
        </div>
    </div>
</template>

<script>
    import VdtnetTable from "vue-datatables-net";
    import 'datatables.net-bs4';
    import 'datatables.net-buttons-bs4';
    import 'datatables.net-select-bs4';
    import 'datatables.net-select-bs4/css/select.bootstrap4.min.css';
    import 'datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css';
    export default {
        name: "UserTableTest",
        components: {
            VdtnetTable
        },
        data() {
            let user = JSON.parse(localStorage.getItem('user'));
            return {
                fields: {
                    id: { label: 'ID', sortable: false },
                    username: { label: 'Username', sortable: false },
                    created_at: { label: 'Created At', sortable: false },
                    updated_at: { label: 'Updated At', sortable: false }
                },
                options: {
                    "ajax": {
                        "url": "/api/user/search",
                        "type": "GET",
                        "beforeSend": function (request) {
                            request.setRequestHeader("Authorization", "Bearer " + user.accessToken)
                        }
                    },
                    serverSide: true
                }
            }
        }
    }
</script>

<style scoped>

</style>