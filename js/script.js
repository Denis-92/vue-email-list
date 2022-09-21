console.log('JS OK');

// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const app = new Vue(
    {
        el: '#app',

        data: {
            listEmails: [],
            loading: true,
            loadingStatus: 0
        },

        mounted() {
            const NUM_RANDOM_MAILS = 10;
            for (let i = 1; i <= NUM_RANDOM_MAILS; i++) {
                axios
                    .get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        console.log(response);
                        if (response.status === 200) {
                            const randomEmail = response.data.response;
                            this.listEmails.push(randomEmail);
                            this.loading = this.listEmails.length < NUM_RANDOM_MAILS;
                            this.loadingStatus = i / NUM_RANDOM_MAILS * 100;
                            console.log('caricamento: ' + this.loadingStatus + '%');
                        }
                    }
                    );
                    .catch((error) => {
                        console.log('error', error);
                    })
    }

        }

    }

);