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
        currentChat : 0,
        messageMenu : false,
        messageMenuIndex : 0,
        textFilter : "",
        message : "",
        // NON FUNZIONA MESSAGEMENU
    },
    methods : {
        viewChat: function(i){
            this.currentChat = this.contacts[i];
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
            this.currentChat.messages.push(newMessage);
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
            this.currentChat.messages.push(newMessage);
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
        showMessageMenu: function(i) {
            this.messageMenu = true;
            console.log(this.messageMenu);
            this.messageMenuIndex = i;
            document.querySelector("i.show").style.display = "none";
            document.querySelector("i.hide").classList.remove("d-none")
        },
        hideMessageMenu: function(i) {
            this.messageMenu = false;
            console.log(this.messageMenu);
            this.messageMenuIndex = i;
            document.querySelector("i.show").style.display = "";
            document.querySelector("i.hide").classList.add("d-none")
        },
        deleteMessage : function(i){
            this.messageMenuIndex = i;
            this.currentChat.messages.splice(this.messageMenuIndex, 1);
            this.hideMessageMenu();
        },
        // DA SISTEMARE
        shortDate : function(i){
            this.messageMenuIndex = i;
            this.currentChat.messages[this.messageMenuIndex].date.substr(11);
        },
    },

    created(){
        // CHAT APERTA DI DEFAULT
        this.currentChat = this.contacts[0];
    }
})