exports.up = async function(knex) {
    await knex.raw(`
        CREATE TABLE Category(  
            id int NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
            name text
        );

        COMMENT ON TABLE Category IS 'Bảng danh mục sản phẩm';
        COMMENT ON COLUMN Category.name IS 'Tên danh mục sản phẩm';
    `);
};

exports.down = async function(knex) {
    await knex.raw(`
        DROP TABLE category;
    `);
};