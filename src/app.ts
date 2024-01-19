import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { appConfig, dbConfig } from '@config'
import { KnexModule } from 'nest-knexjs'
import knexConfig from '../knexfile'
// import { KnexModule } from 'nest-knexjs'
console.log(dbConfig)
@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			load: [appConfig, dbConfig],
		}),
		KnexModule.forRoot({
			config: knexConfig.development,
		}),
	],
	controllers: [],
	providers: [],
})
export class App {}
