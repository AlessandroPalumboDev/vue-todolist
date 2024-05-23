const { createApp } = Vue;

createApp({
    data() {
        return {
            list: [
                {
                    text: 'Svegliarsi',
                    done: true
                }, {
                    text: 'Lavarsi',
                    done: true
                }, {
                    text: 'Mangiare',
                    done: true
                }, {
                    text: 'Coding',
                    done: false
                }, {
                    text: 'Mangiare',
                    done: false
                }, {
                    text: 'Coding (di nuovo)',
                    done: false
                }, {
                    text: 'Lavarsi',
                    done: false
                }, {
                    text: 'Coding (ancora un po\')',
                    done: false
                }, {
                    text: 'Dormire',
                    done: false
                }, {
                    text: 'Sognare il codice',
                    done: false
                },

            ],

            newItem: '',
        }
    },

    methods: {

        // funzione rimozione elemento
        remove(indexRicevuto) {
            // this.list.splice(index, 1)
            this.list = this.list.filter((_, index) => index !== indexRicevuto)
        },

        // funzione di aggiunta elemento
        add() {
            // condizione per non aggiungere item senza testo
            if (this.newItem !== '') {
                this.list.push(
                    {
                        text: this.newItem,
                        done: false
                    }
                );
            } else {
                alert('Devi digitare qualcosa da fare prima di premere il tasto "Aggiungi"')
            }
            this.newItem = '';
        },

        // funzione di cambio valore booleano della chiave done
        reverse(index) {
            this.list[index].done = !this.list[index].done;
        },

    },
}).mount('#app');