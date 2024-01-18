import type { Knex } from 'knex'

// Update with your config settings.

const knexConfig: { [key: string]: Knex.Config } = {
	development: {
		client: 'pg',
		connection: {
			database: 'postgres',
			user: 'postgres',
			host: 'localhost',
			port: 5432,
		},
		pool: {
			max: 10,
			min: 2,
		},
		migrations: {
			tableName: 'migrations',
		},
	},

	staging: {
		client: 'postgresql',
		connection: {
			database: 'my_db',
			user: 'username',
			password: 'password',
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: 'knex_migrations',
		},
	},

	production: {
		client: 'postgresql',
		connection: {
			database: 'my_db',
			user: 'username',
			password: 'password',
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: 'knex_migrations',
		},
	},
}

export default knexConfig
