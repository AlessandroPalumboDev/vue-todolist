const { createApp } = Vue;

createApp({
    data() {
        return {
            list:[
                {
                    text: 'Svegliarsi',
                    done: true
                },{
                    text: 'Lavarsi',
                    done: true
                },{
                    text: 'Mangiare',
                    done: true
                },{
                    text: 'Coding',
                    done: true
                },{
                    text: 'Mangiare',
                    done: false
                },{
                    text: 'Coding',
                    done: false
                },{
                    text: 'Lavarsi',
                    done: false
                },{
                    text: 'Dormire',
                    done: false
                }
            ],

            currentIndex: 0,
        }
    },

    methods:{

        // funzione rimozione elemento
        remove(index){
            // Se hai un array e vuoi togliere determinati elementi nel mezzo, ( quindi non usando .shift() o .pop() ) dovrai passargli come primo argomento la posizione da cui partire (ricordati che i array in JavaScript partono dalla posizione “0”), come secondo argomento il numero di elementi che intendi togliere (incluso il primo!).
            this.list.splice(index, 1)
        }
    }


    }).mount('#app')