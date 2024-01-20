import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
	await knex.schema.createTable('notification', function (table) {
		table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary()
		table.uuid('user_id').unsigned().references('user.id')
		table.uuid('suggestion_id').unsigned().references('suggestion.id')
		table.boolean('seen').defaultTo(false)
		table.timestamps(true, true)
		table.dateTime('deleted_at').defaultTo(null)
	})
}

export async function down(knex: Knex): Promise<void> {
	await knex.schema.dropTableIfExists('notification')
}
