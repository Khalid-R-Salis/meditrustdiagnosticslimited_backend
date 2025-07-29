export const corsOption = {
  origin: '*',
  methods: 'GET, POST, DELETE, PATCH, PUT, DELETE, OPTIONS',
  credentials: true,
  allowedHeaders: ['Authorization', 'Content-Type', 'Content-Dispostion'],
  optionsSuccessStatus: 200
}