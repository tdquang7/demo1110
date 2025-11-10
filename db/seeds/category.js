/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('category').del()
  await knex('category').insert([
    {name: 'Điện thoại'},
    {name: 'Laptop'},
    {name: 'Tablet'},
    {name: 'Phụ kiện'},
  ]);
};
