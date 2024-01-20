import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
	await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
	await knex.schema.createTable('user', function (table) {
		table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary()
		table.string('first_name').notNullable()
		table.string('last_name').nullable()
		table.string('email').notNullable().unique()
		table.string('password').notNullable()
		table.string('role').notNullable()
		table.timestamps(true, true)
		table.dateTime('deleted_at').defaultTo(null)
	})
}

export async function down(knex: Knex): Promise<void> {
	await knex.schema.dropTableIfExists('user')
}
