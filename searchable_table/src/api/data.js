const getData = []
const maxWords = 1000
const letters = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"
const wordLength = Math.floor(Math.random() * 7) + 10

// Generate a random datetime objects
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function generate(){
    // Generate random words
    for (var i = 1; i < maxWords; i++){
        let word = "";
        for(var j = 1; j < wordLength; j++) {
            word += letters.charAt(Math.floor(Math.random() * letters.length));
        }
        getData.push(
            {
                id:i,
                name:word,
                date: randomDate(new Date(1991, 0, 1), new Date()),
                hasRead: false
            }
        )
    }
    return getData;
}

export default generate();