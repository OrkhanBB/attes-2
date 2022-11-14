class Message {
    constructor(author, time, text) {
        this.author = author;
        this.time = time;
        this.text = text
    }

    toString() {
        return this.text
    }
}

class Messenger extends Message {
    constructor(author, time, text, messages) {
        super(author, time, text);
        this.messages = messages;
    }

    send(author, text) {
        this.author = author
        this.text = text
    }
    show_history() {
        function gettime() {
            let now = new Date();
            return `${now.getHours()}:${now.getMinutes()}`
        }
        this.time = gettime()

       this.messages = this.time + ' ' + this.author + ':' + this.text
       console.log(this.messages)
    }


}

let messenger = new Messenger()
messenger.send('Adil', 'ilk mesaj')
messenger.show_history()
messenger.send('Məryəm', 'İkinci mesaj')
messenger.show_history()