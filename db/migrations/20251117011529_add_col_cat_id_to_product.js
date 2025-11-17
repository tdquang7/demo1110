exports.up = async function(knex) {
    await knex.raw(`
        ALTER TABLE product
        ADD COLUMN cat_id INT;

        ALTER TABLE product
        ADD CONSTRAINT fk_product_category
            FOREIGN KEY (cat_id)
            REFERENCES category(id)
            ON DELETE SET NULL
            ON UPDATE CASCADE;
    `);
};

exports.down = async function(knex) {
    await knex.raw(`
        ALTER TABLE product
        DROP COLUMN cat_id;
    `);
};