const noteServices = {
    getAllNotes(knex) {
        return knex
        .select('*')
        .from("noteful_notes")
    },
    insertNotes(knex, newNote) {
        return knex
        .insert(newNote)
        .into("noteful_notes")
        .returning('*')
        .then(rows => {
            return rows[0]
          })
    },
    getById(knex, id) {
        return knex
        .from("noteful_notes")
        .select('*')
        .where('id', id)
        .first()
    },
    updateNote(knex, id, newNoteInfo){
        return knex("noteful_notes")
        .where({ id })
        .update(newNoteInfo)
    },
    deleteNote(knex, id){
        return knex("noteful_notes")
        .where({ id })
        .delete()
    }
}

module.exports = noteServices;