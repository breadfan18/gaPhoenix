let $skillField = $('#addSkillField');
let $levelField = $('#addLevelField');
let $addButton = $('.btn-success');
let $removeButton = $('td .btn-danger');
let skillCounter = 1;

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
    skillCounter++;
}

function removeSkill(e) {
    let $clickedButton = $(e.target);
    let $closestRow = $clickedButton.closest('tr');
    $closestRow.fadeOut(1000, function (){
        $(this).remove();
    })
}

$($addButton).on('click', addSkill);
$('.table > tbody').on('click', 'button', removeSkill);

