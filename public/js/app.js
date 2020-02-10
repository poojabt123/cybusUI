fetch('http://localhost:4547/API/menu').then(function(response){
    return response.json();
}).then(function(data){
    let menuHtml = '<ul id="id-menu" class="list-unstyled components">';
    
    data.data.forEach(function(val, index){
        console.log(val.menu_name);
        
        if (val.parent_id == '0') {
            let menu_id = val.id;
            menuHtml += '<li><a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">'+val.menu_name+'</a>';
            menuHtml += buildMenu(menu_id, data.data);
            menuHtml += '</li>';
            console.log(menuHtml);
        }
    });
    menuHtml += '</ul>';
    document.getElementById('nav-placeholder-1').innerHTML = menuHtml;
    
    // document.getElementById('txt').innerHTML = data.message;
})

function buildMenu(id, data) {
    let str = '<ul>';
    data.forEach(function(val, index) {
        if(id == val.parent_id) {
            str+= '<li><a href="#">'+val.menu_name+'</a></li>';
        }
    });
    str += '</ul>';
    return str;
}
//var menuData = [{'id':1, 'menu_name':'Family','parent_id':0}.{'id':2, 'menu_name':'Nikita','parent_id':1}];

{/* <ul id="id-menu" class="list-unstyled components">
        <li>
            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">Family</a>
            <ul class="collapse list-unstyled" id="pageSubmenu">
            <li><a href="#">Nikita</a></li>            
        </li>
        </ul>
    </ul> */}