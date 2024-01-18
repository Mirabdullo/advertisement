import { registerAs } from '@nestjs/config'

interface AppServiceOption {
	host: string
	port: number
}

export const appConfig = registerAs<AppServiceOption>(
	'app',
	(): AppServiceOption => ({
		host: process.env.APP_HOST ?? '127.0.0.1',
		port: process.env.APP_PORT ? parseInt(process.env.APP_PORT, 10) : 3030,
	}),
)
