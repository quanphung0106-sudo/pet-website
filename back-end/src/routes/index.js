const authRouter = require('./auth');
const userRouter = require('./users');

function route(app) {
    app.use('/api/auth', authRouter);
    app.use('/api/users', userRouter);
}

module.exports = route;