let $skillField = $('#addSkillField');
let $levelField = $('#addLevelField');
let $addButton = $('.btn-success');
let $removeButton = $('td .btn-danger');
let skillCounter = 1;
let skillsDb = window.localStorage;

function addToLocalStorage(number, skill, level, key) {
    let storedSkill = {
        number: number,
        skill: skill,
        level: level
    }
    skillsDb.setItem(key, JSON.stringify(storedSkill));
}

function addSkill() {
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
    skillCounter++;
}

function removeSkill(e) {
    $(this).closest('tr').fadeOut(1000, function (){
        $(this).remove();
    })
}

$($addButton).on('click', addSkill);
$('.table > tbody').on('click', 'button', removeSkill);

console.log(skillsDb);
