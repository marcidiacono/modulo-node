class DatabaseService {

    save(email, price, date) {
        console.log(`INSERT INTO reserves (email, price, date)VALUES (${email}, ${price}, ${date});`);
    }
}

module.exports = DatabaseService;