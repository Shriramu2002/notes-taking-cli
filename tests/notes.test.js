import {jest} from '@jest/globals';


jest.unstable_mockModule('../src/db.js', () => ({
    insertDb:jest.fn(),
    getDb:jest.fn(),
    saveDb:jest.fn()
}));

//returns a spy, return how many times it have been called, with what arguments etc
const {insertDb, getDb, saveDb} = await import('../src/db.js');
const {newNote, getAllnotes, removeNote} = await import('../src/notes.js');


beforeEach(() => {
    insertDb.mockClear();
    getDb.mockClear();
    saveDb.mockClear();
})

test('newNote inserts data and returns it', async () => {
    const Note = {
        content:'this is my note',
        id:1,
        tage:['hello']
    }
    insertDb.mockResolvedValue(Note);

    const result = await newNote(Note.content, Note.tags);
    expect(result.content).toEqual(Note.content);
})
