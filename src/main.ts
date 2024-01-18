import { NestFactory } from '@nestjs/core'
import { App } from './app'
import { INestApplication, VersioningType } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { HttpExeptionFilter } from '@filter'
import { json } from 'express'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

setImmediate(async (): Promise<void> => {
	const app = await NestFactory.create<INestApplication>(App, {
		cors: true,
	})

	const appConfig = app.get(ConfigService).get('app')
	const swaggerConfig = new DocumentBuilder().setTitle('Swagger').build()

	app.enableVersioning({
		prefix: 'api/v1',
		type: VersioningType.URI,
	})
	app.use(json({ limit: '10mb' }))
	app.useGlobalFilters(new HttpExeptionFilter())

	const document = SwaggerModule.createDocument(app, swaggerConfig)
	SwaggerModule.setup('docs', app, document)

	await app.listen(appConfig.port, appConfig.host, () => {
		console.log('Server running on port ' + appConfig.port)
	})
})
