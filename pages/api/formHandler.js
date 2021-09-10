const formHandler = (req, res) => {
    if (req.method === "POST") {
        const message = req.body.message;

        const telegramText = `New Message from Webster Podcast!\nFrom: ${message.name}\nEmail: ${message.email}\nMessage: ${message.message}`

        fetch(
            "https://api.telegram.org/bot1704742052:AAFQxq3mx9MDZrna356tEiwzf37FkvzbiZE/sendMessage",
            {
                method: "POST",
                body: JSON.stringify({
                    chat_id: "71474323",
                    text: telegramText,
                    parse_mode: "markdown"
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }
        );

        res.status(200).json({ message: "Success!" })
    }
}

export default formHandler