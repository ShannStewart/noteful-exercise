const noteServices = {
    getAllNotes(knex) {
        return knex
        .select('*')
        .from
    },
}