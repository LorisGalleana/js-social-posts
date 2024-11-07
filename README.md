---

# JS-SOCIAL-POSTS

## Descrizione

Il progetto **JS-Social-Posts** ha come obiettivo la creazione di un feed social dinamico utilizzando JavaScript per gestire l'interazione con i post. Ogni post è rappresentato da un oggetto che contiene dati come il testo del post, la data, il numero di "Mi Piace", e l'immagine del profilo dell'autore. L'utente può interagire con i post, aggiungendo o rimuovendo "Mi Piace" e aggiornando il contatore relativo.

### Obiettivi del progetto

1. **MILESTONE 1**: 
   - Analizzare l'array di oggetti contenente i post per comprendere la struttura dei dati e le informazioni disponibili per ogni post.

2. **MILESTONE 2**: 
   - Utilizzare i dati dell'array per popolare dinamicamente il feed, creando i post sulla base del layout fornito nell'HTML.

3. **MILESTONE 3**: 
   - Implementare la funzionalità di "Mi Piace": quando l'utente clicca sul bottone "Mi Piace", il colore del testo cambia e il contatore dei like relativo viene incrementato. Inoltre, l'ID del post viene aggiunto a un secondo array per tenere traccia dei post a cui è stato messo il like.

4. **BONUS**: 
   - Formattare le date dei post nel formato italiano (gg/mm/aaaa).
   - Gestire l'assenza dell'immagine del profilo con un elemento di fallback che mostra le iniziali dell'utente (es. Luca Formicola > LF).
   - Gestire il comportamento del bottone "Mi Piace": se un post ha già ricevuto un like, il contatore viene decrementato e il colore del bottone cambia nuovamente.

### Tecnologie Utilizzate

- **HTML5**: per la struttura della pagina, la creazione del layout del feed e dei post.
- **CSS3**: per stilizzare la pagina e i post, comprese le miniature dei profili, i pulsanti e i contatori.
- **JavaScript**: per la logica del feed dinamico, la gestione dell'interazione con i post (like, decremento, tracciamento dei post a cui è stato messo il like) e la formattazione delle date.

### Struttura del Progetto

- `index.html`: La pagina principale con il layout di base del feed social.
- `style.css`: Il file CSS per stilizzare i post, le immagini del profilo, i pulsanti e i contatori.
- `script.js`: Il file contenente la logica per popolare il feed, gestire i like e formattare le date.

---
