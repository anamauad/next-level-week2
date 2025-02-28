import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("connections", (table) => {
    table.increments("id").primary();

    table
      .integer("teacher_id")
      .notNullable()
      .references("id")
      .inTable("teachers")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    table
      .timestamp("created_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP"))
      .notNullable();
  });
}
export async function down(knex: Knex) {
  knex.schema.dropTable("connections");
}
