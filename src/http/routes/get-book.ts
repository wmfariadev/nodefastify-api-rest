import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function getBook(app: FastifyInstance) {
	app.get('/books', async (request, reply) => {
		const books = await prisma.book.findMany()
		return reply.status(200).send(books)
	})

	app.get('/books/:bookId', async (request, reply) => {
		const getBookParam = z.object({
			bookId: z.string().uuid(),
		})

		const { bookId } = getBookParam.parse(request.params)

		const book = await prisma.book.findUnique({
			where: {
				id: bookId,
			},
		})

		return reply.status(200).send(book)
	})
}
