import type { Knex } from 'knex'

const knexConfig: { [key: string]: Knex.Config } = {
	development: {
		client: 'postgresql',
		connection: {
			host: 'localhost',
			port: 5432,
			user: 'postgres',
			password: 'salom',
			database: 'knex',
		},
		pool: {
			max: 10,
			min: 2,
		},
		migrations: {
			tableName: 'migrations',
			directory: './src/migrations',
		},
		searchPath: ['knex', 'public'],
	},

	staging: {
		client: 'pg',
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
