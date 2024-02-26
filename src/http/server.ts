import fastify from 'fastify'
import { createBook } from './routes/create-book'
import { deleteBook } from './routes/delete-book'
import { getBook } from './routes/get-book'
import { updateBook } from './routes/update-book'

const app = fastify()

app.register(createBook)
app.register(getBook)
app.register(updateBook)
app.register(deleteBook)

app.listen({ port: 8080 }).then(() => {
	console.log('Server is running')
})
