const notesService = {
    getAllNotes(knex){
        return knex
            .select('*')
            .from('noteful_notes')
    },
    insertNote(knex, newNote){
        return knex
            .insert(newNote)
            .into('noteful_notes')
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    },
    getNoteById(knex, id){
        return knex
            .from('noteful_notes')
            .where('note_id', id)
            .first()
    },
    deleteNote(knex, id){
        return knex('noteful_notes')
            .where('note_id', id)
            .delete()
    },
    updateNote(knex, id, updateNote){
        return knex('noteful_notes')
            .where('note_id', id)
            .update(updateNote)
    }
}

module.exports = notesService;