console.log('... loaded.');

let topicNameInput = document.querySelector('#topic-name');
let topicSummaryInput = document.querySelector('#topic-summary');
let setQuestionBtn = document.querySelector('#set-question');

setQuestionBtn.addEventListener('click', submitTopic);

function submitTopic(e) {

    let topicName = topicNameInput.value;
    let topicSummary = topicSummaryInput.value;
    let newTopicObject = { topic: topicName, summary: topicSummary }

    let existingTopicsRaw = localStorage.getItem('studentone:topics');
    let existingTopics = existingTopicsRaw ? JSON.parse(existingTopicsRaw) : []

    let newArray;

    newArray = [...existingTopics, newTopicObject];

    localStorage.setItem('studentone:topics', JSON.stringify(newArray));

    console.log('existingTopics: ', JSON.stringify(existingTopics, null, 4))
    updateList(newArray);
    //localStorage.removeItem('studentone:topics')
}

function updateList(data) {
    let toRet = data.map((topic) => {
        return `
        <ul>
            <li>
                <h2> ${topic.topic}</h2>
                <p> ${topic.summary} </p>
                <a href="#page-4">Take Quiz</a>
            </li>
        </ul>
        `
    })

    let viewTopicsPage = document.querySelector('#page-3');
    viewTopicsPage.innerHTML = toRet;

}

