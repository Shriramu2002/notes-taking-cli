import { getDb, insertDb, saveDb } from "./db.js";

export const newNote = async (note, tags) => {
    const newNote = {
        tags,
        id:Date.now(),
        content: note,
    }

    await insertDb(newNote);
    return newNote;
}

export const getAllNotes = async () => {
    const {notes} = await getDb();
    //console.log(notes);
    return notes;
}

export const findNotes = async (filter) => {
    const {notes} = await getDb();
    return notes.filter(note => note.content.toLowerCase().includes(filter.toLowerCase()));
}

export const removeNote = async id => {
    const {notes} = await getDb();
    const match = notes.find(note => note.id === id);

    if(match)
    {
        const newNotes = notes.filter(note=>note.id !== id);
        await saveDb(newNotes);
        return id;
    }
}

export const removeAllNotes = async () => {
    const newNotes = [];
    await saveDb(newNotes);
    return newNotes;
}