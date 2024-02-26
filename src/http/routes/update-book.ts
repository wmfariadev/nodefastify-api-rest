import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function updateBook(app: FastifyInstance) {
	app.patch('/books/:bookId', async (request, reply) => {
		const getBookParam = z.object({
			bookId: z.string().uuid(),
		})

		const getBookBody = z.object({
			isFavorite: z.optional(z.boolean()),
			isReading: z.optional(z.boolean()),
			isFinished: z.optional(z.boolean()),
		})

		const { bookId } = getBookParam.parse(request.params)
		const { isFavorite, isReading, isFinished } = getBookBody.parse(
			request.body,
		)

		const book = await prisma.book.findUnique({
			where: {
				id: bookId,
			},
		})

		if (!book) {
			reply.code(404).send('Book not found')
		}

		await prisma.book.update({
			where: {
				id: bookId,
			},
			data: {
				isFavorite: isFavorite || book?.isFavorite,
				isReading: isReading || book?.isReading,
				isFinished: isFinished || book?.isFinished,
			},
		})

		reply.send()
	})
}
