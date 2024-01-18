import { registerAs } from '@nestjs/config'

interface dbConfigOption {
	database: string
	user: string
	host: string
	port: number
}

export const dbConfig = registerAs<dbConfigOption>(
	'db',
	(): dbConfigOption => ({
		database: process.env.DB ?? 'postgresql',
		user: process.env.DB_USER ?? 'postgres',
		host: process.env.DB_HOST ?? 'localhost',
		port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
	}),
)
