const foldersService = {
  getAllFolders(knex){
      return knex
          .select('*')
          .from('noteful_folders');
  },
  insertFolders(knex, newFolder){
      return knex
          .insert(newFolder)
          .into('noteful_folders')
          .returning('*')
          .then(rows => {
              return rows[0]
          })
  },
  getFolderById(knex, id){
      return knex
          .from('noteful_folders')
          .where('folder_id' , id)
          .first()
  },
  deleteFolder(knex, id){
      return knex('noteful_folders')
          .where('folder_id', id)
          .delete()
  },
  updateFolder(knex, id, updateFolder){
      return knex('noteful_folders')
          .where('folder_id' , id)
          .update(updateFolder)
  }
}

module.exports = foldersService;