
const app = require('./app')

const PORT = process.env.PORT

// listen at port
app.listen(PORT, () => {
    console.log(`Listening at ${PORT}`);
});