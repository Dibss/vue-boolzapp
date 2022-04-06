    var app = new Vue({
    el : "#root",
    data : {
        contacts: [
        {
            name: 'Michele',
            avatar: '_1',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Fabio',
            avatar: '_2',
            visible: true,
            messages: [
                {
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
            ],
        },
        {
            name: 'Samuele',
            avatar: '_3',
            visible: true,
            messages: [
                {
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Alessandro B.',
            avatar: '_4',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Alessandro L.',
            avatar: '_5',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ricordati di chiamare la nonna',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Va bene, stasera la sento',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Claudia',
            avatar: '_6',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao Claudia, hai novità?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Non ancora',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:51:00',
                    message: 'Nessuna nuova, buona nuova',
                    status: 'sent'
                }
            ],
        },
        {
            name: 'Federico',
            avatar: '_7',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Fai gli auguri a Martina che è il suo compleanno!',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Grazie per avermelo ricordato, le scrivo subito!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Davide',
            avatar: '_8',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao, andiamo a mangiare la pizza stasera?',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:51:00',
                    message: 'OK!!',
                    status: 'received'
                    }
                ],
                }
        ],
        current : 0,
        messageMenu : false,
        textFilter : "",
        message : "",
        // NON FUNZIONA MESSAGEMENU
    },
    methods : {
        viewChat: function(i){
            this.current = this.contacts[i];
        },
        sendMessage : function(){
            const message = this.message;
            console.log(message);
            const today = new Date();
            const date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            newMessage = {
                date,
                message,
                status: 'sent'
            };
            this.current.messages.push(newMessage);
            setTimeout(this.messageReceived, 1000);
            this.message = "";
        },
        messageReceived : function(){
            const today = new Date();
            const date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            newMessage = {
                date,
                message: "ok",
                status: 'received'
            };
            this.current.messages.push(newMessage);
        },
        filter : function (){
            let text = this.textFilter.toUpperCase();
            this.contacts.forEach(
                (elm) => {
                let upperName = elm.name.toUpperCase();
                if(upperName.includes(text)){
                    elm.visible = true;
                } else {
                    elm.visible = false;
                }
            });
        },
        showMessageMenu: function() {
            this.messageMenu = true;
            console.log(this.messageMenu)
            document.querySelector("i.show").style.display = "none";
            document.querySelector(".hide").classList.remove("d-none")
        },
        hideMessageMenu: function() {
            this.messageMenu= false;
            console.log(this.messageMenu)
            document.querySelector(".show").style.display = "";
            document.querySelector(".hide").style.display = "";
        },
        // DA SISTEMARE
        deleteMessage : function(i){
            this.current.messages = this.current.messages[i]
            this.current.messages.message.splice(i, 1);
        },
        // DA SISTEMARE
        lastMessage : function(i){
            this.contacts[i].messages[1].message
        },
        // DA SISTEMARE
        lastTimeOnline : function(){
            this.contacts[0].messages[1].date
        },
        // DA SISTEMARE
        shortDate : function(){
            let lastMessage = messages.length -1;
            console.log(lastMessage);
            this.contacts[1].messages[lastMessage].date.substr(11);
        },
    },
    
    created(){
        // CHAT APERTA DI DEFAULT
        this.current = this.contacts[0];
    }
    })