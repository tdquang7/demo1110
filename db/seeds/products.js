/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('product').del()
  await knex('product').insert([
    // Điện thoại (cat_id = 1)
    { name: 'iPhone 15 Pro', price: 29990000, cat_id: 1 },
    { name: 'Samsung Galaxy S24', price: 23990000, cat_id: 1 },
    { name: 'Xiaomi 14', price: 16990000, cat_id: 1 },
    { name: 'OPPO Reno 11', price: 10990000, cat_id: 1 },
    { name: 'Vivo V30', price: 8990000, cat_id: 1 },
    { name: 'realme 12 Pro', price: 7990000, cat_id: 1 },
    { name: 'Nokia G50', price: 4990000, cat_id: 1 },
    { name: 'iPhone SE 2022', price: 11990000, cat_id: 1 },

    // Laptop (cat_id = 2)
    { name: 'MacBook Air M2', price: 26990000, cat_id: 2 },
    { name: 'MacBook Pro 14” M3', price: 45990000, cat_id: 2 },
    { name: 'Dell XPS 13', price: 32990000, cat_id: 2 },
    { name: 'HP Spectre x360', price: 28990000, cat_id: 2 },
    { name: 'ASUS ROG Strix G15', price: 32990000, cat_id: 2 },
    { name: 'Lenovo ThinkPad X1 Carbon', price: 34990000, cat_id: 2 },
    { name: 'Acer Nitro 5', price: 19990000, cat_id: 2 },
    { name: 'MSI GF63', price: 15990000, cat_id: 2 },

    // Tablet (cat_id = 3)
    { name: 'iPad Air M2', price: 16990000, cat_id: 3 },
    { name: 'iPad Pro 11” M4', price: 28990000, cat_id: 3 },
    { name: 'Samsung Galaxy Tab S9', price: 19990000, cat_id: 3 },
    { name: 'Xiaomi Pad 6', price: 8990000, cat_id: 3 },
    { name: 'Lenovo Tab P12', price: 7490000, cat_id: 3 },
    { name: 'Huawei MatePad 11', price: 8990000, cat_id: 3 },
    { name: 'Amazon Fire HD 10', price: 3990000, cat_id: 3 },

    // Phụ kiện (cat_id = 4)
    { name: 'AirPods Pro 2', price: 5990000, cat_id: 4 },
    { name: 'Samsung Buds2 Pro', price: 4490000, cat_id: 4 },
    { name: 'Anker PowerCore 20k', price: 990000, cat_id: 4 },
    { name: 'Logitech MX Master 3S', price: 2490000, cat_id: 4 },
    { name: 'Apple Pencil 2', price: 3190000, cat_id: 4 },
    { name: 'Razer BlackShark V2', price: 2190000, cat_id: 4 },
    { name: 'Kingston 1TB SSD', price: 1590000, cat_id: 4 }
  ]);
};
