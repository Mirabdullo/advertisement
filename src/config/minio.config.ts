import { registerAs } from '@nestjs/config'

interface MinioConfigOptions {
	port?: number
	host?: string
	accessKey?: string
	secretKey?: string
	bucket?: string
}
export const minioConfig = registerAs<MinioConfigOptions>(
	'minio',
	(): MinioConfigOptions => ({
		port: process.env.MINIO_PORT
			? parseInt(process.env.MINIO_PORT, 10)
			: undefined,
		host: process.env.MINIO_ENDPOINT ?? undefined,
		accessKey: process.env.MINIO_ACCESS_KEY ?? undefined,
		secretKey: process.env.MINIO_SECRET_KEY ?? undefined,
		bucket: process.env.MINIO_BUCKET ?? undefined,
	}),
)
