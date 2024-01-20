import { Injectable } from '@nestjs/common'
import { Knex } from 'knex'

@Injectable()
export class UserService {
	readonly #_knex: Knex

	constructor(knex: Knex) {
		this.#_knex = knex
	}

	async userRetrieveAll(): Promise<any> {}
}
