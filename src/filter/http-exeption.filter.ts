import {
	ArgumentsHost,
	Catch,
	ExceptionFilter,
	HttpStatus,
} from '@nestjs/common'
import { Response } from 'express'

@Catch()
export class HttpExeptionFilter implements ExceptionFilter {
	catch(exception: any, host: ArgumentsHost): Response {
		const express = host.switchToHttp()
		const response = express.getResponse<Response>()

		if (exception && exception.statusCode === HttpStatus.BAD_REQUEST) {
			return response.status(exception?.statusCode).json({
				message: exception?.error,
				details: exception?.message,
			})
		}

		return response
			.status(exception?.statusCode || HttpStatus.INTERNAL_SERVER_ERROR)
			.json({ message: exception?.message })
	}
}
