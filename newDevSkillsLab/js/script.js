let $skillField = $('#addSkillField');
let $levelField = $('#addLevelField');
let $addButton = $('.btn-success');
let $removeButton = $('td .btn-danger');

function addSkill() {
    let $skillToAdd = $(`
        <tr>
            <th scope="row">1</th>
            <td>${$skillField.val().toUpperCase()}</td>
            <td>${$levelField.val()}</td>
            <td>
                <button class="btn btn-danger btn-sm">Remove</button>
            </td>
        </tr>   
    `);

    $('tbody').append($skillToAdd)
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

