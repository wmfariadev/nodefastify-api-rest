import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function createBook(app: FastifyInstance) {
	app.post('/books', async (request, reply) => {
		const createBookBody = z.object({
			title: z.string(),
			author: z.string(),
			description: z.string(),
		})

		const { title, author, description } = createBookBody.parse(request.body)

		const book = await prisma.book.create({
			data: {
				title,
				author,
				description,
			},
		})

		return reply.status(201).send({ bookId: book.id })
	})
}
