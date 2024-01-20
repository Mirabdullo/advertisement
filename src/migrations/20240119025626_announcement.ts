import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
	await knex.schema.createTable('announcements', function (table) {
		table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary()
		table.string('title').notNullable()
		table.string('description').notNullable()
		table.dateTime('expires').notNullable()
		table.uuid('category_id').nullable()
		table.uuid('user_id').unsigned().references('user.id')
		table.timestamps(true, true)
		table.dateTime('deleted_at').defaultTo(null)
	})
}

export async function down(knex: Knex): Promise<void> {
	await knex.schema.dropTableIfExists('announcements')
}
