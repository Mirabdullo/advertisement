import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
	await knex.schema.createTable('chat', function (table) {
		table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary()
		table.uuid('user_one').unsigned().references('user.id')
		table.uuid('user_two').unsigned().references('user.id')
		table.timestamps(true, true)
		table.dateTime('deleted_at').defaultTo(null)
	})
}

export async function down(knex: Knex): Promise<void> {
	await knex.schema.dropTableIfExists('chat')
}
