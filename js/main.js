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
                    done: false
                },{
                    text: 'Mangiare',
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

    }


    }).mount('#app')