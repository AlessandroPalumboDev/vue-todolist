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
                    done: true
                }, {
                    text: 'Mangiare',
                    done: true
                }, {
                    text: 'Coding (di nuovo)',
                    done: true
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
        remove(index) {
            // Se hai un array e vuoi togliere determinati elementi nel mezzo, ( quindi non usando .shift() o .pop() ) dovrai passargli come primo argomento la posizione da cui partire (ricordati che i array in JavaScript partono dalla posizione “0”), come secondo argomento il numero di elementi che intendi togliere (incluso il primo!).
            this.list.splice(index, 1)
        },

        // funzione di aggiunta elemento
        add() {
            // condizione per non aggiungere item senza testo
            if (this.newItem.length > 0) {
                this.list.push(
                    {
                        text: this.newItem,
                        done: false
                    }
                );
            }else{
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