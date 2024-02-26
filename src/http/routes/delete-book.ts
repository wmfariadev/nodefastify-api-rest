import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function deleteBook(app: FastifyInstance) {
	app.delete('/books/:bookId', async (request, reply) => {
		const getBookParam = z.object({
			bookId: z.string().uuid(),
		})

		const { bookId } = getBookParam.parse(request.params)

		const book = await prisma.book.findUnique({
			where: {
				id: bookId,
			},
		})

		if (!book) {
			return reply.code(404).send('Book not found')
		}

		await prisma.book.delete({
			where: {
				id: bookId,
			},
		})

		reply.code(204).send()
	})
}
