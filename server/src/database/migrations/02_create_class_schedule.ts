import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("class_schedule", (table) => {
    table.increments("id").primary();
    table.integer("week_day").notNullable();
    table.integer("from").notNullable(); //minutos
    table.integer("to").notNullable(); //minutos

    table
      .integer("class_id")
      .notNullable()
      .references("id")
      .inTable("classes")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
}
export async function down(knex: Knex) {
  knex.schema.dropTable("class_schedule");
}
