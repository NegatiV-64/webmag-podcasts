const formHandler = (req, res) => {
    if (req.method === "POST") {
        const message = req.body.message;

        const telegramText = `New Message from Webster Podcast!\nFrom: ${message.name}\nEmail: ${message.email}\nMessage: ${message.message}`

        fetch(
            "There should be telegram API",
            {
                method: "POST",
                body: JSON.stringify({
                    chat_id: "Chat ID",
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