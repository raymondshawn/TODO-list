
require.config({
    paths: {
        'fontawesome': 'vendor/fontawesome/fontawesome.min',
        'fontawesome/solid': 'vendor/fontawesome/solid.min',
        'fontawesome/brands': 'vendor/fontawesome/brands.min'
    },
    shim: {
        'fontawesome': {
            deps: ['fontawesome/solid', 'fontawesome/brands'],
            exports: 'FontAwesome'
        }
    }
})

// require(['fontawesome'], function (fontawesome) {
//     console.log('Congrats, Font Awesome is installed using Require.js')

//     var icon = fontawesome.icon(
//         fontawesome.findIconDefinition({ iconName: 'stroopwafel' }),
//         {
//             classes: ['fa-10x']
//         }
//     )

//     document.body.appendChild(icon.node[0])
// })

const inputText = document.getElementById('add');
const addBtn = document.getElementById('submit')

addBtn.addEventListener('click', (e) => {
    const text = inputText.value;
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    document.body.append(ul);
    ul.classList.add('items')
    ul.append(li);
    li.innerText = text;
    const span=document.createElement('span');
    li.append(span);


    require(['fontawesome'], function (fontawesome) {
        console.log('Congrats, Font Awesome is installed using Require.js')
    
        var trash = fontawesome.icon(
            fontawesome.findIconDefinition({ iconName: 'trash-can' }),
            {
                classes: ['fa-1x']
            }
        );

        require(['fontawesome'], function (fontawesome) {
        console.log('Congrats, Font Awesome is installed using Require.js')
    
        var trash = fontawesome.icon(
            fontawesome.findIconDefinition({ iconName: 'trash-can' }),
            {
                classes: ['fa-1x']
            }
        );


        var edit = fontawesome.icon(
            fontawesome.findIconDefinition({ iconName: 'edit' }),
            {
                classes: ['fa-1x']
            }
        );


        
    
        span.append(trash.node[0],edit.node[0]);
    })

})})