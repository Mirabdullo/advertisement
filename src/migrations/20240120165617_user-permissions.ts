import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
	await knex.schema.createTable('user_permission', function (table) {
		table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary()
		table.uuid('user_id').unsigned().references('user.id')
		table.uuid('permission_id').unsigned().references('permission.id')
		table.timestamps(true, true)
		table.dateTime('deleted_at').defaultTo(null)
	})
}

export async function down(knex: Knex): Promise<void> {
	await knex.schema.dropTableIfExists('user_permission')
}
