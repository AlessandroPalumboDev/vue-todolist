## Descrizione:
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

## Milestones

- MILESTONE 1
    - Stampare all'interno di una lista HTML un item per ogni todo.
    - Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

- MILESTONE 2
    - Visualizzare a fianco ad ogni item una "x": cliccando su di essa, il todo viene rimosso dalla lista.

- MILESTONE 3
    - Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

- BONUS:
    - 1- Oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
    - 2- Cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)


## Esecuzione:
- MILESTONE 1
    - Creo array di oggetti come da descrizione e lo faccio ritornare nell'applicativo
    - Stampo su pagina tutti gli oggetti dell'array con v-for e assegno la classe per barrare il testo solo agli elementi con la chiave done su true

- MILESTONE 2
    - Creo la X nel file html e le do un stile su css
    - Aggiungo evento al click che richiama una funzione
    - Creo la funzione di rimozione dell'oggeto dall' array


- MILESTONE 3
    - Creo nel file html input di testo e pulsante aggiungi dando loro lo stile su css
    - Aggiungo v-model all'input di testo 
    - Aggiungo al bottone evento al click che usa una funzione di aggiunta elemento
    - Creo funzione che 1- Pusha nell'array un oggetto che per chiave text ha il v-model e chiave done ovviamente false. 2- Svuota l'input di testo modificandolo tramite il v-model.

- BONUS 1
    - Aggiungo evento al keyup del testo enter che sfrutta la stessa funzione del bottone di aggiunta al campo di input

- BONUS 2
    - Creo funzione che inverte il valore della chiave done
    - Aggiungo evento al click all'elemento in pagina che sfrutta la funzione di inversione