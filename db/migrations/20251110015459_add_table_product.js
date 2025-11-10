exports.up = async function(knex) {
    await knex.raw(`
        CREATE TABLE Product(  
            id int NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
            name text,
            price int
        );

        COMMENT ON TABLE Product IS 'Bảng sản phẩm';
        COMMENT ON COLUMN Product.name IS 'Tên sản phẩm';
        COMMENT ON COLUMN Product.price IS 'Giá sản phẩm';
    `);
};

exports.down = async function(knex) {
    await knex.raw(`
        DROP TABLE Product;
    `);
};