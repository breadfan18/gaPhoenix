let $skillField = $('#addSkillField');
let $levelField = $('#addLevelField');
let $addButton = $('.btn-success');
let $removeButton = $('td .btn-danger');
let skillsDb = window.localStorage;
let skillCounter = skillsDb.length;

function addToLocalStorage(number, skill, level, key) {
    let storedSkill = {
        number: number,
        skill: skill,
        level: level
    }
    skillsDb.setItem(key, JSON.stringify(storedSkill));
}

function loadSkillsFromStorage() {
    for (let i = 1; i <= skillsDb.length; i++) {
        let skill =  JSON.parse(skillsDb.getItem(`skill${i}`))
        console.log(skill);
        let $skillToLoad = $(`
            <tr>
                <th scope="row">${skill.number}</th>
                <td>${skill.skill}</td>
                <td>${skill.level}</td>
                <td>
                    <button class="btn btn-danger btn-sm">Remove</button>
                </td>
            </tr>       
        `)
        $('tbody').append($skillToLoad);
    }

}

function addSkill() {
    skillCounter++;
    let $skillToAdd = $(`
        <tr>
            <th scope="row">${skillCounter}</th>
            <td>${$skillField.val().toUpperCase()}</td>
            <td>${$levelField.val()}</td>
            <td>
                <button class="btn btn-danger btn-sm">Remove</button>
            </td>
        </tr>   
    `);

    $('tbody').append($skillToAdd);
    addToLocalStorage(skillCounter, $skillField.val().toUpperCase(), $levelField.val(), `skill${skillCounter}`);
    $skillField.val('');
    $levelField.val('');
}

function removeSkill(e) {
    $(this).closest('tr').fadeOut(1000, function () {
        $(this).remove();
    })
}

loadSkillsFromStorage();
$($addButton).on('click', addSkill);
$('.table > tbody').on('click', 'button', removeSkill);
