import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
	await knex.schema.createTable('suggestion', function (table) {
		table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary()
		table.string('description').notNullable()
		table.uuid('announcement_id').unsigned().references('announcements.id')
		table.timestamps(true, true)
		table.dateTime('deleted_at').defaultTo(null)
	})
}

export async function down(knex: Knex): Promise<void> {
	await knex.schema.dropTableIfExists('suggestion')
}
